'use strict'

angular.module('app')
 .factory('HomeService', ['$http', 'API_CONFIG', function($http, API_CONFIG) {
   return {
     all: function () {
       var req =
       {
         method: 'GET',
         url: API_CONFIG.API_URL + '',
         headers :
         {
           'X-Parse-Application-Id' : API_CONFIG.APP_ID,
           'X-Parse-REST-API-Key'   : API_CONFIG.API_KEY
         }
       };
       return $http(req);
     }
   }
 }]);
