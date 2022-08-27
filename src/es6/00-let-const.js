var lastName = 'Falcon';
lastName = 'Alex';
console.log(lastName);

let fruit = 'apple';
fruit = 'orange';
console.log(fruit);

const animal = 'dog';
animal = 'cat';
console.log(animal);

const fruits = () => {
    if(true){
        var fruit1 = 'apple'; // var is function scope
        let fruit2 = 'orange'; // let is block scope
        const fruit3 = 'banana'; // const is block scope
    }
    console.log(fruit1);
    console.log(fruit2);
    console.log(fruit3);
}

fruits();