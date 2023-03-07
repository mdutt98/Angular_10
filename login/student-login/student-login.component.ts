import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth-service';

@Component({
  selector: 'app-student-login',
  templateUrl: './student-login.component.html',
  styleUrls: ['./student-login.component.css']
})
export class StudentLoginComponent implements OnInit {

  title= "ReactiveForm";
  RegExp = /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;

  RegistrationForm = new FormGroup({
    userName: new FormControl("", [Validators.required, Validators.pattern(this.RegExp)]),
    password: new FormControl("", Validators.required)
  });

  constructor(private authservice : AuthService, private router:Router){  

  }

  ngOnInit(): void {
  }

  onSubmit(){
    // console.log(this.RegistrationForm.value);

    this.authservice.loginStudent(this.RegistrationForm.value.userName+'', this.RegistrationForm.value.password+'');

  }

}
