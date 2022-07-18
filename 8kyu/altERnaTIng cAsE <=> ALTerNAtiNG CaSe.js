//Define String.prototype.toAlternatingCase (or a similar function/method such as to_alternating_case/toAlternatingCase/ToAlternatingCase in your selected language; see the initial solution for details) such that each lowercase letter becomes uppercase and each uppercase letter becomes lowercase. For example:

//"hello world".toAlternatingCase() === "HELLO WORLD"
//"HELLO WORLD".toAlternatingCase() === "hello world"
//"hello WORLD".toAlternatingCase() === "HELLO world"
//"HeLLo WoRLD".toAlternatingCase() === "hEllO wOrld"
//"12345".toAlternatingCase() === "12345" // Non-alphabetical characters are unaffected
//"1a2b3c4d5e".toAlternatingCase() === "1A2B3C4D5E"
//"String.prototype.toAlternatingCase".toAlternatingCase() === "sTRING.PROTOTYPE.TOaLTERNATINGcASE"
//As usual, your function/method should be pure, i.e. it should not mutate the original string.

//Solution

String.prototype.toAlternatingCase = function () {
  // Define your method here :)\
  return this.split('')
    .map(c => (c === c.toUpperCase() 
              ? c.toLowerCase() 
               : c.toUpperCase()))
  .join('')
}
 //split method takes a pattern and divides a String and returns the array
 //map method creates a new array populated with the results of calling a provided function on every element in the calling array
 //join method creates and returns a new string by concatenating all of the elements in an array, separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator.
