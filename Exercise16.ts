
/*
Question 16 :
More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

• Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
*/
import  Guest  from "./Exercise14"
Guest[6] = "Tallat"
Guest[7] = "Masooma"
Guest[8] = 'Bushra'
Guest.push("Sarwat");
for (let i = 0; i <= 9; i++){
    console.log(`Hello ${Guest[i]}, you are invited to Dinner by Syed Yazdan Haider `)
}

console.log("Hey, After earching alot I found a bigger dinner table")