/* The map method iterates over each item in an array and returns a new array containing the results of calling the callback function (function that is passed into another function as an argument which is then invoked inside the outer function) */

// Callback example

function greeting(name) {
  alert('Hello' + name); // This function takes a value from a different function
}

function processUserInput(callback) {
  var name = prompt('Please enter your name'); // We'll get the value of name once the prompt is fulfilled
  callback(name); 
}

processUserInput(greeting);

// We give a function as an argument

// callback is then converted into greeting, which already haves the name property from processUserInput

/* When the callback is used it is passed three arguments.

  - The first argument is the CURRENT element being processed
  - The second argument is the INDEX of that element
  - The third argument is the array which upon MAP method was called

  */

const users = [ // Array of three objects with two properties in it
  {identity: 'John', age: 34},
  {identity: 'Amy', age: 20},
  {identity: 'camperCat', age: 10}
];

const names = users.map(user => user.identity);

console.log(names) // ['John', 'Amy' 'camperCat]

const extendedNames = users.map(user => ({ //Pay attention to the parentheses, since we want to return an object with two properties we need ({})
  user: user.identity,  // We ask for the properties we are interested in and we can define a new name for them, separate them with (,)
  age: user.age 
}));


