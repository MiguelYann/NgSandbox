import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css'],
})
export class CourseFormComponent implements OnInit {
  constructor() {}

  categories = [
    {
      id: 1,
      name: 'Art',
    },

    {
      id: 2,
      name: 'Development',
    },

    {
      id: 3,
      name: 'Languages',
    },
  ];
  
  ngOnInit(): void {}

  log(courseName: any) {
    console.log(courseName);
  }
}
