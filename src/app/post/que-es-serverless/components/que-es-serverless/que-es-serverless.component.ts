import { Component, OnInit } from '@angular/core';
import { ElementRef, AfterViewInit} from '@angular/core';
import { SeoService } from './../../../../shared/services/seo.service';

import * as hljs from 'highlight.js';
@Component({
  selector: 'blog-que-es-serverless',
  templateUrl: './que-es-serverless.component.html',
  styleUrls: ['./../../../shared/style/post.common.component.scss']
})

export class QueEsServerlessComponent implements OnInit, AfterViewInit {

  public schema;
  public titlepost = 'Serveles. ¿Qué es?';
  public publishDate = '09 de Marzo 2019';
  public url = 'serverless-que-es';
  public postCategories: string[] = ['Arquitectura', 'Desarrollo'];

  constructor(
    private _elemenRef: ElementRef,
    private _seoService: SeoService
  ) {
    const SEO = {};
    SEO['author'] = 'Victor de Andres';
    SEO['robots'] = 'Index, Follow';
    // Page Tags
    SEO['title'] = this.titlepost;
    // tslint:disable-next-line:max-line-length
    SEO['keywords'] = 'serverless, arquitectura, programacion, desarrollo, Amazon AWS Lamda, Google Cloud Functions, Microsoft Azure Functions, IBM OpenWhisk Actions, Iron Functions, OpenStack Picasso, Fission';
    SEO['description'] = 'Serverless. ¿Qué es?',
    SEO['canonical'] = `https://victordeandres.es/post/${this.url}`;
    // Social Tags
    SEO['og:type'] = 'article';
    SEO['og:title'] = SEO['title'];
    SEO['og:description'] = SEO['description'];
    SEO['og:image'] = 'https://images.unsplash.com/photo-1546864903-e99c8237840d?q=75&fm=jpg';
    SEO['og:url'] = SEO['canonical'];
    SEO['og:site_name'] = 'Victor de Andrés';

    this._seoService.addHeaderLabels(SEO);
  }

  ngOnInit() {
    this.schema = {
      '@context': 'http://schema.org',
      '@type': 'BlogPosting',
      'headline': 'Serverless ¿Qué es?',
      'alternativeHeadline': 'Conoce la arquitectura serverless. Sus ventajas y desventajas',
      'image': 'https://images.unsplash.com/photo-1546864903-e99c8237840d?q=75&fm=jpg',
      'editor': 'Victor de Andres',
      'genre': 'front end software development',
      // tslint:disable-next-line:max-line-length
      'keywords': 'serverless, arquitectura, programacion, desarrollo, Amazon AWS Lamda, Google Cloud Functions, Microsoft Azure Functions, IBM OpenWhisk Actions, Iron Functions, OpenStack Picasso, Fission',
      'wordcount': '442',
      'url': 'https://victordeandres.es/post/serverless-que-es',
      'datePublished': '2019-03-09',
      'dateCreated': '2019-03-09',
      'dateModified': '2019-03-09',
      'description': 'Conoce la arquitectura serverless. Sus ventajas y desventajas',
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
