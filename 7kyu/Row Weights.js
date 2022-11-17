// Explanation:
// The first element 120 is the total weight of team 1, and the second element 140 is the total weight of team 2.

// rowWeights([80])  ==>  return (80, 0)
// Explanation:
// The first element 80 is the total weight of team 1, and the second element 0 is the total weight of team 2.

// Solution:
 function rowWeights(array){
  let t1 = array.filter((i, index) => index % 2 === 0).reduce((result, i) => result + i, 0);
  let t2 = array.filter((i, index) => index % 2 !== 0).reduce((result, i) => result + i, 0);  
  return [t1, t2]
}

//
const rowWeights = array =>
  array.reduce((pre, val, idx) => (pre[idx&1] += val, pre), [0, 0]);

//
rowWeights=arr=>arr.reduce((a,b,i)=>(a[i%2]+=b,a),[0,0])
