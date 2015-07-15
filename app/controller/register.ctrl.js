angular.module('app')
	.controller('registerCtrl',
		['$scope', '$http', '$timeout', '$state',
		function ($scope, $http, $timeout, $state) {

			$scope.user = {};
			$scope.user.role = "USER";

			$scope.registerUser = function(){

				var req = {
					method: "POST",
					url: "https://fast-basin-4847.herokuapp.com/people",
					header: "Content-Type: application/json",
					data: $scope.user
				};

				$http(req)
					.success(function (data){
						Materialize.toast('User Created', 4000);
						$timeout(function() {
							$state.go('login');
						}, 4500);
					}).
					error(function (data) {
						console.log(data);
					});

			};

	}]);
