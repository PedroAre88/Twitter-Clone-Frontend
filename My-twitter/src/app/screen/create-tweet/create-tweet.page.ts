import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-create-tweet',
  templateUrl: './create-tweet.page.html',
  styleUrls: ['./create-tweet.page.scss'],
})
export class CreateTweetPage implements OnInit {

  tweet: any = {
    content: '',
    photo: ''
  };

  constructor() { }

  ngOnInit() {
  }

  createTweet(){
    console.log("Btn Publicar")
  }
}
