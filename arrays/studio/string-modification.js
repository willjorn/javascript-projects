const input = require('readline-sync');
let str = "LaunchCode";

//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.
let removedChars = str.slice(0, 3);
console.log(removedChars);

newstr =str.slice(4, 10) + removedChars;

console.log(newstr);
//Use a template literal to print the original and modified string in a descriptive phrase.
 console.log(`Original string is ${str} and the modified string now is ${newstr}`);
//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.

const userInput = input.question('Enter number of letter you wish relocated ');

console.log(userInput);

if (userInput > 3) {
    console.log("You cannot relocate more than 3 characters");
} else {
    console.log(`${userInput} will be relocated`);
}
//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.
