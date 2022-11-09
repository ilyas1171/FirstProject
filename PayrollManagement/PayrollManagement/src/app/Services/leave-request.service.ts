import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LeaveRequestService {

  constructor(private http:HttpClient) { }
  url="http://localhost:8080/api/management"
  postRequest(request:any){
    return this.http.post(this.url+"requestForLeave",request);
  }

  getAllRequest(){
    return this.http.get(this.url+"getAllRequest");
  }
}
