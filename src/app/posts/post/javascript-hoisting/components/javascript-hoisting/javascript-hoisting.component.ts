import { Component, OnInit } from '@angular/core';
import { ElementRef, AfterViewInit} from '@angular/core';
import { SeoService } from './../../../../../shared/services/seo.service';

import * as hljs from 'highlight.js';

@Component({
  selector: 'blog-javascript-hoisting',
  templateUrl: './javascript-hoisting.component.html',
 styleUrls: ['./../../../../shared/style/post.common.component.scss']
})
export class JavascriptHoistingComponent implements OnInit, AfterViewInit {

  public schema;
  public titlepost = 'Fundamentos Javascript - Hoisting';
  public publishDate = '3 de Enero 2018';
  public url = 'javascript-hoisting';
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
    SEO['keywords'] = 'javascript, js, fundamentos, introduccion, hoisting';
    // tslint:disable-next-line:max-line-length
    SEO['description'] = 'En este artículo voy a seguir escribiendo sobre los conceptos básicos que todo desarrollador de Javascript debe dominar para ser un auténtico Javascript ninja. En esta ocasión vamos a ver el concepto Hoisting.';
    SEO['canonical'] = `https://victordeandres.es/post/${this.url}`;
    // Social Tags
    SEO['og:type'] = 'article';
    SEO['og:title'] = SEO['title'];
    SEO['og:description'] = SEO['description'];
    SEO['og:image'] = 'https://victordeandres.es/assets/images/posts/javascript_hoisting.png';
    SEO['og:url'] = SEO['canonical'];
    SEO['og:site_name'] = 'Victor de Andrés';
    this._seoService.addHeaderLabels(SEO);
  }

  ngOnInit() {
    this.schema = {
      '@context': 'http://schema.org',
      '@type': 'BlogPosting',
      'headline': 'Fundamentos Javascript - Hoisting',
      'alternativeHeadline': 'Fundamentos Javascript - Definición Hoisting',
      'image': 'https://victordeandres.es/assets/images/posts/javascript_hoisting.png',
      'editor': 'Victor de Andres',
      'genre': 'front end software development',
      'keywords': 'javascript, js, fundamentos, introduccion, hoisting',
      'wordcount': '475',
      'url': 'https://victordeandres.es/post/javascript-hoisting',
      'datePublished': '2017-07-08',
      'dateCreated': '2017-07-08',
      'dateModified': '2017-07-08',
      // tslint:disable-next-line:max-line-length
      'description': 'En este artículo voy a seguir escribiendo sobre los conceptos básicos que todo desarrollador de Javascript debe dominar para ser un auténtico Javascript ninja. En esta ocasión vamos a ver el concepto Hoisting.',
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
