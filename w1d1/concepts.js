var conceptList = ["gists", "types", "operators", "iteration", "problem solving"];
var concepts = joinList(conceptList);
function joinList(conceptList) {
  var joinListString = "";
  for (var i = 0; i < conceptList.length; i++) {
    var conceptListItem = conceptList[i];
    joinListString += conceptListItem;
    if (i < conceptList.length - 1) {
      joinListString += ", ";
    }
  }
  return joinListString;
}

console.log("Today I learned about " + concepts + ".");