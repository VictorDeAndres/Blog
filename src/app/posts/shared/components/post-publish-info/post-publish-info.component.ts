import { Component, Input } from '@angular/core';

@Component({
  selector: 'blog-post-publish-info',
  templateUrl: './post-publish-info.component.html',
  styleUrls: ['./post-publish-info.component.scss']
})
export class PostPublishInfoComponent {

  @Input()
    publishDate: string;
  @Input()
    postCategories: object[];

  constructor() { }

}
