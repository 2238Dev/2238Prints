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
  console.log('Start pobierania danych dla id:', trackid);

  const { data, error } = await supabase
    .from('package')
    .select('*')
    .eq('id', trackid)
    .single();

  if (error) {
    console.error('Błąd podczas pobierania:', error);
    return null;
  }

  return data;
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





