// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

// For example:

// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]

//Solution:
var uniqueInOrder=function(iterable, i = 0 ){
  //your code here - remember iterable can be a string or an array
  let result = [];
  for ( i; i < iterable.length; i++ ) {
    
    // check if there is back to back letter
    if ( iterable[i] !== iterable[i+1]) {
      
       // if not, push the current value to result
      result.push(iterable[i])
    }
  }
   return result
}
//Solution that I liked 
var uniqueInOrder=function(iterable){
    return [...iterable].filter((a, i) => a !== iterable[i-1])
}
