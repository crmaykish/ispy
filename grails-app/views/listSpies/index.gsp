<html>
	
	<head>
		<link rel="stylesheet" href="http://cdn.leafletjs.com/leaflet-0.7.5/leaflet.css" />
		<link rel="stylesheet" href="assets/mystyle.css" />

		<script src="https://code.jquery.com/jquery-2.1.4.min.js"></script>
		<script src="http://cdn.leafletjs.com/leaflet-0.7.5/leaflet.js"></script>
		<script src="assets/myscript.js"></script>

		<title>iSpy - Double-agent Tracker</title>
	</head>

	<body>
		
		<h1>iSpy</h1>

		<div id="map"></div>

		<h2>List of Spies</h2>

		<button id="fetchSpies">Fetch Spies</button>

		<table>

			<g:each var="spy" in="${spies}">
				<tr>
					<td>${spy.name}</td>
					<td>${spy.latitude}</td>
					<td>${spy.longitude}</td>
					<td>${spy.age}</td>
					<td>${spy.gender}</td>
				</tr>
			</g:each>

		</table>
		
	</body>
</html>