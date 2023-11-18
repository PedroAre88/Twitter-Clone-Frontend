import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchPagePageRoutingModule } from './search-page-routing.module';

import { SearchPagePage } from './search-page.page';

import { SharedComponentsModule } from '../../components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchPagePageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [
    SearchPagePage,

  ]
})
export class SearchPagePageModule {}
