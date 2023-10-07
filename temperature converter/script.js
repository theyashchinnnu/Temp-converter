function convertTemperature() {
    // Get input value
    var celsius = parseFloat(document.getElementById("celsius").value);

    // Check if the input is a valid number
    if (!isNaN(celsius)) {
        // Convert Celsius to Fahrenheit
        var fahrenheit = (celsius * 9/5) + 32;

        // Display the result
        document.getElementById("result").innerHTML = "Result: " + fahrenheit.toFixed(2) + " °F";
    } else {
        // Display an error message for invalid input
        document.getElementById("result").innerHTML = "Please enter a valid temperature.";
    }
}