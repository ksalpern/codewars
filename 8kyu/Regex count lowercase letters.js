// Your task is simply to count the total number of lowercase letters in a string.

// Examples
// lowercaseCount("abc"); ===> 3

// lowercaseCount("abcABC123"); ===> 3

// lowercaseCount("abcABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~"); ===> 3

// lowercaseCount(""); ===> 0;

// lowercaseCount("ABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~"); ===> 0

// lowercaseCount("abcdefghijklmnopqrstuvwxyz"); ===>

//Solution:
function lowercaseCount(str){
  let result =str.match(/[a-z]/g) 
    return result ? result.length : 0
}

//
function lowercaseCount(str){
    return (str.match(/[a-z]/g) || []).length
}

//
function lowercaseCount(str){
    return str.replace(/[^a-z]/g, "").length;
}
