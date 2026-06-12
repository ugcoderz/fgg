import * as readline from "readline";

function add(a: number, b: number): number {
    return a + b;
}

function subtract(a: number, b: number): number {
    return a - b;
}

function multiply(a: number, b: number): number {
    let result = 0;

    for (let i = 0; i < a; i++) {
        result += b;
    }

    return result;
}

function divide(a: number, b: number): number {
    if (b === 0) {
        throw new Error("Cannot divide by zero");
    }

    return a / b;
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

console.log("=== Calculator ===");
console.log("1. Add");
console.log("2. Subtract");
console.log("3. Multiply");
console.log("4. Divide");

rl.question("Choice: ", (choice) => {

    rl.question("First number: ", (n1) => {

        rl.question("Second number: ", (n2) => {

            const num1: number = parseInt(n1);
            const num2: number = parseInt(n2);

            let result: number;

            if (choice === "1") {
                result = add(num1, num2);
            } else if (choice === "2") {
                result = subtract(num1, num2);
            } else if (choice === "3") {
                result = multiply(num1, num2);
            } else if (choice === "4") {
                result = divide(num1, num2);
            } else {
                console.log("Unknown operation");
                return;
            }

            console.log("Result:", result);

            rl.close();
        });

    });

});

function factorial(n: number): number {
    if (n === 0 || n === 1) {
        return 1;
    }

    return n * factorial(n - 1);
}