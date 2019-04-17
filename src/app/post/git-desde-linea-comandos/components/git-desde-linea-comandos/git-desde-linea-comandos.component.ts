import { Component, OnInit, } from '@angular/core';

import { ElementRef, AfterViewInit} from '@angular/core';
import { SeoService } from './../../../../shared/services/seo.service';

import * as hljs from 'highlight.js';

@Component({
  selector: 'blog-git-desde-linea-comandos',
  templateUrl: './git-desde-linea-comandos.component.html',
  styleUrls: ['./../../../shared/style/post.common.component.scss']
})

export class GitDesdeLineaComandosComponent implements OnInit, AfterViewInit {

  public schema;
  public titlepost = 'Git desde la linea de comandos';
  public publishDate = '20 de Enero 2018';
  public url = 'git_desde_linea_comandos';
  public postCategories: string[] = ['Git', 'Fudamentos', 'Desarrollo'];

  constructor(
    private _elemenRef: ElementRef,
    private _seoService: SeoService
  ) {
    const SEO = {};
    SEO['author'] = 'Victor de Andres';
    SEO['robots'] = 'Index, Follow';
    // Page Tags
    SEO['title'] = this.titlepost;
    SEO['keywords'] = 'comandos, git, push, pull, branch, clone, fetch, checkout';
    SEO['description'] = 'Lista de comandos basicos para utilizar git desde la linea de comandos';
    SEO['canonical'] = 'https://victordeandres.es/post/' + this.url;
    // Social Tags
    SEO['og:type'] = SEO['article'];
    SEO['og:title'] = SEO['title'];
    SEO['og:description'] = SEO['description'];
    SEO['og:image'] = 'https://victordeandres.es/assets/images/posts/git_linea_comandos.png';
    SEO['og:url'] = SEO['canonical'];
    SEO['og:site_name'] = SEO['Victor de Andrés'];
    this._seoService.addHeaderLabels(SEO);
  }

  ngOnInit() {
    this.schema = {
      '@context': 'http://schema.org',
      '@type': 'BlogPosting',
      'headline': 'Git desde la linea de comandos',
      'alternativeHeadline': 'Comandos básicos para utilizar GIT desde la línea de comandos',
      'image': 'https://victordeandres.es/assets/images/posts/git_linea_comandos.png',
      'editor': 'Victor de Andres',
      'genre': 'front end software development',
      'keywords': 'comandos, git, push, pull, branch, clone, fetch, checkout',
      'wordcount': '1691',
      'url': 'https://victordeandres.es/post/git_desde_linea_comandos',
      'datePublished': '2018-01-20',
      'dateCreated': '2018-01-20',
      'dateModified': '2018-01-20',
      'description': 'Lista de comandos basicos para utilizar git desde la linea de comandos',
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
