import { EventEmitter } from '@angular/core';
import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css'],
})
export class LikeComponent implements OnInit {
  @Input('is-like') isLiked = false;
  @Input('total-like') totalLike = 0;

  @Output('trigger') tweetData = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  likePost() {
    this.isLiked = !this.isLiked;
    this.totalLike += this.isLiked ? 1 : -1;
    this.tweetData.emit({ likeState: this.isLiked, count: this.totalLike });
  }
}
