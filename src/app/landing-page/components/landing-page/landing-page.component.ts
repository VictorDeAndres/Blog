import { Component, OnInit } from '@angular/core';
import { SeoService } from './../../../shared/services/seo.service';

@Component({
  selector: 'blog-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: [
    './landing-page.component.scss',
    './landing-page.hamburger.component.scss'
  ]
})
export class LandingPageComponent implements OnInit {

public schema;

  constructor(
    private _seoService: SeoService
  ) {
    const SEO = {};
    // Fixed
    SEO['author'] = 'Victor de Andres';
    SEO['robots'] = 'Index, Follow';
    // Page Tags
    SEO['title'] = 'Victor de Andres';
    // tslint:disable-next-line:max-line-length
    SEO['keywords'] = 'victor de andres, blog, team lead, software engineering, front end, developer, fullstack, mean, javascript, angular, python, docker';
    SEO['description'] = 'Blog Victor de Andres. Software Engineering, Full Stack Developer',
    SEO['canonical'] = 'https://victordeandres.es/';
    this._seoService.addHeaderLabels(SEO);
  }

  ngOnInit() {
    this.schema = {
      '@context': 'http://schema.org',
      '@type': 'Person',
      'name': 'Victor de Andres',
      'url': 'https://victordeandres.es',
      'jobTitle': 'Software Engineer | Full Stack Developer',
      'gender': 'male',
      'image': 'https://victordeandres.es/assets/images/LogoFondoBlanco.png',
      'sameAs': [
          'http://es.linkedin.com/in/vdeandres',
          'https://github.com/VictorDeAndres',
          'https://twitter.com/victor_deandres'
      ]
    };
  }

}
