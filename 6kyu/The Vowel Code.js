// Step 1: Create a function called encode() to replace all the lowercase vowels in a given string with numbers according to the following pattern:

// a -> 1
// e -> 2
// i -> 3
// o -> 4
// u -> 5
// For example, encode("hello") would return "h2ll4". There is no need to worry about uppercase vowels in this kata.

// Step 2: Now create a function called decode() to turn the numbers back into vowels according to the same pattern shown above.

// For example, decode("h3 th2r2") would return "hi there".

// For the sake of simplicity, you can assume that any numbers passed into the function will correspond to vowels.

// Solution:
const letters = ['a', 'e' ,'i', 'o', 'u']
const letters_ex = /a|e|i|o|u/g
const numbers_ex = /[1-5]/g
// dirty coercion
const encode = str => str.replace(letters_ex, c => letters.indexOf(c) + 1)
const decode = str => str.replace(numbers_ex, c => letters[/*parseInt*/(c) - 1])

//
const obj = {a: 1, e: 2, i: 3, o: 4, u: 5};

const encode = string =>
  string.replace(/[aeiou]/g, val => obj[val]);

const decode = string =>
  string.replace(/[1-5]/g, val => Object.keys(obj)[--val]);

//
// turn vowels into numbers
function encode(string){
  return string.replace(/[aeiou]/g, function (x) { return '_aeiou'.indexOf(x) });
}

//turn numbers back into vowels
function decode(string){
  return string.replace(/[1-5]/g, function (x) { return '_aeiou'.charAt(x) });
}
