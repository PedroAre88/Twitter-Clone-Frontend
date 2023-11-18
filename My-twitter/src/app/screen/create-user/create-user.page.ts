import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.page.html',
  styleUrls: ['./create-user.page.scss'],
})
export class CreateUserPage implements OnInit {
  username: string = '';
  email: string = '';
  password: string = '';
  bio: string = '';

  constructor() { }

  ngOnInit() {
  }

  registerUser() {
    const userData = {
      username: this.username,
      email: this.email,
      password: this.password,
      bio: this.bio
    };

    fetch('http://localhost:3000/users/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  }
}
