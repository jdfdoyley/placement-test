// First, tell us your name
const yourName = "Jason D'Oyley" // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gb = 0      // Ginger bread
let cc = 0      // Chocolate Chip
let sugar = 0   // Sugar Sprinkle

// Code to update name display
document.getElementById('credit').textContent = `Created by ${yourName}`;

let gbQty = document.getElementById('qty-gb');

// Event listener for Ginger Bread cookies

// Add Quantity
document.getElementById('add-gb').addEventListener('click', function () {
  // Write the code to be run when the "+" button for "Ginger Bread" is clicked
  gbQty.innerText = ++gb;
});


// TODO: Hook up event listeners for the rest of the buttons