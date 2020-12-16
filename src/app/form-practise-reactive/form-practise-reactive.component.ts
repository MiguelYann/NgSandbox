import { UserValidators } from './../commons/validators/user.validators';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsernameValidators } from '../commons/validators/username.validators';

@Component({
  selector: 'app-form-practise-reactive',
  templateUrl: './form-practise-reactive.component.html',
  styleUrls: ['./form-practise-reactive.component.css'],
})
export class FormPractiseReactiveComponent implements OnInit {
  form = new FormGroup({
    account: new FormGroup({
      email: new FormControl('', null, UsernameValidators.shouldBeUnique),
      town: new FormControl(''),
    })

  });

  constructor() {}

  get email() {
    console.log(this.form.get('account.email')?.pending);
    return this.form.get('account.email');
  }

  get town() {
    return this.form.get('account.town')?.value;
  }

  login() {
    this.form.setErrors({ incorrectPassword: true });
  }

  ngOnInit(): void {}
}
