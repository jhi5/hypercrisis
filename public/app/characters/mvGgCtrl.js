angular.module('app').controller('mvGgCtrl', function($scope, $timeout, $location, $http) {
	var cardCollection = [];
	$http({method: 'GET', url: '/api/cards/' })
	.then(function successCallback(response) {
		cardCollection = response;
		$scope.cards = cardCollection.data;
		$scope.loaded = true;
		console.log($scope.cards);
	});
	$scope.modalContent = {
		name: 'sample name',
		character: 'sample character',
		type: 'sample type',
		text: 'sample text',
		comments: 'sample comment',
		flavor: 'sample flavor',
		illustrations: 'sample illustration',
		rating: 'sample rating',
		utilityValues: 'sample Utility values'
	}
	$scope.emptyModal = function(){
		$scope.modalContent.name = 'sample name';
		$scope.modalContent.character = 'sample character';
		$scope.modalContent.type = 'sample type';
		$scope.modalContent.text = 'sample text';
		$scope.modalContent.comments = 'sample comment';
		$scope.modalContent.flavor = 'sample flavor';
		$scope.modalContent.illustrations = 'sample illustration';
		$scope.modalContent.rating = 'sample rating';
		$scope.modalContent.utilityValues = 'sample Utility values';
	}
	$scope.openModal = function(){
		$scope.showModal = true;
	}

	$scope.closeModal = function(){
		$scope.showModal = false;
		$scope.emptyModal();
	}	
	$scope.transferModalContent = function(dataPassed){
		for(i=0; i<$scope.cards.length; i++){
			if(dataPassed === $scope.cards[i].name){
				$scope.modalContent.name = $scope.cards[i].name;
				$scope.modalContent.character = $scope.cards[i].character;
				$scope.modalContent.type = $scope.cards[i].type;
				$scope.modalContent.text = $scope.cards[i].text;
				$scope.modalContent.comments = $scope.cards[i].comments;
				$scope.modalContent.flavor = $scope.cards[i].flavor;
				$scope.modalContent.illustrations = $scope.cards[i].illustrations;
				$scope.modalContent.rating = $scope.cards[i].rating;
				$scope.modalContent.utilityValues = $scope.cards[i].utilityValues;
			}
		}
	}

});