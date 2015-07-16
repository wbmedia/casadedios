'use strict';

  angular.module('app')
  .controller('homeController', [ '$scope','API_CONFIG', function($scope) {

    $scope.home = function() {
      $scope.news = [];
    }
     console.log($scope.home);
  }]);
