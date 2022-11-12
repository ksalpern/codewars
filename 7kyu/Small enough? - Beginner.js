// You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.

// You can assume all values in the array are numbers.

// Solution:
const smallEnough = (a, limit) => a.every(a => a <= limit) 

//
function smallEnough(a, limit){
  return Math.max(...a) <= limit
}

//
function smallEnough(a, limit){
  for(var i of a){
    if(i > limit)
      return false;
  }
  return true;
}
