import * as readline from "readline";

function add(a: number, b: number): number {
    return a + b;
}

function subtract(a: number, b: number): number {
    return a - b;
}

function multiply(a: number, b: number): number {
    return a * b;
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

    if (!["1", "2", "3", "4"].includes(choice)) {
        console.error("Unknown operation. Please enter a number between 1 and 4.");
        rl.close();
        return;
    }

    rl.question("First number: ", (n1) => {

        const num1 = parseInt(n1);

        if (isNaN(num1)) {
            console.error("Invalid input. Please enter a valid number.");
            rl.close();
            return;
        }

        rl.question("Second number: ", (n2) => {

            const num2 = parseInt(n2);

            if (isNaN(num2)) {
                console.error("Invalid input. Please enter a valid number.");
                rl.close();
                return;
            }

            let result: number;

            try {
                switch (choice) {
                    case "1":
                        result = add(num1, num2);
                        break;
                    case "2":
                        result = subtract(num1, num2);
                        break;
                    case "3":
                        result = multiply(num1, num2);
                        break;
                    case "4":
                        result = divide(num1, num2);
                        break;
                    default:
                        throw new Error("Unknown operation");
                }

                console.log("Result:", result);
            } catch (error) {
                if (error instanceof Error) {
                    console.error(`Error: ${error.message}`);
                } else {
                    console.error("An unknown error occurred");
                }
            } finally {
                rl.close();
            }

        });

    });

});