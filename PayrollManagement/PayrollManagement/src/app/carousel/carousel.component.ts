import { Component, OnInit } from '@angular/core';
import data from "../app.json"
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  constructor() { }
imageurl:any;
  ngOnInit(): void {
    this.imageurl=data.carosal;
  }
}
