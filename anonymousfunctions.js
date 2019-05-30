// 66 Functions returning Functions (w/ anonymous functions)
// There are 2 ways to call an anonymous function. An anonymous function is a
// function within a function that is not named, let's have a look


function interviewQuestion(job) {
  if (job === "teacher") {
    return function(name){
      console.log(name + ", what do you teach?");
    }
  } else if (job === "designer") {
    return function(name) {
      console.log("so, why don't you explain to me a lil about UX, " + name);
    }
  } else {
    console.log("What is your job?");
  }
}


// so the first way to return is to store in a variable
var teacherQuestion = interviewQuestion('teacher');
// and we call it as follows
teacherQuestion('John');

var designerQuestion = interviewQuestion('designer');
designerQuestion("Mark");


// the second way to call the anonymous function is as follows:
interviewQuestion('teacher')('jane');



