// First, tell us your name
const yourName = "Jason D'Oyley" // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gb = 0      // Ginger bread
let cc = 0      // Chocolate Chip
let sugar = 0   // Sugar Sprinkle

// Code to update name display
document.getElementById('credit').textContent = `Created by ${yourName}`;

let gbQty = document.getElementById('qty-gb');
let ccQty = document.getElementById('qty-cc');
let sugarQty = document.getElementById('qty-sugar');
let totalQty = document.getElementById('qty-total');

// Recalculate total on each quantity change
function total() {
  return gb + cc + sugar;
}

// Event listener for Ginger Bread cookies

// Add Quantity
document.getElementById('add-gb').addEventListener('click', function () {
  // Write the code to be run when the "+" button for "Ginger Bread" is clicked
  gbQty.innerText = ++gb;
  totalQty.innerText = total();
});

// Minus Quantity
document.getElementById('minus-gb').addEventListener('click', function () {
  // Write the code to be run when the "+" button for "Ginger Bread" is clicked

  // Check if quantity is equal to zero
  if (parseInt(gbQty.innerText) === 0) {
    gbQty.innerText = 0;
  } else {
    gbQty.innerText = --gb;
  }

  totalQty.innerText = total();
});

// Event listener for Chocolate Chip cookies

// Add Quantity
document.getElementById('add-cc').addEventListener('click', function () {
  // Write the code to be run when the "+" button for "Chocolate Chip" is clicked
  ccQty.innerText = ++cc;
  totalQty.innerText = total();
});

// Minus Quantity
document.getElementById('minus-cc').addEventListener('click', function () {
  // Write the code to be run when the "+" button for "Chocolate Chip" is clicked

  // Check if quantity is equal to zero
  if (parseInt(ccQty.innerText) === 0) {
    ccQty.innerText = 0;
  } else {
    ccQty.innerText = --cc;
  }
  totalQty.innerText = total();
});


// Event listener for Sugar Sprinkle cookies

// Add Quantity
document.getElementById('add-sugar').addEventListener('click', function () {
  sugarQty.innerText = ++sugar;
  totalQty.innerText = total();
});

// Minus Quantity
document.getElementById('minus-sugar').addEventListener('click', function () {
  // Check if quantity is equal to zero
  if (parseInt(sugarQty.innerText) === 0) {
    sugarQty.innerText = 0;
  } else {
    sugarQty.innerText = --sugar;
  }
  totalQty.innerText = total();
});

