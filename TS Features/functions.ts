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