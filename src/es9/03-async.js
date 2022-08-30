async function* asyncGenerator() {
    yield await Promise.resolve(1);
    yield await Promise.resolve(2);
    yield await Promise.resolve(3);
}

const it = asyncGenerator();
it.next().then(response => console.log(response.value));
it.next().then(response => console.log(response.value));
it.next().then(response => console.log(response.value));
console.log('Hello');

async function arrayOfNames(array) {
    for await (let value of array) {
        console.log(value);
    }
}

const names = ['John', 'Jane', 'Joe'];
arrayOfNames(names);
console.log('After');
