"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
Question 16 :
More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

• Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
*/
var Exercise14_1 = require("./Exercise14");
Exercise14_1.Guest[6] = "Tallat";
Exercise14_1.Guest[7] = "Masooma";
Exercise14_1.Guest[8] = 'Bushra';
Exercise14_1.Guest.push("Sarwat");
for (var i = 0; i <= 9; i++) {
    console.log("Hello ".concat(Exercise14_1.Guest[i], ", you are invited to Dinner by Syed Yazdan Haider "));
}
console.log("Hey, After earching alot I found a bigger dinner table");
