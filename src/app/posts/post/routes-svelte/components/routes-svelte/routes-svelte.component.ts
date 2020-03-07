import { Component, OnInit } from '@angular/core';
import { ElementRef, AfterViewInit} from '@angular/core';
import { SeoService } from './../../../../../shared/services/seo.service';

import * as hljs from 'highlight.js';

@Component({
  selector: 'blog-routes-svelte',
  templateUrl: './routes-svelte.component.html',
  styleUrls: ['./../../../../shared/style/post.common.component.scss']
})
export class RoutesSvelteComponent implements OnInit, AfterViewInit {

  public schema;
  public titlepost = 'Crea tu propio "routing" en Svelte.';
  public publishDate = '4 de Febrero 2020';
  public url = 'routes-svelte';
  public postCategories: string[] = ['Desarrollo', 'Svelte', 'WebApps'];

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
    SEO['keywords'] = 'tutorial, desarrollo, svelte, routes, rutas';
    // tslint:disable-next-line:max-line-length
    SEO['description'] = 'Svelte no tiene un gestor de rutas propio, y tampoco existe un standard de facto. Por ello vamos a desarrollar nuestro gestor de rutas para svelte. El funcionamiento de nuestro gestor de rutas será muy sencillo. Imaginemos que estamos desarrollando una página spa donde en la parte superior tenemos un menú, y queremos ir variando el cuerpo de nuestra página según las distintas opciones de nuestro menú.';
    SEO['canonical'] = `https://victordeandres.es/post/${this.url}`;
    // Social Tags
    SEO['og:type'] = 'article';
    SEO['og:title'] = SEO['title'];
    SEO['og:description'] = SEO['description'];
    SEO['og:image'] = 'https://images.unsplash.com/photo-1535745122259-f1e187953c4c?q=75&fm=jpg';
    SEO['og:url'] = SEO['canonical'];
    SEO['og:site_name'] = 'Victor de Andrés';
    this._seoService.addHeaderLabels(SEO);
  }

  ngOnInit() {
    this.schema = {
      '@context': 'http://schema.org',
      '@type': 'BlogPosting',
      'headline': 'Crea tu propio "routing" en Svelte',
      'alternativeHeadline': 'Desarrolla tu propio sistema de rutas en Svelte',
      'image': 'https://images.unsplash.com/photo-1535745122259-f1e187953c4c?q=75&fm=jpg',
      'editor': 'Victor de Andres',
      'genre': 'front end software development',
      'keywords': 'tutorial, desarrollo, svelte, routes, rutas',
      'wordcount': '1089',
      'url': 'https://victordeandres.es/post/routes-svelte',
      'datePublished': '2020-02-04',
      'dateCreated': '2020-02-04',
      'dateModified': '2020-02-04',
      // tslint:disable-next-line:max-line-length
      'description': 'Svelte no tiene un gestor de rutas propio, y tampoco existe un standard de facto. Por ello vamos a desarrollar nuestro gestor de rutas para svelte. El funcionamiento de nuestro gestor de rutas será muy sencillo. Imaginemos que estamos desarrollando una página spa donde en la parte superior tenemos un menú, y queremos ir variando el cuerpo de nuestra página según las distintas opciones de nuestro menú.',
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

