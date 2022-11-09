import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from '../student';
import { StudentServiceService } from '../student-service.service';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent implements OnInit {
  students: any={
    id:'',firstName:'',lastName:'',email:'',age:''

  };

  constructor(private studentService: StudentServiceService,
    private router: Router) { }

  ngOnInit(): void {
  }
  saveStudent(){
    this.studentService.createStudent(this.students).subscribe( data=>{
      console.log(data);
      this.router.navigate(['/nav/students']);
    })
  }
 
  onSubmit(){
    console.log(this.students);
    this.saveStudent();
  }
  

}
