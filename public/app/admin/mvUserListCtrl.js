angular.module('app').controller('mvUserListCtrl', function($scope, $timeout, $location, mvIdentity) {
	
	/* places user identity on the scope */
	$scope.identity = mvIdentity;

});