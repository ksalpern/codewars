Numbers ending with zeros are boring.

They might be fun in your world, but not here.

Get rid of them. Only the ending ones.

1450 -> 145
960000 -> 96
1050 -> 105
-1050 -> -105
Zero alone is fine, don't worry about it. Poor guy anyway

//Solution:
const noBoringZeros = n => +`${n}`.replace(/0+$/g, '')

//
function noBoringZeros(n) {
  while(n%10==0 && n!=0){n/=10;}
  return n;
}

//
const noBoringZeros = n => parseInt(n.toString().replace(/0+$/g, "") + 0) / 10;
