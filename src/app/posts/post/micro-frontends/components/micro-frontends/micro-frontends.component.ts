import { Component, OnInit } from '@angular/core';
import { ElementRef, AfterViewInit} from '@angular/core';
import { SeoService } from './../../../../../shared/services/seo.service';

import * as hljs from 'highlight.js';
@Component({
  selector: 'blog-micro-frontends',
  templateUrl: './micro-frontends.component.html',
 styleUrls: ['./../../../../shared/style/post.common.component.scss']
})
export class MicroFrontendsComponent implements OnInit, AfterViewInit {

  public schema;
  public titlepost = 'Micro FrontEnds';
  public publishDate = '24 de Julio 2017';
  public url = 'micro-frontends';
  public postCategories: string[] = ['Arquitectura', 'WebApps'];

  constructor(
    private _elemenRefnRef: ElementRef,
    private _seoService: SeoService
  ) {
    const SEO = {};
    SEO['author'] = 'Victor de Andres';
    SEO['robots'] = 'Index, Follow';
    // Page Tags
    SEO['title'] = this.titlepost;
    SEO['keywords'] = 'angular, webapp, micro frontend, microfrontend, microservicio, react, jquery, vuejs, vue, spa';
    // tslint:disable-next-line:max-line-length
    SEO['description'] = 'En la actualidad las aplicaciones web se están volviendo cada vez más grandes y complejas. Por ello debemos utilizar distintas librerías o frameworks. Para ayudarnos podemos utilizar la arquitectura de micro-frontends. Un nuevo paradigma que nos ayudará a desarrollar nuestras aplicaciones.';
    SEO['canonical'] = `https://victordeandres.es/post/${this.url}`;
    // Social Tags
    SEO['og:type'] = 'article';
    SEO['og:title'] = SEO['title'];
    SEO['og:description'] = SEO['description'];
    SEO['og:image'] = 'https://victordeandres.es/assets/images/posts/microfrontend.png';
    SEO['og:url'] = SEO['canonical'];
    SEO['og:site_name'] = 'Victor de Andrés';

    this._seoService.addHeaderLabels(SEO);
  }

  ngOnInit() {
    this.schema = {
      '@context': 'http://schema.org',
      '@type': 'BlogPosting',
      'headline': 'Micro FrontEnds',
      'alternativeHeadline': 'Enfoque de microservicios para el desarrollo web front-end',
      'image': 'https://victordeandres.es/assets/images/posts/microfrontend.png',
      'editor': 'Victor de Andres',
      'genre': 'front end software development',
      'keywords': 'angular, webapp, micro frontend, microfrontend, microservicio, react, jquery, vuejs, vue, spa',
      'wordcount': '442',
      'url': 'https://victordeandres.es/post/micro-frontends',
      'datePublished': '2017-07-24',
      'dateCreated': '2017-07-24',
      'dateModified': '2017-07-24',
      // tslint:disable-next-line:max-line-length
      'description': 'En la actualidad las aplicaciones web se están volviendo cada vez más grandes y complejas. Por ello debemos utilizar distintas librerías o frameworks. Para ayudarnos podemos utilizar la arquitectura de micro-frontends. Un nuevo paradigma que nos ayudará a desarrollar nuestras aplicaciones.',
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
