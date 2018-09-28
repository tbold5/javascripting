var words = "";
var reverse = process.argv.splice(2);

function latinRule(string) {
  var newString = "";
  var stringArray = string.split("");
  var firstLetter = "";
   for (var i = 0; i < stringArray.length; i++) {
     if (i === 0) {
      firstLetter = stringArray[i];
     } else if (i > 0) {
      newString += stringArray[i]
     }
   } return newString + firstLetter + "ay "

}
for (var i = 0; i < reverse.length; i++) {
  console.log(latinRule(reverse[i]));
}


