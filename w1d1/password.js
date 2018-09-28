var string = "password"

function obfuscate(string) {
  var newString = "";
  for (var i = 0; i < string.length; i++) {
    var char = string.charAt(i);
    if (char === "a") {
      newString += "4";
    } else if (char === "e") {
      newString += "3";
    } else if (char === "o") {
      newString += "0";
    } else if (char === "l") {
      newString += "1";
    } else {
      newString += char;
    }
  }
  return newString;
}
console.log(obfuscate(string));