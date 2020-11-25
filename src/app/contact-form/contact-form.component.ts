import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css'],
})
export class ContactFormComponent implements OnInit {
  fakeOptions = [
    {
      id: 1,
      option: 'Phone',
    },

    {
      id: 2,
      option: 'Mail',
    },
  ];
  constructor() {}

  ngOnInit(): void {}

  log = (model: any) => console.log(model);

  send(form: any) {
    console.log(form);
  }
}
