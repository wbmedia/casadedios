angular.module('app')
  .controller('loginCtrl',
  ['$scope', '$http', '$timeout', '$state',
  function ($scope, $http, $timeout, $state) {
    $scope.login = {

    };

    $scope.loginUser = function() {

      var req = {
      method: "POST",
      url: "https://fast-basin-4847.herokuapp.com/login",
      header: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        },
      data: $scope.login
      };

    $http(req)
      .success(function (data){
        console.log(data.token);
        $scope.mySecret(data.token);
      }).
      error(function (data) {
        console.log(data);
      });



      $scope.mySecret = function(token) {
        var req = {

          method: "GET",
          url:"https://fast-basin-4847.herokuapp.com/secret",
          headers: {
            'Accept': 'application/json',
						'Content-Type': 'application/json',
						'Authorization': 'Token token="'+token+'"'
          }
        };
        $http(req)
          .success(function (data){
            $state.go('dashboard');
          console.log(data);

          }).
          error(function (data) {

            console.log(data);
          });

      };

    };

  }]);
