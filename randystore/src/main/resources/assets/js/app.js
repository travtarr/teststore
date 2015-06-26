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
		.when('/orders', {
			controller: 'OrdersController',
			templateUrl: 'views/orders.html'
		})
		.when('/order/:id', {
			controller: 'OrderController',
			templateUrl: 'views/order.html'
		})
		.when('/login', {
			controller: 'NavigationController',
			templateUrl: 'views/login.html'
		})
		.otherwise({
			redirectTo: '/'
		});
});