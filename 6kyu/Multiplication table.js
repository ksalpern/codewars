// Your task, is to create N×N multiplication table, of size provided in parameter.

// For example, when given size is 3:

// 1 2 3
// 2 4 6
// 3 6 9
// For the given example, the return value should be:

// [[1,2,3],[2,4,6],[3,6,9]]

// Solution:
multiplicationTable = function (size) {
  const table = [];
  for (let i = 1; i <= size; i++) {
    let numbers = Array(size)
      .fill(1)
      .map((el, idx) => (el + idx) * i);
    table.push(numbers)
  }
  return table
}


//
const multiplicationTable = size =>
  [...Array(size)].map((_, idx) => [...Array(size)].map((_, i) => ++i * (idx + 1)));

//
multiplicationTable = function(size) {
  var result = [];

  for (var i = 0; i < size; i++) {
    result[i] = [];
    for(var j = 0; j < size; j++) {
      result[i][j] = (i + 1) * (j + 1);
    }
  }
  
  return result
}

//
multiplicationTable = function(size) {

  return Array.apply(null, new Array(size)).map(function(val, i) {
    return Array.apply(null, new Array(size)).map(function(val, j) {
      return (i+1) * (j+1);
    });
  });
}
