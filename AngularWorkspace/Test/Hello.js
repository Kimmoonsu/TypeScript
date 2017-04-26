var User = (function () {
    function User(id, password) {
        this.id = id;
        this.password = password;
    }
    User.prototype.printView = function () {
        console.log("in");
        return "ID : " + this.id + " password : " + this.password;
    };
    return User;
}());
var Animal;
(function (Animal) {
    var Dog = (function () {
        function Dog(name) {
            this.name = name;
        }
        Dog.prototype.printName = function () {
            return "name : " + this.name;
        };
        return Dog;
    }());
    Animal.Dog = Dog;
})(Animal || (Animal = {}));
// interface Person {
//     id: string;
//     lastName: string;
// }
// function greeter(person : Person) {
//     return "Hello, " + person.firstName + " " + person.lastName;
// }
function login() {
    // var id : string = (<HTMLInputElement>document.getElementById("id")).value;
    // var password : string = (<HTMLInputElement>document.getElementById("password")).value;
    // document.body.innerHTML = new User(id, password).printView();    
    document.body.innerHTML = new Animal.Dog("Dog").printName();
}
// var user = new Student("Kim", "", "Moonsu");
// document.body.innerHTML = greeter(user); 
