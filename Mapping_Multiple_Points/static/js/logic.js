// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
//1.We're assigning the variable map to the object L.map(), 
//and we'll instantiate the object with the given string 'mapid'.
//2.The mapid will reference the id tag in our <div> element on the index.html file.
//3.The setView() method sets the view of the map with a geographical center, 
//where the first coordinate is latitude (40.7) and the second is longitude (-94.5). 
//We set the zoom level of "4" on a scale 0–18.
let map = L.map('mapid').setView([40.7, -94.5], 4);

// An alternative to using the setView() method is to modify each attribute in the map object using the curly 
//braces notation as follows:
// Create the map object with a center and zoom level.
// let map = L.map("mapid", {
//     center: [
//       34.0522, -118.2437
//     ],
//     zoom: 14
//   });


  //  Add a marker to the map for Los Angeles, California (Single Point).
//let marker = L.marker([34.0522, -118.2437]).addTo(map);

//To change the marker on our map to a point or dot, 
//we'll use the circle() function.
// L.circle([34.0522, -118.2437], {
//   color: 'black',
//   fillColor: '#ffffa1',
//   radius: 300
// }).addTo(map);

//Add Multiple Markers
// An array containing each city's location, state, and population.
// let cities = [{
//   location: [40.7128, -74.0059],
//   city: "New York City",
//   state: "NY",
//   population: 8398748
// },
// {
//   location: [41.8781, -87.6298],
//   city: "Chicago",
//   state: "IL",
//   population: 2705994
// },
// {
//   location: [29.7604, -95.3698],
//   city: "Houston",
//   state: "TX",
//   population: 2325502
// },
// {
//   location: [34.0522, -118.2437],
//   city: "Los Angeles",
//   state: "CA",
//   population: 3990456
// },
// {
//   location: [33.4484, -112.0740],
//   city: "Phoenix",
//   state: "AZ",
//   population: 1660272
// }
// ];

// Get data from cities.js
let cityData = cities;

// Loop through the cities array and create one marker for each city.
cityData.forEach(function(city) {
  console.log(city)
  L.circleMarker(city.location, {
    radius: city.population/200000,
    color: "Yellow",
    fillColor: "#fffa1"
  })
  .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
  .addTo(map);
});

// Add a Tile Layer for Our Map
// Creating a tile layer usually involves setting the URL template for the tile images, 
//the attribution text and the maximum zoom level of the layer. In this example we’ll 
//use the mapbox/streets-v11 tiles from Mapbox’s Static Tiles API (in order to use tiles 
//from Mapbox, you must also request an access token). Because this API returns 512x512 
//tiles by default (instead of 256x256), we will also have to explicitly specify this and 
//offset our zoom by a value of -1.

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);