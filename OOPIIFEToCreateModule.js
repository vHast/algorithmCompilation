// An IIFE is often used to group related functionality into a single object as a module, for example, here we define two mixins

let isCuteMixin = function(obj) {
  obj.isCute = function() {
    return true;
  };
};
let singMixin = function(obj) {
  obj.sing = function() {
    console.log("Singing to an awesome tune");
  };
};

// We can group these into a module (funModule)
let funModule = (function() {
  return {
    isCuteMixin : function(obj) {
      obj.isCute = function() {
        return true;
      };
    },
    singMixin : function(obj) {
      obj.sing = function() {
        console.log("Singing to an awesome tune");
      };
    }
  }
})();

// Note that you have an IIFE that returns an object motionModule, this returned object contains the mixin behaviors as properties of the object, the advantage of the module pattern is that all the behaviors can be packaged into a single object