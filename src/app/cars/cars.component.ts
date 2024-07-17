import { Component } from '@angular/core';
import { Car } from '../Car';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrl: './cars.component.css'
})
export class CarsComponent {

  newCar : Car = {} as Car;

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
    this.newCar.id = this.cars.length + 1;
    this.cars.push(this.newCar);
    this.newCar = {} as Car;
  }

}
