import { Component, OnInit } from '@angular/core';

import { PostsService } from './services/posts.service';
import { SeoService } from './../../../shared/services/seo.service';

import { AngularFireDatabase } from '@angular/fire/database';

import * as _ from 'lodash';
@Component({
  selector: 'blog-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
  providers: [ AngularFireDatabase ]
})

export class PostsComponent implements OnInit {

  selectArchive: string = undefined;
  selectCategory: string = undefined;
  posts: any = [];
  categories: Object[] = [];
  showPage = 0;
  initPage: boolean;
  lastPage: boolean;

  constructor(
    private _postService: PostsService,
    private _seoService: SeoService,
    private _db: AngularFireDatabase,
  ) {
    const SEO = {};
    SEO['title'] = 'Blog Victor de Andres';
    SEO['keywords'] = 'angular desarrollo expressjs firebase fundamentos git graphql javascript tips unittest test webcomponents webpack';
    SEO['description'] = 'Blog Victor de Andres',
    SEO['canonical'] = 'https://victordeandres.es/posts';
    this._seoService.addHeaderLabels(SEO);
  }

  ngOnInit() {

    this.posts.push(...this._postService.INITIALPOSTS());
    this._postService.Posts = this.posts;

    this.loadAuxData();
    const firebase = this._db.list('/posts', ref => ref.orderByKey().endAt('20180204')).valueChanges()
      .subscribe( data => {
        const restPosts = [];
        for ( let idx = 0, lenArray = data.length; idx < lenArray; idx++) {
          const currentElement = data[idx];
          currentElement['isEnabled'] = false;
          restPosts.push(currentElement);
        }
        this.posts = [...restPosts, ...this.posts];
        this._postService.Posts = this.posts;
        this._postService.TotalNumberPage = _.chunk(this.posts, 5).length - 1; // Number of pages
        // Recall loadAuxData to recalculate values
        this.loadAuxData();
      }
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
    this._postService.getPosts(CURRPAGE._currentPage, this.selectCategory)
      .then(responsePromise => {
        this.initPage = CURRPAGE.initPage;
        this.lastPage = false;
        this.posts = responsePromise === [] ? [] : JSON.parse(JSON.stringify(responsePromise)).reverse(); // Convert object to array
        window.scroll(0, 0);
      },
        () => { console.error('Error carga'); }
      );
  }

  moveforward = () => {
    const CURRPAGE = this._postService.nextPage();
    this._postService.getPosts(CURRPAGE._currentPage, this.selectCategory)
      .then(responsePromise => {
        this.initPage = false;
        this.lastPage = CURRPAGE.lastPage;
        this.posts = responsePromise === [] ? [] : JSON.parse(JSON.stringify(responsePromise)).reverse(); // Convert object to array
        window.scroll(0, 0);
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
        this.posts = responsePromise === [] ? [] : JSON.parse(JSON.stringify(responsePromise)).reverse(); // Convert object to array
      },
        () => { console.error('Error carga'); }
      );
  }
}
