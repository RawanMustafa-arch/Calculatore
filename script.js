// Function to calculate miles per gallon (MPG)
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("calculateBtn").addEventListener("click", function() {
        let miles = parseFloat(document.getElementById("miles").value);
        let gallons = parseFloat(document.getElementById("gallons").value);
        let resultElement = document.getElementById("result");

        // Ensure values are valid numbers
        if (isNaN(miles) || isNaN(gallons) || gallons === 0) {
            resultElement.textContent = "Please enter valid numbers and make sure gallons is not zero.";
            resultElement.style.color = "red";
        } else {
            let mpg = miles / gallons; // Corrected formula
            resultElement.textContent = `Your fuel efficiency is: ${mpg.toFixed(2)} MPG`;
            resultElement.style.color = "green";
        }
    });
});