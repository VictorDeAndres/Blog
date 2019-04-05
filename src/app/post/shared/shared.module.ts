import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NgxJsonLdModule } from '@ngx-lite/json-ld';

import { PostPublishInfoComponent } from './../shared/components/post-publish-info/post-publish-info.component';
import { PostFooterComponent } from './../shared/components/post-footer/post-footer.component';
import { PostCommentComponent } from './../shared/components/post-comment/post-comment.component';
import { PostHeaderComponent } from './components/post-header/post-header.component';

@NgModule({
  declarations: [
    PostPublishInfoComponent,
    PostFooterComponent,
    PostCommentComponent,
    PostHeaderComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgxJsonLdModule
  ],
  exports: [
    FormsModule,
    NgxJsonLdModule,
    PostPublishInfoComponent,
    PostFooterComponent,
    PostCommentComponent,
    PostHeaderComponent
  ]
})
export class SharedPostModule { }
