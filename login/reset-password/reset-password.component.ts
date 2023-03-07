import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  title= "ReactiveForm";
  RegExp = /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;

  RegistrationForm = new FormGroup({
    StudEmail: new FormControl("", [Validators.required, Validators.pattern(this.RegExp)])
  });

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.RegistrationForm.value);
  }
}
