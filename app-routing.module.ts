import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentComponent } from './registration/student/student.component';
import { StudentProfileComponent } from './profile/student-profile/student-profile.component';
import { StudentLoginComponent } from './login/student-login/student-login.component';
import { ResetPasswordComponent } from './login/reset-password/reset-password.component';
import { HomeComponent } from './dashboard/home/home.component';
import { HomeStudentComponent } from './dashboard/home-student/home-student.component';
import { StudentSearchComponent } from './profile/student-search/student-search.component';
import { ApplicationListComponent } from './application/application-list/application-list.component';
import { ApplicationRequirementsComponent } from './application/application-requirements/application-requirements.component';
import { RegisterComponent } from './registration/register/register.component';
import { RecruitmentPartnerComponent } from './registration/recruitment-partner/recruitment-partner.component';
import { HomeRecruiterComponent } from './dashboard/home-recruiter/home-recruiter.component';
import { RecruiterProfileComponent } from './profile/recruiter-profile/recruiter-profile.component';
import { RecruiterSearchComponent } from './profile/recruiter-search/recruiter-search.component';
import { StudentTableComponent } from './tables/student-table/student-table.component';
import { ApplicationTableComponent } from './tables/application-table/application-table.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path:'',component:HomeComponent
  },
  {
    path:'login/student',component:StudentLoginComponent
  },
  {
    path:'login/reset-password',component:ResetPasswordComponent
  },
  {
    path:'register/student',component:StudentComponent
  },
  {
    path:'register/recruitment-partner',component:RecruitmentPartnerComponent
  },
  {
    path:'register',component:RegisterComponent
  },
  {
    path:'student/profile/:studentID', canActivate:[AuthGuard],
    component:StudentProfileComponent
  },
  {
    path:'student/search',component:StudentSearchComponent
  },
  {
    path:'student',component:HomeStudentComponent
  },
  {
    path:'application/list',component:ApplicationListComponent
  },
  {
    path:'application/requirements',component:ApplicationRequirementsComponent
  },
  {
    path:'recruiter/profile',component:RecruiterProfileComponent
  },
  {
    path:'recruiter/search',component:RecruiterSearchComponent
  },
  {
    path:'recruiter/student-table',component:StudentTableComponent
  },
  {
    path:'recruiter/application-table',component:ApplicationTableComponent
  },
  {
    path:'recruiter',component:HomeRecruiterComponent
  },
  {
    path:'**',component:ErrorPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
