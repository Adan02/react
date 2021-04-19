$.getJSON('API covid.json', function(data){
    let positif = data.confirmed.value;
    let meninggal = data.deaths.value;
    let sembuh = data.recovered.value;
    let update = data.lastUpdate;
    console.log(positif)
    document.getElementById('globalpositif').innerHTML = positif;
    document.getElementById('globalmeninggal').innerHTML = meninggal;
    document.getElementById('globalsembuh').innerHTML = sembuh;
    document.getElementById('globalupdate').innerHTML = update;
});
$.getJSON('https://covid19.mathdro.id/api/countries/Indonesia',function (data) {
    let positif = data.confirmed.value;
    let meninggal = data.deaths.value;
    let sembuh = data.recovered.value;
    document.getElementById('indopositif').innerHTML = positif;
    document.getElementById('indomeninggal').innerHTML = meninggal;
    document.getElementById('indosembuh').innerHTML = sembuh;
    document.getElementById('indoupdate').innerHTML = data.lastUpdate;
});
$.getJSON('https://covid19.mathdro.id/api/countries/Philippines',function (data) {
    let positif = data.confirmed.value;
    let meninggal = data.deaths.value;
    let sembuh = data.recovered.value;
    document.getElementById('pinoypositif').innerHTML = positif;
    document.getElementById('pinoymeninggal').innerHTML = meninggal;
    document.getElementById('pinoysembuh').innerHTML = sembuh;
    document.getElementById('pinoyupdate').innerHTML = data.lastUpdate;
});
$.getJSON('https://covid19.mathdro.id/api/countries/Malaysia',function (data) {
    let positif = data.confirmed.value;
    let meninggal = data.deaths.value;
    let sembuh = data.recovered.value;
    document.getElementById('malaypositif').innerHTML = positif;
    document.getElementById('malaymeninggal').innerHTML = meninggal;
    document.getElementById('malaysembuh').innerHTML = sembuh;
    document.getElementById('malayupdate').innerHTML = data.lastUpdate;
});
$.getJSON('https://covid19.mathdro.id/api/countries/Thailand',function (data) {
    let positif = data.confirmed.value;
    let meninggal = data.deaths.value;
    let sembuh = data.recovered.value;
    document.getElementById('thaipositif').innerHTML = positif;
    document.getElementById('thaimeninggal').innerHTML = meninggal;
    document.getElementById('thaisembuh').innerHTML = sembuh;
    document.getElementById('thaiupdate').innerHTML = data.lastUpdate;
});
$.getJSON('https://covid19.mathdro.id/api/countries/Singapore',function (data) {
    let positif = data.confirmed.value;
    let meninggal = data.deaths.value;
    let sembuh = data.recovered.value;
    document.getElementById('singapositif').innerHTML = positif;
    document.getElementById('singameninggal').innerHTML = meninggal;
    document.getElementById('singasembuh').innerHTML = sembuh;
    document.getElementById('singaupdate').innerHTML = data.lastUpdate;
});