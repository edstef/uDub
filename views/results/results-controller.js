(function() {
	'use strict';

	angular.module('results', ['ngRoute'])
		.config(function($routeProvider, $locationProvider) {
			$routeProvider
				.when('/results', {
					templateUrl: 'views/results/results.html',
  					controller: 'resultsController'
				});

			// $urlRouterProvider.otherwise("/");

			// $stateProvider
			// 	.state('/', {
			// 	  url: "/",
			// 	  templateUrl: 'pages/home/home.html',
			// 	  controller: 'homeController'
			// });

		})
		.controller('resultsController', function($scope, queryParams) {
			$('#result').hide();
			window.setTimeout(function(){
				$('#id_loader').hide();
				$('#result').show();
			}, 100);
			console.log(queryParams.get())
			var params = queryParams.get();

      $scope.result = {
				"query": params.query,
				"errors":[
					{
						"name": "Shit is broken",
						"amount" : 19,
						"sources" : {
							"github":["http://github.com", "https://github.com/joeyang22"],
							"stackOverflow":["http://stackoverflow.com/",
							"http://stackoverflow.com/questions/38390468/updating-here-maps-with-traffictiles-with-leaflet-js"]
						}
					},
					{
						"name": "Shit is very broken",
						"amount" : 30,
						"sources" : {
							"github":["http://github.com", "https://github.com/edstef"],
							"stackOverflow":["http://stackoverflow.com/",
							"http://stackoverflow.com/questions/38390468/updating-here-maps-with-traffictiles-with-leaflet-js"]
						}
					},
				]
			};

		});
})();
