//The input is a string str of digits. Cut the string into chunks (a chunk here is a substring of the initial string) of size sz (ignore the last chunk if its size is less than sz).

//If a chunk represents an integer such as the sum of the cubes of its digits is divisible by 2, reverse that chunk; otherwise rotate it to the left by one position. Put together these modified chunks and return the result as a string.

//If

//sz is <= 0 or if str is empty return ""
//sz is greater (>) than the length of str it is impossible to take a chunk of size sz hence return "".
//Examples:
//revrot("123456987654", 6) --> "234561876549"
//revrot("123456987653", 6) --> "234561356789"
//revrot("66443875", 4) --> "44668753"
//revrot("66443875", 8) --> "64438756"
//revrot("664438769", 8) --> "67834466"
//revrot("123456779", 8) --> "23456771"
//revrot("", 8) --> ""
//revrot("123456779", 0) --> "" 
//revrot("563000655734469485", 4) --> "0365065073456944"
//Example of a string rotated to the left by one position:
//s = "123456" gives "234561".

//Solution:
 const testCubes = s => Array.prototype.reduce.call(s, (acc, val) => acc + Number(val) ** 3, 0) % 2 === 0;
 const reverseStr = s => [...s].reverse().join("");
 const rotateLeft = s => s.slice(1) + s.slice(0, 1);

function revrot(str, sz) { 
  if (sz <= 0 || !str || str.length < sz) return ''
  if(str.length === 1 && sz === 1) return str
  if(/\D/.test(str)){
    throw Error("Invalid numeric string");
  }
  let pat = new RegExp(`.{${sz}}`, 'g');
  return str.match(pat).map(a => 
                           testCubes(a)
                           ? reverseStr(a)
                           : rotateLeft(a)).join('')
}

//
function revrot(str, sz) {
   if(!sz||sz<0||sz>str.length)return '';
   var arr=str.match(new RegExp('\\d{'+sz+'}','g'));
   return arr.map(function(v){
     if(v.toString().split('').reduce((s,v)=>s+v*1,0)%2===0){
       return v.split('').reverse().join('');
     }
     else return v.slice(1)+v[0];
   }).join('');
}

//
const revrot = (str, sz) =>
  (str.match(new RegExp(`.{${sz}}`, `g`)) || []).map(val => val.replace(/[02468]/g, ``).length % 2 ? val.replace(/(.)(.+)/, `$2$1`) : [...val].reverse().join(``)).join(``);
