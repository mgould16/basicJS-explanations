// IIFE is short for instantly invoked function expressions.
// it means that on page load, the js function is automatically called,
// so we don't need to store variable values; we can simply call the
// function straight away.

// the syntax is a little different and how each is written will be shown below
// firstly, notice how the function expression is written inside brackets to
// start.

(function () {
  var score = Math.random () * 10;
  console.log(score >= 5);
  // the below, second parenthesis calls the function expression straight away.
})();

// we can also give the function an input as so
(function (goodluck) {
  var score = Math.random () * 10;
  console.log(score >= 5 - goodluck);
  // the below, second parenthesis calls the function expression straight away.
})(5);
