angular.module('app').controller('mvCharacterCtrl', function($scope, $timeout, $location, $http) {
	var cardCollection = [];
	loadCollection = function(){
		$http({method: 'GET', url: '/api/cards/' })
		.then(function successCallback(response) {
			cardCollection = response;
			$scope.cards = cardCollection.data;
			$scope.loaded = true;
		});
	}
	loadCollection();
	findAverage = function(array){
		var sum = 0;
		for(i=0; i++; i<array.length){
			sum += parseInt(array[i]);
		}
		return sum + array.length+1;
	}
	$scope.modalContent = {
		name: 'sample name',
		character: 'sample character',
		type: 'sample type',
		text: 'sample text',
		comments: ['sample comment'],
		flavor: 'sample flavor',
		illustrations: ['sample illustration values'],
		rating: 'sample rating',
		utilityValues: ['sample utility values'] 
	}
	$scope.emptyModal = function(){
		$scope.modalContent.name = 'sample name';
		$scope.modalContent.character = 'sample character';
		$scope.modalContent.type = 'sample type';
		$scope.modalContent.text = 'sample text';
		$scope.modalContent.comments = 'sample comments';
		$scope.modalContent.flavor = 'sample flavor';
		$scope.modalContent.illustrations = 'sample illustration';
		$scope.modalContent.rating = 'sample rating';
		$scope.modalContent.utilityValues = 'sample Utility values';
	}
	$scope.transferModalContent = function(dataPassed){
		console.log(dataPassed);
		for(i=0; i<$scope.cards.length; i++){			
			if(dataPassed == $scope.cards[i].name){
				console.log(dataPassed);
				console.log($scope.cards[i].utilityValues);
				$scope.modalContent = {
					name: $scope.cards[i].name,
					character: $scope.cards[i].character,
					type: $scope.cards[i].type,
					text: $scope.cards[i].text,
					comments: $scope.cards[i].comments,
					flavor: $scope.cards[i].flavor,
					illustrations: $scope.cards[i].illustrations,
					utilityValues: $scope.cards[i].utilityValues,
					rating: findAverage($scope.cards[i].rating)
				}
				console.log($scope.modalContent.utilityValues);
				$('#myModal').modal('show');
				break;
			}else{
				console.log('name not found');
				continue;
			}
		}
	}

});