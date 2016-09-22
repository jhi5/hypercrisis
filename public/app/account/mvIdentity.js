angular.module('app').factory('mvIdentity', function($window, mvUser){
	/* sets currentUser variable to perform checks against identity when
	no user is present */
	var currentUser = undefined;

	/* sets current user, set auth levels*/
	if(!!$window.bootstrappedUserObject){
		currentUser = new mvUser();
		angular.extend(currentUser, $window.bootstrappedUserObject);
	}
	return{
		currentUser: currentUser,
		isAuthenticated: function(){
			return !!this.currentUser;
		},
		isAuthorized: function(role){
		return !!this.currentUser && this.currentUser.roles.indexOf(role) > -1;
		}
	}
})