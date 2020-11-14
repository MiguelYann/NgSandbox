import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css'],
})
export class StarComponent implements OnInit {
  isFavorite = false;
  constructor() {}

  ngOnInit(): void {}

  favorize() {
    this.isFavorite = !this.isFavorite;
    console.log(this.isFavorite);
  }
}
