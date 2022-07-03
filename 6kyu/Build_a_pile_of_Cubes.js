// Your task is to construct a building which will be a pile of n cubes. The cube at the bottom will have a volume of n^3, the cube above will have volume of (n-1)^3 and so on until the top which will have a volume of 1^3.

// You are given the total volume m of the building. Being given m can you find the number n of cubes you will have to build?

// The parameter of the function findNb (find_nb, find-nb, findNb, ...) will be an integer m and you have to return the integer n such as n^3 + (n-1)^3 + ... + 1^3 = m if such a n exists or -1 if there is no such n.

// Examples:
// findNb(1071225) --> 45

// findNb(91716553919377) --> -1

// Solution:
function findNb(m) {
    // your code
  let n = 0;
  let total = 0;
  while(total < m) {
    n+=1
    total += n**3 //Exponentiation operator; 2 ** 3 returns 8
  }
    return total == m ? n : -1;
}

// this is based on the formula that the sum of the first n cubes equals (n * (n + 1) / 2) ^ 2
// also, the sum of the first n cubes is always a square
function findNb(m) {
    m = Math.sqrt(m) * 2;
    if (m != parseInt(m)){
      return -1;
    }
    var result = parseInt(Math.sqrt(m));
    return (result * (result + 1) == m) ? result : -1;
}