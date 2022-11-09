// Write a function that checks if a given string (case insensitive) is a palindrome.

//Solution:
function isPalindrome(x) {
  return x.toLowerCase() === x.split('').reverse().join('').toLowerCase()
}

//
const isPalindrome = x => x.toLowerCase() === [...x.toLowerCase()].reverse().join``;

//
function isPalindrome(x) {
  x = x.toLowerCase()
  let a = 0
  let b = x.length
  while (a < b) {
    if (x[a] != x[b-1])
      return false
    a++
    b--
  }
  return true
}
