document.querySelector("#homeBtn").addEventListener("click", function () {
    window.location.href = "/";
});

document.querySelector("#browseBtn").addEventListener("click", function () {
    window.location.href = "/browse";
});

document.querySelector("#listBtn").addEventListener("click", function () {
    window.location.href = "/list";
});

async function getData() {
  const params = new URLSearchParams(window.location.search);
  const konkretneId = params.get('id');
  console.log('Start pobierania danych dla id:', konkretneId);

  const { data, error } = await window.supabase
    .from('package')
    .select('*')
    .eq('id', konkretneId);

  if (error) {
    console.error('Błąd podczas pobierania:', error);
    return;
  }
}

getData()

document.querySelector("#submit").addEventListener("click", function (e) {
    let trackid = Number(document.getElementById("tid").value);
    e.preventDefault();

    const data = await getData();
    if (!data) return;

    const found = data.find(pkg => pkg.id === trackid);
    if (found) {
        window.location.href = `/user/tracking/ui/?id=${trackid}`
    }
    else {
        document.querySelector("info").textContent = `Sorry, we don't have package: ${trackid}`
    }
});



