import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import data from "../app.json";
import Swal from 'sweetalert2';
import { LeaveRequestService } from '../Services/leave-request.service';
import { ProfileService } from '../Services/profile.service';

@Component({
  selector: 'app-leave-request',
  templateUrl: './leave-request.component.html',
  styleUrls: ['./leave-request.component.css']
})
export class LeaveRequestComponent implements OnInit {

  constructor(private route:Router,private service:LeaveRequestService,private ser:ProfileService) { }
  leaveRequest:any;
  ngOnInit(): void {
    this.leaveRequest=data.leaveRequest;
  }
data:any={
  fromDate:'',
  toDate:'',
  requestType:'-Select Request Type-',
  leaveType:'-Select Leave Type-',
  discription:'',
  employeeId:0,
  response:"Pending..."
}
  request(){
    if(this.data.fromDate!='' && this.data.toDate!='' && this.data.discription!=''){
      this.data.employeeId=this.ser.localStorage();
      this.service.postRequest(this.data).subscribe();
      Swal.fire(
        'Leave Request',
        'Your Request Sent Successfully!',
        'success',
      )
      this.route.navigate(['home']);
    }else{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'You must fill all Details',
      })
    }


  }
}
