import { Component, OnInit } from '@angular/core';
import { ElementRef, AfterViewInit} from '@angular/core';
import { SeoService } from './../../../../../shared/services/seo.service';

import * as hljs from 'highlight.js';

@Component({
  selector: 'blog-servidor-push-notifications',
  templateUrl: './servidor-push-notifications.component.html',
  styleUrls: ['./../../../../shared/style/post.common.component.scss']
})
export class ServidorPushNotificationsComponent implements OnInit, AfterViewInit {

  public schema;
  public titlepost = 'Tutorial. Crea tu propio servidor notificaciones push.';
  public publishDate = '3 de Enero 2020';
  public url = 'servidor-push-notifications';
  public postCategories: string[] = ['Desarrollo', 'NodeJs', 'WebApps'];

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
    SEO['keywords'] = 'tutorial, desarrollo, push notifications, servidor';
    // tslint:disable-next-line:max-line-length
    SEO['description'] = 'Esta es la segunda parte del post anterior, Tutorial implementación de notificaciones push en Angular, en el cual creamos un cliente con Angular para recibir notificaciones push. En este nuevo post vamos a desarrollar un servidor web para emitir nuestras notificaciones.';
    SEO['canonical'] = `https://victordeandres.es/post/${this.url}`;
    // Social Tags
    SEO['og:type'] = 'article';
    SEO['og:title'] = SEO['title'];
    SEO['og:description'] = SEO['description'];
    SEO['og:image'] = 'https://images.unsplash.com/photo-1545690546-061847e1105e?q=75&fm=jpg';
    SEO['og:url'] = SEO['canonical'];
    SEO['og:site_name'] = 'Victor de Andrés';
    this._seoService.addHeaderLabels(SEO);
  }

  ngOnInit() {
    this.schema = {
      '@context': 'http://schema.org',
      '@type': 'BlogPosting',
      'headline': 'Tutorial. Crea tu propio servidor notificaciones push',
      'alternativeHeadline': 'Tutorial paso a paso para la creacion de un servidor notificaciones push en NodeJS',
      'image': 'https://images.unsplash.com/photo-1545690546-061847e1105e?q=75&fm=jpg',
      'editor': 'Victor de Andres',
      'genre': 'front end software development',
      'keywords': 'desarrollo, push notifications, servidor',
      'wordcount': '1239',
      'url': 'https://victordeandres.es/post/angular-push-notifications',
      'datePublished': '2020-01-03',
      'dateCreated': '2020-01-03',
      'dateModified': '2020-01-03',
      // tslint:disable-next-line:max-line-length
      'description': 'Esta es la segunda parte del post anterior, Tutorial implementación de notificaciones push en Angular, en el cual creamos un cliente con Angular para recibir notificaciones push. En este nuevo post vamos a desarrollar un servidor web para emitir nuestras notificaciones.',
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

