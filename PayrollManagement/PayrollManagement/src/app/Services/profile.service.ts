import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient) { }
  baseUrl = "http://localhost:8080/api/management"
  data: any;
  userDetails: any;
  localStorage() {
    this.data = localStorage.getItem('user');
    this.userDetails = JSON.parse(this.data);
    return this.userDetails.userId;
  }
  search(id: any) {
    return this.http.get(this.baseUrl + "search/" + id);
  }
  allEmployee(){
    return this.http.get(this.baseUrl+"getDetails");
  }

  saveEmployee(employee:any){
    return this.http.post(this.baseUrl+"addEmployee",employee);
  }
  deleteEmployee(id:any){
    return this.http.delete(this.baseUrl+"delete/"+id);
  }
}
