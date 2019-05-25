import { Component, OnInit } from '@angular/core';
import { ElementRef, AfterViewInit} from '@angular/core';
import { SeoService } from './../../../../../shared/services/seo.service';

import * as hljs from 'highlight.js';

@Component({
  selector: 'blog-angular-push-notifications',
  templateUrl: './angular-push-notifications.component.html',
  styleUrls: ['./../../../../shared/style/post.common.component.scss']
})
export class AngularPushNotificationsComponent implements OnInit, AfterViewInit {

  public schema;
  public titlepost = 'Tutorial implementación de notificaciones push en Angular';
  public publishDate = '12 de Mayo 2019';
  public url = 'angular-push-notifications';
  public postCategories: string[] = ['Angular', 'Desarrollo', 'WebApps'];

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
    SEO['keywords'] = 'tutorial, desarrollo, push notifications, angular';
    // tslint:disable-next-line:max-line-length
    SEO['description'] = 'Estamos acostumbrados a recibir notificaciones de nuestro calendario, correo, ect, … tanto en nuestros smartphones, como en nuestros ordenadores. En este post veremos cómo implementar las notificaciones push en una página web desarrolladas con Angular.';
    SEO['canonical'] = `https://victordeandres.es/post/${this.url}`;
    // Social Tags
    SEO['og:type'] = 'article';
    SEO['og:title'] = SEO['title'];
    SEO['og:description'] = SEO['description'];
    SEO['og:image'] = 'https://images.unsplash.com/photo-1464621922360-27f3bf0eca75?q=75&fm=jpg';
    SEO['og:url'] = SEO['canonical'];
    SEO['og:site_name'] = 'Victor de Andrés';
    this._seoService.addHeaderLabels(SEO);
  }

  ngOnInit() {
    this.schema = {
      '@context': 'http://schema.org',
      '@type': 'BlogPosting',
      'headline': 'Desarrollo notificaciones push en Angular',
      'alternativeHeadline': 'Tutorial para el desarrollo de notificaciones push en Angular',
      'image': 'https://images.unsplash.com/photo-1464621922360-27f3bf0eca75?q=75&fm=jpg',
      'editor': 'Victor de Andres',
      'genre': 'front end software development',
      'keywords': 'desarrollo, push notifications, angular',
      'wordcount': '1239',
      'url': 'https://victordeandres.es/post/angular-push-notificationss',
      'datePublished': '2018-05-12',
      'dateCreated': '2018-05-12',
      'dateModified': '2018-05-12',
      // tslint:disable-next-line:max-line-length
      'description': 'Estamos acostumbrados a recibir notificaciones de nuestro calendario, correo, ect, … tanto en nuestros smartphones, como en nuestros ordenadores. En este post veremos cómo implementar las notificaciones push en una página web desarrolladas con Angular.',
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

