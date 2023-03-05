// Write a function that returns a string in which firstname is swapped with last name.

// Example(Input --> Output)

// "john McClane" --> "McClane john"

// Solution:
function nameShuffler(str){
  return str.split(' ').reverse().join(' ')
}

//
const nameShuffler = str =>
  str.replace(/([^\s]+) ([^\s]+)/, `$2 $1`);

//
function nameSuffle(str){
  var arr = str.split(" ");
  return arr[1] + ' ' + arr[0]
}
