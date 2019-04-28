import { Component, OnInit } from '@angular/core';
import { ElementRef, AfterViewInit} from '@angular/core';
import { SeoService } from './../../../../shared/services/seo.service';

import * as hljs from 'highlight.js';

@Component({
  selector: 'blog-introduccion-webcomponents',
  templateUrl: './introduccion-webcomponents.component.html',
  styleUrls: ['./../../../shared/style/post.common.component.scss']
})

export class IntroduccionWebcomponentsComponent implements OnInit, AfterViewInit {

  public schema;
  public titlepost = 'Introducción a los WebComponents';
  public publishDate = '03 de Marzo 2018';
  public url = 'introduccion-webcomponents';
  public postCategories: string[] = ['WebComponents', 'WebApps'];

  constructor(
    private _elemenRef: ElementRef,
    private _seoService: SeoService
  ) {
    const SEO = {};
    SEO['author'] = 'Victor de Andres';
    SEO['robots'] = 'Index, Follow';
    // Page Tags
    SEO['title'] = this.titlepost;
    SEO['keywords'] = 'webcomponents, webapp, polymer, x-tag';
    // tslint:disable-next-line:max-line-length
    SEO['description'] = 'En este post voy a realizar una introducción a los WebComponents, un conjunto de características aún en desarrollo por parte de la W3C que unidas a las especificaciones actuales de HTML y DOM nos permitirá desarrollar widgets o componentes reutilizables tanto para páginas como aplicaciones web.';
    SEO['canonical'] = `https://victordeandres.es/post/${this.url}`;
    // Social Tags
    SEO['og:type'] = 'article';
    SEO['og:title'] = SEO['title'];
    SEO['og:description'] = SEO['description'];
    SEO['og:image'] = 'https://victordeandres.es/assets/images/posts/webcomponents.png';
    SEO['og:url'] = SEO['canonical'];
    SEO['og:site_name'] = 'Victor de Andrés';
    this._seoService.addHeaderLabels(SEO);
  }

  ngOnInit() {
    this.schema = {
      '@context': 'http://schema.org',
      '@type': 'BlogPosting',
      'headline': 'Introduccion a los WebComponents',
      'alternativeHeadline': 'Introducción y caracteristicas de los WebComponents',
      'image': 'https://victordeandres.es/assets/images/posts/webcomponents.png',
      'editor': 'Victor de Andres',
      'genre': 'front end software development',
      'keywords': 'webcomponents, webapp, polymer, x-tag',
      'wordcount': '577',
      'url': 'https://victordeandres.es/post/introduccion-webcomponents',
      'datePublished': '2018-03-03',
      'dateCreated': '2018-03-03',
      'dateModified': '2018-03-03',
      // tslint:disable-next-line:max-line-length
      'description': 'En este post voy a realizar una introducción a los WebComponents, un conjunto de características aún en desarrollo por parte de la W3C que unidas a las especificaciones actuales de HTML y DOM nos permitirá desarrollar widgets o componentes reutilizables tanto para páginas como aplicaciones web.',
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

