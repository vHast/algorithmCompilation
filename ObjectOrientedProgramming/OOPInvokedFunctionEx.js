//A common pattern in Javascript is to execute a function as soon as it is declared

(function() {
  console.log("Hello world");
})();

//This is an anonymous function expression that executes right away, note that the function has no name and is not stored in a variable

// Normal function
function makeHouse() {
  console.log("A house has been built");
};
makeHouse();

// IIFE Immediatly Invoked Function Expression
(function() {
  console.log("A house has been built");
})();