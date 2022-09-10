// Your job is to write a function which increments a string, to create a new string.

// If the string already ends with a number, the number should be incremented by 1.
// If the string does not end with a number. the number 1 should be appended to the new string.
// Examples:

// foo -> foo1

// foobar23 -> foobar24

// foo0042 -> foo0043

// foo9 -> foo10

// foo099 -> foo100

// Attention: If the number has leading zeros the amount of digits should be considered.

//Solution:
function incrementString (strng) {
  return strng.replace(/([0-8]|\d?9+)?$/, (e) => (e ? +e + 1 : 1))
}

//
function incrementString(input) {
  if(isNaN(parseInt(input[input.length - 1]))) return input + '1';
  return input.replace(/(0*)([0-9]+$)/, function(match, p1, p2) {
    var up = parseInt(p2) + 1;
    return up.toString().length > p2.length ? p1.slice(0, -1) + up : p1 + up;
  });
}

//
const incrementString = s => s.replace(/[0-8]?9*$/, m => String(++m));

//
function incrementString(str){
  var c = str[str.length-1];
    switch(c){
            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8': return str.substring(0, str.length-1) + (parseInt(c)+1);
            case '9': return incrementString(str.substring(0, str.length-1)) + 0;
            default: return str+"1";
                }
}

//
function incrementString(input) {
  return input.replace(/\d*$/, function(n) {
    var x = ~~n + 1
    return ('0000000' + x).slice(-Math.max(n.length, String(x).length))
  })
}
