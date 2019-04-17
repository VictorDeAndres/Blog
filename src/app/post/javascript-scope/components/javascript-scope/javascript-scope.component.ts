import { Component, OnInit } from '@angular/core';
import { ElementRef, AfterViewInit} from '@angular/core';
import { SeoService } from './../../../../shared/services/seo.service';

import * as hljs from 'highlight.js';

@Component({
  selector: 'blog-javascript-scope',
  templateUrl: './javascript-scope.component.html',
  styleUrls: ['./../../../shared/style/post.common.component.scss']
})
export class JavascriptScopeComponent implements OnInit, AfterViewInit  {

  public schema;
  public titlepost = 'Fundamentos Javascript - Scope';
  public publishDate = '10 de Noviembre 2017';
  public url = 'javascript-scope';
  public postCategories: string[] = ['Fundamentos', 'Javascript'];

  constructor(
    private _elemenRef: ElementRef,
    private _seoService: SeoService
  ) {
    const SEO = {};
    SEO['author'] = 'Victor de Andres';
    SEO['robots'] = 'Index, Follow';
    // Page Tags
    SEO['title'] = this.titlepost;
    SEO['keywords'] = 'javascript, js,, fundamento,s introduccion, definicion, scope';
    SEO['description'] = 'Fundamentos de JavaScript. Definicion y tipos scope. Global, local, function, lexical, block statments';
    SEO['canonical'] = `https://victordeandres.es/post/${this.url}`;
    // Social Tags
    SEO['og:type'] = 'article';
    SEO['og:title'] = SEO['title'];
    SEO['og:description'] = SEO['description'];
    SEO['og:image'] = 'https://victordeandres.es/assets/images/posts/javascript_scope.png';
    SEO['og:url'] = SEO['canonical'];
    SEO['og:site_name'] = 'Victor de Andrés';

    this._seoService.addHeaderLabels(SEO);
  }

  ngOnInit() {
    this.schema = {
      '@context': 'http://schema.org',
      '@type': 'BlogPosting',
      'headline': 'Fundamentos Javascript - Scope',
      'alternativeHeadline': 'Fundamentos Javascript. Definición y tipos de Scope',
      'image': 'https://victordeandres.es/assets/images/posts/javascript_scope.png',
      'editor': 'Victor de Andres',
      'genre': 'front end software development',
      'keywords': 'javascript, js,, fundamento,s introduccion, definicion, scope',
      'wordcount': '1275',
      'url': 'https://victordeandres.es/post/javascript-scope',
      'datePublished': '2017-11-10',
      'dateCreated': '2017-11-10',
      'dateModified': '2017-11-10',
      'description': 'Fundamentos de JavaScript. Definicion y tipos scope. Global, local, function, lexical, block statments',
      'author': {
        '@type': 'Person',
        'name': 'Victor de Andres'
      },
      'publisher': {
        '@type': 'Organization',
        'name': 'Victor de Andres',
        'logo': {
        '@type': 'imageObject',
        'url': 'https://victordeandres.es/assets/images/LogoFondoBlanco.png'
        }
      },
      'mainEntityOfPage': 'https://victordeandres.es/post'
    };
  }

  ngAfterViewInit() {
    this._elemenRef.nativeElement.querySelectorAll('pre code').forEach(code => hljs.highlightBlock(code) );
        if ( typeof navigator !== 'undefined' ) {
      window.scroll(0, 0);
    }
  }

}


