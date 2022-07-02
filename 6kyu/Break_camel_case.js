// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""a

//Solution:
function solution(string) {
    return(string.replace(/[A-Z]/g, ' $1'));//method returns a new string with some or all matches of a pattern replaced by a replacement. The pattern can be a string or a RegExp, and the replacement can be a string or a function called for each match. If pattern is a string, only the first occurrence will be replaced.--SYNTAX: str.replace(regexp|substr, newSubStr|function[, flags])
}