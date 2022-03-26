//Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total.

// Write a code that gives out the total amount for different days(d).


function rentalCarCost(d) {
  let totalCost = d * 40;
  let substract = 0;
  if (d < 3) {
    substract = 0;
  } else if (d < 7) {
    substract = 20;
  } else if (d >= 5) {
    substract = 50;
  }
  let product = totalCost - substract;
  return product;
}

// Refactored code

function rentalCarCost(d) {
  return d * 40 - (d >= 7 ? 50 : (d >= 3 ? 20 : 0));
}