var repeatNumbers = function(data) {
  let result = [];
  for (let i in data)
  {
    let innerArray = data[i];
    let compiledString = Array(innerArray[1]+1).join(innerArray[0]);
    result.push(compiledString);
  }
  return result.join(', ');
}
console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));