/*
Question 12 :
Greetings: Start with the array you used in Exercise 11,
but instead of just printing each person’s name, print a message to them.
The text of each message should be the same, 
but each message should be personalized with the person’s name.
*/
import { Names } from "./Exercise11"
for(let i =0; i<=4; i++){
    console.log(`Hello${Names[i]},how are you?`)
}