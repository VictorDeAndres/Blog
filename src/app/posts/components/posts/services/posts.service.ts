import { Observable } from 'rxjs';

import * as _ from 'lodash';

export class PostsService {

  private _categories: Array<String> = [];
  private _currentPage = 0;
  private _PAGEPERLIST = 5;
  private _TOTALNUMBERPAGE: number;
  private _posts: any = [];

  constructor() {
    this._TOTALNUMBERPAGE = 1;
    // Generate _categories
    this._categories = [
      'Angular',
      'Arquitectura',
      'Buenas Practicas',
      'Desarrollo',
      'ExpressJS',
      'Firebase',
      'Fundamentos',
      'Git',
      'GraphQL',
      'Javascript',
      'Tips',
      'Unit Test',
      'WebApps',
      'WebComponents',
      'Webpack'
    ];
  }

  get TotalNumberPage(): number {
    return this._TOTALNUMBERPAGE;
  }

  set TotalNumberPage( numberOfPages: number ) {
    this._TOTALNUMBERPAGE = numberOfPages;
  }

  set Posts( posts: Array<Object> ) {
    this._posts = posts;
  }

  public INITIALPOSTS(): any {
    return [{
        'categories' : {
          'WebApps' : 'WebApps',
          'WebComponents' : 'WebComponents'
        },
        'publisheddate' : '03 de Marzo 2018',
        // tslint:disable-next-line:max-line-length
        'resume' : 'En este post voy a realizar una introducción a los WebComponents, un conjunto de caracteristicas aún en desarrollo por parte de la W3C que unidas a las especificaciones actuales de HTML y DOM nos permitirá desarrollar widgets o componentes reutilizables tanto para páginas como aplicaciones web. Este modelo de componentes nos permite realizar tanto la encapsulación como la interoperabilidad de nuestros componentes con otros',
        'title' : 'Introducción a los WebComponents',
        'url' : 'post/introduccion-webcomponents',
        'isEnabled': true
      }, {
        'categories' : {
          'Angular' : 'Angular',
          'Desarrollo' : 'Desarrollo',
          'WebApps' : 'WebApps',
          'WebComponents' : 'WebComponents'
        },
        'publisheddate' : '17 de Noviembre 2018',
        // tslint:disable-next-line:max-line-length
        'resume' : 'Hace ya un tiempo escribí un post introductorio a los webcomponents. Al final de aquel post indicaba varias librerías con las cuales podríamos diseñar nuestros propios webcomponents. Hoy, como continuación a aquel post vamos a añadir una nueva librería para realizar nuestros webcomponents. En esta ocasión vamos a utilizar una nueva funcionalidad disponible desde la versión 6 de angular, los @angular/elements',
        'title' : 'Desarrollo de WebComponents con Angular, @angular/elements',
        'url' : 'post/angular-webcomponents',
        'isEnabled': true
      }, {
        'categories' : {
          'Arquitectura': 'Arquitectura',
          'Desarrollo' : 'Desarrollo',
        },
        'publisheddate' : '09 de Marzo 2019',
        // tslint:disable-next-line:max-line-length
        'resume' : 'Tal vez hayas oído hablar de la arquitectura Serverless o Fass ( functions as a service ). En este post explicaré brevemente en qué consiste esta arquitectura.',
        'title' : 'Serverless. ¿Qué es?',
        'url' : 'post/serverless-que-es',
        'isEnabled': true
      }, {
        'categories' : {
          'Fundamentos' : 'Fundamentos',
          'Javascript' : 'Javascript',
          'Tips': 'Tips'
        },
        'publisheddate' : '30 de Marzo 2019',
        // tslint:disable-next-line:max-line-length
        'resume' : 'Como ya sabes una de las grandes ventajas de Javascript es que es una programación asíncrona. Pero al igual que es una gran ventaja también puede ser una fuente muy común de errores y confusiones para todo tipo de programadores. En este artículo vamos a ver como poder hacer bucles asíncronos.',
        'title' : 'JavaScript - ES6. Bucles Asíncronos',
        'url' : 'post/es6-bucles-asincronos',
        'isEnabled': true
      },
      {
        'categories' : {
          'Fundamentos' : 'Fundamentos',
          'Javascript' : 'Javascript',
        },
        'publisheddate' : '20 de Abril 2019',
        // tslint:disable-next-line:max-line-length
        'resume' : 'Como desarrollador seguro que en tu día a día utilizas los Arrays. Desde la llegada de la especificación ECMAScript 6 disponemos de un nuevo tipo de estructura, Set. En este post veremos en las diferencias entre los Arrays y los set. Además los principales métodos para utilizar esta nueva estructura.',
        'title' : 'JavaScript - ES6. Array VS Set',
        'url' : 'post/array-vs-set',
        'isEnabled': true
      }
    ];
  }

  getPosts(getPage: number = 0, filterByCategory: string = null) {
    const promise = new Promise((resolve, reject) => {
      resolve(this.getCurrentPosts(getPage, filterByCategory));
    }); // eof promise

    return promise;
  }

  getCurrentPosts(getPage: number = 0, filterByCategory: string = null) {
    this.removeFilters();

    // Filter by Category
    if ( filterByCategory ) {
      this._posts.forEach((currentPost, idx) => {
        // Check if _categories exits
        if (currentPost['categories']) {
          const resultLookFor = _.pickBy(currentPost['categories'], function(value, key) {
            return _.startsWith(key, filterByCategory);
          });
          if ( Object.keys(resultLookFor).length === 0  ) {
            currentPost['isEnabled'] = false;  // not show
          }
        } else {
          currentPost['isEnabled'] = false;  // not show
        }
        // eof Check if _categories exits
      });
    }

    // Apply filters
    const displayPost = _.reverse(_.filter(this._posts, 'isEnabled'));

    // Recalculate pages
    this._TOTALNUMBERPAGE = _.chunk(displayPost, this._PAGEPERLIST).length - 1; // Number of pages

    // Split Post to display
    return (this._posts === [] ? [] : _.chunk(displayPost, this._PAGEPERLIST)[getPage]);
  }

  getCategories(): object[] {
    return this._categories;
  }

  getCurrentPage(): number {
    return this._currentPage;
  }

  initializeDisplayPage(): any {
    this._currentPage = 0;
    return {
      initPage: true,
      lastPage: this._TOTALNUMBERPAGE > 0 ? false : true
    };
  }

  prevPage(): any {
    if ( --this._currentPage === 0 ) {
      return {
        _currentPage: this._currentPage,
        initPage: true
      };
    } else {
      return {
        _currentPage: this._currentPage,
        initPage: false
      };
    }
  }

  nextPage(): any {
    if ( ++this._currentPage === this._TOTALNUMBERPAGE ) {
      return {
        _currentPage: this._currentPage,
        lastPage: true
      };
    } else {
      return {
        _currentPage: this._currentPage,
        lastPage: false
      };
    }
  }

  removeFilters(): void {
    this._posts.forEach((currentPost, idx) => {
      currentPost['isEnabled'] = true;
    });
  }
}

