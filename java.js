let fruits = ["apple", "banana", "orange"];
console.log("Initial array:", fruits);

fruits.unshift("cherry");
console.log("After unshift (add 'cherry' at start):", fruits);

fruits.shift();
console.log("After shift (remove first element):", fruits);

fruits.pop();
console.log("After pop (remove last element):", fruits);

fruits.push("kiwi");
fruits.push("mango");
fruits.push("orange");
fruits.push("banana");
console.log("After multiple push operations:", fruits);

console.log("Final array elements:");
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
} 