angular.module('app').controller('mvNavBarLoginCtrl', function($scope, $http, $location, mvIdentity, mvNotifier, mvAuth){
	
	/* pulls from mvIdentity and places the user data on the scope*/
	$scope.identity = mvIdentity;

	/* authenticate the login, then redirect the browser */
	$scope.signin = function (username, password){
		mvAuth.authenticateUser(username, password).then(function(success){
			if(success){
				mvNotifier.notify("You did it!");
			}else{
				mvNotifier.notify("Couldn't sign-in.");
			}
			$location.path('/');
		});		
	};

	/* empties the current scope to reset the logged-in user, 
	then passes data to mvAuth*/
	$scope.signout = function() {
		mvAuth.logoutUser().then(function(){
			$scope.username = "";
			$scope.password = "";
			mvNotifier.notify("You have successfully signed out!");
			$location.path('/');
		})
	};	
});