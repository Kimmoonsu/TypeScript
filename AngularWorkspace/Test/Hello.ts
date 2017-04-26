class User {
    id : string;
    password : string;
    constructor(id:string, password:string) {
        this.id = id;
        this.password = password;
    }
    printView() : string{
        
        return "ID : " + this.id + " password : " + this.password;
    }
}
module Animal {
    export class Dog {
        name : string;
        constructor(name:string) {
            this.name = name;
        }
        printName() : string {
            return "name : " + this.name;
        }
    }
}
// interface Person {
//     id: string;
//     lastName: string;
// }

// function greeter(person : Person) {
//     return "Hello, " + person.firstName + " " + person.lastName;
// }
function login(){
    // var id : string = (<HTMLInputElement>document.getElementById("id")).value;
    // var password : string = (<HTMLInputElement>document.getElementById("password")).value;
    // document.body.innerHTML = new User(id, password).printView();    
    document.body.innerHTML = new Animal.Dog("Dog").printName();
    
}



// var user = new Student("Kim", "", "Moonsu");

// document.body.innerHTML = greeter(user);