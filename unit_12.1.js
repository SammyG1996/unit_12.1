//Part One

class Vehicle {
  constructor(make, model, year) {
    this.make = make, 
    this.model = model, 
    this.year = year
  }
  honk(){
    return 'Beep.'
  }

  toString(){
    return `The vehicle is a ${this.make} ${this.model} from ${this.year}.`
  }

}


//Part Two

class Car extends Vehicle {
  constructor(make, model, year){
    super(make, model, year),
    this.make = make,
    this.model = model, 
    this.year = year,
    this.numWheels = 4
  }
}

//Part Third 


class Motorcycle extends Vehicle {
  constructor(make, model, year) {
    super(make, model, year), 
    this.make = make, 
    this.model = model, 
    this.year = year, 
    this.numWheels = 2
  }
  revEngine(){
    return "VROOM!!!"
  }
}

//Part Four

class Garage {
  constructor(maxQty) {
  this.maxQty = maxQty, 
  this.vehicles = []
  }

  add(car) {
    if(this.vehicles.length < this.maxQty){
      return car instanceof Vehicle || 
             car instanceof Car || 
             car instanceof Vehicle ? 
             this.vehicles.push(car) && 'Vehicle Added' : 'This is not a car'
    } else {
      return "Sorry, we're full."
    }
  }  
}