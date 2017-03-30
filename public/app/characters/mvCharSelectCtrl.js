angular.module('app').controller('mvCharSelectCtrl', function($scope, $timeout, $location, $http) {
	$scope.character = "character select";
	hoverSwitch = function(hovercharacter, hoverclass, id){
		$(id)
		.mouseenter(function(){
			$scope.character = hovercharacter;
			$("#characterselecttitle").removeClass("characterselectbasic");
			$("#characterselecttitle").addClass(hoverclass);
			$("#characterselectjumbo").removeClass("characterselectbasic");
			$("#characterselectjumbo").addClass(hoverclass);
			$scope.$apply();
		}).mouseleave(function(){
			$scope.character = "character select";
			$("#characterselecttitle").removeClass(hoverclass);
			$("#characterselecttitle").addClass("characterselectbasic");
			$("#characterselectjumbo").removeClass(hoverclass);
			$("#characterselectjumbo").addClass("characterselectbasic");
			$scope.$apply();
		})		
	};	
	hoverSwitch("Deadeye", "characterselectde", "#de");
	hoverSwitch("Gravity Girl", "characterselectgg", "#gg");
	hoverSwitch("Knox", "characterselectkx", "#kx");
	hoverSwitch("Obscurity", "characterselectob", "#ob");
	hoverSwitch("Query", "characterselectqu", "#qu");
	hoverSwitch("Robonobo", "characterselectrb", "#rb");
	hoverSwitch("Crossovers", "characterselectcross", "#cross")	
});