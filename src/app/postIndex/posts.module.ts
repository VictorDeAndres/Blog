import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { PostsComponent } from './components/posts/posts.component';
import { PostsListComponent } from './components/posts-list/posts-list.component';
import { PostsNavComponent } from './components/posts-nav/posts-nav.component';

import { PostsService } from './components/posts/services/posts.service';
import { ToArrayValuePipe } from '../shared/pipes/to-array-value.pipe';
import { ToArrayPipe } from '../shared/pipes/to-array-key.pipe';

@NgModule({
  declarations: [
    PostsComponent,
    PostsListComponent,
    PostsNavComponent,
    ToArrayValuePipe,
    ToArrayPipe
  ],
  imports: [
    CommonModule,
    PostsRoutingModule
  ],
  providers: [
    PostsService
  ]
})
export class PostsModule { }
