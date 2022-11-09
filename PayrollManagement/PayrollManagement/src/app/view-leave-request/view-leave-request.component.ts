import { Component, OnInit } from '@angular/core';
import data from "../app.json";
import Swal from 'sweetalert2'

@Component({
  selector: 'app-view-leave-request',
  templateUrl: './view-leave-request.component.html',
  styleUrls: ['./view-leave-request.component.css']
})
export class ViewLeaveRequestComponent implements OnInit {

  constructor() { }
  leaveRequest: any;
  ngOnInit(): void {
    this.leaveRequest = data.leaveRequest;
  }
  approve(){
    Swal.fire(
      'loggedin',
      'Successfully!',
      'success'
    )
  }
  reject(){
    Swal.fire(
          'Oops...',
          'Request has been rejected',
          'error'
    )

  }

}
