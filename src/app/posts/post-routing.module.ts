import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
  path: 'es6-bucles-asincronos',
  loadChildren: './post/es6-bucles-asincronos/es6-bucles-asincronos.module#Es6BuclesAsincronosModule'
}, {
  path: 'angular-webcomponents',
  loadChildren: './post/angular-webcomponents/angular-webcomponents.module#AngularWebcomponentsModule'
}, {
  path: 'introduccion-webcomponents',
  loadChildren: './post/introduccion-webcomponents/introduccion-webcomponents.module#IntroduccionWebcomponentsModule'
}, {
  path: 'introduccion-expresiones-regulares',
  loadChildren: './post/introduccion-expresiones-regulares/introduccion-expresiones-regulares.module#IntroduccionExpresionesRegularesModule'
}, {
  path: 'git_desde_linea_comandos',
  loadChildren: './post/git-desde-linea-comandos/git-desde-linea-comandos.module#GitDesdeLineaComandosModule'
}, {
  path: 'javascript-hoisting',
  loadChildren: './post/javascript-hoisting/javascript-hoisting.module#JavascriptHoistingModule'
}, {
  path: 'javascript-scope',
  loadChildren: './post/javascript-scope/javascript-scope.module#JavascriptScopeModule'
}, {
  path: 'importancia-test-unitarios',
  loadChildren: './post/importancia-test-unitarios/importancia-test-unitarios.module#ImportanciaTestUnitariosModule'
}, {
  path: 'clean-code-normas',
  loadChildren: './post/clean-code-normas/clean-code-normas.module#CleanCodeNormasModule'
}, {
  path: 'javascript-un-must-debes-dominar',
  loadChildren: './post/javascript-un-must/javascript-un-must.module#JavascriptUnMustModule'
}, {
  path: 'introduccion-graphql',
  loadChildren: './post/introduccion-graphql/introduccion-graphql.module#IntroduccionGraphqlModule'
}, {
  path: 'top-angular-router-navigation',
  loadChildren: './post/top-angular-router-navigation/top-angular-router-navigation.module#TopAngularRouterNavigationModule'
}, {
  path: 'hosting-expressjs-firebase',
  loadChildren: './post/hosting-expressjs-firebase/hosting-expressjs-firebase.module#HostingExpressjsFirebaseModule'
}, {
  path: 'micro-frontends',
  loadChildren: './post/micro-frontends/micro-frontends.module#MicroFrontendsModule'
}, {
  path: 'webpack-en-tus-proyectos-angular',
  // tslint:disable-next-line:max-line-length
  loadChildren: './post/web-pack-en-tus-proyectos-angular/web-pack-en-tus-proyectos-angular.module#WebPackEnTusProyectosAngularModule'
}, {
  path: 'serverless-que-es',
  loadChildren: './post/que-es-serverless/que-es-serverless.module#QueEsServerlessModule'
}, {
  path: 'array-vs-set',
  loadChildren: './post/array-vs-set/array-vs-set.module#ArrayVsSetModule'
}, {
  path: 'angular-push-notifications',
  loadChildren: './post/angular-push-notification/angular-push-notification.module#AngularPushNotificationModule'
}, {
  path: 'javascript-symbols',
  loadChildren: './post/javascript-symbols/javascript-symbols.module#JavascriptSymbolsModule'
}, {
  path: 'javascript-functions',
  loadChildren: './../posts/post/javascript-functions/javascript-functions.module#JavascriptFunctionsModule'
}, {
  path: 'servidor-push-notifications',
  loadChildren: './../posts/post/servidor-push-notifications/servidor-push-notifications.module#ServidorPushNotificationsModule'
}, {
  path: 'routes-svelte',
  loadChildren: './../posts/post/routes-svelte/routes-svelte.module#RoutesSvelteModule'
}];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule { }
