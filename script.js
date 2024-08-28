function calculateArea() {
    // Get the radius from the user using the prompt() function
    let radius = prompt("Enter the radius of the circle:");

    // Convert the radius to a number
    radius = parseFloat(radius);

    // Check if the radius is a valid positive number
    if (isNaN(radius) || radius <= 0) {
        alert("Please enter a valid positive number for the radius.");
        return;
    }

    // Calculate the area of the circle
    const area = Math.PI * Math.pow(radius, 2);

    // Round off the result to two decimal places
    const roundedArea = area.toFixed(2);

    // Display the result to the user
    alert(`The area of the circle with radius ${radius} is ${roundedArea}`);
}

// Call the function to execute the logic
calculateArea();
