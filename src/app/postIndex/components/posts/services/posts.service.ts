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
      }, {
        'categories' : {
          'Angular': 'Angular',
          'Desarrollo': 'Desarrollo',
          'WebApps': 'WebApps'
        },
        'publisheddate' : '12 de Mayo 2019',
        // tslint:disable-next-line:max-line-length
        'resume' : 'Estamos acostumbrados a recibir notificaciones de nuestro calendario, correo, ect, … tanto en nuestros smartphones, como en nuestros ordenadores. En este post veremos cómo implementar esta tecnología en una página web desarrollada con Angular.',
        'title' : 'Implementación de notificaciones push en Angular',
        'url' : 'post/angular-push-notifications',
        'isEnabled': true
      }, {
        'categories' : {
          'Fundamentos' : 'Fundamentos',
          'Javascript' : 'Javascript'
        },
        'publisheddate' : '02 de Junio 2019',
        // tslint:disable-next-line:max-line-length
        'resume' : 'Una de las novedades de ES6 – ECMAScript2015 fue añadir un nuevo tipo de dato, symbol. Es verdad que desde el lanzamiento de este nuevo standard de javascript allá por Junio de 2015 ha pasado bastante tiempo, pero al igual que otras características de ES6 las cuales utilizamos habitualmente. Por ejemplo las arrow functions, los template strings, o el uso de let y const para definir variables, por poner sólo alguno de los ejemplos, el uso de symbol es residual por no decir inexistente.',
        'title' : 'Fundamentos Javascript - ES6 - Symbols',
        'url' : 'post/javascript-symbols',
        'isEnabled': true
      }, {
        'categories' : {
          'Fundamentos' : 'Fundamentos',
          'Javascript' : 'Javascript'
        },
        'publisheddate' : '07 de Septiembre 2019',
        // tslint:disable-next-line:max-line-length
        'resume' : 'Por definición una función es un procedimiento, un conjunto de sentencias que realizan una tarea o calculan un valor. En Javascript este es uno de los conceptos más importantes y versátiles de este lenguaje de programación.',
        'title' : 'Funciones en Javascript',
        'url' : 'post/javascript-functions',
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

