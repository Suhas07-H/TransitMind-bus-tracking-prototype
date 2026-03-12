var map = L.map('map').setView([15.3647, 75.1240], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
attribution:'© OpenStreetMap'
}).addTo(map);

var bus = L.marker([15.3647,75.1240]).addTo(map)
.bindPopup("KSRTC Bus");

var route = [
[15.3647,75.1240],
[15.3652,75.1250],
[15.3660,75.1265],
[15.3671,75.1275],
[15.3682,75.1285]
];

var i = 0;

setInterval(function(){

bus.setLatLng(route[i]);

i++;

if(i >= route.length){
i = 0;
}

},2000);