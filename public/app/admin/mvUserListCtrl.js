angular.module('app').controller('mvUserListCtrl', function($scope, mvUser){
	/* Creates a list of users based on info from mvUser */
	$scope.users = mvUser.query();
})