document.querySelector("#homeBtn").addEventListener("click", function () {
    window.location.href = "/";
});

document.querySelector("#browseBtn").addEventListener("click", function () {
    window.location.href = "/browse";
});

document.querySelector("#listBtn").addEventListener("click", function () {
    window.location.href = "/list";
});

const trackid = Number(document.getElementById("tid").value);

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
    e.preventDefault();  // <-- zapobiega przeładowaniu strony

    const trackid = Number(document.getElementById("tid").value);

    const data = await getData(trackid);
    if (!data) return;

    const found = data.find(pkg => pkg.id === trackid);

    if (found) {
        window.location.href = `/user/tracking/ui/?id=${trackid}`;
    } else {
        document.querySelector(".info").textContent = `Sorry, we don't have package: ${trackid}`;
    }
});




