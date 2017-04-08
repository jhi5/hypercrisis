angular.module('app').controller('mvCharSelectCtrl', function($scope, $timeout, $location, $http) {
	$scope.character = "Select A Character";
	hoverSwitch = function(hovercharacter, hoverclass, charname, id){
		$(id)
		.mouseenter(function(){
			$scope.character = hovercharacter;
			$("#characterselecttitle").removeClass("characterselectbasic");
			$("#characterselecttitle").addClass(hoverclass);
			$("#characterselectname").removeClass("charselectnamedefault");
			$("#characterselectname").addClass(charname);
			$scope.$apply();
		}).mouseleave(function(){
			$scope.character = "Select A Character";
			$("#characterselecttitle").removeClass(hoverclass);
			$("#characterselecttitle").addClass("characterselectbasic");
			$("#characterselectname").removeClass(charname);
			$("#characterselectname").addClass("charselectnamedefault");
			$scope.$apply();
		})		
	};	
	hoverSwitch("Deadeye", "characterselectde", "charnamede", "#de");
	hoverSwitch("Gravity Girl", "characterselectgg", "charnamegg", "#gg");
	hoverSwitch("Knox", "characterselectkx", "charnamekx", "#kx");
	hoverSwitch("Obscurity", "characterselectob", "charnameob", "#ob");
	hoverSwitch("Query", "characterselectqu", "charnamequ", "#qu");
	hoverSwitch("Robonobo", "characterselectrb", "charnamerb", "#rb");
	hoverSwitch("Silicon Artist", "characterselectsa", "charnamesa", "#sa")	
});