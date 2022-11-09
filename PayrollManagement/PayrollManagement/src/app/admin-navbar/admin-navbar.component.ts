import { Component, OnInit } from '@angular/core';
import data from "../app.json"

@Component({
  selector: 'app-admin-navbar',
  templateUrl: './admin-navbar.component.html',
  styleUrls: ['./admin-navbar.component.css']
})
export class AdminNavbarComponent implements OnInit {

  constructor() { }
  navbar:any
  ngOnInit(): void {
    this.navbar=data.navbar;
  }

}
