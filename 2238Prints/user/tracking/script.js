document.querySelector("#homeBtn").addEventListener("click", function () {
    window.location.href = "/";
});

document.querySelector("#browseBtn").addEventListener("click", function () {
    window.location.href = "/browse";
});

document.querySelector("#listBtn").addEventListener("click", function () {
    window.location.href = "/list";
});

const trackid = document.getElementById("tid").value;

async function getData(trackid) {
  try {
    const { data, error } = await supabase
      .from('package')
      .select('*')
      .eq('id', trackid)
      .single();

    if (error) {
      // Jeżeli błąd mówi, że nie znaleziono wiersza, to to nie jest problem krytyczny
      if (error.code === 'PGRST116') { // kod błędu Supabase dla "no rows found"
        return null; // spokojnie zwracamy null
      }
      console.error('Błąd podczas pobierania:', error);
      return null;
    }

    return data;
  } catch (e) {
    console.error('Nieoczekiwany błąd:', e);
    return null;
  }
}



getData(trackid)

document.querySelector("#track-form").addEventListener("submit", async function (e) {
    e.preventDefault();

    const trackid = document.getElementById("tid").value.trim();

    if (!trackid) {
        document.querySelector(".info").textContent = "Proszę wpisać poprawny numer paczki";
        return;
    }

    const data = await getData(trackid);

    if (data) {
        window.location.href = `/user/tracking/ui/?id=${trackid}`;
    } else {
        document.querySelector(".info").textContent = `Sorry, we don't have package: ${trackid}`;
    }
});





