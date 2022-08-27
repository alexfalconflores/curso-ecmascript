// declaration of class
class User { };

// instantiation of class
const newUser = new User();

class user {
    // Method
    greeting() {
        return 'Hello';
    }
};

const alex = new user();
console.log(alex.greeting());
const stefano = new user();
console.log(stefano.greeting());

// constructor
class user {
    constructor() {
        console.log('new user created');
    }

    greeting() {
        return 'Hello';
    }
}

const alex3 = new user();

// this
class user {
    constructor(name) {
        this.name = name;
    }

    speak() { return 'Hello' }

    greeting() {
        return `${this.speak()} ${this.name}`;
    }
}

const alex2 = new user('Alex');
console.log(alex.greeting());

// getter and setter
class user {
    // Constructor
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    // Method
    speak() {
        return 'Hello';
    }
    greeting() {
        return `${this.speak()} ${this.name}`;
    }

    get getAge() {
        return this.age;
    }
    set setAge(n) {
        this.age = n;
    }
}

const alex1 = new user('Alex', 21);
console.log(alex1.getAge);
console.log(alex1.setAge = 22);