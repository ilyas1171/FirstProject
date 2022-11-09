import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from '../student';
import { StudentServiceService } from '../student-service.service';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit {
  id:any;
  students:any={
    email:'',
    lastName:'',
    firstName:'',
    age:''
  };
  constructor(private services:StudentServiceService,
    private route:ActivatedRoute,
    private router:Router) { }
    
ngOnInit(): void {
  this.id = this.route.snapshot.params['id'];
 this.services.getStudentById(this.id).subscribe(data =>{
  this.students=data;
 });
   
}

updateStudent(){
  this.services.updateStudent(this.id,this.students).subscribe(data =>{
    console.log(data);
    this.students = new Student();
    
  });
}

onSubmit(){
  this.services.updateStudent(this.id,this.students).subscribe((data) =>{
    this.students = data;
    console.log(this.students)
    this.goToStudentList();
    
  });
}
goToStudentList(){
  this.router.navigate(['nav/students']);
}
}