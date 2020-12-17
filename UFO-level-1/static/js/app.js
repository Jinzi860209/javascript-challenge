// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");

console.log(data);

data.forEach(function(ufoSightings) {
    console.log(ufoSightings);
});

data.forEach(function(ufoSightings) {
    console.log(ufoSightings);
    var row = tbody.append("tr");
});

data.forEach(function(ufoSightings) {
    console.log(ufoSightings);
    var row = tbody.append("tr");

    Object.entries(ufoSightings).forEach(function([key, value]) {
        console.log(key, value);
    });
});

data.forEach(function(ufoSightings) {
    console.log(ufoSightings);
    var row = tbody.append("tr");

    Object.entries(ufoSightings).forEach(function([key, value]) {
        console.log(key, value);
        var cell = tbody.append("td");
    });
});

data.forEach(function(ufoSightings) {
    console.log(ufoSightings);
    var row = tbody.append("tr");
    Object.entries(ufoSightings).forEach(function([key, value]) {
        console.log(key, value);
        var cell = tbody.append("td");
        cell.text(value);
    });
});

data.forEach((ufoSightings) => {
    var row = tbody.append("tr");
    Object.entries(ufoSightings).forEach(([key, value]) => {
      var cell = tbody.append("td");
      cell.text(value);
    });
  });