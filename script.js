class Vehicle {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  honk() {
    console.log("Beep");
  }
  toString() {
    console.log(
      `The vehicle is a ${this.make} ${this.model} from ${this.year}`
    );
  }
}

const myFirstVehicle = new Vehicle();
myFirstVehicle.make = "Chevrolet";
myFirstVehicle.model = "Cruze";
myFirstVehicle.year = 2016;

class Car extends Vehicle {
  constructor(make, model, year) {
    super(make, model, year);
    this.numWheels = 4;
  }
}

let myFirstCar = new Car();
myFirstCar.make = "Chevrolet";
myFirstCar.model = "Cruze";
myFirstCar.year = 2016;

class Motorcycle extends Vehicle {
  constructor(make, model, year) {
    super(make, model, year);
    this.numWheels = 2;
  }
  revEngine() {
    console.log("VROOM!");
  }
}

let myFirstMotorcycle = new Motorcycle();
myFirstMotorcycle.make = "Harley Davidson";
myFirstMotorcycle.model = "Fat Boy";
myFirstMotorcycle.year = "2023";

class Garage {
  constructor() {
    this.vehicles = [];
    this.capacity = 2;
  }
  add(newVehicle) {
    if (!(newVehicle instanceof Vehicle)) {
      console.log("Only vehicles are allowed in here!");
    } else if (this.vehicles.length > 1) {
      console.log("Sorry, we're full");
    } else {
      this.vehicles.push(newVehicle);
      console.log("Vehicle Added!");
    }
  }
}

let garage = new Garage();
