function isPalindrome(str) {
  var noSpaces = str.split(" ").join("").toLowerCase();
  var mid = Math.floor(noSpaces.length/2);
  var last = noSpaces.length - 1;

  // console.log('str:', str);
  // console.log('noSpaces:', noSpaces);
  // console.log('mid:', mid);
  // console.log('last:', last);

  for (var i = 0; i < mid; i++) {
    // console.log('i:', i);
    // console.log('noSpaces[i]', noSpaces[i]);
    // console.log('noSpaces[last - i]:', noSpaces[last - i]);
    if (noSpaces[i] !== noSpaces[last - i]) return false;
   }

   return true;
}
// console.log('p => ', isPalindrome('p'));

// Test driver code. These should all log true.
console.log(isPalindrome('p') === true);
console.log(isPalindrome('foo') === false);
console.log(isPalindrome('racecar') === true);
// console.log('Kayak => ', isPalindrome('Kayak'));
console.log(isPalindrome('Kayak') === true);
// console.log('a santa at NASA => ', isPalindrome('a santa at NASA'));
console.log(isPalindrome('a santa at NASA') === true);
console.log(isPalindrome('live without evil') === false);
console.log(isPalindrome('just some random words') === false);

