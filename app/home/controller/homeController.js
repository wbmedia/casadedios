'use strict';

  angular.module('app')
  .controller('homeController',[ '$scope', function($scope) {
    $scope.home = function() {
      $scope.news = [];
    }

  }]);
