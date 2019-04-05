import { Injectable } from '@angular/core';

import * as _ from 'lodash';

export class PostsService {

  stringTest = '';
  posts: Object[] = [];
  categories: Object[] = [];
  archives: Object[] = [];
  currentPage = 0;
  PAGEPERLIST = 5;
  TOTALNUMBERPAGE: number;
  results: any;

  constructor() { }

  loadPost() {
    const promise = new Promise((resolve, reject) => {
      const responseDataObject = {
        '20170708' : {
          'categories' : {
            'Angular' : 'Angular',
            'Webpack' : 'Webpack'
          },
          'publisheddate' : '08 de Julio 2017',
          // tslint:disable-next-line:max-line-length
          'resume' : 'Angular-cli ha simplificado la vida de muchos desarrolladores, reduciendo el tiempo de inicio de un proyecto y dando la posibilidad de centrarse sólo en el código sin perder tiempo en las configuraciones.',
          'title' : 'Webpack en tus proyectos Angular',
          'url' : 'post/webpack-en-tus-proyectos-angular'
        },
        '20170724' : {
          'categories' : {
            'WebApps' : 'WebApps'
          },
          'publisheddate' : '24 de Julio 2017',
          // tslint:disable-next-line:max-line-length
          'resume' : 'En la actualidad las aplicaciones web se estan volviendo cada vez más grandes y complejas. Además de la parte visual, en muchas ocasiones se incluye la lógica o las reglas de negocio que anteriormente se incluían en la parte backend.',
          'title' : 'Micro FrontEnds',
          'url' : 'post/micro-frontends'
        },
        '20170817' : {
          'categories' : {
            'ExpressJS' : 'ExpressJS',
            'Firebase' : 'Firebase',
            'WebApps' : 'WebApps'
          },
          'publisheddate' : '11 de Agosto 2017',
          // tslint:disable-next-line:max-line-length
          'resume' : 'Hasta ahora sólo era posible alojar páginas estáticas en el hosting de Firebase. Pero con la nueva funcionalidad de Firebase, Cloud Functions o funciones dinámicas, podremos tener alojada un página web dinámica desarrollada con NodeJS y ExpressJS. A continuación veremos paso a paso cómo utilizar estas funciones de firebase para alojar nuestras aplicaciones.',
          'title' : 'Hosting de un proyecto ExpressJS en Firebase',
          'url' : 'post/hosting-expressjs-firebase'
        },
        '20170826' : {
          'categories' : {
            'Angular' : 'Angular',
            'Tips' : 'Tips'
          },
          'publisheddate' : '26 de Agosto 2017',
          // tslint:disable-next-line:max-line-length
          'resume' : 'Cuando comencé a desarrollar este blog, tenía varias motivos para ello. Y uno de ellos era practicar nuevas tecnologías, para a medida que avanzaba en ellas encontrar problemas que solucionar para mejorar mis conocimientos como desarrollador, además de poder compartirlos con la comunidad.',
          'title' : 'Posiciona vista al inicio nueva pagina Angular',
          'url' : 'post/top-angular-router-navigation'
        },
        '20170909' : {
          'categories' : {
            'GraphQL' : 'GraphQL',
            'WebApps' : 'WebApps'
          },
          'publisheddate' : '09 de Septiembre 2017',
          // tslint:disable-next-line:max-line-length
          'resume' : 'Cuando estás desarrollando habitualmente en la parte front end de un proyecto y utilizas habitualmente una rest api para establecer las comunicaciones con tu base de datos tal vez en algún momento habrás realizado la siguiente pregunta. ¿ Como organizo mis json de respuesta ?.',
          'title' : 'Introducción a GraphQL',
          'url' : 'post/introduccion-graphql'
        },
        '20170923' : {
          'categories' : {
            'Javascript' : 'Javascript'
          },
          'publisheddate' : '23 de Septiembre 2017',
          // tslint:disable-next-line:max-line-length
          'resume' : 'Durante cerca de mis últimos 10 años de vida laboral gran parte de los proyectos en los que he participado tanto como desarrollador como jefe de proyecto han estado relacionados con Internet o han sido escritos para ejecutarse en exploradores.',
          'title' : 'Javascritp un MUST que debes dominar',
          'url' : 'post/javascript-un-must-debes-dominar'
        },
        '20171007' : {
          'categories' : {
            'Buenas Practicas' : 'Buenas Practicas',
            'Fundamentos' : 'Fundamentos'
          },
          'publisheddate' : '07 de Octubre 2017',
          // tslint:disable-next-line:max-line-length
          'resume' : 'Durante cerca de mis últimos 10 años de vida laboral gran parte de los proyectos en los que he participado tanto como desarrollador como jefe de proyecto han estado relacionados con Internet o han sido escritos para ejecutarse en exploradores.',
          'title' : 'Introducción a Clean Code',
          'url' : 'post/clean-code-normas'
        },
        '20171027' : {
          'categories' : {
            'Fundamentos' : 'Fundamentos',
            'Unit Test' : 'Unit Test'
          },
          'publisheddate' : '27 de Octubre 2017',
          // tslint:disable-next-line:max-line-length
          'resume' : 'Cada vez desarrollamos programas más complejos y grandes, además cada vez interactúan más con otros sistemas, y normalmente suele haber cambios en los requisitos durante la fase del desarrollo. Esto produce que nuestras estimaciones iniciales de desarrollo sufren importantes desvíos o se cierren los desarrollos sin cumplir todas las expectativas creadas en un principio.',
          'title' : 'La importancia de los test unitarios',
          'url' : 'post/importancia-test-unitarios'
        },
        '20171110' : {
          'categories' : {
            'Fundamentos' : 'Fundamentos',
            'Javascript' : 'Javascript'
          },
          'publisheddate' : '10 de Noviembre 2017',
          // tslint:disable-next-line:max-line-length
          'resume' : 'En un post anterior, JavaScript un \'must\' que debes dominar, escribí sobre las razones por las que Javascript es un \'must\' que debes dominar. Y siguiendo aquel post voy a continuar escribiendo una serie de post sobre los conceptos básicos de Javascript que todo buen programador de Javascript debería conocer.',
          'title' : 'Fundamentos Javascript - Scope',
          'url' : 'post/javascript-scope'
        },
        '20180103' : {
          'categories' : {
            'Fundamentos' : 'Fundamentos',
            'Javascript' : 'Javascript'
          },
          'publisheddate' : '3 de Enero 2018',
          // tslint:disable-next-line:max-line-length
          'resume' : 'En este artículo voy a seguir escribiendo sobre los conceptos básicos que todo desarrollador de Javascript deber dominar para ser un auténtico Javascript ninja. En esta ocasión vamos a ver el concepto Hoisting.',
          'title' : 'Fundamentos Javascript - Hoisting',
          'url' : 'post/javascript-hoisting'
        },
        '20180120' : {
          'categories' : {
            'Desarrollo' : 'Desarrollo',
            'Fundamentos' : 'Fundamentos',
            'Git' : 'Git'
          },
          'publisheddate' : '20 de Enero 2018',
          // tslint:disable-next-line:max-line-length
          'resume' : 'En la actualidad cualquier desarrollador en su trabajo habitual utiliza un repositorio de código, si no es así debes empezar inmediatamente. El repositorio de código de facto que se suele utilizar es GIT, a través de servicios web como GitHub, GitLab, Bitbucket o Stash, ect… Aunque también podemos encontrarnos con repositorios de código como Subversion o TFS de Microsoft.',
          'title' : 'Git desde la linea de comandos',
          'url' : 'post/git_desde_linea_comandos'
        },
        '20180204' : {
          'categories' : {
            'Desarrollo' : 'Desarrollo',
            'Fundamentos' : 'Fundamentos',
            'Javascript' : 'Javascript'
          },
          'publisheddate' : '04 de Febrero 2018',
          // tslint:disable-next-line:max-line-length
          'resume' : 'En este post voy a realizar una introducción a las expresiones regulares desde el punto de vista para un desarrollador de Javascript. Esas expresiones que parecen algo incompresibles y complicadas pero que nos pueden ayudar ahorrar mucho tiempo si sabemos utilizarlas.',
          'title' : 'Introducción a expresiones regulares',
          'url' : 'post/introduccion-expresiones-regulares'
        },
        '20180303' : {
          'categories' : {
            'WebApps' : 'WebApps',
            'WebComponents' : 'WebComponents'
          },
          'publisheddate' : '03 de Marzo 2018',
          // tslint:disable-next-line:max-line-length
          'resume' : 'En este post voy a realizar una introducción a los WebComponents, un conjunto de caracteristicas aún en desarrollo por parte de la W3C que unidas a las especificaciones actuales de HTML y DOM nos permitirá desarrollar widgets o componentes reutilizables tanto para páginas como aplicaciones web. Este modelo de componentes nos permite realizar tanto la encapsulación como la interoperabilidad de nuestros componentes con otros',
          'title' : 'Introducción a los WebComponents',
          'url' : 'post/introduccion-webcomponents'
        },
        '20181117' : {
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
          'url' : 'post/angular-webcomponents'
        },
        '20190309' : {
          'categories' : {
            'Arquitectura': 'Arquitectura',
            'Desarrollo' : 'Desarrollo',
          },
          'publisheddate' : '09 de Marzo 2019',
          // tslint:disable-next-line:max-line-length
          'resume' : 'Tal vez hayas oído hablar de la arquitectura Serverless o Fass ( functions as a service ). En este post explicaré brevemente en qué consiste esta arquitectura.',
          'title' : 'Serverless. ¿Qué es?',
          'url' : 'post/serverless-que-es'
        },
        '20190330' : {
          'categories' : {
            'Fundamentos' : 'Fundamentos',
            'Javascript' : 'Javascript',
            'Tips': 'Tips'
          },
          'publisheddate' : '30 de Marzo 2019',
          // tslint:disable-next-line:max-line-length
          'resume' : 'Como ya sabes una de las grandes ventajas de Javascript es que es una programación asíncrona. Pero al igual que es una gran ventaja también puede ser una fuente muy común de errores y confusiones para todo tipo de programadores. En este artículo vamos a ver como poder hacer bucles asíncronos.',
          'title' : 'ES6 - Bucles Asíncronos',
          'url' : 'post/es6-bucles-asincronos'
        }
      };

      Object.keys(responseDataObject).map(idx => {
        this.posts.push(responseDataObject[idx]);
      });
      resolve(this.posts.length > 0 ? true : false);
    });

    return promise;
  }

  loadCategories() {

    const promise = new Promise((resolve, reject) => {

      const responseDataObject = {
        'Angular' : 'Angular',
        'Arquitectura' : 'Arquitectura',
        'Buenas Practicas' : 'Buenas Practicas',
        'Desarrollo' : 'Desarrollo',
        'ExpressJS' : 'ExpressJS',
        'Firebase' : 'Firebase',
        'Fundamentos' : 'Fundamentos',
        'Git' : 'Git',
        'GraphQL' : 'GraphQL',
        'Javascript' : 'Javascript',
        'Tips' : 'Tips',
        'Unit Test' : 'Unit Test',
        'WebApps' : 'WebApps',
        'WebComponents' : 'WebComponents',
        'Webpack' : 'Webpack'
      };

      Object.keys(responseDataObject).map(idx => {
        this.categories.push(idx);
      });
      resolve(this.categories.length > 0 ? true : false);
    });

    return promise;
  }

  loadAlldata() {

    const PROMISELOADPOST = this.loadPost();
    const PROMISELOADCATEGORIES = this.loadCategories();

    const promise = new Promise((resolve, reject) => {
      Promise.all([
        PROMISELOADPOST,
        PROMISELOADCATEGORIES]
        // PROMISELOADARCHIVE]
      ).then(responsesPromises => {
        this.TOTALNUMBERPAGE = _.chunk(this.posts, this.PAGEPERLIST).length - 1; // Number of pages
        resolve(true);
      }, reason => {
        reject(reason);
      });
    });

    return promise;
  }

  getPosts(getPage: number = 0, filterByCategory: string = null) {
    const promise = new Promise((resolve, reject) => {
      // Check if posts exits
      if ( this.posts.length === 0 ) {
        this.loadAlldata()
          .then (
            () => {
              resolve(this.getCurrentPosts(getPage, filterByCategory));
            },
            () => {
              console.error('Error');
            }
          );
      } else {
        resolve(this.getCurrentPosts(getPage, filterByCategory));
      } // eof if ( this.posts = [] ){

    }); // eof promise

    return promise;
  }

  getCurrentPosts(getPage: number = 0, filterByCategory: string = null) {
    this.removeFilters();

    // Filter by Category
    if ( filterByCategory ) {
      this.posts.forEach((currentPost, idx) => {
        // Check if categories exits
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
        // eof Check if categories exits
      });
    }

    // Apply filters
    const displayPost = _.reverse(_.filter(this.posts, 'isEnabled'));

    // Recalculate pages
    this.TOTALNUMBERPAGE = _.chunk(displayPost, this.PAGEPERLIST).length - 1; // Number of pages

    // Split Post to display
    return (this.posts === [] ? [] : _.chunk(displayPost, this.PAGEPERLIST)[getPage]);
  }

  getCategories(): object[] {
    return this.categories;
  }

  getCurrentPage(): number {
    return this.currentPage;
  }

  initializeDisplayPage(): any {
    this.currentPage = 0;
    return {
      initPage: true,
      lastPage: this.TOTALNUMBERPAGE > 0 ? false : true
    };
  }

  prevPage(): any {
    if ( --this.currentPage === 0 ) {
      return {
        currentPage: this.currentPage,
        initPage: true
      };
    } else {
      return {
        currentPage: this.currentPage,
        initPage: false
      };
    }
  }

  nextPage(): any {
    if ( ++this.currentPage === this.TOTALNUMBERPAGE ) {
      return {
        currentPage: this.currentPage,
        lastPage: true
      };
    } else {
      return {
        currentPage: this.currentPage,
        lastPage: false
      };
    }
  }

  removeFilters(): void {
    this.posts.forEach((currentPost, idx) => {
      currentPost['isEnabled'] = true;
    });
  }
}

