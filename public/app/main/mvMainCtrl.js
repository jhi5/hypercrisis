angular.module('app').controller('mvMainCtrl', function($scope, $timeout, $location, mvCachedPolls, mvIdentity) {
	
	/* places user identity on the scope */
	$scope.identity = mvIdentity;

	/* places a list of polls on the scope */
	mvCachedPolls.query().$promise.then(function(collection){
		$scope.polls = collection;
    });

	/* set sorting options via angular */
	$scope.sortOptions = [{
		value: 'title',
		text: "Sort by Title"
	}, {
		value: "date",
		text: "Sort by Creation Date"
	}, {
		value: "createdBy",
		text: "Sort by Creator"
	}]
	$scope.sortOrder = $scope.sortOptions[0].value;
});