/* Exploring Conditional Statements and Loops

Objective: The aim of this assignment is to familiarize students with conditional statements 
and loops in JavaScript and enhance their problem-solving skills using these control structures.

Task 1: Conditional Statement 
Implement a conditional statement to check if a user is logged in. 
This doesn't need to be anything complex, a simple let loggedIn = true will do.

Task 2: Loop 

If they are logged in, loop over the 'cart' array below and log the list of available products to the user. 
If they are not logged in, tell the user they will need to log in before they can view their cart.
*/ 

let cart = ['Shirts', 'Shoes', 'Bread', 'Cell Phone', 'Candy Corn', 'The Pragmatic Programmer: Your Journey To Mastery, 20th Anniversary Edition (2nd Edition)', 'Tomato'];
let loggedIn = true; 
if (loggedIn) {
    console.log("Cart: ")
    for (let i=0; i<cart.length; i++) {
        console.log(cart[i]);
    }
} else { 
    console.log("You must be logged in to view the cart.")
}

