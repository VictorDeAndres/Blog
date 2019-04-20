import { Component, OnInit } from '@angular/core';
import { ElementRef, AfterViewInit} from '@angular/core';
import { SeoService } from './../../../../shared/services/seo.service';

import * as hljs from 'highlight.js';

@Component({
  selector: 'blog-es6-bucles-asincronos',
  templateUrl: './es6-bucles-asincronos.component.html',
  styleUrls: ['./../../../shared/style/post.common.component.scss']
})
export class Es6BuclesAsincronosComponent implements OnInit, AfterViewInit {

  public schema;
  public titlepost = 'JavaScript - ES6. Bucles Asíncronos';
  public publishDate = '30 de Marzo 2019';
  public url = 'es6-bucles-asincronos';
  public postCategories: string[] =  ['Fundamentos', 'Javascript', 'Tips'];

  constructor(
    private _elemenRef: ElementRef,
    private _seoService: SeoService
  ) {
    const SEO = {};
    SEO['author'] = 'Victor de Andres';
    SEO['robots'] = 'Index, Follow';
    // Page Tags
    SEO['title'] = this.titlepost;
    SEO['keywords'] = 'es6, javascript, bucles, asincronos, loop, async, ecmascript 2015';
    SEO['description'] = 'Desarrollo bucles asíncronos ES6 - EcmaScript 2015';
    SEO['canonical'] = `https://victordeandres.es/post/${this.url}`;
    // Social Tags
    SEO['og:type'] = 'article';
    SEO['og:title'] = SEO['title'];
    SEO['og:url'] = SEO['canonical'];
    SEO['og:image'] = 'https://images.unsplash.com/photo-1531148502260-2920d70c8ed4?q=75&fm=jpg';
    SEO['og:site_name'] = 'Blog Victor de Andrés';
    SEO['og:description'] = SEO['description'];
    this._seoService.addHeaderLabels(SEO);
  }

  ngOnInit() {
    this.schema = {
      '@context': 'http://schema.org',
      '@type': 'BlogPosting',
      'headline': 'JS - ES6. Bucles Asíncronos',
      'alternativeHeadline': 'Desarrollo bucles asíncronos ES6 - EcmaScript 2015',
      'image': 'https://images.unsplash.com/photo-1531148502260-2920d70c8ed4?q=75&fm=jpg',
      'editor': 'Victor de Andres',
      'genre': 'front end software development',
      'keywords': 'es6, javascript, bucles, asincronos, loop, async, ecmascript 2015',
      'wordcount': '744',
      'url': 'https://victordeandres.es/post/es6-bucles-asincronos',
      'datePublished': '2019-03-30',
      'dateCreated': '2019-03-30',
      'dateModified': '2019-03-30',
      'description': 'Desarrollo bucles asincronos ES6 - EcmaScript 2015',
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
