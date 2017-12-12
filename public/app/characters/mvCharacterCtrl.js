angular.module('app').controller('mvCharacterCtrl', function($scope, $timeout, $location, $http) {
	$.getJSON('//freegeoip.net/json/?callback=?', function(data) {
	  console.log(data);
	});
	var cardCollection = [];
	$scope.cards = [];
	$scope.currentModalIndex = 0;
	$scope.currentCollectionSize = 0;
	$scope.tagArray = [];
	$scope.currentTags = [];	
	$scope.currentCharacter = $("#charname").text();
	$scope.currentFilter = {};
	$scope.checkBox = false;	
	$scope.featBox = false;
	$scope.sortOrder = 'name';	
	$scope.cardDatabase = function(){
		if($("#db-heading").text() === "Close Card Database"){
			$("#db-heading").text("Open Card Database");
		}else if($("#db-heading").text() === "Open Card Database"){
			$("#db-heading").text("Close Card Database");
			$("#db-heading").addClass("hide");
		}		
	}
	$scope.changePanel = function(string){
		$("#default").removeClass("active");
		$("#howtoplay").removeClass("active");
		$("#bio").removeClass("active");
		$("#skill").removeClass("active");
		if(string === "#howtoplay"){
			$("#howtoplay").addClass('active');
		}
		if(string === "#bio"){
			$("#bio").addClass('active');
		}
		if(string === "#skill"){
			$("#skill").addClass('active');
		}
	}
	$scope.logCheckBox = function(){
		if($scope.checkBox === false){
			$scope.checkBox = true;
			$('#crossbutton').addClass('.active');
			$('#crosssymbol').attr('src', src="http://res.cloudinary.com/jhi5/image/upload/c_scale,q_54,w_75/v1498845176/crossover.png");
			return console.log($scope.checkBox);
		}
		if($scope.checkBox === true){
			$scope.checkBox = false;
			$('#crossbutton').removeClass('.active');
			$('#crosssymbol').attr('src', src="http://res.cloudinary.com/jhi5/image/upload/c_scale,q_54,w_75/v1498845176/crossovericon.png");
			return console.log($scope.checkBox);
		}
	}
	$scope.logFeatBox = function(){
		if($scope.featBox === false){
			$scope.featBox = true;
			$('#featbutton').addClass('.active');
			$('#featbutton').text('Feats On');
			$('.featbutton').css('background-color', '#228B22');
			return console.log($scope.featBox);
		}
		if($scope.featBox === true){
			$scope.featBox = false;
			$('#featbutton').removeClass('.active');
			$('#featbutton').text('Feats Off');
			$('#featbutton').css('background-color', '#FF4847');
			return console.log($scope.checkBox);
		}
	}
	$scope.hideTagButton = function(string){
		if($scope.currentTags.length !== 0){
			for(i=0;i<$scope.currentTags.length;i++){
				if(string === $scope.currentTags[i]){
					return true;
				}
			}			
		}
		return false;
	}
	$scope.removeFilterButton = function(string){		
		$scope.currentTags.splice($scope.currentTags.indexOf(string), 1);
	}	
	findAverage = function(array){
		sum = 0;
		for(i=0;i<array.length;i++){
			sum += parseInt(array[i]);
		}
		return (sum / array.length);
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
			object.typeSymbol  = 'http://res.cloudinary.com/jhi5/image/upload/actionicon.png';
		}
		if(string == "Crossover"){
			object.typeSymbol = 'http://res.cloudinary.com/jhi5/image/upload/crossovericon.png';
		}		
		if(string == "Utility"){
			object.typeSymbol = 'http://res.cloudinary.com/jhi5/image/upload/utilityicon.png';
		}
		if(string == "Special"){
			object.typeSymbol = 'http://res.cloudinary.com/jhi5/image/upload/specialicon.png';
		}
		if(string == "Feat" && object.character === "Gravity Girl"){
			object.typeSymbol = 'http://res.cloudinary.com/jhi5/image/upload/ggfeat.png';
		}
		if(string == "Feat" && object.character === "Robonobo"){
			object.typeSymbol = 'http://res.cloudinary.com/jhi5/image/upload/rbfeat.png';
		}
		if(string == "Feat" && object.character === "Deadeye"){
			object.typeSymbol = 'http://res.cloudinary.com/jhi5/image/upload/defeat.png';
		}
		if(string == "Feat" && object.character === "Query"){
			object.typeSymbol = 'http://res.cloudinary.com/jhi5/image/upload/qufeat.png';
		}
		if(string == "Feat" && object.character === "Obscurity"){
			object.typeSymbol = 'http://res.cloudinary.com/jhi5/image/upload/obfeat.png';
		}
		if(string == "Feat" && object.character === "Knox"){
			object.typeSymbol = 'http://res.cloudinary.com/jhi5/image/upload/kxfeat.png';
		}
		if(string == "Feat" && object.character === "Silicon Artist"){
			object.typeSymbol = 'http://res.cloudinary.com/jhi5/image/upload/safeat.png';
		}
	}
	createRating = function(object, array){
		ratingSymbol = findAverage(array);
		if(ratingSymbol >= 3.5){
			object.ratingSymbol = 'http://res.cloudinary.com/jhi5/image/upload/bombicon.png';
			object.ratingText = "Bomb";
		}
		if(ratingSymbol >= 2.5 && ratingSymbol < 3.5){
			object.ratingSymbol = 'http://res.cloudinary.com/jhi5/image/upload/goodicon.png';
			object.ratingText = "Good";
		}
		if(ratingSymbol >= 1.5 && ratingSymbol < 2.5){
			object.ratingSymbol = 'http://res.cloudinary.com/jhi5/image/upload/okayicon.png';
			object.ratingText = "Okay";
		}
		if(ratingSymbol <= 1.5){
			object.ratingSymbol = 'http://res.cloudinary.com/jhi5/image/upload/maybeicon.png';
			object.ratingText = "Maybe";
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
					rating: $scope.cards[i].rating,
					typeSymbol: createSymbol(this, $scope.cards[i].type),
					ratingSymbol: createRating(this, $scope.cards[i].rating),
					ratingText: $scope.cards[i].ratingText				
				}
 				createSymbol($scope.modalContent, $scope.modalContent.type);
 				createRating($scope.modalContent, $scope.modalContent.rating);
				$scope.cell = $scope.modalContent.name;
				$('#myModal').modal('show');
				break;
			}else{
				continue;
			}
		}
	}
	$(document).ready(function(){
		if(screen.width > 768){
			$('[data-toggle="popover"]').popover();
	    }	       
	});
	loadCollection = function(){
		$http({method: 'GET', url: '/api/cards/' })
		.then(function successCallback(response) {
			cardCollection = response;
			$scope.cards = cardCollection.data;
			for(i=0;i<$scope.cards.length;i++){
				createSymbol($scope.cards[i], $scope.cards[i].type);
				parsedRating = '';
				if($scope.cards[i].rating[0] >= 3.5){
					$scope.parsedRating = 'http://res.cloudinary.com/jhi5/image/upload/bombicon.png';
					$scope.cards[i].ratingText = "Bomb";
				}
				if($scope.cards[i].rating[0] >= 2.5 && $scope.cards[i].rating[0] < 3.5){
					$scope.parsedRating = 'http://res.cloudinary.com/jhi5/image/upload/goodicon.png';
					$scope.cards[i].ratingText = "Good";
				}
				if($scope.cards[i].rating[0] >= 1.5 && $scope.cards[i].rating[0] < 2.5){
					$scope.parsedRating = 'http://res.cloudinary.com/jhi5/image/upload/okayicon.png';
					$scope.cards[i].ratingText = "Okay";
				}
				if($scope.cards[i].rating[0] <= 1.5){
					$scope.parsedRating = 'http://res.cloudinary.com/jhi5/image/upload/maybeicon.png';
					$scope.cards[i].ratingText = "Maybe";
				}
				$scope.cards[i].ratingSymbol = $scope.parsedRating;
			}
			for(j=0;j<$scope.cards.length;j++){
				if($scope.cards[j].character === $scope.currentCharacter){
				for(k=0;k<$scope.cards[j].tags.length;k++){
					$scope.tagArray.push($scope.cards[j].tags[k]);
				}
			}
			}
			$scope.tagArray = $scope.tagArray.sort();
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
		$("#db-heading").removeClass("hide");
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
    	var firstTds = [];
    	var currentCard = '';
    	var currentCardIndex = 0;
    	$('td:first-child').each(function(){
    		firstTds.push($(this).text());
    	})
    	for(i=0;i<firstTds.length;i++){
    		if(firstTds[i] === $("#modaltitle").text()){
    			if(i === 0){
    				return true;
    			}else{
    				return false;
    			}
    		}
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
	$scope.filterButton = function(string){
		$scope.currentTags.push(string);			
	}
	$scope.containsTags = function(actual, expected){
		if(actual.character === $scope.currentCharacter || actual.type === "Crossover"){
			if($scope.checkBox === false && actual.type === "Crossover"){
				return false;
			}
			if($scope.searchText !== undefined && $scope.currentTags.length === 0){
				searchString = $scope.searchText.toLowerCase();
				if(actual.text.toLowerCase().indexOf(searchString) !== -1){
					return true;
				}
				if(actual.name.toLowerCase().indexOf(searchString) !== -1){
					return true;
				}
			}		   
			
			if(($scope.currentTags.length !== 0) && ($scope.searchText === undefined)){
				for(i=0;i<$scope.currentTags.length;i++){
					for(j=0;j<actual.tags.length;j++){
						if(actual.tags[j] === $scope.currentTags[i]){
							return true;
						}
					}
				}
			}

			if($scope.currentTags.length !== 0 && $scope.searchText !== undefined){
				var containsSearch = false;
				var containsTags = false;
				searchString = $scope.searchText.toLowerCase();
				if(actual.text.toLowerCase().indexOf(searchString) !== -1){
					containsSearch = true;
				}
				if(actual.name.toLowerCase().indexOf(searchString) !== -1){
					containsSearch = true;
				}
				for(i=0;i<$scope.currentTags.length;i++){
					for(j=0;j<actual.tags.length;j++){
						if(actual.tags[j] === $scope.currentTags[i]){
							containsTags = true;
						}
					}
				}
				if(containsSearch === true && containsTags === true){
					return true;
				}else{
					return false;
				}
			}

			if($scope.currentTags.length === 0 && $scope.searchText === undefined){
				return true;
			}		
		}
	}
	$scope.resetTags = function(){
		loadCollection();
		$scope.currentTags = [];
		$scope.searchText = "";
	}
	$scope.setOrder = function(string){
		currentOrder = $scope.sortOrder;		
		if($scope.sortOrder === string){
			$scope.sortOrder = "-" + currentOrder;
		}else{
			$scope.sortOrder = string;
		}
	}
	hoverSwitch = function(id){
		$(id)
		.mouseenter(function(){
			buttonbg = "";
			if($scope.currentCharacter === "Deadeye"){
				buttonbg = ("de-bg");
			}else if($scope.currentCharacter === "Gravity Girl"){
				buttonbg = ("gg-bg");
			}else if($scope.currentCharacter === "Knox"){
				buttonbg = ("kx-bg");
			}else if($scope.currentCharacter === "Obscurity"){
				buttonbg = ("ob-bg");
			}else if($scope.currentCharacter === "Query"){
				buttonbg = ("qu-bg");
			}else if($scope.currentCharacter === "Robonobo"){
				buttonbg = ("rb-bg");
			}else if($scope.currentCharacter === "Silicon Artist"){
				buttonbg = ("sa-bg");
			}
			if(id === "#skillbutton"){				
				$('#skillbutton').removeClass(buttonbg);
				$('#skillbutton').addClass("blue-bg");
			}else if(id === "#biobutton"){
				$('#biobutton').removeClass(buttonbg);
				$('#biobutton').addClass("blue-bg");
			}else if(id === "#howtoplaybutton"){
				$('#howtoplaybutton').removeClass(buttonbg);
				$('#howtoplaybutton').addClass("blue-bg");
			}
			$scope.$apply();
		}).mouseleave(function(){			
			if(id === "#skillbutton"){
				$('#skillbutton').removeClass("blue-bg");
				$('#skillbutton').addClass(buttonbg);
			}else if(id === "#biobutton"){
				$('#biobutton').removeClass("blue-bg");
				$('#biobutton').addClass(buttonbg);
			}else if(id === "#howtoplaybutton"){
				$('#howtoplaybutton').removeClass("blue-bg");
				$('#howtoplaybutton').addClass(buttonbg);			
			}
			$scope.$apply();
		})		
	};
	hoverSwitch('#downloadbutton');
	hoverSwitch('#skillbutton');
	hoverSwitch('#biobutton');
	hoverSwitch('#howtoplaybutton');
	hoverSwitch('#backbutton');
});
