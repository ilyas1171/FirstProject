import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CarouselComponent } from './carousel/carousel.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LeaveRequestComponent } from './leave-request/leave-request.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PaySlipComponent } from './pay-slip/pay-slip.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { FeaturesComponent } from './features/features.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { PayslipFormComponent } from './payslip-form/payslip-form.component';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';
import { AdminLeaveComponent } from './admin-leave/admin-leave.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { SearchComponent } from './search/search.component';
import { ViewLeaveRequestComponent } from './view-leave-request/view-leave-request.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CarouselComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    LeaveRequestComponent,
    PaySlipComponent,
    LoginComponent,
    ProfileComponent,
    FeaturesComponent,
    AdminDashboardComponent,
    PayslipFormComponent,
    AdminNavbarComponent,
    AdminLeaveComponent,
    EmployeeListComponent,
    AddEmployeeComponent,
    SearchComponent,
    ViewLeaveRequestComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
