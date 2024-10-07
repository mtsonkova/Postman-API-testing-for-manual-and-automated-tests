const add =(firstNum: number, secondNum: number):number => {
    return firstNum + secondNum;
}

let result = add(2, 5);

const logger = (message: string) : void => {
    console.log(message);
}

const throwError = (message: string): never => {
    throw new Error(message);
}

function divide(a: number, b: number): number {
    return a / b;
}

// anonymous functions
const multiply = function(a: number, b:number): number {
 return a * b;
}

const subtract = (a:number, b:number): number => {
    return a - b;
}

// object destructuring with annotations

const forecast = {
    date: new Date(),
    wheather: 'sunny'
}

const logWeather = ({date, weather} {date: Date, weather: string}):void => {
    console.log(date),
    console.log(weather)
}
