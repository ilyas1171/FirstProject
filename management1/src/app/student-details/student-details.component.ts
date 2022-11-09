import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Student } from '../student';
import { StudentServiceService } from '../student-service.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {
  id:any
  students: Student = new Student();

  constructor(private route: ActivatedRoute,
    private services:StudentServiceService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.services.getStudentById(this.id).subscribe(data =>{
      this.students=data;
    });
  }

}
