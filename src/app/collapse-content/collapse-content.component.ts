import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'collapse-content',
  templateUrl: './collapse-content.component.html',
  styleUrls: ['./collapse-content.component.css'],
})
export class CollapseContentComponent implements OnInit {
  @Input('title') titleHeader = '';

  isOpened = false;

  constructor() {}

  ngOnInit(): void {}

  toggleCollapse() {
    this.isOpened = !this.isOpened;
  }
}
