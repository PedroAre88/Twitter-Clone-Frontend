import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.page.html',
  styleUrls: ['./user-page.page.scss'],
})
export class UserPagePage implements OnInit {

  followed: boolean = false;
  followText: string = 'Seguir';

  constructor() { }

  ngOnInit() {
  }

  toggleFollow() {
    // Cambia el valor de la variable followed
    this.followed = !this.followed;
    // Cambia el texto del botón según el valor de la variable followed
    if (this.followed) {
      // Si el botón está activo, usa el texto "Siguiendo"
      this.followText = 'Siguiendo';
      console.log("Siguiendo")
    } else {
      // Si el botón está inactivo, usa el texto "Seguir"
      this.followText = 'Seguir';
      console.log("Seguir")
    }
  }

}
