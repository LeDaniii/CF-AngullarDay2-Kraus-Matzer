import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {
  carCard = new FormGroup({
    name: new FormControl('', Validators.required),
    img: new FormControl('', Validators.required),
  });
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

  onSubmit() {
    let CarName = this.carCard.value.CardName;
    let CarImg = this.carCard.value.CardImg;
    let obj = this.carCard.value;

    this.cars.push(obj);
  }
}
