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

			var params = queryParams.get();
			$.ajax({
			  type: "POST",
				dataType:"jsonp",
			  // url: 'http://104.197.125.144?repo=7',// + params.query,
				url: 'http://104.197.125.144?repo=gfchvjk',
				crossDomain: true,
			  success: function(data, success) {
					console.log(data)
					// $scope.errors = data
					$('#id_loader').hide();
					$('#result').show();
				}
			});
			$scope.errors = A;
			// console.log($scope.asdf);

			$('#id_unanswered_checker').click(function(){
				console.log($(this).is(':checked'));
				if ($(this).is(':checked')) {
					console.log($('.unanswered'));
					$('.unanswered').hide(200);
				} else {
					$('.unanswered').show(200);
				}
			});

		});
})();
