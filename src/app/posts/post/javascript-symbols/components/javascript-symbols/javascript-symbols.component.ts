
import { Component, OnInit } from '@angular/core';
import { ElementRef, AfterViewInit} from '@angular/core';
import { SeoService } from './../../../../../shared/services/seo.service';

import * as hljs from 'highlight.js';

@Component({
  selector: 'blog-javascript-symbols',
  templateUrl: './javascript-symbols.component.html',
 styleUrls: ['./../../../../shared/style/post.common.component.scss']
})

export class JavascriptSymbolsComponent implements OnInit, AfterViewInit  {

  public schema;
  public titlepost = 'Fundamentos Javascript - ES6 - Symbols';
  public publishDate = '2 de Junio 2019';
  public url = 'javascript-symbols';
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
    SEO['keywords'] = 'javascript, js, fundamentos, ecmascript 2015, es6, symbols';
    // tslint:disable-next-line:max-line-length
    SEO['description'] = 'Una de las novedades de ES6 – ECMAScript2015 fue añadir un nuevo tipo de dato, symbol. Al igual que otras características de ES6 las cuales utilizamos habitualmente. Por ejemplo las arrow functions, los template strings, o el uso de let y const para definir variables.';
    SEO['canonical'] = `https://victordeandres.es/post/${this.url}`;
    // Social Tags
    SEO['og:type'] = 'article';
    SEO['og:title'] = SEO['title'];
    SEO['og:description'] = SEO['description'];
    SEO['og:image'] = 'https://images.unsplash.com/photo-1509822429293-98a3c3fe6bee?ixlib?q=75&fm=jpg';
    SEO['og:url'] = SEO['canonical'];
    SEO['og:site_name'] = 'Victor de Andrés';

    this._seoService.addHeaderLabels(SEO);
  }

  ngOnInit() {
    this.schema = {
      '@context': 'http://schema.org',
      '@type': 'BlogPosting',
      'headline': 'Fundamentos Javascript - ES6 - Symbols',
      'alternativeHeadline': 'Fundamentos Javascript (III) - Introducción a Symbols',
      'image': 'https://images.unsplash.com/pphoto-1509822429293-98a3c3fe6bee?ixlib?q=75&fm=jpg',
      'editor': 'Victor de Andres',
      'genre': 'front end software development',
      'keywords': 'javascript, js, fundamentos, ecmascript 2015, es6, symbols',
      'wordcount': '1275',
      'url': 'https://victordeandres.es/post/javascript-symbols',
      'datePublished': '2019-06-02',
      'dateCreated': '2019-06-02',
      'dateModified': '2019-06-02',
      // tslint:disable-next-line:max-line-length
      'description': 'Una de las novedades de ES6 – ECMAScript2015 fue añadir un nuevo tipo de dato, symbol. Al igual que otras características de ES6 las cuales utilizamos habitualmente. Por ejemplo las arrow functions, los template strings, o el uso de let y const para definir variables.',
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


