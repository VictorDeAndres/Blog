import { Component, OnInit } from '@angular/core';

import { PostsService } from './services/posts.service';
import { SeoService } from './../../../shared/services/seo.service';

@Component({
  selector: 'blog-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})

export class PostsComponent implements OnInit {

  selectArchive: string = undefined;
  selectCategory: string = undefined;
  posts: Object = {};
  categories: Object[] = [];
  showPage = 0;
  initPage: boolean;
  lastPage: boolean;

  constructor(
    private _postService: PostsService,
    private _seoService: SeoService
  ) {
    const SEO = {};
    SEO['title'] = 'Blog Victor de Andres';
    SEO['keywords'] = 'angular desarrollo expressjs firebase fundamentos git graphql javascript tips unittest test webcomponents webpack';
    SEO['description'] = 'Blog Victor de Andres',
    SEO['canonical'] = 'https://victordeandres.es/posts';
    this._seoService.addHeaderLabels(SEO);
  }

  ngOnInit() {
    this._postService.getPosts(0)
    .then(responsePromise => {
      this.loadAuxData();
      this.posts = responsePromise;
    },
      () => { console.error('Error carga'); }
    );
  }

  loadAuxData(): void {
    const INITPAGE = this._postService.initializeDisplayPage();
    this.initPage = INITPAGE.initPage;
    this.lastPage = INITPAGE.lastPage;
    this.categories = this._postService.getCategories();
  }

  movebackward = () => {
    const CURRPAGE = this._postService.prevPage();
    this._postService.getPosts(CURRPAGE.currentPage, this.selectCategory)
      .then(responsePromise => {
        this.initPage = CURRPAGE.initPage;
        this.lastPage = false;
        this.posts = responsePromise;
        if ( typeof navigator !== 'undefined' ) {
          window.scroll(0, 0);
        }
      },
        () => { console.error('Error carga'); }
      );
  }

  moveforward = () => {
    const CURRPAGE = this._postService.nextPage();
    this._postService.getPosts(CURRPAGE.currentPage, this.selectCategory)
      .then(responsePromise => {
        this.initPage = false;
        this.lastPage = CURRPAGE.lastPage;
        this.posts = responsePromise;
        if ( typeof navigator !== 'undefined' ) {
          window.scroll(0, 0);
        }
      },
        () => { console.error('Error carga'); }
      );
  }

  selectByCategory(event = this.selectCategory) {
    if (event !== undefined) {
      this.selectCategory = event;
    }
    this._postService.getPosts(0, this.selectCategory)
      .then(responsePromise => {
        const INITPAGE = this._postService.initializeDisplayPage();
        this.initPage = INITPAGE.initPage;
        this.lastPage = INITPAGE.lastPage;
        this.posts = responsePromise;
      },
        () => { console.error('Error carga'); }
      );
  }
}
