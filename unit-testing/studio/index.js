
let launchcode = {
  organization: "nonprofit",
  executiveDirector: "Jeff",
  percentageCoolEmployees: 100,
  programsOffered: ["Web Developement", "Data Analysis", "Liftoff"],
  launchcode: function (num) {return ""}
}
if (num % 2 === 0){
    return "launch!";
  }  else if (num % 3 === 0){
    return "code!";
} else if ( num % 5 === 0) {
    return "Rocks!";

} else if (num %2,3 === 0){
    return "LaunchCode!"
}else if(num % 3,5 === 0){
    return "Code Rocks!"
}else if (num 2,3,5 === 0) {
    return "LaunchCode Rocks"
} else if (num % 2,5 === 0) {
    return "launch rocks!"
}else if (num % 2,3,5) {
    return "Rutabaga! That doesn't work."
}
module.exports = launchcode;

