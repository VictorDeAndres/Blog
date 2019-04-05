import { Component, OnInit } from '@angular/core';
import { ElementRef, AfterViewInit} from '@angular/core';
import { SeoService } from './../../../../shared/services/seo.service';

import * as hljs from 'highlight.js';
@Component({
  selector: 'blog-javascript-un-must',
  templateUrl: './javascript-un-must.component.html',
  styleUrls: ['./../../../shared/style/post.common.component.scss']
})
export class JavascriptUnMustComponent implements OnInit, AfterViewInit {

  public schema;
  public titlepost = 'Javascritp un "MUST"';
  public publishDate = '23 de Septiembre 2017';
  public url = 'javascript-un-must-debes-dominar';
  public postCategories: string[] = ['Javascript'];

  constructor(
    private eltRef: ElementRef,
    private seoService: SeoService
  ) {
    const SEO = {};
    SEO['author'] = 'Victor de Andres';
    SEO['robots'] = 'Index, Follow';
    // Page Tags
    SEO['title'] = this.titlepost;
    SEO['keywords'] = 'javascript, JS';
    SEO['description'] = 'Web Developer: Javascript un must que todo desarrollodor web debe dominar';
    SEO['canonical'] = `https://victordeandres.es/post/${this.url}`;
    // Social Tags
    SEO['og:type'] = 'article';
    SEO['og:title'] = SEO['title'];
    SEO['og:description'] = SEO['description'];
    SEO['og:image'] = 'https://victordeandres.es/assets/images/posts/javascript_ninja.png';
    SEO['og:url'] = SEO['canonical'];
    SEO['og:site_name'] = 'Victor de Andrés';
    this.seoService.addHeaderLabels(SEO);
  }

  ngOnInit() {
    this.schema = {
      '@context': 'http://schema.org',
      '@type': 'BlogPosting',
      'headline': 'Javascritp un MUST',
      'alternativeHeadline': 'Razones por las que Javascript es un "must" que debes dominar',
      'image': 'https://victordeandres.es/assets/images/posts/javascript_ninja.png',
      'editor': 'Victor de Andres',
      'genre': 'front end software development',
      'keywords': 'javascript, JS',
      'wordcount': '915',
      'url': 'https://victordeandres.es/post/javascript-un-must-debes-dominar',
      'datePublished': '2017-09-23',
      'dateCreated': '2017-09-23',
      'dateModified': '2017-09-233',
      'description': 'Web Developer: Javascript un must que todo desarrollodor web debe dominar',
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



