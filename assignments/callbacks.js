// Create a higher order function and invoke the callback function to test your work. 
// You have been provided an example of a problem and a solution to see how this works with our items array.  
// Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

/* 

  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // Potential Solution:

  // Higher order function using "cb" as the call back
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // Function invocation 
  firstItem(items, function(first) {
    console.log(first)
  });

*/

/************************** */

function getLength(arr, cb) 
{
  return cb(arr);
}

getLength(items, arr => console.log(arr.length)); 

/************************** */

function last(arr, cb) 
{

  return cb(arr[arr.length - 1]);
}

last(items, elem => console.log(elem)); 

/************************** */

function sumNums(x, y, cb) 
{
  return cb(x+y);
}

sumNums(1,2, sumVal => console.log(sumVal)); 

/************************** */

function multiplyNums(x, y, cb) 
{
  return cb(x*y);
}
multiplyNums(2,7, prodVal => console.log(prodVal));

/************************** */

function contains(item, list, cb) 
{
  return cb(list.includes(item));
}
contains('Pencil', items, boolVal => console.log(boolVal)); //should true
contains('Shoes', items, boolVal => console.log(boolVal)); //should false

/************************** */

/* STRETCH PROBLEM */

const items2 = ['Pencil', 'Notebook', 'yo-yo', 'Gum', 'Notebook', 'yo-yo', 'Pen'];

function removeDuplicates(array, cb) {
  let tempArray = [];
  array.forEach(elem => tempArray.includes(elem) ? null : tempArray.push(elem));
  return cb(tempArray);
}

removeDuplicates(items2, arr => console.log(arr)); 
// console.log(items2);                               