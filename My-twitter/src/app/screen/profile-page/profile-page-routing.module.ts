import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfilePagePage } from './profile-page.page';
import { HomePage } from '../../home/home.page';

const routes: Routes = [
  {
    path: '',
    component: ProfilePagePage
  },
  {
     path: 'home',
     component: HomePage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfilePagePageRoutingModule {}
