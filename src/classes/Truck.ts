// import the Vehicle, Motorbike, Car, Wheel, and AbleToTow classes/interfaces
import Vehicle from './Vehicle.js';
import Motorbike from './Motorbike.js';
import Car from './Car.js';
import Wheel from './Wheel.js';
import AbleToTow from '../interfaces/AbleToTow.js';

// Truck class should extend the Vehicle class and should implement the AbleToTow interface
class Truck extends Vehicle implements AbleToTow{
  //Declare properties of the Truck class
  vin:string;
  color: string;
  make: string;
  model: string;
  year: number;
  weight: number;
  topSpeed: number;
  wheels: Wheel[];
  towingCapacity: number;

  constructor(
    vin: string,
    color: string,
    make: string,
    model: string,
    year: number,
    weight: number,
    topSpeed: number,
    towingCapacity: number,
    wheels: Wheel[]
  ) {
    super();
    this.vin = vin;
    this.color = color;
    this.make = make;
    this.model = model;
    this.year = year;
    this.weight = weight;
    this.topSpeed = topSpeed;
    this.towingCapacity = towingCapacity;

    if (wheels.length !== 4) {
      this.wheels = [new Wheel(), new Wheel(), new Wheel(), new Wheel()];
    } else {
      this.wheels = wheels;
    }
  }

  tow(vehicle: Truck | Motorbike | Car): void {
    const make = vehicle.make || 'Unknown make';
    const model = vehicle.model || 'Unknown model';

    if (vehicle.weight <= this.towingCapacity) {
      console.log(`Towing vehicle (${make} ${model}) with VIN ${vehicle.vin}`);
    } else {
      console.log(`This vehicle (${make} ${model}) is too heavy to tow.`);
    }
  }

  performActions() {
    console.log('Performing truck-specific actions.');
    // Add more actions as needed
  }

  override printDetails(): void {
    super.printDetails();
    console.log(`Vin: ${this.vin}`);
    console.log(`Make: ${this.make}`);
    console.log(`Model: ${this.model}`);
    console.log(`Year: ${this.year}`);
    console.log(`Weight: ${this.weight}`);
    console.log(`Top Speed: ${this.topSpeed}`);
    console.log(`Color: ${this.color}`);
    console.log(`Wheels: ${this.wheels.length}`);
    console.log(`Towing Capacity: ${this.towingCapacity}`);
  }
}

// Export the Truck class as the default export
export default Truck;

