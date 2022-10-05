// Simple, remove the spaces from the string, then return the resultant string.

//Solution:
function noSpace(x){
return x.split(' ').join('')
}

//
function noSpace(x){
  return x.replace(/\s/g, '');
}
