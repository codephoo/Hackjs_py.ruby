//first exercise in chapter 3 of eloquent
'use strict'
min= (x,y) => (x<y) ? x: y;

//second exercise of chapter 3
isEven = number => number%2 === 0 ? true : false;

//Bean Counting, count B's
countBs = string => {
  string = String(string);
  let count = 0
  for (var i = string.length - 1; i >= 0; i--) {
    if (string[i]==='B')
      count++;
  };
  return count;
}

//Bean Counting, count char
countChar = (string, character) => {
  string = String(string);
  character = String(character);
  let count = 0
  for (var i = string.length - 1; i >= 0; i--) {
    if (string[i]===character)
      count++;
  };
  return count;
}