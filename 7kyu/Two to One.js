// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

//Solution:
function longest(s1, s2) {
  let long = [];
  let result = [...s1, ...s2];
  result.sort();
  result.forEach((el) => {
    if (!long.includes(el)){
      long.push(el);
    }
  });
  return long.join('')
}

// Solution I liked:
const longest = (s1, s2) => [...new Set(s1+s2)].sort().join('')
