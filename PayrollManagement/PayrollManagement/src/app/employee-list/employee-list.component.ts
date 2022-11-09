import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../Services/profile.service';
import data from "../app.json";

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  constructor(private service:ProfileService) { }
employee:any=[];
employeeData:any=[];
profile:any;
  ngOnInit(): void {
    this.profile=data.profile;
    this.service.allEmployee().subscribe((data)=>{
      this.employee=data;
      for(var value of this.employee){
        if(value.userRole=="Employee"){
          this.employeeData.push(value);
        }
      }
    })
  }

}
