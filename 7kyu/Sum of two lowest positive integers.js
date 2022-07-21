// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

// [10, 343445353, 3453445, 3453545353453] should return 3453455.

//Solution:

function sumTwoSmallestNumbers(numbers) {  
  //Code here
  let first = Math.min(...numbers);
  numbers.splice(numbers.indexOf(first), 1);
  let second = Math.min(...numbers);
  return first + second
}
//Math.min - finns the min value in array
//splice - method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place
//indexOf -  method returns the first index at which a given element can be found in the array, or -1 if it is not present

//Solution I liked:
function sumTwoSmallestNumbers(numbers){  
  numbers = numbers.sort(function(a, b){return a - b; });
  return numbers[0] + numbers[1];
};
