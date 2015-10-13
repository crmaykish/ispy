var geographicalCenter = [39.8282, -98.5795];	// Geographical center of the US
var startingZoom = 3;
var tileStructureURL = "http://{s}.tile.osm.org/{z}/{x}/{y}.png";

var map;

// define a Red Icon class
var RedIcon = L.Icon.Default.extend({
	options: {
		iconUrl: 'assets/marker-icon-red.png'
	}
});

// instantiate the red icon
var redIcon = new RedIcon();

$(document).ready(function(){
	// Create the map
	map = L.map('map').setView(geographicalCenter, startingZoom);

	// Add the map layer
	L.tileLayer(tileStructureURL).addTo(map);
		
	// Retrieve the spy data via AJAX call. Data is returned as a collection of JSON objects.
	$.ajax("/listSpies/list", {
		success: function(data){
			// For each spy, create a marker at the location and a popup with the name and info.
			$.each(data, function(index, value){
				// Marker at spy's location
				var marker = L.marker([value.latitude, value.longitude]);

				// Female spies are shown with a red marker. Males stay the default blue.
				if (value.gender == "Female"){
					marker.setIcon(redIcon);
				}

				// Bind an info popup to the marker and show it on the map.
				marker.bindPopup(value.name + " (" + value.gender + ", " + value.age + ")").addTo(map);;
			});
		},
		error: function(){
			alert("Something went wrong while loading spy data. Please try again later.");
		}
	});

});
