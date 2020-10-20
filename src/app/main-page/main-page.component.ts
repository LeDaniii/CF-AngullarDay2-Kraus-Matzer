import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {
  constructor() {}

  cars = [
    {
      name: 'Lightning McQueen ',
      img: '/assets/lightning.png',
    },
    {
      name: 'Sally Carrera ',
      img: '/assets/porsche.png',
    },
    {
      name: 'Mater ',
      img: '/assets/towTruck.png',
    },
    {
      name: 'Guido ',
      img: '/assets/forklift.png',
    },
  ];

  ngOnInit(): void {}
}
