function getAverageAge(arguments) {
  let sum = arguments.reduce((accu, item) => 
    (accu + item.age), 0
  );
  return sum/(arguments.length);
}
let john = { name: "john", age: 25 };
let pete = { name: "pete", age: 30 };
let mary = { name: "mary", age: 29 };
let arr = [john, pete, mary];
console.log(getAverageAge(arr));

