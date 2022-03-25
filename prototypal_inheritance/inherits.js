// function Surrogate () {};
// Surrogate.prototype = SuperClass.prototype; 
// Subclass.prototype = new Surrogate();
// Subclass.prototype.constructor = Subclass;

// function Surrogate() { };
// Surrogate.prototype = parent.prototype;
// child.prototype = new Surrogate();
// child.prototype.constructor = child;

Function.prototype.inherit = function(parent) {
  var Surrogate = function(){};
  Surrogate.prototype = parent.prototype;
  this.prototype = new Surrogate();
  this.prototype.constructor = this;
};

function MovingObject() {}; 
MovingObject.prototype.sayHello = function() {
  console.log("Heeeeeeellllooooooooo!!!"); 
}; 

function Ship() {}; 
Ship.inherit(MovingObject);
Ship.prototype.sayShip = function () {
    console.log(`SHIP!`); 
};

function Asteroid() {};
Asteroid.inherit(MovingObject);
Asteroid.prototype.sayAsteroid = function () {
  console.log(`ASTEROID!!`);
};

const myAsteroid = new Asteroid();
const myShip = new Ship();
const myMovingObject = new MovingObject();

myAsteroid.sayAsteroid();
myAsteroid.sayHello();
myShip.sayShip();
myShip.sayHello();
myMovingObject.sayHello();

// myAsteroid.sayShip();
// myMovingObject.sayAsteroid();

