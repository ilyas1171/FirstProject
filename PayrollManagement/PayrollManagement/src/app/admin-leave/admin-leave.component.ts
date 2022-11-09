import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import data from '../app.json'
import { LeaveRequestService } from '../Services/leave-request.service';

@Component({
  selector: 'app-admin-leave',
  templateUrl: './admin-leave.component.html',
  styleUrls: ['./admin-leave.component.css']
})
export class AdminLeaveComponent implements OnInit {

  constructor(private router: Router,private service:LeaveRequestService) { }

profile:any;
requestArray:any=[];
request:any=[];
  ngOnInit(): void {
    this.profile=data.profile;
    this.check();
  }
  filter:any="Pending...";
  check(){
    this.service.getAllRequest().subscribe((data)=>{
      this.requestArray=data;
      this.request=[];
      for(var value of this.requestArray){
        if(value.response==this.filter){
          this.request.push(value);
        }
      }
    })
  }

  gotoView(){
    this.router.navigate(['admin/view']);
  }

}
