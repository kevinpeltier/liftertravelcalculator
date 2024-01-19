


// Standard Angled Lifter

function Calculate() {
    let stdLifterAngle = document.getElementById("lifterAngle").value;
    let ejectorStroke = document.getElementById("ejectorStroke").value;
    let lifterTravel = ejectorStroke * ((stdLifterAngle * Math.PI) / 180);

    document.getElementById("results").innerHTML = 'Travel is: ' + lifterTravel.toFixed(3) +'"';
}

// function Calculate() {
//     let stdLifterAngle = document.getElementById("lifterAngle").value;
//     let ejectorStroke = document.getElementById("ejectorStroke").value;
//     let lifterTravel = ejectorStroke * ((stdLifterAngle * Math.PI) / 180);

//     document.getElementById("results").innerHTML = 'Travel is: ' + lifterTravel.toFixed(3) +'"';
// }

// function Calculate() {
//     let stdLifterAngle = document.getElementById("lifterAngle").value;
//     let ejectorStroke = document.getElementById("ejectorStroke").value;
//     let lifterTravel = ejectorStroke * ((stdLifterAngle * Math.PI) / 180);

//     document.getElementById("decel-results").innerHTML = 'Travel is: ' + lifterTravel.toFixed(3) +'"';
// }



























