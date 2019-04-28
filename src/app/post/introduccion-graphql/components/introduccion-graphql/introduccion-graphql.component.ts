import { Component, OnInit } from '@angular/core';

import { ElementRef, AfterViewInit} from '@angular/core';
import { SeoService } from './../../../../shared/services/seo.service';

import * as hljs from 'highlight.js';

@Component({
  selector: 'blog-introduccion-graphql',
  templateUrl: './introduccion-graphql.component.html',
  styleUrls: ['./../../../shared/style/post.common.component.scss']
})
export class IntroduccionGraphqlComponent implements OnInit , AfterViewInit {

  public schema;
  public titlepost = 'Introducción a GraphQL';
  public publishDate = '09 de Septiembre 2017';
  public url = 'introduccion-graphql';
  public postCategories: string[] = ['GraphQL', 'WebApps'];

  constructor(
    private _elemenRef: ElementRef,
    private _seoService: SeoService
  ) {
    const SEO = {};
    SEO['author'] = 'Victor de Andres';
    SEO['robots'] = 'Index, Follow';
    // Page Tags
    SEO['title'] = this.titlepost;
    SEO['keywords'] = 'api, rest, graphql, spa';
    // tslint:disable-next-line:max-line-length
    SEO['description'] = 'Cuando estás desarrollando habitualmente en la parte front end de un proyecto y utilizas habitualmente una rest api para establecer las comunicaciones con tu base de datos tal vez en algún momento habrás realizado la siguiente pregunta. ¿ Como organizo mis json de respuesta ?. Con GraphQL';
    SEO['canonical'] = `https://victordeandres.es/post/${this.url}`;
    // Social Tags
    SEO['og:type'] = 'article';
    SEO['og:title'] = SEO['title'];
    SEO['og:description'] = SEO['description'];
    SEO['og:image'] = 'https://victordeandres.es/assets/images/posts/graphql.png';
    SEO['og:url'] = SEO['canonical'];
    SEO['og:site_name'] = 'Victor de Andrés';

    this._seoService.addHeaderLabels(SEO);
  }

  ngOnInit() {
    this.schema = {
      '@context': 'http://schema.org',
      '@type': 'BlogPosting',
      'headline': 'Introducción a GraphQL',
      'alternativeHeadline': 'Introducción a GrapghQL. Un lenguaje de consultas para tu API Rest',
      'image': 'https://victordeandres.es/assets/images/posts/graphql.png',
      'editor': 'Victor de Andres',
      'genre': 'front end software development',
      'keywords': 'api, rest, graphql, spa',
      'wordcount': '1056',
      'url': 'https://victordeandres.es/post/introduccion-graphql',
      'datePublished': '2017-09-09',
      'dateCreated': '2017-09-09',
      'dateModified': '2017-09-09',
      // tslint:disable-next-line:max-line-length
      'description': 'Cuando estás desarrollando habitualmente en la parte front end de un proyecto y utilizas habitualmente una rest api para establecer las comunicaciones con tu base de datos tal vez en algún momento habrás realizado la siguiente pregunta. ¿ Como organizo mis json de respuesta ?. Con GraphQL',
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
