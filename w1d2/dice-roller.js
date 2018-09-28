var myArgs = process.argv.slice(2);


function diceRollResult() {
  return Math.floor(Math.random() * 6) + 1;
}
function diceRoller(numberofRolls) {
  var result = '';
  for (var i = 0; i < numberofRolls; i++) {
    if (i < numberofRolls -1) {
      result += diceRollResult() + ", ";
    } else {
      result += diceRollResult();
    }
  } return result;
}
console.log(diceRoller(3));