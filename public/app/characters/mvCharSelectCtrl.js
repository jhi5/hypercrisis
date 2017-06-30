angular.module('app').controller('mvCharSelectCtrl', function($scope, $timeout, $location, $http) {
	$scope.character = "Select A Character";
	hoverIsActive = function(difficulty, alignment){
		if(difficulty === "easy"){
			$('#difficultyicon').attr("src", "http://res.cloudinary.com/jhi5/image/upload/c_scale,w_64/v1498840640/easy.png");
			$("#charselectdifficultybg").removeClass('charselectdifficulty');
			$("#charselectdifficultybg").addClass('charselectdifficultyeasy');
		}else if(difficulty === "intermediate"){
			$('#difficultyicon').attr("src", "http://res.cloudinary.com/jhi5/image/upload/c_scale,w_64/v1498840640/intermediate.png");
			$("#charselectdifficultybg").removeClass('charselectdifficulty');
			$("#charselectdifficultybg").addClass('charselectdifficultyintermediate');
		}else if(difficulty === "hard"){
			$('#difficultyicon').attr("src", "http://res.cloudinary.com/jhi5/image/upload/c_scale,w_64/v1498840640/hard.png");
			$("#charselectdifficultybg").removeClass('charselectdifficulty');
			$("#charselectdifficultybg").addClass('charselectdifficultyhard');
		}
		if(alignment === "hero"){
			$("#alignmenticon").attr("src", "http://res.cloudinary.com/jhi5/image/upload/c_scale,w_64/v1498843403/heroicon.png");
			$("#alignmentlabel").text("HERO");
			$("#charselectalignmentbg").removeClass('charselectalignment');
			$("#charselectalignmentbg").addClass('charselectalignmenthero');
		}else if(alignment === "villain"){
			$("#alignmenticon").attr("src", "http://res.cloudinary.com/jhi5/image/upload/c_scale,w_64/v1498843403/villainicon.png");
			$("#alignmentlabel").text("VILLAIN");
			$("#charselectalignmentbg").removeClass('charselectalignment');
			$("#charselectalignmentbg").addClass('charselectalignmentvillain');
		}
	};
	hoverIcons = function(plus1, plus1label, plus2, plus2label, minus1, minus1label, minus2, minus2label){
		$("#charselectplus1").attr('src', "http://res.cloudinary.com/jhi5/image/upload/c_scale,w_64/v1498840640/" +  plus1 + "icon.png");
		$("#charselectplus1label").text("+ " + plus1label);
		$("#charselectplus2").attr('src', "http://res.cloudinary.com/jhi5/image/upload/c_scale,w_64/v1498840640/" + plus2 + "icon.png");
		$("#charselectplus2label").text("+ " + plus2label);
		$("#charselectminus1").attr('src', "http://res.cloudinary.com/jhi5/image/upload/c_scale,w_64/v1498840640/" + minus1 + "icon.png");
		$("#charselectminus1label").text("- " + minus1label);
		$("#charselectminus2").attr('src', "http://res.cloudinary.com/jhi5/image/upload/c_scale,w_64/v1498840640/" + minus2 + "icon.png");
		$("#charselectminus2label").text("- " + minus2label);
	};
	hoverSwitch = function(hovercharacter, hoverclass, charname, id){
		$(id)
		.mouseenter(function(){
			$scope.character = hovercharacter;			
			$("#charselecttitle").removeClass("characterselectbasic");
			$("#charselecttitle").addClass(hoverclass);
			$("#charselectname").removeClass("charselectnamedefault");
			$("#charselectname").addClass(charname);
			if(id === "#de"){
				$(id).attr("src", "http://res.cloudinary.com/jhi5/image/upload/e_auto_contrast,q_54:420,r_25/v1498676135/deovalh.jpg");
				$("#charselectheadshot").attr("src", "http://res.cloudinary.com/jhi5/image/upload/e_auto_contrast,q_54:420,r_25/v1498676135/deadeyecharselect.jpg");
				hoverIsActive("intermediate", "villain");
				hoverIcons("playerdamage","player dmg","discard","discard","defensive","poor defense","utilitydamage","utility dmg");
			}else if(id === "#gg"){
				$(id).attr("src", "http://res.cloudinary.com/jhi5/image/upload/e_auto_contrast,q_54:420,r_25/v1498676135/ggovalh.jpg");
				$("#charselectheadshot").attr("src", "http://res.cloudinary.com/jhi5/image/upload/e_auto_contrast,q_54:420,r_25/v1498676135/gravitygirlcharselect.jpg");
				hoverIsActive("easy", "hero");
				hoverIcons("combo","combo","utilitydamage","utility dmg","draw","card draw","disruption","disruption");
			}else if(id === "#kx"){
				$(id).attr("src", "http://res.cloudinary.com/jhi5/image/upload/e_auto_contrast,q_54:420,r_25/v1498676135/kxovalh.jpg");
				$("#charselectheadshot").attr("src", "http://res.cloudinary.com/jhi5/image/upload/e_auto_contrast,q_54:420,r_25/v1498676135/knoxcharselect.jpg");
				hoverIsActive("intermediate", "villain");
				hoverIcons("aggressive","aggressive","draw","card draw","healing","healing","versatile","not versatile");				
			}else if(id === "#ob"){
				$(id).attr("src", "http://res.cloudinary.com/jhi5/image/upload/e_auto_contrast,q_54:420,r_25/v1498676135/obovalh.jpg");	
				$("#charselectheadshot").attr("src", "http://res.cloudinary.com/jhi5/image/upload/e_auto_contrast,q_54:420,r_25/v1498676135/obscuritycharselect.jpg");
				hoverIsActive("hard", "hero");		
				hoverIcons("defensive","defense","disruption","disruption","aggressive","poor offense","playerdamage","player dmg");	
			}else if(id === "#qu"){
				$(id).attr("src", "http://res.cloudinary.com/jhi5/image/upload/e_auto_contrast,q_54:420,r_25/v1498676135/quovah.jpg");
				$("#charselectheadshot").attr("src", "http://res.cloudinary.com/jhi5/image/upload/e_auto_contrast,q_54:420,r_25/v1498676135/querycharselect.jpg");
				hoverIsActive("easy", "hero");
				hoverIcons("aggressive","aggressive","disruption","disruption","defensive","poor defense","discard","weak to discard");
			}else if(id === "#rb"){
				$(id).attr("src", "http://res.cloudinary.com/jhi5/image/upload/e_auto_contrast,q_54:420,r_25/v1498676135/rbovalh.jpg");
				$("#charselectheadshot").attr("src", "http://res.cloudinary.com/jhi5/image/upload/e_auto_contrast,q_54:420,r_25/v1498676135/robonobocharselect.jpg");
				hoverIsActive("easy", "villain");
				hoverIcons("armor","armor","combo","combo","versatile","not versatile","utilitydamage","utility dmg");
			}else if(id === "#sa"){
				$(id).attr("src", "http://res.cloudinary.com/jhi5/image/upload/e_auto_contrast,q_54:420,r_25/v1498676135/saovalh.jpg");
				$("#charselectheadshot").attr("src", "http://res.cloudinary.com/jhi5/image/upload/e_auto_contrast,q_54:420,r_25/v1498676135/siliconartistcharselect.jpg");
				hoverIsActive("hard", "villain");
				hoverIcons("combo","combo","disruption","disruption","armor","armor","utilitydamage","utility dmg");
			}
			$scope.$apply();
		}).mouseleave(function(){			
			$scope.character = "Select A Character";
			$("#charselecttitle").removeClass(hoverclass);
			$("#charselecttitle").addClass("characterselectbasic");
			$("#charselectname").removeClass(charname);
			$("#charselectname").addClass("charselectnamedefault");
			$("#charselectdifficultybg").removeClass('charselectdifficultyeasy');
			$("#charselectdifficultybg").removeClass('charselectdifficultyintermediate');
			$("#charselectdifficultybg").removeClass('charselectdifficultyhard');
			$("#charselectdifficultybg").addClass('charselectdifficulty');
			$("#charselectalignmentbg").removeClass('charselectalignmenthero');
			$("#charselectalignmentbg").removeClass('charselectalignmentvillain');
			$("#charselectalignmentbg").addClass('charselectalignment');
			if(id === "#de"){
				$(id).attr("src", "http://res.cloudinary.com/jhi5/image/upload/e_auto_contrast,q_54:420,r_25/v1498676135/deoval.jpg");					
			}else if(id === "#gg"){
				$(id).attr("src", "http://res.cloudinary.com/jhi5/image/upload/e_auto_contrast,q_54:420,r_25/v1498676135/ggoval.jpg");
			}else if(id === "#kx"){
				$(id).attr("src", "http://res.cloudinary.com/jhi5/image/upload/e_auto_contrast,q_54:420,r_25/v1498676135/kxoval.jpg");
			}else if(id === "#ob"){
				$(id).attr("src", "http://res.cloudinary.com/jhi5/image/upload/e_auto_contrast,q_54:420,r_25/v1498676135/oboval.jpg");
			}else if(id === "#qu"){
				$(id).attr("src", "http://res.cloudinary.com/jhi5/image/upload/e_auto_contrast,q_54:420,r_25/v1498676135/quova.jpg");
			}else if(id === "#rb"){
				$(id).attr("src", "http://res.cloudinary.com/jhi5/image/upload/e_auto_contrast,q_54:420,r_25/v1498676135/rboval.jpg");
			}else if(id === "#sa"){
				$(id).attr("src", "http://res.cloudinary.com/jhi5/image/upload/e_auto_contrast,q_54:420,r_25/v1498676135/saoval.jpg");
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