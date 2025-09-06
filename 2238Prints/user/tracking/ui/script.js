document.querySelector("#homeBtn").addEventListener("click", function () {
    window.location.href = "/";
});

document.querySelector("#browseBtn").addEventListener("click", function () {
    window.location.href = "/browse";
});

document.querySelector("#listBtn").addEventListener("click", function () {
    window.location.href = "/list";
});

// Funkcja pobierająca dane
async function getData() {
  const params = new URLSearchParams(window.location.search);
  const konkretneId = params.get('id');
  console.log('Start pobierania danych dla id:', konkretneId);

  const { data, error } = await window.supabase
    .from('package')
    .select('status')
    .eq('id', konkretneId);

  if (error) {
    console.error('Błąd podczas pobierania:', error);
    return;
  }

  console.log('Otrzymane dane:', data);

  if (data.length > 0) {
    console.log('Znaleziono status:', data[0].status);
    document.querySelector('.status').textContent = `Status: ${data[0].status}`;
    document.querySelector('.stat1').textContent = data[0].status;
  } else {
    console.warn('Brak rekordu z podanym id:', konkretneId);
    document.querySelector('.status').textContent = 'Brak statusu dla podanego ID';
    document.querySelector('.stat1').textContent = 'Brak statusu dla podanego ID';
  }
}

getData();




