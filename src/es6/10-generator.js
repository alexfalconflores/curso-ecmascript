function* iterate(array) {
    for (let value of array) {
        yield value;
    }
}

const it = iterate(['Alex', 'Bob', 'Charlie', 'David', 'Eugene']);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);