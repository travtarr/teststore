app.controller('navigation',

function($rootScope, $scope, $http, $location) {

	var authenticate = function(credentials, callback) {

		var formData = { "grant_type":"password", "username": credentials.username, "password": credentials.password };

		$http.post('auth/token', formData).success(function(response) {
			if (response.api_key[0].access_token.string) {
				$rootScope.authenticated = true;
				$http.defaults.headers.common.Authorization = "Bearer " + response.api_key[0].access_token.string;
			} else {
				$rootScope.authenticated = false;
			}
			callback && callback();
		}).error(function() {
			$rootScope.authenticated = false;
			callback && callback();
		});
	}

	authenticate();
	$scope.credentials = {};
	$scope.login = function() {
		authenticate($scope.credentials, function() {
			if ($rootScope.authenticated) {
				$location.path("/");
				$scope.error = false;
			} else {
				$location.path("/login");
				$scope.error = true;
			}
		});
	};

	$scope.logout = function() {
		$http.post('logout', {}).success(function() {
			$rootScope.authenticated = false;
			$location.path("/");
		}).error(function(data) {
			$rootScope.authenticated = false;
		});
	}

});