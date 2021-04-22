$.getJSON('https://covid19.mathdro.id/api/', function(data){
    let positif = data.confirmed.value;
    let meninggal = data.deaths.value;
    let sembuh = data.recovered.value;
    let update = data.lastUpdate;
    document.getElementById('globalpositif').innerHTML = positif;
    document.getElementById('globalmeninggal').innerHTML = meninggal;
    document.getElementById('globalsembuh').innerHTML = sembuh;
    document.getElementById('globalupdate').innerHTML = update;
});
$(document).ready(function(){
    $('#isiNama').keyup(function () {
        $('#result').html('');
        var cari = $('#isiNama').val();
        var expression = new RegExp(cari,"i");
        $.getJSON('https://covid19.mathdro.id/api/confirmed',function (data) {
           $.each(data,function (key,value) {
              if (value.countryRegion.search(expression) != -1) {
                $('#result').append(
                    '<li class="list-group-item link-class"> '+value.countryRegion+','+value.provinceState+'</li>',
                    '<li class="list-group-item"><span class="text-muted"> Positif :'+value.confirmed+'</span></li>',
                    '<li class="list-group-item"><span class="text-muted"> Meninggal :'+value.deaths+'</span></li>',
                    '<li class="list-group-item"><span class="text-muted"> Sembuh :'+value.recovered+'</span></li>'
                    );
              }
           }); 
        });
    });
});