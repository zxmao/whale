interface Person {
    firstName: String;
    lastName: String;
}

class Student {
    fullName: String;
    constructor(public firstName: String ,public middleInitial: String ,public lastName: String){
        this.fullName = firstName + " " + middleInitial +" "+ lastName;
    }
}


function greeter(person: Person) {
    return "Hello, " + person.firstName + person.lastName;
}
//let user = { firstName: 'Jane',lastName: 'User'};
let user = new Student("Jane","M.","User");
document.body.textContent = greeter(user);