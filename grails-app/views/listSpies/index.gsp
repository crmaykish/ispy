<html>
	
	<head>
		<link rel="stylesheet" href="http://cdn.leafletjs.com/leaflet-0.7.5/leaflet.css" />
		<link rel="stylesheet" href="assets/bootstrap.min.css" >
		<link rel="stylesheet" href="assets/mystyle.css" />

		<script src="https://code.jquery.com/jquery-2.1.4.min.js"></script>
		<script src="http://cdn.leafletjs.com/leaflet-0.7.5/leaflet.js"></script>
		<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
		<script src="assets/myscript.js"></script>

		<title>iSpy - Double-agent Tracker</title>
	</head>

	<body>

		<div class="container">
			<div class="row">
				<div class="col-sm-12">
					<h2>iSpy</h2>
				</div>
			</div>

			<div class="row">
				<div class="col-md-12">
					<div id="map"></div>
				</div>
			</div>
		</div>


		

		%{-- <table>

			<g:each var="spy" in="${spies}">
				<tr>
					<td>${spy.name}</td>
					<td>${spy.latitude}</td>
					<td>${spy.longitude}</td>
					<td>${spy.age}</td>
					<td>${spy.gender}</td>
				</tr>
			</g:each>

		</table> --}%
		
	</body>
</html>