const users = {
    alex: {
        country: 'PE',
    },
    juan: {
        country: 'US',
    }
}

console.log(users.alex.country);
console.log(users.alex?.age);
console.log(users?.stefano?.country);
console.log(users.stefano.country);