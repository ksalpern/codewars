// Given a positive number n > 1 find the prime factor decomposition of n. The result will be a string with the following form :

//  "(p1**n1)(p2**n2)...(pk**nk)"
// with the p(i) in increasing order and n(i) empty if n(i) is 1.

// Example: n = 86240 should return "(2**5)(5)(7**2)(11)"

// Solution:
function primeFactors(n) {
    let factors = [], obj = {}, str = ``;
    cal(n);
    function cal(n) {
        if (!n || n < 2)
            return [];
        for (let i = 2; i <= n; i++) {
            while (n % i === 0) {
                factors.push(i);
                n /= i;
            }
        }
    }

    factors.map(function (x) {
        obj[x] ? obj[x]++ : obj[x] = 1;
    });

    for (let item in obj) {
        obj[item] == 1 && (str += `(${item})`)
        obj[item] > 1 && (str += `(${item}**${obj[item]})`)
    }
    console.log(str)
    return str;
}

//
const primeFactors = n => {
  const obj = {}; let i = 2;
  while (n > 1) !(n % i) ? (obj[i] = -~obj[i], n /= i) : i++;
  return Object.keys(obj).reduce((pre, val) => pre + `(${val}${obj[val] > 1 ? `**${obj[val]}` : ``})`, ``)
}

//
function primeFactors(n){
  for (var i=2, res="", f; i <= n; i++) {
    f=0;
    while (n%i == 0) { f++; n/=i }
    res += f ? "(" + ( f>1 ? i+"**"+f  : i ) +")" : ""
  }
  return res || "("+n+")"
}
