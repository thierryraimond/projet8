/**
 * Ecran de chargement du jeu
 */
define([
	"src/utils/assetsmanager/SpriteManager",
	"src/utils/assetsmanager/SoundManager",
	"src/utils/localization/txt",
	"src/utils/loader/PreLoad"
],
function (
	SpriteManager,
	SoundManager,
	txt,
	PreLoad
) {
	var LoadScreen = function () {

	}


	/**
	 * Affiche le contenu dans gameContainer
	 */
	LoadScreen.prototype.init = function (UIManager) {
		$("#screenContainer").append("<div id='LoadScreen'></div>");

		var imageList = ["loadingBackground", "loadingBar", "loadingCat"];
//		var imageList = [ "loadingBackground", "sokonyanPreLoad", "loadingBar", "loadingCat" ];

		for (var i = 0; i < imageList.length; i++) {
			
//			if (i == 0) {
				$("#LoadScreen").append("<div class=" + imageList[i] + "></div>");
				$("#LoadScreen ." + imageList[i]).css("background-image", "url(" + PreLoad.list[i].image.src + ")");
//				$("#LoadScreen").append('<div id="loadingTitle"><div class="sokonyanPreLoad"></div></div>');
//			} else {
//				if (i == 1) {
//					$("#LoadScreen ." + imageList[i]).css("background-image", "url(" + PreLoad.list[i].image.src + ")");
//				} else {
//					$("#LoadScreen").append("<div class=" + imageList[i] + "></div>");
//					$("#LoadScreen ." + imageList[i]).css("background-image", "url(" + PreLoad.list[i].image.src + ")");
//				}
//				
//			}
			
//			$("#LoadScreen").append("<div class=" + imageList[i] + "></div>");
//			$("#LoadScreen ." + imageList[i]).css("background-image", "url(" + PreLoad.list[i].src + ")");
		}

		// $("#LoadScreen").append("<div class='loadingText'><blink>" + txt.get("LABEL_LOADINGSCREEN_LOADING") + "</blink></div>");
		$("#LoadScreen").append("<div class='loadingText'><blink>" + "Loading the game" + "</blink></div>");
	}


	return new LoadScreen();
});