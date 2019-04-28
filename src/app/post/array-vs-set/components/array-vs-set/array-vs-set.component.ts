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
  public titlepost = 'JavaScript - ES6. Array VS Set';
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
    // tslint:disable-next-line:max-line-length
    SEO['description'] = 'Como desarrollador seguro que en tu día a día utilizas los Arrays. Desde la llegada de la especificación ECMAScript 6 disponemos de un nuevo tipo de estructura, Set. En este post veremos en las diferencias entre los Arrays y los Set. Además los principales métodos para utilizar esta nueva estructura.';
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
      // tslint:disable-next-line:max-line-length
      'description': 'Como desarrollador seguro que en tu día a día utilizas los Arrays. Desde la llegada de la especificación ECMAScript 6 disponemos de un nuevo tipo de estructura, Set. En este post veremos en las diferencias entre los Arrays y los Set. Además los principales métodos para utilizar esta nueva estructura.',
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
    if ( typeof navigator !== 'undefined' ) {
      window.scroll(0, 0);
    }
  }
}
