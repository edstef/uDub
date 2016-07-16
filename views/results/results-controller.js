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
			$scope.errors = [];
			var params = queryParams.get();
			$scope.query = params["query"];
			console.log($scope.query);
			$.ajax({
			  type: "GET",
				dataType:"jsonp",
			  url: 'http://104.197.125.144?repo=' + params.query,
				crossDomain: true,
				success: function(data, status){
					$scope.errors = data
					$scope.$apply();
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
					$('#id_loader').hide();
					$('#result').show();

				},
				error: function(obj, errorText, error){
					console.log(obj);
					console.log(errorText);
					console.log(error);
					$('#id_loader').hide();
					$('#result').show();
					$scope.errors = [{"name":"No repositories found"}];
				}
			});
			// console.log,($scope.asdf);

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
