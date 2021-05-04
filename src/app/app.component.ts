import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  convertText: string = "This is demo of Pipes";
  itemPrice: number = 5.50;
  currentDate = Date.now();
  numDateFormat = 1478496544151;
  getYear = 'Tue Dec 12 2018 11:20:18 GMT+0530';
  getTime = 'Wed Jan 20 2019 12:20:18 GMT+0530';

  myNum1: number = 7.4364646;
  myNum2: number = 0.9;

  a: number = 0.349;
  b: number = 2.4595;

  customText: string = "Be sure to have your pages set up with the latest design and development standards.";
}
