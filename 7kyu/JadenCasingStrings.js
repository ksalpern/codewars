// Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word. For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.

// Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

// Example:

// Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
// Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"

String.prototype.toJadenCase = function () {
  let returnString = [];
  let words = this.toLocaleLowerCase().split(' ');//splits the input string into individual words
  for (let i = 0; i < words.length; i++) {
   let word = words[i];
    returnString.push(word[0].toUpperCase() + word.slice(1));// each word, treated as an array, has the element at index ‘0’ capitalized, and then the rest of the word added starting from index ‘1’, is pushed into array
  }
  return returnString.join(' '); //returns the array as a string joined with a space
};

//Alt:
String.prototype.toJadenCase = function() {
  return this.split(' ').map(item => item[0].toUpperCase() + item.slice(1)).join(' ')
};

//Alt:
String.prototype.toJadenCase = function () {
  return this.replace(/(^|\s)[a-z]/g, function(x){ return x.toUpperCase(); });
};
