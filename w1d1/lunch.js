function whatToDoForLunch(hungry, availableTime) {
 if (hungry === false) {
   console.log("Get back to work");
 } else if (hungry === true && availableTime < 20) {
   console.log("Pick something up and eat it in the lab");
 } else if (hungry === true && availableTime > 20 && availableTime < 30) {
   console.log("Try a place nearby");
 } else if (hungry === true && availableTime > 30) {
   console.log("Do you have that much time?");
 }
}

console.log("I'm hungry and I have 20 minutes for lunch.");
whatToDoForLunch(true, 20);
console.log("---");

console.log("I'm hungry and I have 50 minutes for lunch.");
whatToDoForLunch(true, 50);
console.log("---");

console.log("I'm not hungry and I have 30 minutes for lunch.");
whatToDoForLunch(false, 30);
console.log("---");

console.log("I'm hungry and I have 15 minutes for lunch.");
whatToDoForLunch(true, 15);