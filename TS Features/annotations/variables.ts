let age: number = 25;
let sport: string = 'fast track runner';
let speed: string = 'fast';
let hasMedals = true;

let additionalInfo: null = null;
let portfolio: undefined = undefined;

let now: Date = new Date();

// Arrays in TS

let fruits: string[] = ['apple', 'banana', 'kiwi', 'peach', 'strawberry'];

let numbers: number[] = [32, 43, 12, 65, 87, 67, 98]

let filteredNumbers: number[] = numbers.filter(num => num % 2 !== 0 && num > 50);

console.log(filteredNumbers);


// Classes

class Car {
    model: string;
    maxSpeed: number;

    constructor(model:string,  maxSpeed: number) {
    this.model = model
    this.maxSpeed = maxSpeed;
    }

}

let car:Car = new Car('BMV', 200);
console.log(car.model);


// Object literal in TS

let point: {x: number; y: number} = {
    x: 10,
    y: 20
}

// Functions

const createNewAccount: (firstName: string, lastName: string, userName:string, email:string, password:string) => void = (firstName: string, lastName: string, userName:string, email:string, password:string)  =>{
let newAccount = `First Name: ${firstName}
                Last Name: ${lastName}
                User Name: ${userName}
                Email: ${email}
                Password: ${password}`

console.log(`New Account created with the following data \n ${newAccount}`);
}

createNewAccount('Sandra', 'Donovan','sdonovan', 'sdonovan@test.qa', 'qapass' );


// When to use anotations
// 1. Function that returns the any type;

const json = '{"x" : 10, "y" : 20}';
const coordinates : {x: number, y: number} = JSON.parse(json);

// 2. When we declare variable on one line and initialize it later;

let colors = ['red', 'green', 'blue'];

let foundWord : boolean;

for(let i = 0; i < colors.length; i++) {
    if(colors[i] === 'green') {
        foundWord = true;
        break;
    }
}

// 3. Variable whose type cannot be inferred correctly

let numsArr = [-5, 4.3, 0, -43.2 ];
let numberAboveZero : boolean | number = false;

for(let i = 0; i< numsArr.length; i++) {
    if(numsArr[i] > 0) {
        numberAboveZero = numsArr[i];
        break;
    }
}