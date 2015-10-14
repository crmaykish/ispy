package ispy

import static com.xlson.groovycsv.CsvParser.parseCsv

class ListSpiesController {
	private final String CSV_FILE_NAME = "cc-maps-data-set.csv"
	private final String COLUMN_NAMES = "Name,Latitude,Longitude,Age,Gender\n"

	// Index action: renders the index page view.
    def index() {

    	def loc = System.getProperty("user.dir")

    	println loc

    	// println fileLocation

    	[spies : loadSpyInfo()]
    }

    // List action: renders JSON data for all spies. Called via AJAX.
    def list() {
    	render(contentType: "application/json") {
    		loadSpyInfo()
    	}
    }

    // Load data from the provided CSV file. Create a collection of Spy objects where each object represents a row from the CSV.
    private def loadSpyInfo() {
    	// Collection of Spy objects to be populated from CSV
    	def spies = []

    	// Load the CSV file from disk
    	def loc = System.getProperty("user.dir")  << "\\" << CSV_FILE_NAME
    	String csv = new File(loc.toString()).getText('UTF-8')

    	// GroovyCSV library requires column names as the first row in the CSV file, so append them on.
    	csv = COLUMN_NAMES << csv

    	// Parse and iterate through the CSV data to create a Spy object from each row. Add them all to the collection.
    	def data = parseCsv(csv)
    	for (line in data){
    		spies.add(new Spy([name: "$line.Name", latitude: "$line.Latitude", longitude: "$line.Longitude", age: "$line.Age", gender: "$line.Gender"]))
    	}

    	return spies
    }
}


