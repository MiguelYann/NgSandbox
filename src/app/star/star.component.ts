import { EventEmitter, Input, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css'],
})
export class StarComponent implements OnInit {
 @Input('is-favorite') isFavorite = false;

 @Output("trigger-favorite") trigger = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  favorize() {
    this.isFavorite = !this.isFavorite;
    this.trigger.emit(this.isFavorite);
  }
}
