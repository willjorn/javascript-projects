// launchcode.test.js code:
const launchcode = require('../index.js');

describe("Testing launchcode", function(){

  // Write your unit tests here!
  test("should have the property type called organization ",
  function() {
  
    expect(launchcode.organization).tobe("nonprofit");
  }
  test("should have the property type called percentageCoolEmployees ",function() {
  
    expect(launchcode.executiceDirector).tobe("Jeff");
});
test("should have the property type called percentageCoolEmployees ",
function() {

  expect(launchcode.percentageCoolEmployees).tobe(100)
}
test("should have the property type called programsOffered ",
function() {

  expect(launchcode.programsOffered[0]).tobe("Web Development");
  expect(launchcode.programsOffered[1]).tobe("Data Analysis");
  expect(launchcode.programsOffered[2]).tobe("Liftoff");
  expect(launchcode.programsOffered).tobe("3");


});
test("numbers should ONLY be divisible by 2 return 'launch!'",
  function() {
   expect(launchcode.launchcode(2)).tobe("Launch");
  }
  test("numbers should ONLY be divisible by 3 return 'Code!'",
  function() {
   expect(launchcode.launchcode(3)).tobe("Code!");
  }
  test("numbers should ONLY be divisible by 5 return 'Rocks!'",
  function() {
   expect(launchcode.launchcode(5)).tobe("Rocks!");
  }
  test("numbers should ONLY be divisible by 2 and 3 return 'LaunchCode!'",
  function() {
   expect(launchcode.launchcode(2,3)).tobe("LaunchCode!");
  }
  test("numbers should ONLY be divisible by 2 return 'launch!'",
  function() {
   expect(launchcode.launchcode(2)).tobe("Launch");
  }