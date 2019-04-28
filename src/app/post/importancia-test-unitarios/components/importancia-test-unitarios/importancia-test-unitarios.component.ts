import { Component, OnInit } from '@angular/core';

import { ElementRef, AfterViewInit} from '@angular/core';
import { SeoService } from './../../../../shared/services/seo.service';

import * as hljs from 'highlight.js';
@Component({
  selector: 'blog-importancia-test-unitarios',
  templateUrl: './importancia-test-unitarios.component.html',
  styleUrls: ['./../../../shared/style/post.common.component.scss']
})
export class ImportanciaTestUnitariosComponent implements OnInit, AfterViewInit {

  public schema;
  public titlepost = 'La importancia de los test unitarios';
  public publishDate = '27 de Octubre 2017';
  public url = 'importancia-test-unitarios';
  public postCategories: string[] = ['Fundamentos', 'Unit Test'];

  constructor(
    private _elemenRefnRefnRef: ElementRef,
    private _seoService: SeoService
  ) {
    const SEO = {};
    SEO['author'] = 'Victor de Andres';
    SEO['robots'] = 'Index, Follow';
    // Page Tags
    SEO['title'] = this.titlepost;
    SEO['keywords'] = 'clean code, buenas practicas, test unitarios, unit test, test';
    // tslint:disable-next-line:max-line-length
    SEO['description'] = 'Cada vez desarrollamos programas más complejos y grandes, cada vez interactúan más con otros sistemas, y normalmente suele haber cambios en los requisitos durante la fase del desarrollo. Para poder desarrollar unos programas sólidos y escalables son recomendables los test unitarios.';
    SEO['canonical'] = `https://victordeandres.es/post/${this.url}`;
    // Social Tags
    SEO['og:type'] = SEO['article'];
    SEO['og:title'] = SEO['title'];
    SEO['og:description'] = SEO['description'];
    SEO['og:image'] = 'https://victordeandres.es/assets/images/posts/units_test.png';
    SEO['og:url'] = SEO['canonical'];
    SEO['og:site_name'] = SEO['Victor de Andrés'];
    this._seoService.addHeaderLabels(SEO);
  }

  ngOnInit() {
    this.schema = {
      '@context': 'http://schema.org',
      '@type': 'BlogPosting',
      'headline': 'La importancia de los test unitarios',
      'alternativeHeadline': 'Ventajas de realizar test unitarios en los desarrollos',
      'image': 'https://victordeandres.es/assets/images/posts/units_test.png',
      'editor': 'Victor de Andres',
      'genre': 'front end software development',
      'keywords': 'clean code, buenas practicas, test unitarios, unit test, test',
      'wordcount': '882',
      'url': 'https://victordeandres.es/post/importancia-test-unitarios',
      'datePublished': '2017-10-27',
      'dateCreated': '2017-10-27',
      'dateModified': '2017-10-27',
      // tslint:disable-next-line:max-line-length
      'description': 'Cada vez desarrollamos programas más complejos y grandes, cada vez interactúan más con otros sistemas, y normalmente suele haber cambios en los requisitos durante la fase del desarrollo. Para poder desarrollar unos programas sólidos y escalables son recomendables los test unitarios.',
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
    this._elemenRefnRefnRef.nativeElement.querySelectorAll('pre code').forEach(code => hljs.highlightBlock(code) );
        if ( typeof navigator !== 'undefined' ) {
      window.scroll(0, 0);
    }
  }

}
