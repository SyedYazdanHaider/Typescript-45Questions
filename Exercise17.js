"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
Question 17 :
Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

• Print a message to each of the two people still on your list, letting them know they’re still invited.

• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
*/
const {Guest} = require('./Exercise14')
var i = 7;
do {
   Guest.slice(i, 1);
    console.log("I am really sorry ".concat(Guest[i], ", I cannot invite you to the dinner as the Bigger Table is unavailable"));
    i--;
} while (i >= 2);
for (var c = 0; c <= 1; c++) {
    console.log("".concat(Guest[i], " You are invited to the dinner. "));
}
Guest.slice(1, 1);
Guest.slice(0, 1);
console.log(Guest);
