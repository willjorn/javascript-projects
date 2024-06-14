// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load", function() {
    // Event listener for Take off button
    document.getElementById("takeoff").addEventListener("click", function() {
        // Confirming readiness for takeoff
        if (window.confirm("Confirm that the shuttle is ready for takeoff.")) {
            // Updating flight status
            document.getElementById("flightStatus").innerHTML = "Shuttle in flight";
            // Changing background color
            document.getElementById("shuttleBackground").style.backgroundColor = "blue";
            // Increasing shuttle height
            let shuttleHeight = document.getElementById("spaceShuttleHeight");
            shuttleHeight.innerHTML = parseInt(shuttleHeight.innerHTML) + 10000;
        }
    });

    // Event listener for Land button
    document.getElementById("landing").addEventListener("click", function() {
        // Alerting about landing
        window.alert("The shuttle is landing. Landing gear engaged.");
        // Updating flight status
        document.getElementById("flightStatus").innerHTML = "The shuttle has landed.";
        // Changing background color
        document.getElementById("shuttleBackground").style.backgroundColor = "green";
        // Resetting shuttle height
        document.getElementById("spaceShuttleHeight").innerHTML = 0;
    });

    // Event listener for Abort Mission button
    document.getElementById("missionAbort").addEventListener("click", function() {
        // Confirming mission abort
        if (window.confirm("Confirm that you want to abort the mission.")) {
            // Updating flight status
            document.getElementById("flightStatus").innerHTML = "Mission aborted.";
            // Changing background color
            document.getElementById("shuttleBackground").style.backgroundColor = "green";
            // Resetting shuttle height
            document.getElementById("spaceShuttleHeight").innerHTML = 0;
        }
    });

    // Event listeners for directional buttons
    document.getElementById("up").addEventListener("click", function() {
        moveRocket(0, -10);
        updateShuttleHeight(10000);
    });

    document.getElementById("down").addEventListener("click", function() {
        moveRocket(0, 10);
        updateShuttleHeight(-10000);
    });

    document.getElementById("right").addEventListener("click", function() {
        moveRocket(10, 0);
    });

    document.getElementById("left").addEventListener("click", function() {
        moveRocket(-10, 0);
    });

    // Function to move rocket
    function moveRocket(x, y) {
        let rocket = document.getElementById("rocket");
        let rocketStyle = window.getComputedStyle(rocket);
        let rocketX = parseInt(rocketStyle.left);
        let rocketY = parseInt(rocketStyle.bottom);
        rocket.style.left = (rocketX + x) + "px";
        rocket.style.bottom = (rocketY + y) + "px";
    }

    // Function to update shuttle height
    function updateShuttleHeight(change) {
        let shuttleHeight = document.getElementById("spaceShuttleHeight");
        shuttleHeight.innerHTML = parseInt(shuttleHeight.innerHTML) + change;
    }
});
