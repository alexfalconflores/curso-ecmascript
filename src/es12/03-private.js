class user {
    // Constructor
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    // Method
    #speak() {
        return 'Hello';
    }
    greeting() {
        return `${this.speak()} ${this.name}`;
    }

    get #getAge() {
        return this.age;
    }
    set #setAge(n) {
        this.age = n;
    }
}

const alex1 = new user('Alex', 21);
console.log(alex1.getAge);
console.log(alex1.setAge = 22);