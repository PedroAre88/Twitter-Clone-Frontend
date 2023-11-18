import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.page.html',
  styleUrls: ['./profile-page.page.scss'],
})
export class ProfilePagePage implements OnInit {
  username: string | undefined ;
  followersCount: number | undefined;
  followingCount: number | undefined;

  constructor() { }

  ngOnInit() {
    fetch('http://localhost:3000/users/profile')
      .then(response => response.json())
      .then(profileData => {
        console.log(profileData);
        this.username = profileData.user.username;
        this.followersCount = profileData.followersCount;
        this.followingCount = profileData.followingCount;
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }
}
