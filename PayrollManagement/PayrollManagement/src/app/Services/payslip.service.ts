import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PayslipService {

  constructor(private http:HttpClient) { }

  baseurl="http://localhost:8080/api/management/";

  getPayslip(){
    return this.http.get(this.baseurl+"getPayslip");
  }

  postPayslip(payslip:any){
    console.log("-=-=-",payslip)
   return  this.http.post(this.baseurl+"postPayslip",payslip);
  }

  findByMonth(month:any){
    return this.http.get(this.baseurl+"findByMonth/"+month);
  }
}
