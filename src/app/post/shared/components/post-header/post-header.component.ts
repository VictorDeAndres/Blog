import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'blog-post-header',
  templateUrl: './post-header.component.html',
  styleUrls: ['./post-header.component.scss']
})
export class PostHeaderComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  public goPosts(): void {
    this.router.navigateByUrl('/posts');
  }

  public goContact(): void {
    this.router.navigateByUrl('/contact');
  }
}
