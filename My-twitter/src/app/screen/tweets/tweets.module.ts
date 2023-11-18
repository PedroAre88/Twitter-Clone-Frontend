import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TweetsPageRoutingModule } from './tweets-routing.module';

import { TweetsPage } from './tweets.page';

import { SharedComponentsModule } from '../../components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TweetsPageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [TweetsPage],
})
export class TweetsPageModule {}
