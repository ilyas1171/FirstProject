import { Component, OnInit } from '@angular/core';
import data from "../app.json"
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }
footer:any;
  ngOnInit(): void {
    this.footer=data.footer;
  }

}
