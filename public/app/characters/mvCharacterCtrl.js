angular.module('app').controller('mvCharacterCtrl', function($scope, $timeout, $location, $http) {
	var cardCollection = [];
	$scope.currentModalIndex = 0;
	$scope.currentCollectionSize = 0;
	$scope.tagArray = [];	
	$scope.currentFilter = {};
	$scope.currentCharacter = $("#charname").text();
	console.log($scope.currentCharacter);
	filterBuilder = function(object){
		object = {character: $scope.currentCharacter};
	}
	filterBuilder($scope.currentFilter);
	$scope.currentFilter = {character: $scope.currentCharacter};
	findAverage = function(array){
		var sum = 0;
		for(i=0; i++; i<array.length){
			sum += parseInt(array[i]);
		}
		return sum + array.length+1;
	}
	detectFlavor = function(array){
		if(array[0] !== 'none'){
			return array;
		}else{
			return null;
		}
	}
	detectUtility = function(string){
		if(string == 'Utility' | string == "Crossover"){
			return $scope.cards[i].utilityValues;
		}else{
			return null;
		}
	}
	createSymbol = function(object, string){
		if(string == "Action"){
			object.typeSymbol = '../../images/action.png';
		}
		if(string == "Crossover"){
			object.typeSymbol = '../../images/crossover.png';
		}
		if(string == "Feat"){
			object.typeSymbol = '../../images/feat.png';
		}
		if(string == "Utility"){
			object.typeSymbol = '../../images/utility.png';
		}
	}
	refreshModal = function(string){
		for(i=0; i<$scope.cards.length; i++){			
			if(string == $scope.cards[i].name){
				$scope.currentModalIndex = i;
				$scope.modalContent = {					
					name: $scope.cards[i].name,
					character: $scope.cards[i].character,
					type: $scope.cards[i].type,
					text: $scope.cards[i].text,
					comments: $scope.cards[i].comments,
					flavor: detectFlavor($scope.cards[i].flavor),
					illustrations: $scope.cards[i].illustrations,
					utilityValues: detectUtility($scope.cards[i].type),
					rating: findAverage($scope.cards[i].rating),
					typeSymbol: createSymbol(this, $scope.cards[i].type)
				}
 				createSymbol($scope.modalContent, $scope.modalContent.type);
 				console.log($scope.currentModalIndex);
				$scope.cell = $scope.modalContent.name;
				$('#myModal').modal('show');
				break;
			}else{
				continue;
			}
		}
	}
	$(document).ready(function(){
    $('[data-toggle="popover"]').popover();   
	});
	loadCollection = function(){
		$http({method: 'GET', url: '/api/cards/' })
		.then(function successCallback(response) {
			cardCollection = response;
			$scope.cards = cardCollection.data;
			for(i=0;i<$scope.cards.length;i++){
				createSymbol($scope.cards[i], $scope.cards[i].type);
			}
			for(j=0;j<$scope.cards.length;j++){
				if($scope.cards[j].character === $scope.currentCharacter){
				for(k=0;k<$scope.cards[j].tags.length;k++){
					$scope.tagArray.push($scope.cards[j].tags[k]);
				}
			}
			}
			$scope.tagArray = $.uniqueSort($scope.tagArray);
			$scope.loaded = true;
		});
	}
	loadCollection();	
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
		$scope.modalContent.typeSymbol = 'sample type symbol';
	}
	$scope.transferModalContent = function(dataPassed){
		refreshModal(dataPassed);
	};
	$scope.findNextEntry = function(){
		var firstTds = [];
		var currentCard = '';
		var currentCardIndex = 0;
		$('td:first-child').each(function() {
    	firstTds.push($(this).text());
		});
		for(i=0;i<firstTds.length;i++){
			if(firstTds[i] === $("#modaltitle").text()){
				currentCard = firstTds[i];
				currentCardIndex = i;
				nextCard = firstTds[currentCardIndex + 1];
				refreshModal(nextCard);
				currentCard = nextCard;
				break;
			}			
		}
    }
    $scope.findPreviousEntry = function(){
		var firstTds = [];
		var currentCard = '';
		var currentCardIndex = 0;
		$('td:first-child').each(function() {
    	firstTds.push($(this).text());
		});
		for(i=0;i<firstTds.length;i++){
			if(firstTds[i] === $("#modaltitle").text()){
				currentCard = firstTds[i];
				currentCardIndex = i;
				nextCard = firstTds[currentCardIndex - 1];
				refreshModal(nextCard);
				currentCard = nextCard;
				break;
			}
		}
    }
    $scope.hidePrevious = function(){
		if($scope.currentModalIndex === 0){
			return true;
		}else{
			return false;
		}
	}
	$scope.hideNext = function(){
		var firstTds = [];
		var currentCard = '';
		var currentCardIndex = 0;
		$('td:first-child').each(function() {
    	firstTds.push($(this).text());
		});
		for(i=0;i<firstTds.length;i++){
			if(firstTds[i] === $("#modaltitle").text()){
				lastValue = (firstTds.length) - 1;
				if(i === lastValue){
					return true;
				}else{
					return false;
				}
			}			
		}
	}

});