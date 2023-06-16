function speedDetector() {
    // prompt user to enter car's speed
    let speed = prompt("Input your car's speed:");
    // set speed limit
    let speedLimit = 70;

    // check if speed limit is greater than 70
    if (speed < 70) {
        alert("Ok")
    } else {
        // calculate overspeeding 
        let overSpeeding = speed - speedLimit;
        // calculate the demerits
        let demerits = Math.round(overSpeeding / 5);
        alert(`Points: ${demerits} `);

        if (demerits >= 12) {
            alert("License suspended");
        }
    }
}
// execute the speedDetector function
speedDetector();