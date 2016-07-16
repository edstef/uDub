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
			$('body').addClass("background");
			$('#result').hide();
			 window.setTimeout(function(){
			 	$('#id_loader').hide();
			 	$('#result').show();
			 }, 100);
			var params = queryParams.get();
			$scope.errors = A;
			for (var i = 0; i< $scope.errors.length; i ++){
				console.log($scope.errors[i]);
				 	$scope.errors[i]["items"] = $scope.errors[i]["items"].sort(function(a,b){
					if (a["score"] > b["score"]){
						return -1;
					} else if (a["score"] == b["score"]){
						return 0;
					} else {
						return 1;
					}
				});
			}
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
