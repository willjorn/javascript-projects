let engineIndicatorLight = "red blinking";
let spaceSuitsOn = true;
let shuttleCabinReady = true;
let crewStatus = spaceSuitsOn && shuttleCabinReady;
let computerStatusCode = 200;
let shuttleSpeed = 15000;
let commandOverride = true;

if (engineIndicatorLight === "green") {
    console.log("Engines have started");
} else if (engineIndicatorLight === "green blinking") {
    console.log("Engines are preparing to start");
} else {
    console.log("Engines are off");
}

if (crewStatus) {
    console.log("Crew Ready");
} else {
    console.log("Crew Not Ready");
}

if (computerStatusCode === 200) {
    console.log("Please stand by. Computer is rebooting");
} else if (computerStatusCode === 400) {
    console.log("Success! Computer online.");
} else {
    console.log("ALERT: Computer offline!");
}

if (shuttleSpeed > 17500) {
    console.log("ALERT: Escape velocity reached");
} else if (shuttleSpeed < 8000) {
    console.log("ALERT: Cannot maintain orbit!");
} else {
    console.log("Stable speed");
}

// Consolidate the system check into a single condition
if (crewStatus && computerStatusCode === 200 && spaceSuitsOn) {
    console.log("All systems go");
} else {
    console.log("WARNING. Not ready");
}

let fuelLevel = 5000;
let engineTemperature = 1200;

if (fuelLevel < 1000 || engineTemperature > 3500 || engineIndicatorLight === "red blinking") {
    console.log("ENGINE FAILURE IMMINENT!");
} else if (fuelLevel <= 5000 || engineTemperature > 2500) {
    console.log("Check fuel level. Engines running hot.");
} else if (fuelLevel > 20000 && engineTemperature <= 2500) {
    console.log("Full tank. Engines good.");
} else if (fuelLevel > 10000 && engineTemperature <= 2500) {
    console.log("Fuel level above 50%. Engines good.");
} else if (fuelLevel > 5000 && engineTemperature <= 2500) {
    console.log("Fuel level above 25%. Engines good.");
} else {
    console.log("Fuel and engine status pending...");
}

if (commandOverride) {
    console.log("Override command active. Launching shuttle regardless of status!");
} else if (fuelLevel > 20000 && engineTemperature <= 2500 && engineIndicatorLight === 'green') {
    console.log("Fuel tank is full and engine check is OK. Launching shuttle!");
} else {
    console.log("Launch aborted. Fuel or engine check failed.");
}

if( fuelLevel > 20000 && engineIndicatorLight !== "red blinking"|| commandOverride){
    console.log("Cleared to launch!")
    } else {
        console.log("Launch scrubbed!")
    }
