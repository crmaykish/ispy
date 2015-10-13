var geographicalCenter = [39.8282, -98.5795];	// Geographical center of the US
var startingZoom = 2;

var markers;

// define a Red Icon class
var RedIcon = L.Icon.Default.extend({
	options: {
		iconUrl: 'http://i.imgur.com/7SYPiwt.png'
	}
});

// instantiate the red icon
var redIcon = new RedIcon();

$(document).ready(function(){
	var map = L.map('map').setView(geographicalCenter, startingZoom);

	L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png').addTo(map);
		
	$.ajax("/listSpies/list", {
		success: function(data){
			$.each(data, function(index, value){
				var name = value.name;
				var age = value.age;
				var gender = value.gender;
				var latLng = [value.latitude, value.longitude];
				
				var marker;

				if (value.gender == "Female"){
					marker = L.marker(latLng, {icon: redIcon});
				} else {
					marker = L.marker(latLng);
				}

				marker.addTo(map);

				marker.bindPopup(name + " (" + gender + ", " + age + ")");
			});
		}
	});

});

