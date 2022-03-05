// Bird is going to be our supertype (or parent this time)

function Bird() {}
// Take note of .fly() function, we are going to replace its contents later
Bird.prototype.fly = function() {
  return "I am flying!";
};
// We create the Penguin prototype
function Penguin() {}
// We set the prototype to inherit its keys and properties from Bird;
Penguin.prototype = Object.create(Bird.prototype);
// We set the constructor manually to Penguin, since its inherited from Bird
Penguin.prototype.constructor = Penguin;
// We modify the .fly() method, its as easy as using the same method name as the one to override.
Penguin.prototype.fly = function () {
  return "Alas, this is a flightless bird.";
}
// Create an instance of Penguin named penguin
let penguin = new Penguin();
console.log(penguin.fly());

