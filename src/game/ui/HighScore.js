/**
 * Class HighScore
 */
define([
	"src/utils/assetsmanager/SpriteManager",
	"src/utils/assetsmanager/SoundManager",
	"src/utils/localization/txt",
	"src/game/server/Account"
],
function (
	SpriteManager,
	SoundManager,
	txt,
	Account
) {
	var HighScore = function () {

	}


	/**
	 * Affiche le contenu dans popUp
	 */
	HighScore.prototype.init = function (UIManager) {
		$("#screenContainer").append("<div id='HighScore' class='popUp'></div>");
		$("#blackScreen").show();

		$("#screenContainer #HighScore").css("background-image", "url(" + SpriteManager.get("popUp").src + ")")
									  .css("width", 786.8)
									  .css("height", 600,5)
									  .css( "left", "170" )
									  .css( "top", "20" );
		
		
//		$("#HighScore").append('<div id="adventureClassic" class="highScoreHalf"></div>');
//		$("#HighScore").append('<div id="adventureNew" class="highScoreHalf"></div>');
		
		//Title
		$("#screenContainer #HighScore").append("<div class='highScoreTitle'>" + txt.get("LABEL_POPUP_HIGHSCORE_TITLE") + "</div>");

		$("#HighScore").append("<div class='buttonClose'>" + txt.get("LABEL_POPUP_CLOSEBTN") + "</div>");
		$("#HighScore .buttonClose").css("background-image", "url(" + SpriteManager.get("buttonLoginStatic").src + ")")
									.css("top","485");

		// Hover
		$("#HighScore .buttonClose").hover(function() {
			$( this ).css("background-image", "url(" + SpriteManager.get("buttonLoginSurvol").src + ")");
			$("#HighScore .buttonClose").css("background-repeat", "no-repeat");
			SoundManager.play("buttonHover");
		}, function() {
			$( this ).css("background-image", "url(" + SpriteManager.get("buttonLoginStatic").src + ")");
		});

		// Active
		$("#HighScore .buttonClose").mousedown(function() {
			$("#HighScore .buttonClose").css("background-image", "url(" + SpriteManager.get("buttonLoginPress").src + ")");
			$("#HighScore .buttonClose").css("padding-top", 12);
		});

		$("#HighScore .buttonClose").mouseup(function() {
			$("#HighScore .buttonClose").css("background-image", "url(" + SpriteManager.get("buttonLoginStatic").src + ")");
			$("#HighScore .buttonClose").css("padding-top", 8);
			$("#blackScreen").hide();
			SoundManager.play("meow14");
			UIManager.closeScreen("HighScore", true);
		});



		var highScoreList = Account.highScore;
//		var playerScoreList = Account.playerScore;
		
		var adventureList = [
			{ name: "adventureClassic", txt: "LABEL_ADVENTURE1" }, 
			{ name: "adventureNew", txt: "LABEL_ADVENTURE2" }
		];
		
		for (var n = 0; n < adventureList.length; n++) {
			
			var playerScore = 0;
			var playerRank;
			
			var name;
			var score;
			
			$("#HighScore").append('<div id="' + adventureList[n].name + '" class="highScoreHalf"></div>');
			$("#screenContainer #" + adventureList[n].name ).append('<div id="classic" class="adventure">'+ txt.get(adventureList[n].txt) +'</div>');

			// affiche les 10 meilleurs scores
			for (var i = 0; i < 10; i++) {
				if (typeof highScoreList[n].result[i] != "undefined") {
					name = highScoreList[n].result[i]["playerName"];
					score = highScoreList[n].result[i]["score"];
				} else {
					name = "Aucun";
					score = "/";
				}
				$("#screenContainer #" + adventureList[n].name ).append("<div class='nameAndScore' id='"+ n + "number" + i + "'" + ">" + (i + 1) + ". " + name + " : " + score + "</div>");
				var topOffset = 110 + 30 * i;
				$("#"+ n + "number" + i).css("top", topOffset);				
			}
			
			// recherche du score du joueur dans la liste des meilleurs scores
			for (var i = 0; i < highScoreList[n].result.length; i++) {
				if (typeof highScoreList[n].result[i] != "undefined") {
					if (highScoreList[n].result[i]["playerName"] == Account.name) {
						playerScore = highScoreList[n].result[i]["score"];
						playerRank = i;
//						console.log(playerScore + " / " + playerRank);
					}
				}
			}

//			console.log(typeof(playerScore));
			var myScoreText = (playerRank + 1) + txt.get("LABEL_YOUR_SCORE") + playerScore;
			if (typeof playerScore == "undefined" || playerScore == 0) myScoreText =  txt.get("LABEL_POPUP_HIGHSCORE_NORANK");

			$("#screenContainer #" + adventureList[n].name ).append("<div id='yourHighScore"+n+"' class='yourHighScore'>" + myScoreText + "</div>");
		}
		

	}
	return new HighScore();
});