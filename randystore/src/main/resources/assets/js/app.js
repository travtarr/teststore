var app = angular.module('StoreApp', [ 'ngRoute' ]);

app.config(function($routeProvider) {
	$routeProvider
		.when('/', {
			controller: 'HomeController',
			templateUrl: 'views/home.html'
		})
		.when('/cart', {
			controller: 'CartController',
			templateUrl: 'views/cart.html'
		})
		.when('/products', {
			controller: 'ProductsController',
			templateUrl: 'views/products.html'
		})
		.when('/product/:id', {
			controller: 'ProductController',
			templateUrl: 'views/product.html'
		})
		.otherwise({
			redirectTo: '/'
		});
});