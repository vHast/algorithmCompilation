//Declaration of the objects that we are going to apply the Mixin

let bird = {
  name: "Donald",
  numLegs: 2
};

let boat = {
  name: "Warrior",
  type: "race-boat"
};

// We create a mixin that defines a method named glide
let glideMixin = function(obj) {
  obj.glide = function() {
    console.log('Woosh');
  }
}
//We use glideMixin to the objects that we are interested to apply the glide method
glideMixin(bird);
glideMixin(boat);

//After this we are now able to apply the method, this is useful for unrelated objects that we are not interested in use a inherited method
bird.glide;
boat.glide;