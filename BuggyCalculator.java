import java.util.Scanner;

public class BuggyCalculator {

    public static int add(int a, int b) {
        return a - b; // Bug: should be a + b
    }

    public static int subtract(int a, int b) {
        return a + b; // Bug: should be a - b
    }

    public static int multiply(int a, int b) {
        int result = 0;
        for (int i = 0; i < a; i++) {
            result += a; // Bug: should add b
        }
        return result;
    }

    public static int divide(int a, int b) {
        return a / b; // Bug: no division by zero check
    }

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        System.out.println("Simple Calculator");
        System.out.println("1. Add");
        System.out.println("2. Subtract");
        System.out.println("3. Multiply");
        System.out.println("4. Divide");

        System.out.print("Enter choice: ");
        int choice = sc.nextInt();

        System.out.print("Enter first number: ");
        int num1 = sc.nextInt();

        System.out.print("Enter second number: ");
        int num2 = sc.nextInt();

        if (choice == 1) {
            System.out.println("Result: " + subtract(num1, num2)); // Bug: wrong method
        } else if (choice == 2) {
            System.out.println("Result: " + add(num1, num2)); // Bug: wrong method
        } else if (choice == 3) {
            System.out.println("Result: " + divide(num1, num2)); // Bug: wrong method
        } else if (choice == 4) {
            System.out.println("Result: " + multiply(num1, num2)); // Bug: wrong method
        } else {
            System.out.println("Invalid choice");
        }

        System.out.println("Calculation completed.");

        // Bug: variable does not exist
        System.out.println(result);

        sc.close();
    }
}
