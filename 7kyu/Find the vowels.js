// We want to know the index of the vowels in a given word, for example, there are two vowels in the word super (the second and fourth letters).

// So given a string "super", we should return a list of [2, 4].

// Some examples:
// Mmmm  => []
// Super => [2,4]
// Apple => [1,5]
// YoMama -> [1,2,4,6]
// NOTES
// Vowels in this context refers to: a e i o u y (including upper case)
// This is indexed from [1..n] (not zero indexed!)

// Solution:
function vowelIndices(word){
  let arr=[]
  let a=word.split('');
  for (let i=0;i<word.length;i++){
  if (/[aeuoiy]/gi.test(a[i])) {arr.push(i+1)}
  }
  return arr
}

//
const vowelIndices = word =>
  [...word].reduce((pre, val, idx) => /[aeiouy]/i.test(val) ? [...pre, ++idx] : pre, []);

//
function vowelIndices(word,a=[]){
  return (word.replace(/[aeiouy]/gi,(m,i)=>(a.push(i+1),m)),a)
}
