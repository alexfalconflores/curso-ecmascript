const user = { username: 'John', age: 30, country: 'PE' };
const { username, ...values } = user;
console.log(username); // John
console.log(values); // { age: 30, country: 'PE' } // Only first level of object is extracted