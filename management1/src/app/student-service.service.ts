import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student } from './student';

@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {
  
  constructor(private http:HttpClient ) { }
  baseUrl="http://localhost:8081/api/management/";

  getStudentList(){
    return this.http.get<Student[]>(this.baseUrl+"students")
  }
  createStudent(students: Student){
    return this.http.post(this.baseUrl+"showStudents",students)
  }
  getStudentById(id:any){
    return this.http.get<Student>(this.baseUrl+"students/"+id);
  }
  updateStudent(id:any,students:Student){
    return this.http.put(this.baseUrl+"changeStudentsById/"+id,students);
  }
  deleteStudent(id:any){
    return this.http.delete(this.baseUrl+"removeStudents/"+id);
  }
  login(userName:String,userPassword:String){
    return this.http.get(this.baseUrl+"login/"+userName+"/"+userPassword)
  }
  getUsers(users:any){
    return this.http.post(this.baseUrl+"createUser",users)
  }

  

  }

