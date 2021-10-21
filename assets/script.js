const yourName = "Jason D'Oyley"

let gb = 0      // Ginger bread
let cc = 0      // Chocolate Chip
let sugar = 0   // Sugar Sprinkle
let gbQty = document.getElementById('qty-gb');
let ccQty = document.getElementById('qty-cc');
let sugarQty = document.getElementById('qty-sugar');
let totalQty = document.getElementById('qty-total');

// Recalculate total on each quantity change
const total = () => gb + cc + sugar;

// Code to update name display
document.getElementById('credit').textContent = `Created by ${yourName}`;

// Add Quantity for Ginger Bread cookies
document.getElementById('add-gb').addEventListener('click', () => {
  gbQty.textContent = `${++gb}`;
  totalQty.textContent = `${total()}`;
});

// Minus Quantity for Ginger Bread cookies
document.getElementById('minus-gb').addEventListener('click', () => {
  // Check if quantity is equal to zero
  if (parseInt(gbQty.textContent) === 0) {
    gbQty.textContent = '0';
  } else {
    gbQty.textContent = `${--gb}`;
  }

  totalQty.textContent = `${total()}`;
});


// Add Quantity for Chocolate Chip cookies
document.getElementById('add-cc').addEventListener('click', () => {
  ccQty.textContent = `${++cc}`;
  totalQty.textContent = `${total()}`;
});

// Minus Quantity for Chocolate Chip cookies
document.getElementById('minus-cc').addEventListener('click', () => {
  // Check if quantity is equal to zero
  if (parseInt(ccQty.textContent) === 0) {
    ccQty.textContent = '0';
  } else {
    ccQty.textContent = `${--cc}`;
  }
  totalQty.textContent = `${total()}`;
});


// Add Quantity for Sugar Sprinkle cookies
document.getElementById('add-sugar').addEventListener('click', () => {
  sugarQty.textContent = `${++sugar}`;
  totalQty.textContent = `${total()}`;
});

// Minus Quantity for Sugar Sprinkle cookies
document.getElementById('minus-sugar').addEventListener('click', () => {
  // Check if quantity is equal to zero
  if (parseInt(sugarQty.textContent) === 0) {
    sugarQty.textContent = '0';
  } else {
    sugarQty.textContent = `${--sugar}`;
  }
  totalQty.textContent = `${total()}`;
});

