var x = document.getElementById("form_sample");
var createform = document.createElement('form'); // Create New Element Form
x.appendChild(createform);

function calculateYear(days) {
  var rawYear = days / 365
  return parseInt(rawYear)
}

moment().format();