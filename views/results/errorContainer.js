(function() {
  'use strict';
  var errorContainer = angular.module('errorContainer', []);
  errorContainer.controller('errorContainerController', function($scope) {
    console.log("asdf");
    var sortedByVote = $scope.error.sort(function(a,b){
      if (a["score"] > b["score"]){
        return 1;
      } else if (a["score"] == b["score"]){
        return 0;
      } else {
        return -1;
      }
    });
    console.log(sortedByVote);
  });
  errorContainer.directive('errorContainer', function() {
        return {
          restrict: 'E',
          templateUrl:'views/results/errorContainer.html'
        }
  });

})();
