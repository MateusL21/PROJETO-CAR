import { Component } from '@angular/core';
import { Car } from '../Car';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrl: './cars.component.css'
})
export class CarsComponent {

  car : Car = {} as Car;
  isUpdate : boolean = false;

  cars: Car[] = [
    {
      id: 1,
      name: "Uno",
      automaker: "Fiat",
      price: 12000,
      year: 2008
    },

    {
      id: 2,
      name: "Gol",
      automaker: "Volkswagen",
      price: 18000,
      year: 2010
    },

    {
      id: 3,
      name: "Chevette",
      automaker: "Chevrolet",
      price: 8000,
      year: 1990 
    }
  ];

  saveCar(){

    if(!this.isUpdate){
      this.car.id = this.cars.length + 1;
    this.cars.push(this.car);
    }
    this.car = {} as Car;
    
  }

  update(selectedCar:Car){
    this.car = selectedCar;
    this.isUpdate = true;
  }

  exclude(excludeCar:Car){
    this.cars = this.cars.filter( b => b !==excludeCar)
    }

}
