// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

let str = "";

function strSep(strSepchar = ''){
  let keepEmSeparated = strSepchar;
  return function(char)
  {
    str += char + keepEmSeparated;
  }
}

let periodSep = strSep('.')
let nameArray = ['E','l','i'];
nameArray.forEach(i => {periodSep(i)});

console.log(str);

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  let count = 0;
  return _ => ++count;
  // Return a function that when invoked increments and returns a counter variable.
};
// Example usage: const newCounter = counter();
const newCounter = counter();
console.log(newCounter()); // 1
console.log(newCounter()); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  let count = 0;
  return {
    "increment": _ => ++count,
    "decrement": _ => --count,
    "report": _ => console.log(count)
  }
};
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
let factory1 = counterFactory();

factory1.increment()
factory1.decrement();
factory1.decrement();
factory1.decrement();
factory1.report();
