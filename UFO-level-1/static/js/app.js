// from data.js
var tableData = data;

// YOUR CODE HERE!
// Get a reference to the table body
var tbody = d3.select("tbody");
// Console.log the UFO sightings data from data.js
console.log(data);
// Loop Through `data` and console.log each UFO sightings object
data.forEach(function(ufoSightings) {
    console.log(ufoSightings);
});
// Use d3 to append one table row `tr` for each UFO sightings object
data.forEach(function(ufoSightings) {
    console.log(ufoSightings);
    var row = tbody.append("tr");
});
// Use `Object.entries` to console.log each UFO sightings value
data.forEach(function(ufoSightings) {
    console.log(ufoSightings);
    var row = tbody.append("tr");

    Object.entries(ufoSightings).forEach(function([key, value]) {
        console.log(key, value);
    });
});
// Use d3 to append 1 cell per UFP sightings value (datetime, city, state, country, shape, durationMinutes, comments)
data.forEach(function(ufoSightings) {
    console.log(ufoSightings);
    var row = tbody.append("tr");

    Object.entries(ufoSightings).forEach(function([key, value]) {
        console.log(key, value);
        var cell = tbody.append("td");
    });
});
// Use d3 to update each cell's text with (datetime, city, state, country, shape, durationMinutes, comments)
data.forEach(function(ufoSightings) {
    console.log(ufoSightings);
    var row = tbody.append("tr");
    Object.entries(ufoSightings).forEach(function([key, value]) {
        console.log(key, value);
        var cell = tbody.append("td");
        cell.text(value);
    });
});
// Refactor to use Arrow Functions
data.forEach((ufoSightings) => {
    var row = tbody.append("tr");
    Object.entries(ufoSightings).forEach(([key, value]) => {
      var cell = tbody.append("td");
      cell.text(value);
    });
  });