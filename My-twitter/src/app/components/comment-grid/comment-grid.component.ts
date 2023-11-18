import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comment-grid',
  templateUrl: './comment-grid.component.html',
  styleUrls: ['./comment-grid.component.scss'],
})
export class CommentGridComponent  implements OnInit {


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
