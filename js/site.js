const map = L.map('map').setView([40.723, -74.000], 14);
const x = "<a href='page3.html'>" + "Broadway" + "</a>";


L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19
}).addTo(map);


L.marker([40.723, -74.000]).addTo(map)
.bindPopup(x)
.openPopup();

L.marker([40.714965, -73.996869]).addTo(map)
.bindPopup("Lower East Side")
.openPopup();


L.marker([40.708778, -73.956251]).addTo(map)
.bindPopup("Williamsburg")
.openPopup();

L.marker([40.696600, -73.921200]).addTo(map)
.bindPopup("Bushiwick")
.openPopup();