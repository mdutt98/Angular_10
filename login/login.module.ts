import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentLoginComponent } from './student-login/student-login.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ResetPasswordComponent } from './reset-password/reset-password.component'
import { AppModule } from '../app.module';



@NgModule({
  declarations: [
    StudentLoginComponent,
    ResetPasswordComponent
  ],
  imports: [
    CommonModule,
    AppModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppModule
  ]
})
export class LoginModule { }
