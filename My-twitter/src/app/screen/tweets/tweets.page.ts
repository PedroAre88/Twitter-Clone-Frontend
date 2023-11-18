import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-tweets',
  templateUrl: './tweets.page.html',
  styleUrls: ['./tweets.page.scss'],
})
export class TweetsPage implements OnInit {
  constructor(private actionSheetController: ActionSheetController) { }

  async showFilterOptions() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Filtrar por',
      buttons: [
        {
          text: 'Más reciente',
          handler: () => {
            // Lógica para la opción "Más reciente"
          }
        },
        {
          text: 'Más viejo',
          handler: () => {
            // Lógica para la opción "Más viejo"
          }
        },
        {
          text: 'Más popular',
          handler: () => {
            // Lógica para la opción "Más popular"
          }
        },
        {
          text: 'Menos popular',
          handler: () => {
            // Lógica para la opción "Menos popular"
          }
        },
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            // Lógica para cancelar
          }
        }
      ]
    });
    
    await actionSheet.present();
  }
  ngOnInit() {
  
  }


}
