/* Exploring Functions in JavaScript

Objective: The aim of this assignment is to deepen students' understanding of functions in JavaScript 
and their various applications in solving programming problems.

*/

// Task 1: Deposit Function
// Create a function to handle deposits into a bank account. 
// Essentially, adding money to your bank account.
let balance = 2000;
function deposit(depositAmount) { 
    if (depositAmount>0) {
        balance += depositAmount;
    }
}

// Task 2: Withdrawal Function 
// Implement a function to handle withdrawals from a bank account. 
// Essentially, taking money out of your bank account.
function withdrawal(withdrawalAmount) { 
    if (withdrawalAmount>0) {
        balance -= withdrawalAmount;
    }
}

// Task 3: Check Balance Function 
// Develop a function to check the current balance of the account. 
// Lastly, show how much money you have left.
function checkBalance() { 
    console.log("Balance: $"+balance);
}

// Let's do some test cases. 
// Deposit is a positive float
deposit(300.50);
// Deposit is negative
deposit(-300);
// Withdrawal is positive
withdrawal(50);
// Withdrawal is negative
withdrawal(-50);
// Balance should be $2250.5
checkBalance();