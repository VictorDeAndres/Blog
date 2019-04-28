import { Component, OnInit } from '@angular/core';

import { ElementRef, AfterViewInit} from '@angular/core';
import { SeoService } from './../../../../shared/services/seo.service';

import * as hljs from 'highlight.js';

@Component({
  selector: 'blog-introduccion-expresiones-regulares',
  templateUrl: './introduccion-expresiones-regulares.component.html',
  styleUrls: ['./../../../shared/style/post.common.component.scss']
})
export class IntroduccionExpresionesRegularesComponent implements OnInit, AfterViewInit {

  public schema;
  public titlepost = 'Introducción a expresiones regulares';
  public publishDate = '4 de Febrero 2018';
  public url = 'introduccion-expresiones-regulares';
  public postCategories: string[] = ['Desarrollo', 'Fundamentos', 'Javascript'];

  constructor(
    private _elemenRefnRef: ElementRef,
    private _seoService: SeoService
  ) {
    const SEO = {};
    SEO['author'] = 'Victor de Andres';
    SEO['robots'] = 'Index, Follow';
    // Page Tags
    SEO['title'] = this.titlepost;
    SEO['keywords'] = 'expresiones regulares, regex, js, javascript';
    // tslint:disable-next-line:max-line-length
    SEO['description'] = 'En este post voy a realizar una introducción a las expresiones regulares desde el punto de vista para un desarrollador de Javascript. Esas expresiones que parecen algo incomprensibles y complicadas pero que nos pueden ayudar ahorrar mucho tiempo si sabemos utilizarlas.';
    SEO['canonical'] = `https://victordeandres.es/post/${this.url}`;
    // Social Tags
    SEO['og:type'] = 'article';
    SEO['og:title'] = SEO['title'];
    SEO['og:description'] = SEO['description'];
    SEO['og:image'] = 'https://victordeandres.es/assets/images/posts/regular_expresion.png';
    SEO['og:url'] = SEO['canonical'];
    SEO['og:site_name'] = 'Victor de Andrés';

    this._seoService.addHeaderLabels(SEO);
  }

  ngOnInit() {
    this.schema = {
      '@context': 'http://schema.org',
      '@type': 'BlogPosting',
      'headline': 'Introducción a expresiones regulares (RegEx) en JS',
      'alternativeHeadline': 'introducción a las reglas para utilizar expresiones regulares en JavaScript',
      'image': 'https://victordeandres.es/assets/images/posts/regular_expresion.png',
      'editor': 'Victor de Andres',
      'genre': 'front end software development',
      'keywords': 'expresiones regulares, regex, js, javascript',
      'wordcount': '1257',
      'url': 'https://victordeandres.es/post/introduccion-expresiones-regulares',
      'datePublished': '2018-02-04',
      'dateCreated': '2018-02-04',
      'dateModified': '2018-02-04',
      // tslint:disable-next-line:max-line-length
      'description': 'En este post voy a realizar una introducción a las expresiones regulares desde el punto de vista para un desarrollador de Javascript. Esas expresiones que parecen algo incomprensibles y complicadas pero que nos pueden ayudar ahorrar mucho tiempo si sabemos utilizarlas.',
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
    this._elemenRefnRef.nativeElement.querySelectorAll('pre code').forEach(code => hljs.highlightBlock(code) );
        if ( typeof navigator !== 'undefined' ) {
      window.scroll(0, 0);
    }
  }

}
