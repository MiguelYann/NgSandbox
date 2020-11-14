import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  products = {
    isFavorite: true
  }

  tweet = {
   post: "New JS Framework",
   isLike: false,
   totalCountOfLike: 0
  }

  getFavorite(favorite: boolean) {
    this.products.isFavorite = favorite;
    console.log(this.products);
  }

  getDataTweet(dataTweet: any) {
   this.tweet.isLike = dataTweet.likeState;
   this.tweet.totalCountOfLike = dataTweet.count;
  }
}
