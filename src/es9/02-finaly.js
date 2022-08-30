const anotherFunction = () => {
    return new Promise((resolve, reject) => {
        if (false) resolve('Hey');
        else reject(new Error('Test Error'));
    })
}

anotherFunction()
    .then(response => console.log(response))
    .catch(error => console.log(error.message))
    .finally(() => console.log('Finally'));