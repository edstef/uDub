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
						"questions": [
							{
								"title": "Error when using the thing",
								"link" : "http://edwardmurakami.com/#/",
								"vote" : 50,
								"answered" : true
							},
							{
								"title": "Why doesn't my thing work",
								"link" : "http://edwardmurakami.com/#/",
								"vote" : 513,
								"answered" : false
							}
						]
					},
					{
						"name": "Shit is super broken",
						"amount" : 19,
						"questions": [
							{
								"title": "Cant seem to access the thing",
								"link" : "http://edwardmurakami.com/#/",
								"vote" : 13,
								"answered" : true
							},
							{
								"title": "Factory factories no longer perform builders",
								"link" : "http://edwardmurakami.com/#/",
								"vote" : 230,
								"answered" : true
							}
						]
					}
				]
			};

		});
})();
