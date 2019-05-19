import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'blog-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss']
})
export class PostsListComponent {

  @Input()
    posts: Array<any>;
  @Output()
    category: EventEmitter<string> = new EventEmitter<string>();

  constructor() {}

  selectByCategory(selectCategory: string): void {
    this.category.emit(selectCategory);
  }

}
