const fruits = ["mango", "apple", "banana", "cherry"];
console.log(fruits);

/**We Can acess the array elements using index */
console.log(fruits[0]);

console.log(fruits.length);

fruits.push("strawberry");
console.log(fruits);
fruits.pop();
console.log(fruits);
fruits.unshift("Pine Apple");
console.log(fruits);
fruits.shift();
console.log(fruits);

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

fruits.forEach((f) => console.log(f));

for (let fruit of fruits) {
  console.log(fruit);
}

fruits.map((fruit) => {
  console.log(fruit.length);
});

console.log(fruits.indexOf("apple"));
console.log(fruits.lastIndexOf("apple"));
console.log(fruits.includes("apple"));
console.log(fruits.find((fruit) => fruit.startsWith("app")));
console.log(fruits.findIndex((fruit) => fruit.startsWith("app")));

const filteredFruits = fruits.filter((fruit) => fruit.length > 5);
console.log(filteredFruits);

console.log(fruits.sort());
console.log(fruits.reverse());

console.log(fruits.join(", "));

console.log(Array.isArray(fruits));
