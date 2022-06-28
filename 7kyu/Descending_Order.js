// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// Examples:
// Input: 21445 Output: 54421

// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321

// My Thought Process:

// 1 I am given a number and expecting a number back

// 2 as I want the highest number I should sort the number in a descending way

// 3 can only call the sort if I convert the number into an array. But first, I will have to convert the number to a string and only then can I split it.

// 4 from the given examples its reversed so call the reverse method

// 5 and then I want to join it back to a number

// My Solution:

function descendingOrder(n){
  return Number(n.toString().split('').sort().reverse().join(''))
}