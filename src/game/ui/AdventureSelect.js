/**
 * popUp Choix de l'aventure
 */
define([
	"src/utils/assetsmanager/SpriteManager",
	"src/utils/assetsmanager/SoundManager",
	"src/utils/localization/txt",
	"src/utils/Config",
	"src/game/server/Account"
],
function (
	SpriteManager,
	SoundManager,
	txt,
	Config,
	Account
) {
	/**
	 * Déclaration et initialisation du constructeur
	 */
	var AdventureSelect = function () {

	};


	/**
	 * Affiche le contenu dans popUp
	 */
	AdventureSelect.prototype.init = function (UIManager) {
		$("#screenContainer").append("<div id='AdventureSelect' class='popUp'></div>");
		$("#blackScreen").show();

		$("#screenContainer #AdventureSelect").css("background-image", "url(" + SpriteManager.get("popUp").src + ")")
		  .css("width", 786.8)
		  .css("height", 444,5)
		  .css( "left", "170" )
		  .css( "top", "160" );

		$("#AdventureSelect").append("<div class='buttonClose'>" + txt.get("LABEL_POPUP_CLOSEBTN") + "</div>");
		$("#AdventureSelect .buttonClose").css("background-image", "url(" + SpriteManager.get("buttonLoginStatic").src + ")");

		// Hover
		$( "#AdventureSelect .buttonClose").hover(function() {
			$( this ).css("background-image", "url(" + SpriteManager.get("buttonLoginSurvol").src + ")");
			$("#AdventureSelect .buttonClose").css("background-repeat", "no-repeat");
			SoundManager.play("buttonHover");
		}, function() {
			$( this ).css("background-image", "url(" + SpriteManager.get("buttonLoginStatic").src + ")");
		});

		// Active
		$( "#AdventureSelect .buttonClose").mousedown(function() {
			$("#AdventureSelect .buttonClose").css("background-image", "url(" + SpriteManager.get("buttonLoginPress").src + ")")
				.css("padding-top", "12");
		});

		$("#AdventureSelect .buttonClose").mouseup(function() {
			$("#AdventureSelect .buttonClose").css("background-image", "url(" + SpriteManager.get("buttonLoginStatic").src + ")")
				.css("padding-top", "3");
			$("#blackScreen").hide();
			SoundManager.play("meow14");
			UIManager.closeScreen("AdventureSelect", true);
			UIManager.addScreen("LevelSelect", true);
		});

		$("#AdventureSelect").append("<div id='descTitleAdventureSelect'>" + txt.get("LABEL_POPUP_ADVENTURESELECT_DESCTITLE") + "</div>");
		
		//Sélectionner l'aventure classique
		$('#AdventureSelect').append('<div id="classicSelect" class="adventureHalf"></div>');
		$('#classicSelect').append('<div id="classicInner"></div>');
		$('#classicInner').append('<img src="assets/img/sprite/ui/adventureSelect/classique.jpg" >')
			.append('<p class="adventureName">'+ txt.get("LABEL_ADVENTURE1") +'</p>');
		
		$("#AdventureSelect .adventureHalf #classicInner img").mouseup(function() {
			// modificiation aventure dans Config.js
			Config.adventureSelect=1; 
			Config.totalLevel = Config.adventure[0].totalLevel;
			$("#blackScreen").hide();
			SoundManager.play("meow14");
			UIManager.closeScreen("AdventureSelect", true);
			UIManager.addScreen("LevelSelect", true);
		});
		
		// Sélectionner la nouvelle aventure
		$('#AdventureSelect').append('<div id="newSelect" class="adventureHalf"></div>');
		$('#newSelect').append('<div id="newInner"></div>');
		$('#newInner').append('<img src="assets/img/sprite/ui/adventureSelect/newAdventureSpriteSheet.png" >')
			.append('<p class="adventureName">'+ txt.get("LABEL_ADVENTURE2") +'</p>');
		
		$("#AdventureSelect .adventureHalf #newInner img").mouseup(function() {
			// modificiation aventure dans Config.js
			Config.adventureSelect=2; 
			Config.totalLevel = Config.adventure[1].totalLevel;
			$("#blackScreen").hide();
			SoundManager.play("meow14");
			UIManager.closeScreen("AdventureSelect", true);
			UIManager.addScreen("LevelSelect", true);
		});
		
	}
	return new AdventureSelect();
});