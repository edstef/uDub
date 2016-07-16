(function() {
	'use strict';

	angular.module('uDub', [
    'home',
		'results',
		'errorContainer'
	])
	.factory('queryParams', function() {
		var queryData = {};
		function set(data) {
			queryData = data;
		}
		function get() {
			return queryData;
		}

		return {
			get: get,
			set: set
		}
	});
})();
