import { Component, OnInit } from '@angular/core';
import data from "../app.json";
@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent implements OnInit {

  constructor() { }

  featuresData: any;
  ngOnInit(): void {
    this.featuresData = data.feature;
  }

}
