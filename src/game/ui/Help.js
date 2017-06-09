/**
 * Ecran d'Help
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
	var Help = function () {

	}


	/**
	 * Affiche le contenu dans gameContainer
	 */
	Help.prototype.init = function (UIManager) {
		$("#screenContainer").append("<div id='Help'></div>");

		$("#Help").append("<div id='helpBackground'></div>");
		$("#Help").css("position","absolute");
		$("#helpBackground").css("background-image", "url(" + SpriteManager.get("background").src + ")");
		
		
		/**
		 * Partie Entête de page
		 */
		$("#Help").append('<div id="HelpHead"><div id="sokonyan4"></div></div><div id="rainbowTitle2"><div id="rainbow2"></div></div><div id="catRight3"></div>');
		$('#Help #sokonyan4').css("background-image", "url(" + SpriteManager.get("sokonyan").src + ")");
		$('#Help #rainbow2').css("background-image", "url(" + SpriteManager.get("loadingBar").src + ")");
		$('#Help #catRight3').css("background-image", "url(" + SpriteManager.get("player").src + ")");
		
		/**
		 * Partie Image
		 */
		for (var i = 1; i <= 5; i++) {
			$("#Help").append('<div id="helpImage'+i+'" class="helpImage"></div>');
		}
					

		/**
		 * Partie Titre
		 */
		var listTitleText = ["LABEL_HELP_TITLE_SIMPLE_RULES","LABEL_HELP_TITLE_MAIN_FEATURE"];
		for (var i = 0; i < listTitleText.length; i++) {
			$("#Help").append("<div class='helpText' id='helpTitle" + i + "'>" + txt.get(listTitleText[i]) + "</div>");
		};


		/**
		 * Partie Paragraphe
		 */
		var nTutorial = 5;
		for (var j = 0; j < nTutorial ; j++) {
			$("#Help").append("<div class='helpText' id='helpLittle" + j + "'>" + txt.get("LABEL_HELP_LITTLE_" + j + "_RULES") + "</div>");
		};

		/**
		 * Bouton de retour
		 */
		$("#Help").append("<div id='helpButtonClose'>" + txt.get("LABEL_POPUP_CLOSEBTN") + "</div>");
		$("#helpButtonClose").css("background-image", "url(" + SpriteManager.get("buttonLoginStatic").src + ")");

		// Hover
		$("#helpButtonClose").hover(function() {
			$( this ).css("background-image", "url(" + SpriteManager.get("buttonLoginSurvol").src + ")");
			$("#helpButtonClose").css("background-repeat", "no-repeat");
			SoundManager.play("buttonHover");
		}, function() {
			$( this ).css("background-image", "url(" + SpriteManager.get("buttonLoginStatic").src + ")");
		});

		// Active
		$("#helpButtonClose").mousedown(function() {
			$("#Help #helpButtonClose").css("background-image", "url(" + SpriteManager.get("buttonLoginPress").src + ")")
									   .css("padding-top", "14");
		});

		$("#helpButtonClose").mouseup(function() {
			$("#helpButtonClose").css("background-image", "url(" + SpriteManager.get("buttonLoginStatic").src + ")")
								 .css("padding-top", "6");
			$("#blackScreen").hide();
			SoundManager.play("meow14");
			UIManager.closeScreen("Help", true);
		});

	}


	return new Help();
});