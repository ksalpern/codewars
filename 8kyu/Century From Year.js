// Introduction
// The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

// Task
// Given a year, return the century it is in.

// Examples
// 1705 --> 18
// 1900 --> 19
// 1601 --> 17
// 2000 --> 20

//Solution:
const century = year => {
   if(typeof year == 'string'){
      if(year.toString().slice(-2) == '00'){
         return year.toString().slice(0,2);
      }else{
         return (Math.floor(+year/100) +1).toString();
      };
   }else if(typeof year == 'number'){
      return Math.floor((year-1)/100) + 1;
   }else{
      return undefined;
   };
};

//
const century = year => Math.ceil(year/100)

//
const century = year => year % 100 === 0 ? parseInt(year / 100) : parseInt(year / 100) + 1;
