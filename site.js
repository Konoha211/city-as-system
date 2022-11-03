const map = L.map('map').setView([40.723, -74.000], 16);
const x = "<a href='page2.html'>" + "Broadway" + "</a>";


L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19
}).addTo(map);


L.marker([40.723, -74.000]).addTo(map)
.bindPopup(x)
.openPopup();


