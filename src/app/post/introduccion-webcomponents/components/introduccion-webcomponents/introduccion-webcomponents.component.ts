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
    private eltRef: ElementRef,
    private seoService: SeoService
  ) {
    const SEO = {};
    SEO['author'] = 'Victor de Andres';
    SEO['robots'] = 'Index, Follow';
    // Page Tags
    SEO['title'] = this.titlepost;
    SEO['keywords'] = 'webcomponents, webapp, polymer, x-tag';
    SEO['description'] = 'Introduccion a webcomponents';
    SEO['canonical'] = `https://victordeandres.es/post/${this.url}`;
    // Social Tags
    SEO['og:type'] = 'article';
    SEO['og:title'] = SEO['title'];
    SEO['og:description'] = SEO['description'];
    SEO['og:image'] = 'https://victordeandres.es/assets/images/posts/webcomponents.png';
    SEO['og:url'] = SEO['canonical'];
    SEO['og:site_name'] = 'Victor de Andrés';
    this.seoService.addHeaderLabels(SEO);
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
      'description': 'Introduccion y principales caracteristicas de los webcomponents',
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

