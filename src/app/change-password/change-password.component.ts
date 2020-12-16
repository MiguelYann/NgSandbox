import { PasswordValidators } from './../commons/validators/password.validators';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css'],
})
export class ChangePasswordComponent implements OnInit {
  form = new FormGroup(
    {
      oldPassword: new FormControl(
        '',
        Validators.required,
        PasswordValidators.shouldMatchOldPassword
      ),
      newPassword: new FormControl('', Validators.required),
      confirmedPassword: new FormControl('', Validators.required),
    }, PasswordValidators.shouldMatchNewPassword
  );
  constructor() {}

  get oldPassword() {
    return this.form.get('oldPassword');
  }

  get newPassword() {
    return this.form.get('newPassword');
  }

  get confirmedPassword() {
    return this.form.get('confirmedPassword');
  }

  ngOnInit(): void {}
}
