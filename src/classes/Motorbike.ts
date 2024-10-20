// Importing Vehicle and Wheel classes
import Vehicle from './Vehicle.js';
import Wheel from './Wheel.js';

//Motorbike class should extend the Vehicle class
class Motorbike extends Vehicle {
  // Properties of Motorbike class
  vin: string;
  color: string;
  make: string;
  model: string;
  year: number;
  weight: number;
  topSpeed: number;
  wheels: Wheel[];

  //constructor that accepts the properties of the Motorbike class
  constructor(
    vin: string,
    color: string,
    make: string,
    model: string,
    year: number,
    weight: number,
    topSpeed: number,
    wheels: Wheel[]
  ) {

    
    //call the constructor of the parent class, Vehicle
    super();
    
    //The constructor should initialize the properties of the Motorbike class
    this.vin = vin;
    this.color = color;
    this.make = make;
    this.model = model;
    this.year = year;
    this.weight = weight;
    this.topSpeed = topSpeed;
    
    // check if the wheels array has 2 elements 
    if (wheels.length === 2) {
      this.wheels = wheels;
    } else {
      this.wheels = [new Wheel(), new Wheel()];
    }
  }

  // log the message "Motorbike [make] [model] is doing a wheelie!"
  wheelie(): void {
    console.log(`Motorbike ${this.make} ${this.model} is doing a wheelie!`);
    
  }

  // Override the printDetails method from the Vehicle class
  override printDetails(): void{
    super.printDetails();
    // log the details of the Motorbike
    console.log(`Vin: ${this.vin}`);
    console.log(`Make: ${this.make}`);
    console.log(`Model: ${this.model}`);
    console.log(`Year: ${this.year}`);
    console.log(`Weight: ${this.weight}`);
    console.log(`Top Speed: ${this.topSpeed}`);
    console.log(`Color: ${this.color}`);
    console.log(`wheels: ${this.wheels.length}`);


  }
}

// Export the Motorbike class as the default export
export default Motorbike;