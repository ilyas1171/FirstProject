import { Component, Input, OnInit } from '@angular/core';
import { ProfileService } from '../Services/profile.service';
import data from "../app.json";
import { formatDate } from '@angular/common';
import { PayslipService } from '../Services/payslip.service';

@Component({
  selector: 'app-pay-slip',
  templateUrl: './pay-slip.component.html',
  styleUrls: ['./pay-slip.component.css']
})
export class PaySlipComponent implements OnInit {

  constructor(private service: ProfileService, private servicePayslip: PayslipService) { }
  @Input() thisMonth = formatDate(new Date(), 'yyyy-MM', 'en');
  userDetails: any;
  payslip: any;
  paySlipData: any = {};
  ngOnInit(): void {
    this.payslip = data.PaySlip;
    let id = this.service.localStorage();
    this.service.search(id).subscribe((data) => {
      this.userDetails = data;
    });
    this.table();
  }

  grossPay: any;
  deduction: any;
  netPay: any;
  table() {
    this.servicePayslip.findByMonth(this.thisMonth).subscribe((data) => {
      this.paySlipData = data;
      this.grossPay = parseInt(this.paySlipData.basicPay) + parseInt(this.paySlipData.hra) + parseInt(this.paySlipData.lta) + parseInt(this.paySlipData.sa);
      this.deduction = parseInt(this.paySlipData.insurance) + parseInt(this.paySlipData.pf);
      this.netPay = this.grossPay - this.deduction;
    });
  }


}
