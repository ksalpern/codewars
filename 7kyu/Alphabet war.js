// Introduction
// There is a war and nobody knows - the alphabet war!
// There are two groups of hostile letters. The tension between left side letters and right side letters was too high and the war began.

// Task
// Write a function that accepts fight string consists of only small letters and return who wins the fight. When the left side wins return Left side wins!, when the right side wins return Right side wins!, in other case return Let's fight again!.

// The left side letters and their power:

//  w - 4
//  p - 3
//  b - 2
//  s - 1
// The right side letters and their power:

//  m - 4
//  q - 3
//  d - 2
//  z - 1
// The other letters don't have power and are only victims.

// Example
// alphabetWar("z");        //=> Right side wins!
// alphabetWar("zdqmwpbs"); //=> Let's fight again!
// alphabetWar("zzzzs");    //=> Right side wins!
// alphabetWar("wwwwwwz");  //=> Left side wins!

// Solution:
function alphabetWar(fight)
{
  const left={
    'w': 4,
    'p': 3,
    'b': 2,
    's': 1
  }
  
  const right={
    'm': 4,
    'q': 3,
    'd': 2,
    'z': 1
  }
  
  let countRight = 0
  let countLeft = 0
  
  for(let char of fight){
    
    if(char in left){
      countLeft += left[char]
    }
    
    if(char in right){
      countRight += right[char]
    }    
    
  }
  
  
  if(countLeft > countRight){
     return "Left side wins!"
  }
 
  if (countLeft < countRight){
    return "Right side wins!" 
  }
    
   return "Let's fight again!";
}

//
function alphabetWar(fight) {
    let map = { w: -4, p: -3, b: -2, s: -1, m: 4, q: 3, d: 2, z: 1 };
    let result = fight.split('').reduce((a, b) => a + (map[b] || 0), 0);
    return result ? (result < 0 ? "Left" : "Right") + " side wins!" : "Let's fight again!";
}

//
const alphabetWar = fight =>
  [`Right side wins!`, `Let's fight again!`, `Left side wins!`][Math.sign([...fight].reduce((pre, val) => pre + ((`mqdz sbpw`.indexOf(val) - 4) % 5), 0)) + 1];

//
function alphabetWar(fight){
  var right = {}
  right['m'] = 4
  right['q'] = 3
  right['d'] = 2
  right['z'] = 1
  var left = {}
  left['w'] = 4
  left['p'] = 3
  left['b'] = 2
  left['s'] = 1

  var sumRight = 0
  var sumLeft = 0

  for(i in fight){
    if(right[fight[i]]){sumRight += right[fight[i]]}
    if(left[fight[i]]){sumLeft += left[fight[i]]}
  }
  if(sumRight>sumLeft){return 'Right side wins!'}
  if(sumRight<sumLeft){return 'Left side wins!'}
  return "Let's fight again!";
}
