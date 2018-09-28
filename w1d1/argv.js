// get command line args
var numberArguments = process.argv.slice(2);
// yell at people if there is less than two numbers
if(numberArguments.length < 2){
  console.log('Not Enough Numbers');
} else if(numberArguments.length > 2){
  // yell at people if there is more than two numbers

  console.log('Too Many Numbers');
} else {
  // convert two number inputs to numbers
  var firstArg = Number(numberArguments[0]);
  var secondArg = Number(numberArguments[1]);

  // yell at people if there is non-numeric data
  if(isNaN(firstArg) || isNaN(secondArg)){
    console.log('You have non-numeric input.  You do know what numbers look like, right?  They did cover that at whatever educational institute you attended, yeah?');
  } else {
    // add them up
    // console.log them.
    console.log(firstArg + secondArg);
  }
}