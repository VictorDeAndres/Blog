import { Component, OnInit } from '@angular/core';
import { ElementRef, AfterViewInit} from '@angular/core';
import { SeoService } from './../../../../../shared/services/seo.service';

import * as hljs from 'highlight.js';

@Component({
  selector: 'blog-javascript-functions',
  templateUrl: './javascript-functions.component.html',
  styleUrls: ['./../../../../shared/style/post.common.component.scss']
})

export class JavascriptFunctionsComponent implements OnInit, AfterViewInit {

  public schema;
  public titlepost = 'Funciones en Javascript';
  public publishDate = '7 de Septiembre 2019';
  public url = 'javascript-functions';
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
    SEO['keywords'] = 'Fundamentos, Javascript, Function, javascript, function';
    // tslint:disable-next-line:max-line-length
    SEO['description'] = 'En Javascript las funciones es uno de los conceptos más importantes y versátiles de este lenguaje. Pudiendo definir los siguientes tipos de funciones: Function declaration, Function expression, IIFE, Shorthand method definition, Arrow function, Generator function, Function constructor.';
    SEO['canonical'] = `https://victordeandres.es/post/${this.url}`;
    // Social Tags
    SEO['og:type'] = 'article';
    SEO['og:title'] = SEO['title'];
    SEO['og:description'] = SEO['description'];
    SEO['og:image'] = 'https://images.unsplash.com/photo-1513521398155-5487a36efe86?ixlib?q=75&fm=jpg';
    SEO['og:url'] = SEO['canonical'];
    SEO['og:site_name'] = 'Victor de Andrés';
    this._seoService.addHeaderLabels(SEO);
  }

  ngOnInit() {
    this.schema = {
      '@context': 'http://schema.org',
      '@type': 'BlogPosting',
      'headline': 'Funciones en Javascript',
      'alternativeHeadline': 'Fundamentos Javascript (IV) - 7 formas de declarar una función en Javascript',
      'image': 'https://images.unsplash.com/photo-1513521398155-5487a36efe86?ixlib?q=75&fm=jpg',
      'editor': 'Victor de Andres',
      'genre': 'front end software development',
      'keywords': 'Fundamentos, Javascript, Function, javascript, function',
      'wordcount': '4008',
      'url': 'https://victordeandres.es/post/javascript-functions',
      'datePublished': '2019-09-07',
      'dateCreated': '2018-09-07',
      'dateModified': '2018-09-07',
      // tslint:disable-next-line:max-line-length
      'description': 'En Javascript las funciones es uno de los conceptos más importantes y versátiles de este lenguaje. Pudiendo definir los siguientes tipos de funciones: Function declaration, Function expression, IIFE, Shorthand method definition, Arrow function, Generator function, Function constructor.',
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

