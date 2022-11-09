import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateStudentComponent } from './create-student/create-student.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { StudentListComponent } from './student-list/student-list.component';
import { UpdateStudentComponent } from './update-student/update-student.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:"nav",component:MenuComponent,
children:[
  {path:'students',component:StudentListComponent },
  {path:'create-student',component:CreateStudentComponent},
  {path:'update-student/:id',component:UpdateStudentComponent},
  {path:'student-details/:id',component:StudentDetailsComponent},
]
},
  {path:'createUser',component:CreateUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
