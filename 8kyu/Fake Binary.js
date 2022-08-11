// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// Note: input will never be an empty string

//Solution:
function fakeBin(x){
return x.replace(/[0-4]/g, 0).replace(/[5-9]/g, 1)
}

//Solutions I liked:
function fakeBin(x) {
  return x.replace(/\d/g, d => d < 5 ? 0 : 1);
}
//
function fakeBin(x) {
    return x.split('').map(n => n < 5 ? 0 : 1).join('');
}
