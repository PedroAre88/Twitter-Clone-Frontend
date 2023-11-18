import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'create-user',
    loadChildren: () => import('./screen/create-user/create-user.module').then( m => m.CreateUserPageModule)
  },
  {
    path: 'tweets',
    loadChildren: () => import('./screen/tweets/tweets.module').then( m => m.TweetsPageModule)
  },
  {
    path: 'search-page',
    loadChildren: () => import('./screen/search-page/search-page.module').then( m => m.SearchPagePageModule)
  },
  {
    path: 'profile-page',
    loadChildren: () => import('./screen/profile-page/profile-page.module').then( m => m.ProfilePagePageModule)
  },
  {
    path: 'create-tweet',
    loadChildren: () => import('./screen/create-tweet/create-tweet.module').then( m => m.CreateTweetPageModule)
  },
  {
    path: 'user-page',
    loadChildren: () => import('./screen/user-page/user-page.module').then( m => m.UserPagePageModule)
  },
  {
    path: 'comments',
    loadChildren: () => import('./screen/comments/comments.module').then( m => m.CommentsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
