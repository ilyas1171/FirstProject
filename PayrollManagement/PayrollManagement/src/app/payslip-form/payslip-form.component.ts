import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import data from "../app.json"
import { PayslipService } from '../Services/payslip.service';
@Component({
  selector: 'app-payslip-form',
  templateUrl: './payslip-form.component.html',
  styleUrls: ['./payslip-form.component.css']
})
export class PayslipFormComponent implements OnInit {

  constructor(private service: PayslipService) { }
  info: any;
  ngOnInit(): void {
    this.info = data.PaySlip
  }

  payslip = new FormGroup({
    month: new FormControl(''),
    basicPay: new FormControl(""),
    hra: new FormControl(""),
    lta: new FormControl(""),
    team: new FormControl('Select'),
    sa: new FormControl(""),
    insurance: new FormControl(""),
    pf: new FormControl("")
  })

  save() {
    this.service.postPayslip(this.payslip.value).subscribe();
  }

}
