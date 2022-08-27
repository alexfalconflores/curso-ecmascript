// Arrays destructuring

let fruits = ['apple', 'banana', 'orange'];
let [a, b] = fruits;
let [, , c] = fruits;
console.log(a, fruits[1]);

// Objects destructuring
let user = {
    username: 'Alex',
    age: 21,
    country: 'PE'
}

let { username, age } = user;
console.log(username, user.age);


// Spread operator
// Note: Spread operator is used to expand arrays and objects only first level
let person = {
    name: 'Alex',
    age: 21,
}
let country = 'PE';

let data = { id: 1, ...person, country };
console.log(data);

// Rest operator
function sum(num, ...values) {
    console.log(values);
    console.log(num + values[0]);
    return num + values[0];
}

sum(1, 1, 2, 3);
