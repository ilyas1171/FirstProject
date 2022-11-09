import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login(name: any, password: any) {
    return this.http.post("http://localhost:8080/api/management/login/" + name + "/" + password, name);
  }
  features(){
    return this.http.get("./features.json");
  }

}
