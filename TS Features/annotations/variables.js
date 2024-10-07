var age = 25;
var sport = 'fast track runner';
var speed = 'fast';
var hasMedals = true;
var additionalInfo = null;
var portfolio = undefined;
var now = new Date();
// Arrays in TS
var fruits = ['apple', 'banana', 'kiwi', 'peach', 'strawberry'];
var numbers = [32, 43, 12, 65, 87, 67, 98];
var filteredNumbers = numbers.filter(function (num) { return num % 2 !== 0 && num > 50; });
console.log(filteredNumbers);
// Classes
var Car = /** @class */ (function () {
    function Car(model, maxSpeed) {
        this.model = model;
        this.maxSpeed = maxSpeed;
    }
    return Car;
}());
var car = new Car('BMV', 200);
console.log(car.model);
// Object literal in TS
var point = {
    x: 10,
    y: 20
};
// Functions
var createNewAccount = function (firstName, lastName, userName, email, password) {
    var newAccount = "First Name: ".concat(firstName, "\n                Last Name: ").concat(lastName, "\n                User Name: ").concat(userName, "\n                Email: ").concat(email, "\n                Password: ").concat(password);
    console.log("New Account created with the following data \\n ".concat(newAccount));
};
createNewAccount('Sandra', 'Donovan', 'sdonovan', 'sdonovan@test.qa', 'qapass');
