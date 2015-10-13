package ispy

import static com.xlson.groovycsv.CsvParser.parseCsv

class ListSpiesController {

    def index() {
    	def spies = []

    	String columnNames = "Name,Latitude,Longitude,Age,Gender\n"
    	String csv = new File('C:/cc-maps-data-set.csv').getText('UTF-8')

    	csv = columnNames + csv

    	def data = parseCsv(csv)

    	for (line in data){
    		spies.add(new Spy([name: "$line.Name", latitude: "$line.Latitude", longitude: "$line.Longitude", age: "$line.Age", gender: "$line.Gender"]))
    	}


    	[spies : spies]
    }

    def list() {
    	def spies = []

    	String columnNames = "Name,Latitude,Longitude,Age,Gender\n"
    	String csv = new File('C:/cc-maps-data-set.csv').getText('UTF-8')

    	csv = columnNames + csv

    	def data = parseCsv(csv)

    	for (line in data){
    		spies.add(new Spy([name: "$line.Name", latitude: "$line.Latitude", longitude: "$line.Longitude", age: "$line.Age", gender: "$line.Gender"]))
    	}

    	render(contentType: "application/json") {
    		spies
    	}
    }
}


