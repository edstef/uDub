(function() {
  'use strict';
  var errorContainer = angular.module('errorContainer', []);
  errorContainer.controller('errorContainerController', function($scope) {

  });
  errorContainer.directive('errorContainer', function() {
        return {
          restrict: 'E',
          templateUrl:'views/results/errorContainer.html'
        }
  });

})();
