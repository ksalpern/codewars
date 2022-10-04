// Given an integer as input, can you round it to the next (meaning, "greater than or equal") multiple of 5?

// Examples:

// input:    output:
// 0    ->   0
// 2    ->   5
// 3    ->   5
// 12   ->   15
// 21   ->   25
// 30   ->   30
// -2   ->   0
// -5   ->   -5
// etc.

//Solution:
function roundToNext5(n){
  return n % 5 === 0
  ? n
  : Math.ceil(n/5)*5
}

//
const roundToNext5 = n => Math.ceil(n / 5) * 5;

//
function roundToNext5(n){
  while(n % 5 !== 0) n++;
  return n;
}

//
function roundToNext5(n){
  while(n%5) n++;
  return n;
}
