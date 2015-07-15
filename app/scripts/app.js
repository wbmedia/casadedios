'user strict';

angular.module('app', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider,$locationProvider){
 $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/views/home.html'
      })
      .state('ministerio', {
        url: '/ministerio',
        templateUrl: 'app/views/ministerio.html'
      })
      .state('instituto-biblico', {
        url: '/instituto-biblico',
        templateUrl: 'app/views/instituto.html'
      })
      .state('multimedia', {
        url: '/multimedia',
        templateUrl: 'app/views/multimedia.html'
      })
      .state('templo', {
        url: '/templo',
        templateUrl: 'app/views/nuevo-templo.html'
      })
      .state('contacto', {
        url: '/contacto',
        templateUrl: 'app/views/contacto.html'
      })
      ;

      $urlRouterProvider.otherwise('/');

      $locationProvider.html5Mode(true);


});
