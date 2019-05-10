import { Component, OnInit } from '@angular/core';
import { ElementRef, AfterViewInit} from '@angular/core';
import { SeoService } from './../../../../shared/services/seo.service';

import * as hljs from 'highlight.js';

@Component({
  selector: 'blog-angular-webcomponent',
  templateUrl: './angular-webcomponent.component.html',
  styleUrls: ['./../../../shared/style/post.common.component.scss']
})
export class AngularWebcomponentComponent implements OnInit, AfterViewInit {

  public schema;
  public titlepost = 'Desarrollo de WebComponents con Angular, @angular/elements';
  public publishDate = '17 de Noviembre 2018';
  public url = 'angular-webcomponents';
  public postCategories: string[] = ['Angular', 'Desarrollo', 'WebComponents', 'WebApps'];

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
    SEO['keywords'] = 'desarrollo, webcomponents, angular, @angular/elements, pollyfills';
    // tslint:disable-next-line:max-line-length
    SEO['description'] = 'Los WebComponents son un conjunto de características que permite desarrollar widgets o componentes reutilizables tanto para páginas como aplicaciones web. En este post veremos cómo crear nuestros propios WebComponenets con una funcionalidad disponible de la versión 6 de Angular, los @angular/elements.';
    SEO['canonical'] = `https://victordeandres.es/post/${this.url}`;
    // Social Tags
    SEO['og:type'] = 'article';
    SEO['og:title'] = SEO['title'];
    SEO['og:description'] = SEO['description'];
    SEO['og:image'] = 'https://images.unsplash.com/photo-1426927308491-6380b6a9936f?q=75&fm=jpg';
    SEO['og:url'] = SEO['canonical'];
    SEO['og:site_name'] = 'Victor de Andrés';
    this._seoService.addHeaderLabels(SEO);
  }

  ngOnInit() {
    this.schema = {
      '@context': 'http://schema.org',
      '@type': 'BlogPosting',
      'headline': 'Desarrollo de WebComponents con Angular, @angular/elements',
      'alternativeHeadline': 'Tutorial para desarrollar webComponents reutilizables con @angular/elements',
      'image': 'https://images.unsplash.com/photo-1426927308491-6380b6a9936f?q=75&fm=jpg',
      'editor': 'Victor de Andres',
      'genre': 'front end software development',
      'keywords': 'desarrollo, webcomponents, angular, @angular/elements, pollyfills',
      'wordcount': '1114',
      'url': 'https://victordeandres.es/post/angular-webcomponents',
      'datePublished': '2018-11-17',
      'dateCreated': '2018-11-17',
      'dateModified': '2018-11-17',
      // tslint:disable-next-line:max-line-length
      'description': 'Los WebComponents son un conjunto de características que permite desarrollar widgets o componentes reutilizables tanto para páginas como aplicaciones web. En este post veremos cómo crear nuestros propios WebComponenets con una funcionalidad disponible de la versión 6 de Angular, los @angular/elements.',
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
