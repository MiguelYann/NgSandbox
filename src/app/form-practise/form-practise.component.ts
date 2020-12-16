import { FormGroup, FormControl, NgModel } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-practise',
  templateUrl: './form-practise.component.html',
  styleUrls: ['./form-practise.component.css']
})
export class FormPractiseComponent implements OnInit {

  username= '';
  password= '';
  constructor() { }

  ngOnInit(): void {
  }

  test(some: NgModel) {
    console.log(some);
    this.username = some.model;
  }

}
