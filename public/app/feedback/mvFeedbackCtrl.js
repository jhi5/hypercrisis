angular.module('app').controller('mvFeedbackCtrl', function($scope, $timeout, $location, $http, mvNotifier) {
	var cardCollection = [];
	$scope.cards = [];
	
	$scope.character = '';
	$scope.gamesWon = 0;
	$scope.gamesPlayed = 0;
	$scope.crossovers  = [];
	$scope.feats = [];
	$scope.deck = [];
	$scope.comment = "";

	$scope.characterChoices = [];
	$scope.crossoverChoices = [];
	$scope.deckChoices = [];
	$scope.featChoices = [];

	loadCollection = function(){
		$http({method: 'GET', url: '/api/cards/' })
		.then(function successCallback(response) {
			cardCollection = response;
			$scope.cards = cardCollection.data;	
		}).then(function charLogging(){
			for(i=0;i<cardCollection.data.length;i++){
				if($scope.characterChoices.indexOf(cardCollection.data[i].character) == -1 && cardCollection.data[i].character != "Crossover"){
					$scope.characterChoices.push(cardCollection.data[i].character);
				}			
			}
			$scope.characterChoices.sort();
		}).then(function crossLogging(){
			for(i=0;i<cardCollection.data.length;i++){
				if(cardCollection.data[i].character === "Crossover"){
					$scope.crossoverChoices.push(cardCollection.data[i].name);
				}			
			}
			$scope.crossoverChoices.sort();
		}).then(function featLogging(){
			for(i=0;i<cardCollection.data.length;i++){
				if(cardCollection.data[i].type === "Feat"){
					$scope.featChoices.push([cardCollection.data[i].name, cardCollection.data[i].character]);
				}			
			}
			$scope.featChoices.sort();
		}).then(function deckLogging(){
			for(i=0;i<cardCollection.data.length;i++){
				if(cardCollection.data[i].type === "Action" || cardCollection.data[i].type === "Utility"){
					$scope.deckChoices.push([cardCollection.data[i].name, cardCollection.data[i].character]);
				}			
			}
			$scope.deckChoices.sort();
		});
	}

	loadCollection();

	$scope.featFilter1 = function(actual, expected){
		$scope.feats[0] = $("#feat1").val();
		$scope.feats[1] = $("#feat2").val();
		$scope.feats[2] = $("#feat3").val();

		if($scope.character.length === 0 || actual[0] === $scope.feats[1] || actual[0] === $scope.feats[2]){
			return false;
		}else if($scope.character === actual[1]){
			return true;
		}else{
			return false;
		}

	}

	$scope.featFilter2 = function(actual, expected){
		$scope.feats[0] = $("#feat1").val();
		$scope.feats[1] = $("#feat2").val();
		$scope.feats[2] = $("#feat3").val();

		if($scope.character.length === 0 || actual[0] === $scope.feats[0] || actual[0] === $scope.feats[2]){
			return false;
		}else if($scope.character === actual[1]){
			return true;
		}else{
			return false;
		}

	}

	$scope.featFilter3 = function(actual, expected){
		$scope.feats[0] = $("#feat1").val();
		$scope.feats[1] = $("#feat2").val();
		$scope.feats[2] = $("#feat3").val();

		if($scope.character.length === 0 || actual[0] === $scope.feats[0] || actual[0] === $scope.feats[1]){
			return false;
		}else if($scope.character === actual[1]){
			return true;
		}else{
			return false;
		}

	}

	$scope.deckFilter1 = function(actual, expected){
		$scope.deck[0] = $("#deck1").val();
		$scope.deck[1] = $("#deck2").val();
		$scope.deck[2] = $("#deck3").val();
		$scope.deck[3] = $("#deck4").val();
		$scope.deck[4] = $("#deck5").val();

		if($scope.character.length === 0 || actual[0] === $scope.deck[1] || actual[0] === $scope.deck[2] 
			|| actual[0] === $scope.deck[3] || actual[0] === $scope.deck[4]){
			return false;
		}else if($scope.character === actual[1]){
			return true;
		}else{
			return false;
		}
	}

	$scope.deckFilter2 = function(actual, expected){
		$scope.deck[0] = $("#deck1").val();
		$scope.deck[1] = $("#deck2").val();
		$scope.deck[2] = $("#deck3").val();
		$scope.deck[3] = $("#deck4").val();
		$scope.deck[4] = $("#deck5").val();

		if($scope.character.length === 0 || actual[0] === $scope.deck[0] || actual[0] === $scope.deck[2] 
			|| actual[0] === $scope.deck[3] || actual[0] === $scope.deck[4]){
			return false;
		}else if($scope.character === actual[1]){
			return true;
		}else{
			return false;
		}
	}

	$scope.deckFilter3 = function(actual, expected){
		$scope.deck[0] = $("#deck1").val();
		$scope.deck[1] = $("#deck2").val();
		$scope.deck[2] = $("#deck3").val();
		$scope.deck[3] = $("#deck4").val();
		$scope.deck[4] = $("#deck5").val();

		if($scope.character.length === 0 || actual[0] === $scope.deck[0] || actual[0] === $scope.deck[1] 
			|| actual[0] === $scope.deck[3] || actual[0] === $scope.deck[4]){
			return false;
		}else if($scope.character === actual[1]){
			return true;
		}else{
			return false;
		}
	}

	$scope.deckFilter4 = function(actual, expected){
		$scope.deck[0] = $("#deck1").val();
		$scope.deck[1] = $("#deck2").val();
		$scope.deck[2] = $("#deck3").val();
		$scope.deck[3] = $("#deck4").val();
		$scope.deck[4] = $("#deck5").val();

		if($scope.character.length === 0 || actual[0] === $scope.deck[0] || actual[0] === $scope.deck[1] 
			|| actual[0] === $scope.deck[2] || actual[0] === $scope.deck[4]){
			return false;
		}else if($scope.character === actual[1]){
			return true;
		}else{
			return false;
		}
	}

	$scope.deckFilter5 = function(actual, expected){
		$scope.deck[0] = $("#deck1").val();
		$scope.deck[1] = $("#deck2").val();
		$scope.deck[2] = $("#deck3").val();
		$scope.deck[3] = $("#deck4").val();
		$scope.deck[4] = $("#deck5").val();

		if($scope.character.length === 0 || actual[0] === $scope.deck[0] || actual[0] === $scope.deck[1] 
			|| actual[0] === $scope.deck[2] || actual[0] === $scope.deck[3]){
			return false;
		}else if($scope.character === actual[1]){
			return true;
		}else{
			return false;
		}
	}

	$scope.crossFilter1 = function(actual, expected){
		$scope.crossovers[0] = $("#cross1").val();
		$scope.crossovers[1] = $("#cross2").val();
		$scope.crossovers[2] = $("#cross3").val();
		$scope.crossovers[3] = $("#cross4").val();
		$scope.crossovers[4] = $("#cross5").val();

		if($scope.character.length === 0 || actual === $scope.crossovers[1] || actual === $scope.crossovers[2] || 
		actual === $scope.crossovers[3] || actual === $scope.crossovers[4]){
			return false;
		}else{
			return true;
		}
	}

	$scope.crossFilter2 = function(actual, expected){
		$scope.crossovers[0] = $("#cross1").val();
		$scope.crossovers[1] = $("#cross2").val();
		$scope.crossovers[2] = $("#cross3").val();
		$scope.crossovers[3] = $("#cross4").val();
		$scope.crossovers[4] = $("#cross5").val();


		if($scope.character.length === 0 || actual === $scope.crossovers[0] || actual === $scope.crossovers[2] || 
		actual === $scope.crossovers[3] || actual === $scope.crossovers[4]){
			return false;
		}else{
			return true;
		}
	}

	$scope.crossFilter3 = function(actual, expected){
		$scope.crossovers[0] = $("#cross1").val();
		$scope.crossovers[1] = $("#cross2").val();
		$scope.crossovers[2] = $("#cross3").val();
		$scope.crossovers[3] = $("#cross4").val();
		$scope.crossovers[4] = $("#cross5").val();


		if($scope.character.length === 0 || actual === $scope.crossovers[0] || actual === $scope.crossovers[1] || 
		actual === $scope.crossovers[3] || actual === $scope.crossovers[4]){
			return false;
		}else{
			return true;
		}
	}

	$scope.crossFilter4 = function(actual, expected){
		$scope.crossovers[0] = $("#cross1").val();
		$scope.crossovers[1] = $("#cross2").val();
		$scope.crossovers[2] = $("#cross3").val();
		$scope.crossovers[3] = $("#cross4").val();
		$scope.crossovers[4] = $("#cross5").val();


		if($scope.character.length === 0 || actual === $scope.crossovers[0] || actual === $scope.crossovers[1] || 
		actual === $scope.crossovers[2] || actual === $scope.crossovers[4]){
			return false;
		}else{
			return true;
		}
	}

	$scope.crossFilter5 = function(actual, expected){
		$scope.crossovers[0] = $("#cross1").val();
		$scope.crossovers[1] = $("#cross2").val();
		$scope.crossovers[2] = $("#cross3").val();
		$scope.crossovers[3] = $("#cross4").val();
		$scope.crossovers[4] = $("#cross5").val();


		if($scope.character.length === 0 || actual === $scope.crossovers[0] || actual === $scope.crossovers[1] || 
		actual === $scope.crossovers[2] || actual === $scope.crossovers[3]){
			return false;
		}else{
			return true;
		}
	}

	$scope.submitFeedback = function(){		
		if($scope.comment.length === 0){
			$scope.comment = "none";
		}
		var obj = {
			character: $scope.character,
			gamesWon: $scope.gamesWon,
			gamesPlayed: $scope.gamesPlayed,
			crossovers: $scope.crossovers,
			feats: $scope.feats,
			deck: $scope.deck,
			playerComment: $scope.comment
		}
		$http.post("/api/newfeedback", obj).success(function(data, status) {
			if(data !== undefined){
				mvNotifier.notify("New Feedback Created! Refreshing page...");
		    	setTimeout(function(){window.location = '/feedback';}, 1000);   
			}else{
					console.log("Data = undefined, status: " + status);
					mvNotifier.notify("Submission failed! Be sure to check your fields!");
			}
		});
	}

});