// If bird has a public name, it can be changed outside of bird's prototype definition
let bird = {
  stout : 2
};
bird.name = 'Helen';

//Therefore, any part of your code can easily change the name of bird to any value, the simplest way to make this public property private is the next:

function Bird() {

  //We declare the private variable
  let hatchedEgg = 10;
  //We declare a new function that will return the property
  this.getHatchedEggCount = function() {
    return hatchedEgg;
  };
}

let duck = new Bird;
//We call the function to get the property
duck.getHatchedEggCount; 