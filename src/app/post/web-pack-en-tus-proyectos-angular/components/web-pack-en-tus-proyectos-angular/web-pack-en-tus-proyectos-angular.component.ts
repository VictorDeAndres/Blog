import { Component, OnInit } from '@angular/core';
import { ElementRef, AfterViewInit} from '@angular/core';
import { SeoService } from './../../../../shared/services/seo.service';

import * as hljs from 'highlight.js';
@Component({
  selector: 'blog-web-pack-en-tus-proyectos-angular',
  templateUrl: './web-pack-en-tus-proyectos-angular.component.html',
  styleUrls: ['./../../../shared/style/post.common.component.scss']
})
export class WebPackEnTusProyectosAngularComponent implements OnInit, AfterViewInit {

  public schema;
  public titlepost = 'Webpack en tus proyectos Angular';
  public publishDate = '08 de Julio 2017';
  public url = 'webpack-en-tus-proyectos-angular';
  public postCategories: string[] = ['Angular', 'Webpack'];

  constructor(
    private eltRef: ElementRef,
    private seoService: SeoService
  ) {
    const SEO = {};
    SEO['author'] = 'Victor de Andres';
    SEO['robots'] = 'Index, Follow';
    // Page Tags
    SEO['title'] = this.titlepost;
    SEO['keywords'] = 'angular angularjs webapp webpack eject spa angular-cli';
    SEO['description'] = 'Angular tip para utilizar webpack en los aplicativos angular generados desde el asistente angular-cli';
    SEO['canonical'] = `https://victordeandres.es/post/${this.url}`;
    // Social Tags
    SEO['og:type'] = 'article';
    SEO['og:title'] = SEO['title'];
    SEO['og:description'] = SEO['description'];
    SEO['og:image'] = 'https://victordeandres.es/assets/images/posts/webpack-and-angularjs.png';
    SEO['og:url'] = SEO['canonical'];
    SEO['og:site_name'] = 'Victor de Andrés';
    this.seoService.addHeaderLabels(SEO);
  }

  ngOnInit() {
    this.schema = {
      '@context': 'http://schema.org',
      '@type': 'BlogPosting',
      'headline': 'Webpack en tus proyectos Angular',
      'alternativeHeadline': 'Habilita webpack en tus proyectos Angular 2+',
      'image': 'https://victordeandres.es/assets/images/posts/webpack-and-angularjs.png',
      'editor': 'Victor de Andres',
      'genre': 'front end software development',
      'keywords': 'angular angularjs webapp webpack eject spa angular-cli',
      'wordcount': '231',
      'url': 'https://victordeandres.es/post/webpack-en-tus-proyectos-angular',
      'datePublished': '2017-07-08',
      'dateCreated': '2017-07-08',
      'dateModified': '2017-07-08',
      'description': 'Angular tip para utilizar webpack en los aplicativos angular generados desde el asistente angular-cli',
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
    this.eltRef.nativeElement.querySelectorAll('pre code').forEach(code => hljs.highlightBlock(code) );
    window.scroll(0, 0);
  }

}
