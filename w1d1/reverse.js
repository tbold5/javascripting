var words = process.argv.splice(2);

function reverse(string) {
  var newString = "";
  for (var i = string.length - 1; i >= 0; i--) {
    newString = newString + string[i];
    }
  return newString;
  }
for (var i = 0; i < words.length; i++) {
  console.log(reverse(words[i]));
}
