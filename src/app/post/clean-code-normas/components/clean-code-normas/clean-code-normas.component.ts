import { Component, OnInit } from '@angular/core';

import { ElementRef, AfterViewInit} from '@angular/core';
import { SeoService } from './../../../../shared/services/seo.service';

import * as hljs from 'highlight.js';

@Component({
  selector: 'blog-clean-code-normas',
  templateUrl: './clean-code-normas.component.html',
  styleUrls: ['./../../../shared/style/post.common.component.scss']
})

export class CleanCodeNormasComponent implements OnInit, AfterViewInit {

  public schema;
  public titlepost = 'Introduccion Clean Code (I)';
  public publishDate = '07 de Octubre 2017';
  public url = 'clean-code-normas';
  public postCategories: string[] = ['Fundamentos', 'Buenas Practicas'];

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
    SEO['keywords'] = 'clean code, buenas practicas, fundamentos';
    SEO['description'] = 'Todos, o por lo menos la gran mayoría, queremos ser mejores profesionales, y queremos hacer las cosas mejor. El desarrollo del software es un área que avanza muy deprisa. Cada vez con más herramientas y nuevas tecnologías, pero independientemente de las herramientas que utilicemos o el lenguaje o lenguajes que utilizamos siempre tenemos una parte que subyace, el escribir código.';
    SEO['canonical'] = `https://victordeandres.es/post/${this.url}`;
    // Social Tags
    SEO['og:type'] = 'article';
    SEO['og:title'] = SEO['title'];
    SEO['og:description'] = SEO['description'];
    SEO['og:image'] = 'https://victordeandres.es/assets/images/posts/CleanCode.png';
    SEO['og:url'] = SEO['canonical'];
    SEO['og:site_name'] = 'Victor de Andrés';

    this._seoService.addHeaderLabels(SEO);
  }

  ngOnInit() {
    this.schema = {
      '@context': 'http://schema.org',
      '@type': 'BlogPosting',
      'headline': 'Introduccion a Clean Code',
      'alternativeHeadline': 'Introducción a Clean Code - Las normas',
      'image': 'https://victordeandres.es/assets/images/posts/CleanCode.png',
      'editor': 'Victor de Andres',
      'genre': 'front end software development',
      'keywords': 'clean code, buenas practicas, fundamentos',
      'wordcount': '1023',
      'url': 'https://victordeandres.es/post/clean-code-normas',
      'datePublished': '2017-10-07',
      'dateCreated': '2017-10-07',
      'dateModified': '2017-10-07',
      'description': 'Todos, o por lo menos la gran mayoría, queremos ser mejores profesionales, y queremos hacer las cosas mejor. El desarrollo del software es un área que avanza muy deprisa. Cada vez con más herramientas y nuevas tecnologías, pero independientemente de las herramientas que utilicemos o el lenguaje o lenguajes que utilizamos siempre tenemos una parte que subyace, el escribir código.',
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
