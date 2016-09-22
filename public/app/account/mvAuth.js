/* Factory declaration with includes in the function space. $http is api posts,
$q for promises */
angular.module('app').factory('mvAuth', function($http, mvIdentity, $q, mvUser){
	return{
		
		/* Takes info from fields and posts to login API endpoint */
		authenticateUser: function(username, password){
			var dfd = $q.defer();
			$http.post('/login', {username: username, password: password}).then(function(response){
				if(response.data.success){
					var user = new mvUser();
					angular.extend(user, response.data.user);
					mvIdentity.currentUser = user;
					dfd.resolve(true);
				}else{
					dfd.resolve(false);
				}
			});
			return dfd.promise;
		},
		/* Empties the currentUser variable and returns a promise */
		logoutUser: function(){
			var dfd = $q.defer();
			$http.post('/logout', {logout:true}).then(function(){
				mvIdentity.currentUser = undefined;
				dfd.resolve();
			})
			return dfd.promise;
		},
		/* Checks the current identity's permissions before routing, handles multiple permissions
		via role variable */		
		authorizedCurrentUserForRoute: function(role){
			if(mvIdentity.isAuthorized(role)){
				return true;
			} else {
				return $q.reject('not authorized');
			}
		},
		/* Rejects users if their identity cannot be verified as an authentic user */
		authorizeAuthenticatedUserForRoute: function(){
			if(mvIdentity.isAuthenticated()){
				return true;
			}else{
				return $q.reject("not authorized");
			}
		},
		/* Pulls user variables from form, then sets currentUser to new User*/
		createUser: function(newUserData){
			var newUser = new mvUser(newUserData);
			var dfd = $q.defer();
			newUser.$save().then(function(){
				mvIdentity.currentUser = newUser;
				dfd.resolve();
			}, function(response){
				dfd.reject(response.data.reason);
			})
			return dfd.promise;
		},
		/* Takes info from fields, creates a temp user then the temp user becomes
		the current user*/
		updateCurrentUser: function(newUserData){
			var dfd = $q.defer();
			var clone = angular.copy(mvIdentity.currentUser);
			angular.extend(clone, newUserData);
			clone.$update().then(function(){
				mvIdentity.currentUser = clone;
				dfd.resolve();
			}, function(response){
				dfd.reject(response.data.reason);
			});
			return dfd.promise;
		}
	}
});