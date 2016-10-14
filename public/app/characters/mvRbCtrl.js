angular.module('app').controller('mvRbCtrl', function($scope, $timeout, $location, mvIdentity) {
	
	/* places user identity on the scope */
	$scope.identity = mvIdentity;

});