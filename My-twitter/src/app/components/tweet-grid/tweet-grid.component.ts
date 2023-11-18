import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tweet-grid',
  templateUrl: './tweet-grid.component.html',
  styleUrls: ['./tweet-grid.component.scss'],
})
export class TweetGridComponent implements OnInit {

  liked: boolean = false;
  color: string = 'medium';

  constructor() { }

  ngOnInit() { }

  toggleLike() {

    this.liked = !this.liked;

    if (this.liked) {

      this.color = 'danger';
      console.log("LIKE")
    } else {

      this.color = 'medium';
      console.log("NO LIKE")
    }
  }
}
