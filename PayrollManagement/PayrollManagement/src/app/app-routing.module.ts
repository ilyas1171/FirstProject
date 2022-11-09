import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminLeaveComponent } from './admin-leave/admin-leave.component';
import { CarouselComponent } from './carousel/carousel.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { HomeComponent } from './home/home.component';
import { LeaveRequestComponent } from './leave-request/leave-request.component';
import { LoginComponent } from './login/login.component';
import { PaySlipComponent } from './pay-slip/pay-slip.component';
import { PayslipFormComponent } from './payslip-form/payslip-form.component';
import { ProfileComponent } from './profile/profile.component';
import { SearchComponent } from './search/search.component';
import { ViewLeaveRequestComponent } from './view-leave-request/view-leave-request.component';

const routes: Routes = [
  {path:"",component:LoginComponent},
  {path:"home",component:HomeComponent,
  children:[
    {path:"",component:CarouselComponent},
    {path:"leaveRequest",component:LeaveRequestComponent},
    {path:"profile",component:ProfileComponent},
    {path:"pay",component:PaySlipComponent},
  ]
},
{path:"admin",component:AdminDashboardComponent,
children:[
  {path:"",component:CarouselComponent},
  {path:"adminPay",component:PayslipFormComponent},
  {path :"adminLeave",component:AdminLeaveComponent},
  {path:"employeeList",component:EmployeeListComponent},
  {path:"add",component:AddEmployeeComponent},
  {path:"search",component:SearchComponent},
  {path:"view",component:ViewLeaveRequestComponent}
]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
