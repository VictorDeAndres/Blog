import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
  path: 'es6-bucles-asincronos',
  loadChildren: './../post/es6-bucles-asincronos/es6-bucles-asincronos.module#Es6BuclesAsincronosModule'
}, {
  path: 'angular-webcomponents',
  loadChildren: './angular-webcomponents/angular-webcomponents.module#AngularWebcomponentsModule'
}, {
  path: 'introduccion-webcomponents',
  loadChildren: './introduccion-webcomponents/introduccion-webcomponents.module#IntroduccionWebcomponentsModule'
}, {
  path: 'introduccion-expresiones-regulares',
  loadChildren: './introduccion-expresiones-regulares/introduccion-expresiones-regulares.module#IntroduccionExpresionesRegularesModule'
}, {
  path: 'git_desde_linea_comandos',
  loadChildren: './git-desde-linea-comandos/git-desde-linea-comandos.module#GitDesdeLineaComandosModule'
}, {
  path: 'javascript-hoisting',
  loadChildren: './javascript-hoisting/javascript-hoisting.module#JavascriptHoistingModule'
}, {
  path: 'javascript-scope',
  loadChildren: './javascript-scope/javascript-scope.module#JavascriptScopeModule'
}, {
  path: 'importancia-test-unitarios',
  loadChildren: './importancia-test-unitarios/importancia-test-unitarios.module#ImportanciaTestUnitariosModule'
}, {
  path: 'clean-code-normas',
  loadChildren: './clean-code-normas/clean-code-normas.module#CleanCodeNormasModule'
}, {
  path: 'javascript-un-must-debes-dominar',
  loadChildren: './javascript-un-must/javascript-un-must.module#JavascriptUnMustModule'
}, {
  path: 'introduccion-graphql',
  loadChildren: './introduccion-graphql/introduccion-graphql.module#IntroduccionGraphqlModule'
}, {
  path: 'top-angular-router-navigation',
  loadChildren: './top-angular-router-navigation/top-angular-router-navigation.module#TopAngularRouterNavigationModule'
}, {
  path: 'hosting-expressjs-firebase',
  loadChildren: './hosting-expressjs-firebase/hosting-expressjs-firebase.module#HostingExpressjsFirebaseModule'
}, {
  path: 'micro-frontends',
  loadChildren: './micro-frontends/micro-frontends.module#MicroFrontendsModule'
}, {
  path: 'webpack-en-tus-proyectos-angular',
  // tslint:disable-next-line:max-line-length
  loadChildren: './web-pack-en-tus-proyectos-angular/web-pack-en-tus-proyectos-angular.module#WebPackEnTusProyectosAngularModule'
}, {
  path: 'serverless-que-es',
  loadChildren: './que-es-serverless/que-es-serverless.module#QueEsServerlessModule'
}];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule { }
