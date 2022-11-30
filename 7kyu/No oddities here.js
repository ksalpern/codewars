// Write a small function that returns the values of an array that are not odd.

// All values in the array will be integers. Return the good values in the order they are given.

// Solution:
function noOdds( values ){
  return values.filter(a=>a%2===0)
}

//
const noOdds = values => 
  values.filter(val => !(val&1));

//
var noOdds = values => values.filter(x => !(x % 2));
