// replace "toner" here with "terrain" or "watercolor"
var	latitude  = "50.8955465";
var longitude = "-2.5980245";
var zoom = 11;
var mymap = L.map('mapLeaf').setView([latitude,longitude], zoom);

var Stamen_TonerLite = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}{r}.{ext}', {
	attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	subdomains: 'abcd',
	minZoom: 0,
	maxZoom: 20,
	ext: 'png'
}).addTo(mymap);

var marker = L.marker([latitude, longitude]).addTo(mymap);