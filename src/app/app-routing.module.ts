import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
  path: '',
  loadChildren: './landing-page/landing-page.module#LandingPageModule',
}, {
  path: 'contact',
  loadChildren: './contact/contact.module#ContactModule',
}, {
  path: 'posts',
  loadChildren: './postIndex/posts.module#PostsModule'
}, {
  path: 'post',
  loadChildren: './posts/post.module#PostModule'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
