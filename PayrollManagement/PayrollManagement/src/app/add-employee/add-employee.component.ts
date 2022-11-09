import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ProfileService } from '../Services/profile.service';
import Swal from 'sweetalert2'
import data from '../app.json'

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  employee = new FormGroup({
    userName:new FormControl(''),
    userEmail:new FormControl(''),
    userDob:new FormControl(''),
    userRole:new FormControl('Employee'),
    team:new FormControl(""),
    userPassword:new FormControl("")
  })

  constructor(private service:ProfileService,private route:Router) { }
  profile: any;

  ngOnInit(): void {
    this.profile=data.profile
  }
  year:any=[];
  save(){
    this.year= this.employee.value.userDob?.split('-');
    this.employee.value.userPassword=this.employee.value.userName+"@"+this.year[0]; 
    this.service.saveEmployee(this.employee.value).subscribe();
    Swal.fire(
      'Added...',
      'Successfully!',
      'success'
    )
    this.route.navigate(['admin']);
  }

}
