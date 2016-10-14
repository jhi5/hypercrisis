angular.module('app').controller('mvArticleCtrl', function($scope, $timeout, $location, mvIdentity) {	
	/* places user identity on the scope */
	$scope.identity = mvIdentity;
});