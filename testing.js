class Car {
    constructor(model, milesPerGallon) {
      this.tank = 0;
      this.odometer = 0;
      this.model = model;
      this.milesPerGallon = milesPerGallon;
    }

    drive(distance) {
      if (this.tank - (distance / this.milesPerGallon) > 0) {
        return [this.odometer += distance, this.tank = this.tank - (distance / this.milesPerGallon),];
      } else if (this.tank - (distance / this.milesPerGallon) <=0) {
        this.odometer += (distance - (distance - this.tank * this.milesPerGallon));
        this.tank = 0;
        return [`I ran out of fuel at ${this.odometer} miles!`];
      }
    }

    fill(gallons) {
      return this.tank += gallons;
    }
  }

  const ford = new Car('ford', 22);
  console.log(ford);
  ford.fill(20);
  console.log(ford);
  console.log(ford.drive(550));
  console.log(ford);
