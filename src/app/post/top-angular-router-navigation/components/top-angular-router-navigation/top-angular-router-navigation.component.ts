import { Component, OnInit } from '@angular/core';
import { ElementRef, AfterViewInit} from '@angular/core';
import { SeoService } from './../../../../shared/services/seo.service';

import * as hljs from 'highlight.js';

@Component({
  selector: 'blog-top-angular-router-navigation',
  templateUrl: './top-angular-router-navigation.component.html',
  styleUrls: ['./../../../shared/style/post.common.component.scss']
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
    SEO['description'] = 'Angular tip para situar la pagina al inico de pantalla cuando se cambia de ruta';
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
      'description': 'Angular tip para situar la pagina al inico de pantalla cuando se cambia de ruta',
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
