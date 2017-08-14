angular.module('app').controller('mvCharSelectCtrl', function($scope, $timeout, $location, $http) {
	$scope.character = "Character Select";
	hoverSwitch = function(hovercharacter, hoverclass, charname, id){
		$(id)
		.mouseenter(function(){
			$scope.character = hovercharacter;
			$("#cs-name").removeClass("de-bg");
			$("#cs-name").removeClass("gg-bg");
			$("#cs-name").removeClass("kx-bg");
			$("#cs-name").removeClass("ob-bg");
			$("#cs-name").removeClass("qu-bg");
			$("#cs-name").removeClass("rb-bg");
			$("#cs-name").removeClass("sa-bg");
			$("#cs-name").removeClass("de-banner");
			$("#cs-name").removeClass("gg-banner");
			$("#cs-name").removeClass("kx-banner");
			$("#cs-name").removeClass("ob-banner");
			$("#cs-name").removeClass("qu-banner");
			$("#cs-name").removeClass("rb-banner");
			$("#cs-name").removeClass("sa-banner");
			$("#cs-name").removeClass("cs-defaultname");
			$("#cs-name").addClass(charname);
			if(id === "#de"){
				$(id).attr("src", "http://res.cloudinary.com/jhi5/image/upload/e_auto_contrast,q_54:420,r_25/v1498676135/deovalh.png");
				$("#cs-name").removeClass("cs-bg");
				$("#cs-name").addClass("de-bg");
				$("#cs-splash").removeClass('cs-bannerimg');
				$("#cs-splash").addClass('de-banner');
			}else if(id === "#gg"){
				$(id).attr("src", "http://res.cloudinary.com/jhi5/image/upload/e_auto_contrast,q_54:420,r_25/v1498676135/ggovalh.png");
				$("#cs-name").removeClass("cs-bg");
				$("#cs-name").addClass("gg-bg");
				$("#cs-splash").removeClass('cs-bannerimg');
				$("#cs-splash").addClass('gg-banner');
			}else if(id === "#kx"){
				$(id).attr("src", "http://res.cloudinary.com/jhi5/image/upload/e_auto_contrast,q_54:420,r_25/v1498676135/kxovalh.png");
				$("#cs-name").removeClass("cs-bg");
				$("#cs-name").addClass("kx-bg");
				$("#cs-splash").removeClass('cs-bannerimg');
				$("#cs-splash").addClass('kx-banner');
			}else if(id === "#ob"){
				$(id).attr("src", "http://res.cloudinary.com/jhi5/image/upload/e_auto_contrast,q_54:420,r_25/v1498676135/obovalh.png");
				$("#cs-name").removeClass("cs-bg");
				$("#cs-name").addClass("ob-bg");
				$("#cs-splash").removeClass('cs-bannerimg');
				$("#cs-splash").addClass('ob-banner');
			}else if(id === "#qu"){
				$(id).attr("src", "http://res.cloudinary.com/jhi5/image/upload/e_auto_contrast,q_54:420,r_25/v1498676135/quovalh.png");
				$("#cs-name").removeClass("cs-bg");
				$("#cs-name").addClass("qu-bg");
				$("#cs-splash").removeClass('cs-bannerimg');
				$("#cs-splash").addClass('qu-banner');
			}else if(id === "#rb"){
				$(id).attr("src", "http://res.cloudinary.com/jhi5/image/upload/e_auto_contrast,q_54:420,r_25/v1498676135/rbovalh.png");
				$("#cs-name").removeClass("cs-bg");
				$("#cs-name").addClass("rb-bg");
				$("#cs-splash").removeClass('cs-bannerimg');
				$("#cs-splash").addClass('rb-banner');
			}else if(id === "#sa"){
				$(id).attr("src", "http://res.cloudinary.com/jhi5/image/upload/e_auto_contrast,q_54:420,r_25/v1498676135/saovalh.png");
				$("#cs-name").removeClass("cs-bg");
				$("#cs-name").addClass("sa-bg");
				$("#cs-splash").removeClass('cs-bannerimg');
				$("#cs-splash").addClass('sa-banner');
			} 
			$scope.$apply();
		}).mouseleave(function(){			
			$scope.character = "Character Select";
			$("#charselectname").removeClass(charname);
			$("#charselectname").addClass("charselectnamedefault");		
			$("#cs-name").addClass("cs-bg");
			$("#cs-name").addClass("cs-defaultname");
			$("#cs-splash").addClass("cs-bannerimg");
			if(id === "#de"){				
				$("#cs-name").removeClass("de-bg");
				$("#cs-splash").removeClass("de-banner");
				$(id).attr("src", "http://res.cloudinary.com/jhi5/image/upload/e_auto_contrast,q_54:420,r_25/v1498676135/deoval.png");					
			}else if(id === "#gg"){
				$("#cs-name").removeClass("gg-bg");
				$("#cs-splash").removeClass("gg-banner");
				$(id).attr("src", "http://res.cloudinary.com/jhi5/image/upload/e_auto_contrast,q_54:420,r_25/v1498676135/ggoval.png");
			}else if(id === "#kx"){
				$("#cs-name").removeClass("kx-bg");
				$("#cs-splash").removeClass("kx-banner");
				$(id).attr("src", "http://res.cloudinary.com/jhi5/image/upload/e_auto_contrast,q_54:420,r_25/v1498676135/kxoval.png");
			}else if(id === "#ob"){
				$("#cs-name").removeClass("ob-bg");
				$("#cs-splash").removeClass("ob-banner");
				$(id).attr("src", "http://res.cloudinary.com/jhi5/image/upload/e_auto_contrast,q_54:420,r_25/v1498676135/oboval.png");
			}else if(id === "#qu"){
				$("#cs-name").removeClass("qu-bg");
				$("#cs-splash").removeClass("qu-banner");
				$(id).attr("src", "http://res.cloudinary.com/jhi5/image/upload/e_auto_contrast,q_54:420,r_25/v1498676135/quoval.png");
			}else if(id === "#rb"){
				$("#cs-name").removeClass("rb-bg");
				$("#cs-splash").removeClass("rb-banner");
				$(id).attr("src", "http://res.cloudinary.com/jhi5/image/upload/e_auto_contrast,q_54:420,r_25/v1498676135/rboval.png");
			}else if(id === "#sa"){
				$("#cs-name").removeClass("sa-bg");
				$("#cs-splash").removeClass("sa-banner");
				$(id).attr("src", "http://res.cloudinary.com/jhi5/image/upload/e_auto_contrast,q_54:420,r_25/v1498676135/saoval.png");
			}
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