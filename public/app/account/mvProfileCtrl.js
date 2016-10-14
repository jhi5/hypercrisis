angular.module('app').controller('mvProfileCtrl', function($scope, mvAuth, mvIdentity, mvNotifier){

	$scope.username = mvIdentity.currentUser.username;
	$scope.fname = mvIdentity.currentUser.firstName;
	$scope.lname = mvIdentity.currentUser.lastName;
	$scope.email = mvIdentity.currentUser.email;

	$scope.update = function(){
		var newUserData = {
			username: $scope.username,
			firstName: $scope.fname,
			lastName: $scope.lname,
			email: $scope.email
		}
		if($scope.password && $scope.password.length > 0){
			newUserData.password = $scope.password;
		}
		mvAuth.updateCurrentUser(newUserData).then(function(){
			mvNotifier.notify("Your user account has been updated!");
		}, function(error){
			mvNotifier.error(error);
		});
	}
});