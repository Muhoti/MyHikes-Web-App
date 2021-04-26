// Create variable to hold map element, give initial settings to map
var data = polygon;
var map = new L.map('map',{center: new L.latLng([-1.304268, 36.796689]), zoom: 10})
// Add OpenStreetMap tile layer to map element
map.addLayer(new L.TileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', { attribution: '© bro.courage creations',
  maxZoom: 17,
  minZoom: 12
 })
 );

 //for searching polygon features
var featuresLayer = new L.geoJson(data, {
			style: function(feature) {
				return {color: feature.properties.color };
			},
			onEachFeature: function(feature, marker) {
				marker.bindPopup('<h5>Tourist Site: '+feature.properties.Name+'</h5><p>About feature: '+feature.properties.description+'</p>');
			}                   
});
map.addLayer(featuresLayer);

var searchControl = new L.Control.Search({
		layer: featuresLayer,
		propertyName: 'Name',
		marker: false,
		moveToLocation: function(latlng, title, map) {
			//map.fitBounds( latlng.layer.getBounds() );
			var zoom = map.getBoundsZoom(latlng.layer.getBounds());
  			map.setView(latlng, zoom); // access the zoom
		}
	});

	searchControl.on('search:locationfound', function(e) {
		
		//console.log('search:locationfound', );

		//map.removeLayer(this._markerSearch)

		e.layer.setStyle({fillColor: '#3f0', color: '#0f0'});
		if(e.layer._popup)
			e.layer.openPopup();

	}).on('search:collapsed', function(e) {

		featuresLayer.eachLayer(function(layer) {	//restore feature color
			featuresLayer.resetStyle(layer);
		});	
	});
	
	map.addControl( searchControl );  //inizialize search control
	
// add polygon GeoJSON to map as layer
var polygonScenes = L.geoJson(data, {
    onEachFeature: function (feature, layer) {
        layer.bindPopup('<h5>Tourist Site: '+feature.properties.Name+'</h5><p>About feature: '+feature.properties.description+'</p>');
    }	
});

// add tourists sites function
function addPolygon() {
    polygonScenes.addTo(map);
};	


// remove tourists sites function
function removePolygon() {
    polygonScenes.removeFrom(map);
};	

// Create event listener for the toggling Tourist sites
document.getElementById("toggleButton").addEventListener("click", togglePolygon);

// Toggle polygon scenes
function togglePolygon(){
    if(map.hasLayer(polygonScenes)){
        removePolygon();
    } else {
        addPolygon();
    }
};

L.Routing.control({
	waypoints: [
	L.latLng(-1.303, 36.795),
	L.latLng(-1.267787, 36.983757)]
}).addTo(map)

// Create point feature Tom Mboya Statue
var Tom_Mboya = L.marker([-1.284689,36.825373])

// Bind popup to Data Point object
Tom_Mboya.bindPopup("This is the Tom Mboya Statue.");

// Create point feature American Embasssy Memorial Garden
var Memorial_Garden = L.marker([-1.288983,36.826960])

// Bind popup to Data Point object
Memorial_Garden .bindPopup("This is the American Embasssy Memorial Garden.");

// Create point feature for Bohra Mosque
var Bohra_Mosque = L.marker([-1.282366,36.824473])

// Bind popup to Data Point object
Bohra_Mosque.bindPopup("This is the Bohra Mosque.");

// Create point feature for Bomas of Kenya
var Bomas = L.marker([-1.336808,36.769093])

// Bind popup to Data Point object
Bomas.bindPopup("This is the Bomas of Kenya.");

// Create point feature for David Sheldrick Elephant & Rhino Orphanage
var Orphanage = L.marker([-1.376887,36.773360])

// Bind popup to Data Point object
Orphanage.bindPopup("This is the David Sheldrick Elephant & Rhino Orphanage.");

// Create point feature for Dedan Kimathi Statue
var Dedan_Kimathi = L.marker([-1.284963,36.824184])

// Bind popup to Data Point object
Dedan_Kimathi.bindPopup("This is the Dedan Kimathi Statue.");

/* // Create point feature for Girraffe centre
var Girraffe_centre = L.marker([-1.376365,36.744322])

// Bind popup to Data Point object
myDataPoint.bindPopup("This is the Girraffe centre."); */

// Create point feature for Jeevanjee Gardens
var Jeevanjee_Gardens = L.marker([-1.281226,36.819532])

// Bind popup to Data Point object
Jeevanjee_Gardens.bindPopup("This is the Jeevanjee Gardens.");

// Create point feature for Karura Forest
var Karura_Forest = L.marker([-1.250913,36.845913])

// Bind popup to Data Point object
Karura_Forest.bindPopup("This is the Karura Forest.");

// Create point feature for Kenya National Archives
var Archives = L.marker([-1.284893,36.825920])

// Bind popup to Data Point object
Archives.bindPopup("This is the Kenya National Archives.");

// Create point feature for Kenya Parliament Buildings
var Parliament = L.marker([-1.289653,36.819723])

// Bind popup to Data Point object
Parliament.bindPopup("This is the Kenya Parliament Buildings.");

// Create point feature for Kenyatta International Conference Centre
var KICC = L.marker([-1.288351,36.823252])

// Bind popup to Data Point object
 KICC.bindPopup("This is the Kenyatta International Conference Centre.");

// Create point feature for Kipande House
var Kipande_House = L.marker([-1.285296,36.818617])

// Bind popup to Data Point object
Kipande_House.bindPopup("This is the Kipande House.");

// Create point feature for Maasai Ostrich Farm
var Ostrich_Farm = L.marker([-1.572218,36.878503])

// Bind popup to Data Point object
Ostrich_Farm.bindPopup("This is the Maasai Ostrich Farm.");

// Create point feature for Mamba Village
var Mamba_Village = L.marker([-1.333141,36.750812])

// Bind popup to Data Point object
Mamba_Village.bindPopup("This is the Mamba Village.");

// Create point feature for McMillan Library
var McMillan_Library = L.marker([-1.283585,36.821218])

// Bind popup to Data Point object
McMillan_Library.bindPopup("This is the McMillan Library.");

// Create point feature for Nairobi Arboretum
var Arboretum = L.marker([-1.278529,36.803327])

// Bind popup to Data Point object
Arboretum.bindPopup("This is the Nairobi Arboretum.");

// Create point feature for Nairobi National Museum
var Museum = L.marker([-1.273961,36.814489])

// Bind popup to Data Point object
Museum.bindPopup("This is the Nairobi National Museum.");

// Create point feature for Nairobi National Park
var National_Park = L.marker([-1.361593,36.845154])
// Bind popup to Data Point object
National_Park.bindPopup("This is the Nairobi National Park.");

// Create point feature for Nairobi Railways Museum
var Railways_Museum = L.marker([-1.293515,36.822328])

// Bind popup to Data Point object
Railways_Museum.bindPopup("This is the Nairobi Railways Museum.");

// Create point feature for Ngong Hills
var Ngong_Hills = L.marker([-1.415250,36.641779])

// Bind popup to Data Point object
Ngong_Hills.bindPopup("This is the Ngong Hills.");

// Create point feature for Oloolua Nature Trail
var Oloolua_Nature_Trail = L.marker([-1.358244,36.712541])

// Bind popup to Data Point object
Oloolua_Nature_Trail.bindPopup("This is the Oloolua Nature Trail.");

// Create point feature for Paradise Lost
var Paradise_Lost = L.marker([-1.190844,36.825001])

// Bind popup to Data Point object
Paradise_Lost.bindPopup("This is the Paradise Lost.");

// Create point feature for The Galton Fenzi Memorial Stone
var Galton_Fenzi = L.marker([-1.285559,36.819846])

// Bind popup to Data Point object
Galton_Fenzi.bindPopup("This is the Galton Fenzi Memorial Stone.");
 

// Create point feature for Uhuru Gardens
var Uhuru_Gardens = L.marker([-1.324457,36.798520])

// Bind popup to Data Point object
Uhuru_Gardens.bindPopup("This is the Uhuru Gardens.");

// Create point feature for Uhuru Park
var Uhuru_Park = L.marker([-1.290392,36.816586])

// Bind popup to Data Point object
Uhuru_Park.bindPopup("This is the Uhuru Park.");

// Create point feature for Village Market
var Village_Market = L.marker([-1.229399,36.804803])

// Bind popup to Data Point object
Village_Market.bindPopup("<h3>Village Market</h3><p>This is the village market.<br>It is located in Gigiri near Limuru.</p>"); 

// Create an Empty Popup
var popup = L.popup(); 

// Write function to set Properties of the Popup
function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(map);
}
// Listen for a click event on the Map element
map.on('click', onMapClick);
$(document).ready(function(){
});

//Layer groups
var relaxation_parks = L.layerGroup([Memorial_Garden, Mamba_Village, Jeevanjee_Gardens, Karura_Forest, Arboretum, Ngong_Hills, Uhuru_Gardens, Uhuru_Park]);
var wildlife = L.layerGroup([Orphanage, Ostrich_Farm, Mamba_Village, National_Park]);
var History_and_Artefacts = L.layerGroup([Tom_Mboya, Bohra_Mosque, Dedan_Kimathi, Archives, Parliament, KICC, Kipande_House, McMillan_Library, Museum, Railways_Museum, Galton_Fenzi, Village_Market]);
var picnic_adventures = L.layerGroup([Memorial_Garden, Bomas, Karura_Forest, Arboretum, Orphanage, Ngong_Hills, Oloolua_Nature_Trail, Paradise_Lost]);

var overlays = {
	"Relaxation_parks" : relaxation_parks,
	"Wildlife and Animals" : wildlife,
	"Statues and Monuments" : History_and_Artefacts,
	"Picnics/Adventure" : picnic_adventures,
};

//Add layer control
L.control.layers(null, overlays).addTo(map);
