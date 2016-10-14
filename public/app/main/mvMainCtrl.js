angular.module('app').controller('mvMainCtrl', function($scope, $timeout, $location, mvIdentity) {
	
	/* places user identity on the scope */
	$scope.identity = mvIdentity;

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