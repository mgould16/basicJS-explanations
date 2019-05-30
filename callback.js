var years = [1990, 1985, 1987, 1996, 2003, 1982, 1983];

// fn is a callback function. A callback is a function that is to be executed
// after another function has finished executing — hence the name ‘call back’

function arrayCalc(arr, fn) {
  var results = [];
  for (i = 0; i< arr.length; i++) {
    results.push(fn(arr[i]));
  };
  return results;
}

function calcAge(el) {
  return 2019 - el;
}

function isFullAge(el) {
  return el >= 18;
}

function maxHeartRate(el) {
  if (el >= 18) {
    return Math.round(206.9 - (0.67* el));
  }
  else {
    return -1;
  }
}

var ages = arrayCalc(years, calcAge);
console.log(ages);

var fullAges = arrayCalc(ages, isFullAge);
console.log(fullAges);

var rates = arrayCalc(ages, maxHeartRate);
console.log(rates);
