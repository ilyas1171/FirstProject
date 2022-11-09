import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentServiceService } from '../student-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName:any="";
  userPassword:any="";
  


  constructor(private services:StudentServiceService, 
    private router:Router) { }
    user:any

  ngOnInit(): void {
   console.log();
    
  }

login:any;
    save(){
      
      this.services.login(this.userName,this.userPassword).subscribe((data=>{
        this.login=data;
        if(this.login.userName==this.userName && this.login.userPassword==this.userPassword){
          this.router.navigate(['/nav/']);
        }
      }
      
      ),
      error=>{
        alert("Invalid Username!");

         console.log(error.error.message);
       });
      
     }
   }
    


