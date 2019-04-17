import { Component, OnInit } from '@angular/core';

import { ElementRef, AfterViewInit} from '@angular/core';
import { SeoService } from './../../../../shared/services/seo.service';

import * as hljs from 'highlight.js';

@Component({
  selector: 'blog-array-vs-set',
  templateUrl: './array-vs-set.component.html',
  styleUrls: ['./../../../shared/style/post.common.component.scss']
})

export class ArrayVsSetComponent implements OnInit, AfterViewInit {

  public schema;
  public titlepost = 'JS - ES6. Array VS Set';
  public publishDate = '20 de Abril 2019';
  public url = 'array-vs-set';
  public postCategories: string[] = ['Fundamentos', 'Javascript'];

  constructor(
    private _elementRef: ElementRef,
    private _seoService: SeoService
  ) {
    const SEO = {};
    // Fixed
    SEO['author'] = 'Victor de Andres';
    SEO['robots'] = 'Index, Follow';
    // Page Tags
    SEO['title'] = this.titlepost;
    SEO['keywords'] = 'javascript, es6, ecmascript 2015, array, set';
    SEO['description'] = 'Javascript - ECMAScript 2015. Diferencia entre array y set';
    SEO['canonical'] = `https://victordeandres.es/post/${this.url}`;
    // Social Tags
    SEO['og:type'] = 'article';
    SEO['og:title'] = SEO['title'];
    SEO['og:description'] = SEO['description'];
    SEO['og:image'] = 'https://images.unsplash.com/photo-1534690999400-b6aa76c07fa3?ixlib?q=75&fm=jpg';
    SEO['og:url'] = SEO['canonical'];
    SEO['og:site_name'] = 'Victor de Andrés';

    this._seoService.addHeaderLabels(SEO);
  }

  ngOnInit() {
    this.schema = {
      '@context': 'http://schema.org',
      '@type': 'BlogPosting',
      'headline': 'JS - ES6. Array VS Set',
      'alternativeHeadline': 'Javascript - ECMAScript 2015. Diferencia entre array y set',
      'image': 'https://images.unsplash.com/photo-1534690999400-b6aa76c07fa3?ixlib?q=75&fm=jpg',
      'editor': 'Victor de Andres',
      'genre': 'front end software development',
      'keywords': 'javascript, es6, ecmascript 2015, array, set',
      'wordcount': '841',
      'url': 'https://victordeandres.es/post/array-vs-set',
      'datePublished': '2019-04-20',
      'dateCreated': '2017-04-20',
      'dateModified': '2017-04-20',
      'description': 'Javascript - ECMAScript 2015. Diferencia entre array y set',
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
    this._elementRef.nativeElement.querySelectorAll('pre code').forEach(code => hljs.highlightBlock(code) );
    window.scroll(0, 0);
  }
}
