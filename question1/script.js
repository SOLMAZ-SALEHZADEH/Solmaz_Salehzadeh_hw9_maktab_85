arrayLength = +prompt("enter a number");
const arr = [];
let reversed = true;
for (let i = 0; i < arrayLength; i++) {
  let arrayValue = +prompt("enter a number");
  arr.push(arrayValue);
}
for (let i = 0; i < arr.length / 2; i++) {
  if (arr.at(i) !== arr.at((i + 1) * -1)) {
   reversed = false
    break;
  }
}

console.log(reversed ? "reversed" : "not reversed")



