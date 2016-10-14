angular.module('app').controller('mvSelectCtrl', function($scope, $timeout, $location, mvIdentity) {
	
	/* places user identity on the scope */
	$scope.identity = mvIdentity;

});