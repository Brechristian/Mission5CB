// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
// JavaScript function to calculate the cost
function calculateCost() {
    // Get values from input fields
    var hours = parseFloat($('#hours').val());
    var rate = parseFloat($('#rate').val());

    // Check if the input is valid
    if (!isNaN(hours) && !isNaN(rate)) {
        // Check if hours is a positive number
        if (hours >= 0) {
            // Calculate the cost and display it
            var cost = hours * rate;
            $('#cost').val(cost.toFixed(2)); // Display the cost with two decimal places
        } else {
            alert('Please enter a positive number for hours.');
        }
    } else {
        alert('Please enter valid numeric values for hours.');
    }
    return false;
}