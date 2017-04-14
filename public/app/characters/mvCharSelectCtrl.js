angular.module('app').controller('mvCharSelectCtrl', function($scope, $timeout, $location, $http) {
	$scope.character = "Select A Character";
	hoverSwitch = function(hovercharacter, hoverclass, charname, id){
		$(id)
		.mouseenter(function(){
			$scope.character = hovercharacter;
			$("#charselecttitle").removeClass("characterselectbasic");
			$("#charselecttitle").addClass(hoverclass);
			$("#charselectname").removeClass("charselectnamedefault");
			$("#charselectname").addClass(charname);
			$scope.$apply();
		}).mouseleave(function(){
			$scope.character = "Select A Character";
			$("#charselecttitle").removeClass(hoverclass);
			$("#charselecttitle").addClass("characterselectbasic");
			$("#charselectname").removeClass(charname);
			$("#charselectname").addClass("charselectnamedefault");
			$scope.$apply();
		})		
	};	
	hoverSwitch("Deadeye", "de-charselectoval", "de-charname", "#de");
	hoverSwitch("Gravity Girl", "gg-charselectoval", "gg-charname", "#gg");
	hoverSwitch("Knox", "kx-charselectoval", "kx-charname", "#kx");
	hoverSwitch("Obscurity", "ob-charselectoval", "ob-charname", "#ob");
	hoverSwitch("Query", "qu-charselectoval", "qu-charname","#qu");
	hoverSwitch("Robonobo", "rb-charselectoval", "rb-charname", "#rb");
	hoverSwitch("Silicon Artist", "sa-charselectoval", "sa-charname", "#sa")	
});