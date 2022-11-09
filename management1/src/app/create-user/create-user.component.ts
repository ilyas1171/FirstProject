import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentServiceService } from '../student-service.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  users: any={
    userName:'',userPassword:''
  }
  constructor(private service:StudentServiceService,
    private route:Router
    ) { }

  ngOnInit(): void {
  }
  saveUser(){
    console.log(this.users);
    this.service.getUsers(this.users).subscribe(data =>{
      console.log(data);
      this.route.navigate(['']);
    })
  }
  onSubmit(){
    
    this.saveUser();
  }

}
