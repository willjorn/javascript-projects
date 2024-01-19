//Part Three section one

let language = 'JavaScript';

//1. Use string concatenation and two slice() methods to print 'JS' from 'JavaScript'
const result= language.slice(0,1) + language.slice(4,5);
console.log(result);
//2. Without using slice(), use method chaining to accomplish the same thing.
result2 = language.charAt(0) + language.charAt(4);
console.log(result2);
//3. Use bracket notation and a template literal to print, "The abbreviation for 'JavaScript' is 'JS'."
console.log(`The abbreviation for \'JavaScript\` is ${language.charAt(0)}${language.charAt(4)}.`)
//4. Just for fun, try chaining 3 or more methods together, and then print the result.
result3 = language.replace("J","L").toUpperCase().substring(2);
console.log(result3);
//Part Three section Two

//1. Use the string methods you know to print 'Title Case' from the string 'title case'.

let notTitleCase = 'title case';
const titleCase = notTitleCase.replace(/\b\w/g, char => char.toUpperCase());
console.log(titleCase)