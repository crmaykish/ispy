var geographicalCenter = [39.8282, -98.5795];	// Geographical center of the US
var startingZoom = 3;
var tileStructureURL = "http://{s}.tile.osm.org/{z}/{x}/{y}.png";

var map;
var markers = new L.FeatureGroup();
var allSpies;

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
	loadSpies();

	// Bind Max Age button to the showSpies function
	$('#maxAge').on('input', function(){
		// Filter out non-numeric characters
		var maxAge = $(this).val().replace(/[^0-9]/g, '');
		
		// Set the textbox value to the filtered value
		$(this).val(maxAge);
		
		// Render spies under max age
		showSpies(allSpies, maxAge);
	});


});

// Populate the allSpies list from an AJAX call to get all spy data
function loadSpies(){
	$.ajax("/listSpies/list", {
		success: function(data){
			allSpies = data;
			// Show all spies to begin
			showSpies(allSpies);
		},
		error: function(){
			alert("Something went wrong while loading spy data. Please try again later.");
		}
	});
}

// Render the given list of spies on the map
function showSpies(spyList, maxAge){
	// Clear all markers so they aren't added twice.
	markers.clearLayers();

	// For each spy, create a marker at the location and a popup with the name and info.
	$.each(spyList, function(index, value){
		// If there is a max age, then the spy's age must not be greater
		if (parseInt(value.age) <= parseInt(maxAge) || !maxAge){
			// Marker at spy's location
			var marker = L.marker([value.latitude, value.longitude]);

			// Female spies are shown with a red marker. Males stay the default blue.
			if (value.gender == "Female"){
				marker.setIcon(redIcon);
			}

			// Bind an info popup to the marker and add it to the group.
			marker.bindPopup(value.name + " (" + value.gender + ", " + value.age + ")");
			markers.addLayer(marker);
		}
	});

	// Add marker group to map
	map.addLayer(markers);
}