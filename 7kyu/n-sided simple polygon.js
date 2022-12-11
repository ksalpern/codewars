// Find the total sum of internal angles (in degrees) in an n-sided simple polygon. N will be greater than 2.

// Solution:
function angle(n) {
  return (2*n - 4) * 90
}

//
const angle = n => (n - 2) * 180;

//
let angle = n => n * 180 - 360;
