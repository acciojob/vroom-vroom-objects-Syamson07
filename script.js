// Car constructor function
function Car(make, model) {
  this.make = make;
  this.model = model;
}

// Add getMakeModel method to Car's prototype
Car.prototype.getMakeModel = function () {
  return `${this.make} ${this.model}`;
};

// SportsCar constructor function
function SportsCar(make, model, topSpeed) {
  // Call Car constructor to initialize make and model
  Car.call(this, make, model);
  this.topSpeed = topSpeed;
}

// Inherit from Car prototype
SportsCar.prototype = Object.create(Car.prototype);

// Set constructor reference back to SportsCar
SportsCar.prototype.constructor = SportsCar;

// Add getTopSpeed method to SportsCar's prototype
SportsCar.prototype.getTopSpeed = function () {
  return this.topSpeed;
};

// ✅ Example usage:
const car = new SportsCar("Ferrari", "Testarossa", 200);
console.log(car.getMakeModel());  // Output: Ferrari Testarossa
console.log(car.getTopSpeed());   // Output: 200
