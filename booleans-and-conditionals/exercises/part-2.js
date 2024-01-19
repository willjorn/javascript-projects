let engineIndicatorLight = "red blinking";
let spaceSuitsOn = true;
let shuttleCabinReady = true;
let crewStatus = spaceSuitsOn && shuttleCabinReady;
let computerStatusCode = 200;
let shuttleSpeed = 15000;

// 3) Write conditional expressions to satisfy the following safety rules:
if (engineIndicatorLight === "green") {
    console.log("engines have started");
} else if  (engineIndicatorLight === "green blinking") {
    console.log("engines are preparing to start");
} else {
    console.log("engines are off");
}
// a) If crewStatus is true, print "Crew Ready" else print "Crew Not Ready".
if (crewStatus === true) {
    console.log("Crew Ready");
} else {
    console.log (" Crew NOt Ready");
}

// b) If computerStatusCode is 200, print "Please stand by. Computer is rebooting." Else if computerStatusCode is 400, print "Success! Computer online." Else print "ALERT: Computer offline!"
if (computerStatusCode === 200) {
    console.log("Please Stand by. Computer is rebooting.")
} else if (computerStatusCode === 400) {
    console.log("Success! Computer online.")
} else {
    console.log ("Alert: Computer offline!")
}
// c) If shuttleSpeed is > 17,500, print "ALERT: Escape velocity reached!" Else if shuttleSpeed is < 8000, print "ALERT: Cannot maintain orbit!" Else print "Stable speed".
if (crewStatus && computerStatusCode === 200 && spaceSuitsOn) {
    console.log ("all syestms go");
} else {
    console.log("WARNING. Not ready");
}

// 4) PREDICT: Do the code blocks shown in the 'predict.txt' file produce the same result?

console.log(/* "Yes" or "No" */);
