// To find scripts in the data set that are still in use, the following function might be helpful.

// It filters out the elements in an array that don't pass a test.

function filter(array,test) {
  let passed = []; // Empty array
  for (let element of array) {
    if (test(element)) {
      passed.push(element);
    }
  }
  return passed;
}

console.log(filter(SCRIPTS, script => script.living));

/* The function uses the argument named test, a function value, to fill a "gap" in the computation

Rather than deleting the elements from the existing array, builds up a new array with only the elements that pass the test.

This function is pure, it does not modify the array it is given.

Life FOREACH, filter is a standard array method. The example defined the function only to show what it does internally*/

console.log(SCRIPTS.filter(s => s.direction == "ttb"));
