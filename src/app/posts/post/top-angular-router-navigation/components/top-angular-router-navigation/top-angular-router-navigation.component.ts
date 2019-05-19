import { Component, OnInit } from '@angular/core';
import { ElementRef, AfterViewInit} from '@angular/core';
import { SeoService } from './../../../../../shared/services/seo.service';

import * as hljs from 'highlight.js';

@Component({
  selector: 'blog-top-angular-router-navigation',
  templateUrl: './top-angular-router-navigation.component.html',
 styleUrls: ['./../../../../shared/style/post.common.component.scss']
})
export class TopAngularRouterNavigationComponent implements OnInit, AfterViewInit {

  public schema;
  public titlepost = 'Posiciona vista al inicio nueva pagina Angular';
  public publishDate = '26 de Agosto 2017';
  public url = 'top-angular-router-navigation';
  public postCategories: string[] = ['Angular', 'Tips'];

  constructor(
    private _elemenRef: ElementRef,
    private _seoService: SeoService
  ) {
    const SEO = {};
    SEO['author'] = 'Victor de Andres';
    SEO['robots'] = 'Index, Follow';
    // Page Tags
    SEO['title'] = this.titlepost;
    SEO['keywords'] = 'angular tips webapp posicion pagina spa';
    // tslint:disable-next-line:max-line-length
    SEO['description'] = 'Un motivo para comenzar este blog era practicar nuevas tecnologías, para a medida que avanzaba en ellas mejorar mis conocimientos como desarrollador. En este post veremos cómo posicionar el cursor al principio de la ventana cada vez que abramos una nueva ventana en angular.';
    SEO['canonical'] = `https://victordeandres.es/post/${this.url}`;
    // Social Tags
    SEO['og:type'] = 'article';
    SEO['og:title'] = SEO['title'];
    SEO['og:description'] = SEO['description'];
    SEO['og:image'] = 'https://victordeandres.es/assets/images/posts/angulartips.png';
    SEO['og:url'] = SEO['canonical'];
    SEO['og:site_name'] = 'Victor de Andrés';
    this._seoService.addHeaderLabels(SEO);
  }

  ngOnInit() {
    this.schema = {
      '@context': 'http://schema.org',
      '@type': 'BlogPosting',
      'headline': 'Posiciona vista al inicio nueva pagina Angular',
      'alternativeHeadline': 'Posiciona el cursor al inicio de la pagina cuando se carga una nueva ruta en Angular',
      'image': 'https://victordeandres.es/assets/images/posts/angulartips.png',
      'editor': 'Victor de Andres',
      'genre': 'front end software development',
      'keywords': 'angular tips webapp posicion inicio pagina spa',
      'wordcount': '513',
      'url': 'https://victordeandres.es/post/top-angular-router-navigation',
      'datePublished': '2017-08-26',
      'dateCreated': '2017-08-26',
      'dateModified': '2017-08-26',
      // tslint:disable-next-line:max-line-length
      'description': 'Un motivo para comenzar este blog era practicar nuevas tecnologías, para a medida que avanzaba en ellas mejorar mis conocimientos como desarrollador. En este post veremos cómo posicionar el cursor al principio de la ventana cada vez que abramos una nueva ventana en angular.',
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
