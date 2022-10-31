// Write a function that produces an array with the numbers 0 to N-1 in it.

// For example, the following code will result in an array containing the numbers 0 to 4:

// arr(5) // => [0,1,2,3,4]
// Note: The parameter is optional. So you have to give it a default value.

//Solution:
const arr = N => {
return typeof N === 'number'
? [...Array(N).keys()]
: []
}

//
function arr(n){
  var newArr = [];
  for(var i = 0; i < n; i++){
    newArr.push(i);
  }
  return newArr;
}

//
const arr = n => Array.from({length: n}, (_, i) => i);
