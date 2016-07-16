(function() {
	'use strict';

	angular.module('home', ['ngRoute'])
		.config(function($routeProvider, $locationProvider) {
			$routeProvider
				.when('/', {
					templateUrl: 'views/home/home.html',
  					controller: 'homeController'
				})
				.otherwise({
					templateUrl: 'views/home/home.html',
					controller: 'homeController'
				});

			// $urlRouterProvider.otherwise("/");

			// $stateProvider
			// 	.state('/', {
			// 	  url: "/",
			// 	  templateUrl: 'pages/home/home.html',
			// 	  controller: 'homeController'
			// });

		})
		.controller('homeController', function($scope) {
			$scope.home = {};

		});
})();
