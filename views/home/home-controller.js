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
		})
		.controller('homeController', function($scope, queryParams) {
			$scope.home = {};
			var activeToggles = [];

			$('#id_left_toggle, #id_right_toggle').click(function(e) {
				// $('#id_left_toggle, #id_right_toggle').removeClass('active');

				var clickedId = e.currentTarget.id;
				$('#' + clickedId + ' input').prop('checked', !$('#' + clickedId + ' input').prop('checked'));
				// if (activeToggles.includes(clickedId)) {
				// 	activeToggles.remove(clickedId);
				// } else {
				// 	activeToggles.push(clickedId);
				// }

				// for (var i = 0; i < activeToggles.length; i++) {
				// 	$('#' + activeToggles[i]).addClass('active');
				// }
			});

			$('#id_search_bar').keypress(function(e) {
				if (e.keyCode === 13) {
					queryParams.set({
							"query" : ($('#id_search_bar').val()),
							"user" : ($('#id_left_toggle input').prop('checked')),
							"developer" : ($('#id_right_toggle input').prop('checked')),

					});
						location.href = 'http://localhost:9000/#/results';


						console.log("fewnaofa");
				}
			});

		});
})();
