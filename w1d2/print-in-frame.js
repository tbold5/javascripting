function printInFrame(list) {
  var list = list.split(' ');
  var longest = longestStr(list).length;
  var leftBorder = '* ';
  var rightBorder = ' *';
  var border = repeat('*', longest + leftBorder.length + rightBorder.length);


    console.log(border);
    for (let word of list) {
    console.log(leftBorder + word + repeat(' ', longest - word.length) + rightBorder);
  }
  console.log(border);
}

  function repeat(str, times) {
  var result = str;

  for (var i = 0; i <= times; i++) {
    result += str;
  }

  return result;
}

function longestStr(list) {
  var longestSoFar = list[0];
    for (str of list) {
      if(str.length > longestSoFar.length)
      longestSoFar = str;
  }

  return longestSoFar;
}

// Test driver code, do not modify
printInFrame('May the force be with you');
printInFrame('Here\'s Johnny!');
printInFrame('Supercalifragalisticexpialadocious');
printInFrame('Lost, like tears in the rain');
