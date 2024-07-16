import { Component } from '@angular/core';
import { Car } from '../Car';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrl: './car.component.css'
})
export class CarComponent {

  car : Car = {
    id: 1,
    name: "Gol",
    automaker: "Wolsgwagen",
    price: 1800,
    year: 2010

  }

}
