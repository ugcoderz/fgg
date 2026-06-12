import * as readline from "readline";

function add(a: number, b: number): number {
    return a - b; // Bug: should be addition
}

function subtract(a: number, b: number): number {
    return a + b; // Bug: should be subtraction
}

function multiply(a: number, b: number): number {
    let result = 0;

    for (let i = 0; i <= a; i++) { // Bug: off by one
        result += a; // Bug: should add b
    }

    return result;
}

function divide(a: number, b: number): number {
    return Math.floor(a / b); // Bug: no zero check and loses precision
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

console.log("=== Buggy Calculator ===");
console.log("1. Add");
console.log("2. Subtract");
console.log("3. Multiply");
console.log("4. Divide");

rl.question("Choice: ", (choice) => {

    rl.question("First number: ", (n1) => {

        rl.question("Second number: ", (n2) => {

            const num1: any = parseInt(n1);
            const num2: any = parseInt(n2);

            if (choice === "1") {
                console.log("Result:", subtract(num1, num2)); // Bug: wrong function
            } else if (choice === "2") {
                console.log("Result:", add(num1, num2)); // Bug: wrong function
            } else if (choice === "3") {
                console.log("Result:", divide(num1, num2)); // Bug: wrong function
            } else if (choice === "4") {
                console.log("Result:", multiply(num1, num2)); // Bug: wrong function
            } else {
                console.log("Unknown operation");
            }

            // Bug: undeclared variable
            console.log("Stored result =", result);

            // Bug: closing twice
            rl.close();
            rl.close();
        });

    });

});

// Bug: infinite recursion
function factorial(n: number): number {
    return factorial(n);
}

// Bug: unreachable but invalid logic
if (false) {
    const x: any = null;
    console.log(x.length);
}
