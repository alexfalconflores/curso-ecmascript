// enhanced object literals
function newUser(user, age, country, uId) {
    return {
        user,
        age,
        country,
        id: uId
    }
}

console.log(newUser('Alex', 21, 'PE', 1));