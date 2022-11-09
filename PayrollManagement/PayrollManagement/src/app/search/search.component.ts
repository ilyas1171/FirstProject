import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ProfileService } from '../Services/profile.service';
import data from "../app.json"
import Swal from 'sweetalert2'
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  search=new FormGroup({
    userId:new FormControl()
  })
  searchData:any;
  constructor(private service:ProfileService,private route:Router) { }
  profile:any;
  ngOnInit(): void {
    this.profile=data.profile;
  }
  check=false
  find(){
    this.service.search(this.search.value.userId).subscribe((data)=>{
      this.searchData=data;
      console.log("-=-=-",this.searchData);
      this.check=true
    },error=>{
      if(error.status==500){
        this.check=false;
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'This Id is not founded!',
        })
      }
    })
  }
  message:any;
  delete(){
    this.service.deleteEmployee(this.search.value.userId).subscribe((data)=>{
      this.message=data;
    })
    Swal.fire({
      icon: 'warning',
      title: 'Deleted...',
      text: 'The employee data is deleted..!',
    })
    this.check=false;
    this.route.navigate(['search']);
    console.log(this.search.value.userId)
  }
}
