/* declaring external modules */
angular.module('app', ['ngResource', 'ngRoute']);

/* handling routing and route checks via angular*/
angular.module('app').config(function($routeProvider, $locationProvider) {
	
	/* Declare html5 */
	$locationProvider.html5Mode(true);
	
	/* Routing! - .when for each route
	the template field designates the file structure, 
	controller designates accessible functions, 
	resolve designates the partial to load */
	$routeProvider
	.when('/', {
		templateUrl: '/partials/main/main',
		controller: "mvMainCtrl"
	})
	.when('/characters/gravitygirl', {
		templateUrl: '/partials/characters/gg',
		controller: 'mvGgCtrl'
	})
	.when('/characters/robonobo', {
		templateUrl: '/partials/characters/rb',
		controller: 'mvRbCtrl'
	})
	.when('/articles', {
		templateUrl: '/partials/articles/articles',
		controller: 'mvArticleCtrl'
	})
	.when('/download', {
		templateUrl: '/partials/download/download'
	})
	.when('/feedback', {
		templateUrl: '/partials/feedback/feedback',
		controller: 'mvFeedbackCtrl'
	})
});
