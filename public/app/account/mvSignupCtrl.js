angular.module('app').controller('mvSignupCtrl', function($scope, $location, mvUser, mvNotifier, mvAuth){
	
	/* Creates a new user based on data in the fields, passed to mvAuth */
	$scope.signup = function(){
		var newUserData = {
			username: $scope.username,
			password: $scope.password,
			firstName: $scope.fname,
			lastName: $scope.lname,
			email: $scope.email
		};

		mvAuth.createUser(newUserData).then(function(){
			mvNotifier.notify('User account created!');
			$location.path('/');
		}, function(reason){
			mvNotifier.error(reason);
		})
	}
})