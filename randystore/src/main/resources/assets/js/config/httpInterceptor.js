(function(){
  var httpInterceptor = function ($provide, $httpProvider) {
    $provide.factory('httpInterceptor', function ($q, $location) {
      return {
        response: function (response) {
          return response || $q.when(response);
        },
        responseError: function (rejection) {
          if(rejection.status === 401) {
        	// you are not authorized
        	$location.path('/login').search('returnTo', $location.path()); 
          }
          return $q.reject(rejection);
        }
      };
    });
    $httpProvider.interceptors.push('httpInterceptor');
  };
  angular.module("StoreApp").config(httpInterceptor);
}());