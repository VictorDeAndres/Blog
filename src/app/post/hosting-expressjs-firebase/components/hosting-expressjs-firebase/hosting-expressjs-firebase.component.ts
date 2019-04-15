import { Component, OnInit, } from '@angular/core';

import { ElementRef, AfterViewInit} from '@angular/core';
import { SeoService } from './../../../../shared/services/seo.service';

import * as hljs from 'highlight.js';

@Component({
  selector: 'blog-hosting-expressjs-firebase',
  templateUrl: './hosting-expressjs-firebase.component.html',
  styleUrls: ['./../../../shared/style/post.common.component.scss']
})
export class HostingExpressjsFirebaseComponent implements OnInit, AfterViewInit {

  public schema;
  public titlepost = 'Hosting de un proyecto ExpressJS en Firebase';
  public publishDate = '11 de Agosto 2017';
  public url = 'hosting-expressjs-firebase';
  public postCategories: string[] = ['ExpressJS', 'Firebase', 'WebApps'];

  constructor(
    private _elemenRef: ElementRef,
    private _seoService: SeoService
  ) {
    const SEO = {};
    SEO['author'] = 'Victor de Andres';
    SEO['robots'] = 'Index, Follow';
    // Page Tags
    SEO['title'] = this.titlepost;
    SEO['keywords'] = 'angular, firebase, hosting, express, nodejs';
    SEO['description'] = 'Manual para realizar hosting de una aplicacion desarrollada en nodeJs con Express en firebase';
    SEO['canonical'] = `https://victordeandres.es/post/${this.url}`;
    // Social Tags
    SEO['og:type'] = SEO['article'];
    SEO['og:title'] = SEO['title'];
    SEO['og:description'] = SEO['description'];
    SEO['og:image'] = 'https://victordeandres.es/assets/images/posts/firebase_express.png';
    SEO['og:url'] = SEO['canonical'];
    SEO['og:site_name'] = SEO['Victor de Andrés'];
    this._seoService.addHeaderLabels(SEO);
  }

  ngOnInit() {
    this.schema = {
      '@context': 'http://schema.org',
      '@type': 'BlogPosting',
      'headline': 'Hosting de un proyecto ExpressJS en Firebase',
      'alternativeHeadline': 'Habilita webpack en tus proyectos Angular 2+',
      'image': 'https://victordeandres.es/assets/images/posts/firebase_express.png',
      'editor': 'Victor de Andres',
      'genre': 'front end software development',
      'keywords': 'angular, firebase, hosting, express, nodejs',
      'wordcount': '847',
      'url': 'https://victordeandres.es/post/hosting-expressjs-firebase',
      'datePublished': '2017-08-11',
      'dateCreated': '2017-08-11',
      'dateModified': '2017-08-11',
      'description': 'Manual para realizar hosting de una aplicacion desarrollada en nodeJs con Express en firebase',
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
    window.scroll(0, 0);
  }

}
