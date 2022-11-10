// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

//Solution:
function findShort(s){
  let res = s.split(' ');
  let a = res[0].length;
  
  for (let i = 0; i < res.length; i++) {
    a = Math.min(res[i].length, a);
  }
  return a;
}

//
function findShort(s){
  return Math.min.apply(null, s.split(' ').map(w => w.length));
}

//
const findShort = s =>
  Math.min(...s.split(` `).map (val => val.length));
