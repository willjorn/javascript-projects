let num = 1001;

//Returns 'undefined'.
console.log(num.length);

//Use type conversion to print the length (number of digits) of an integer.
 let numStr = num.toString();
 let length = numStr.length;
 console.log(`The length of the integer ${num} is: ${length} digits`);
//console.log(num.toString().length);
//Follow up: Print the number of digits in a DECIMAL value (e.g. num = 123.45 has 5 digits but a length of 6).
const decimalNum = 123.45
const decimalNumStr = decimalNum.toString();
console.log("Number of digits in decimal:" .length)
//Experiment! What if num could be EITHER an integer or a decimal?  Add an if/else statement so your code can handle both cases.
if  (Number.isInteger(num)){
    console.log("Number is an integer. Number of digits:" .length);

}else if (Number.isFinite(num)){
    console.log("Number is a decimal. Number of digits:" .length);

} else {
    console.log("Invalid number");
}
