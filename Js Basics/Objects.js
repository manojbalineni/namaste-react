const person = {
  name: "Manoj babu",
  age: 24,
  city: "Hyderabad",
  sayGreet: function () {
    console.log(" Hello....");
  },
};

console.log(person);

console.log(person.name);
console.log(person["age"]);

person.age = 30;
console.log(person);

person.state = "Telegana";
console.log(person);

delete person.age;

console.log(person);

console.log("state" in person);

console.log(person.hasOwnProperty("state"));

for (key in person) {
  console.log(key + " : " + person[key]);
}

person.sayGreet();

let { name, state } = person;
console.log(name);
console.log(state);

let obj1 = { a: 1, b: 2 };
let obj2 = { c: 3, d: 4 };
console.log(obj1);
console.log(obj2);

let merged = Object.assign({}, obj1, obj2);
console.log(merged);

let merged2 = { ...obj1, ...obj2 };
console.log(merged2);

console.log(Object.keys(obj1));

console.log(Object.values(obj1));

console.log(Object.entries(obj1));

let str = JSON.stringify(obj1);
console.log(str);
