const regex = /\b(Apple)+\b/g;

const fruit = 'Apple, grape, Apple, Apple, Orange, Apple';

for (const match of fruit.matchAll(regex)) {
    console.log(match);
}
