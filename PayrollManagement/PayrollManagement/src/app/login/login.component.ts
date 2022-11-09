import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'
import { LoginService } from '../Services/login.service';
import sample from "../app.json" 
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private route: Router, private service: LoginService) { }
    data=new FormGroup({
    name: new FormControl(""),
    password: new FormControl("")
  })

  default: any = {
    name: "", password: ""
  }
  info: any;
  ngOnInit(): void {
    this.info=sample.loginPage;
    console.log(this.info);
  }

  login() {
    console.log(this.data.value)
    this.service.login(this.data.value.name, this.data.value.password).subscribe((data) =>{
      this.default = data;
      localStorage.setItem("user", JSON.stringify(this.default));
      if (this.default.userPassword == this.data.value.password) {
        if(this.default.userRole=="Employee"){
          this.route.navigate(['home']);
        }else{
          this.route.navigate(['admin']);
        }
        Swal.fire(
          'loggedin',
          'Successfully!',
          'success'
        )

      } 
      else {
        Swal.fire(
          'Oops...',
          'invalid password or name',
          'error'
        )
      }
    },error => {
      if(error.status == 500 || error.status==0){
        Swal.fire(
          'Oops...',
          'invalid password or name',
          'error'
        )
      }
    })

  }
}
