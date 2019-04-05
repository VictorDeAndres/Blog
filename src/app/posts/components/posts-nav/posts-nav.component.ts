import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'blog-posts-nav',
  templateUrl: './posts-nav.component.html',
  styleUrls: ['./posts-nav.component.scss']
})
export class PostsNavComponent {

  @Input()
    categories: object[];
  @Output()
    category: EventEmitter<string> = new EventEmitter<string>();
  @Output()
    archived: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  selectByCategory(selectCategory: string): void {
    this.category.emit(selectCategory);
  }

}
