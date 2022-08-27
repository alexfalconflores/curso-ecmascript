function newUser(name, age, country){
    var name = name || 'Alex';
    var age = age || 21;
    var country = country || 'PE';
    console.log(name, age, country);
}
newUser();
newUser('Juan', 32, 'MX');

function newAdmin(name = 'Alex', age = 21, country = 'PE'){
    console.log(name, age, country);
}
newAdmin();
newAdmin('Stefano', 32, 'MX');