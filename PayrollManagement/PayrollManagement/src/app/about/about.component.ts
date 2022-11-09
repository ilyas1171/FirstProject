import { Component, OnInit } from '@angular/core';
import info  from "../app.json"
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }
data:any;
  ngOnInit(): void {
    this.data=info.about;
  }

}
