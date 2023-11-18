import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppTabsComponent } from '../components/app-tabs/app-tabs.component'
import { TweetGridComponent } from '../components/tweet-grid/tweet-grid.component';
import { CommentGridComponent } from './comment-grid/comment-grid.component';

import { IonicModule } from '@ionic/angular'; 
import { RouterModule } from '@angular/router'; 

@NgModule({
  declarations: [AppTabsComponent,TweetGridComponent, CommentGridComponent],
  imports: [
    CommonModule, 
    IonicModule,
    RouterModule
  ],
  exports: [AppTabsComponent, TweetGridComponent, IonicModule, RouterModule, CommentGridComponent]
})
export class SharedComponentsModule { }
