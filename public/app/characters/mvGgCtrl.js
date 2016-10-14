angular.module('app').controller('mvGgCtrl', function($scope, $timeout, $location, mvIdentity) {
	
	/* places user identity on the scope */
	$scope.identity = mvIdentity;

});