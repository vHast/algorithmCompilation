// Animal is the supertype (or parent) 

function Animal() {}
Animal.prototype.eat = function() {
  console.log("nom nom nom");
};

//Creation of Dog
function Dog() {}
//We set the prototype to Animal, in order to inherit the keys and properties from Animal
Dog.prototype = Object.create(Animal.prototype);
// Constructor gets changed when we inherit from the supertype (or parent), we have to set it manually
Dog.prototype.constructor = Dog;
Dog.prototype.bark = function () {
  console.log('Woof!');
}

// Creation of a Dog instance, it has both .bark() and .eat()

let beagle = new Dog();