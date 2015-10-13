<!DOCTYPE html>
<html>
	<head>
		<link rel="stylesheet" href="http://cdn.leafletjs.com/leaflet-0.7.5/leaflet.css" />
		<link rel="stylesheet" href="assets/bootstrap.min.css" >
		<link rel="stylesheet" href="assets/mystyle.css" />

		<script src="https://code.jquery.com/jquery-2.1.4.min.js"></script>
		<script src="http://cdn.leafletjs.com/leaflet-0.7.5/leaflet.js"></script>
		<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
		<script src="assets/myscript.js"></script>

		<title>iSpy: Double-agent Tracker</title>
	</head>

	<body>

		<div class="container">

			<div class="row">
				<div class="col-md-12">
					<div id="map"></div>
				</div>
			</div>

			<div class="row">
				<div class="col-md-12">
					<h3><strong>iSpy</strong>: Double-agent Tracking</h3>
					<hr/>
					<p>
						This map shows the location of all known double-agents in the United States. 
					</p>
					<p>
						Each pin represents an agent and the color indicates gender, male <img src="assets/marker-icon-blue.png"> and female <img src="assets/marker-icon-red.png">.
					</p>

					<p>Click on a pin to show the complete details of the agent at that location.
					
				</div>
			</div>
		</div>
		
	</body>
</html>