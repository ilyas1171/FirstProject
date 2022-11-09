import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule  } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { StudentListComponent } from './student-list/student-list.component';
import { CreateStudentComponent } from './create-student/create-student.component';
import { UpdateStudentComponent } from './update-student/update-student.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { LoginComponent } from './login/login.component';
import { StudentServiceService } from './student-service.service';
import { CreateUserComponent } from './create-user/create-user.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MenuComponent } from './menu/menu.component';
// import { ToastrModule } from 'ngx-toastr/toastr/toastr.module';



@NgModule({
  declarations: [
    AppComponent,
    StudentListComponent,
    CreateStudentComponent,
    UpdateStudentComponent,
    StudentDetailsComponent,
    LoginComponent,
    CreateUserComponent,
    NavbarComponent,
    MenuComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    
    // ToastrModule.forRoot()
   
  ],
  providers: [StudentServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
