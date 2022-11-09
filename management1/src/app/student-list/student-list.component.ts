import { Component, OnInit } from '@angular/core';
import { ChildrenOutletContexts, Router } from '@angular/router';
import { StudentServiceService } from '../student-service.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

constructor(private services:StudentServiceService,
  private router:Router) {  }
students:any=[];

  ngOnInit(): void {
    this.services.getStudentList().subscribe((data) => {
      this.students=data;
      console.log(this.students)
    });
  }
studentDetails(id:any){
  this.router.navigate(['nav/student-details',id]);

}
  updateStudent(id:any){
    this.router.navigate(['nav/update-student',id]);
  }
  deleteStudent(id:any){
    this.services.deleteStudent(id).subscribe();
    window.location.reload();
  }
}
