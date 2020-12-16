import {
  FormArray,
  FormGroup,
  FormControl,
  AbstractControl,
  FormBuilder,
} from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-new-course',
  templateUrl: './new-course.component.html',
  styleUrls: ['./new-course.component.css'],
})
export class NewCourseComponent implements OnInit {
  form = new FormGroup({
    topics: new FormArray([]),
  });

  formRoot = new FormGroup({
    nestedGroup: new FormGroup({
      name: new FormControl(),
      age: new FormControl(),
    }),

    formControlOne: new FormControl(),
    formControlTwo: new FormControl(),
    array: new FormArray([]),
  });
  constructor(formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      nestedGroup: formBuilder.group({
        name: formBuilder.control([]),
        age: formBuilder.control([]),
      }),
      formControlOne: formBuilder.control([]),
      formControlTwo: formBuilder.control([]),
      array: formBuilder.array([])
    }
    )
  }

  ngOnInit(): void {}

  get topics() {
    return this.form.get('topics') as FormArray;
  }

  get controlTopic() {
    return this.topics.controls;
  }

  add(element: HTMLInputElement) {
    this.topics.push(new FormControl(element.value));
    element.value = '';
  }

  removeTopic(topic: AbstractControl) {
    const indexOfFormControl = this.controlTopic.indexOf(topic);
    this.topics.removeAt(indexOfFormControl);
  }
}
