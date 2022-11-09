import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../Services/profile.service';
import data from "../app.json"

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private service:ProfileService) { }
  userDetails:any;
  profile:any;
  ngOnInit(): void {
    this.profile=data.profile;
    let id =this.service.localStorage();
    this.service.search(id).subscribe((data)=>{
      this.userDetails=data;
    });
  }

}
