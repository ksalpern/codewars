// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

//Solution:
function find_average(array) {
  return array.length == 0 
  ? 0
  : array.reduce((a, b) => a + b) / array.length
}
