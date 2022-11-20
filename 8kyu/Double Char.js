// DESCRIPTION:
// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

// Examples (Input -> Output):
// * "String"      -> "SSttrriinngg"
// * "Hello World" -> "HHeelllloo  WWoorrlldd"
// * "1234!_ "     -> "11223344!!__  "
// Good Luck!
  
//   Solution:
  function doubleChar(str) {
  return str.split('').map((a) => a + a).join('');
}

//
const doubleChar = str =>
  str.replace(/./g, `$&$&`);

//
function doubleChar(str) {
  var word = '';
  for (var i = 0; i < str.length; i++){
    word = word + str[i] + str[i];
  };
  return word;
};

//
function doubleChar(str) {
  return str.replace(/(.)/g, "$1$1")
}
