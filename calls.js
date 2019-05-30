var john = {
  name: "john",
  age: 27,
  job: "coder",
  presentation: function(style, timeOfDay) {
    if (style === 'formal') {
      console.log("Good " + timeOfDay, 'I\'m ' + this.name);
    } else if (style === "informal") {
      console.log("Waddup " + timeOfDay, 'I\'m yo friend, ' + this.name);
    }
  }
}

john.presentation('formal', 'afternoon');


// calls mean that if we create a new variable, emily, that doesn't have the
// presentation property / function, we can call it via john as so:

var emily = {
  name: "emily",
  age: 28,
  job: "fishmonger"
}

john.presentation.call(emily, "informal", 'morning');
// this will console log "Waddup morning I'm yo friend, emily"


// the second way to do this is through the APPLY method, which accepts an
// array as so:
john.presentation.apply(emily, ["informal", 'afternoon'])


// there is a third way which is through the BIND method, which stores
// a function as a variable that we can call anytime.
// the first line below stores one argument/ parameter
var johnFormal = john.presentation.bind(john, 'formal');
// this second line adds the second parameter to the presentation function
// within variable 'john'
johnFormal('morning');

var johnAfternoon = john.presentation.bind(john, 'informal');
johnAfternoon('morning');
