/**
* Load toutes les images et differents spritesheet du jeu
*/
define([
	"underscore",
	"src/utils/debug/Debug",
	"src/utils/assetsmanager/SpriteManager"
],
function (
	_,
	Debug,
	SpriteManager
) {
	var SpriteLoader = function () {
		this.baseFolder = "assets/img/"
		this.list = [

			// Tiles du jeu:
			{
				name: "void",
				path: this.baseFolder + "sprite/game/tiles/void.png"
			},
			// Floor de differentes couleurs :
			{
				name: "floorRed",
				path: this.baseFolder + "sprite/game/tiles/floorRed.png"
			},
			{
				name: "floorOrange",
				path: this.baseFolder + "sprite/game/tiles/floorOrange.png"
			},
			{
				name: "floorYellow",
				path: this.baseFolder + "sprite/game/tiles/floorYellow.png"
			},
			{
				name: "floorGreen",
				path: this.baseFolder + "sprite/game/tiles/floorGreen.png"
			},
			{
				name: "floorBlue",
				path: this.baseFolder + "sprite/game/tiles/floorBlue.png"
			},
			{
				name: "floorPurple",
				path: this.baseFolder + "sprite/game/tiles/floorPurple.png"
			},

			// Elements :
			{
				name: "wall",
				path: this.baseFolder + "sprite/game/tiles/wall.png"
			},
			{
				name: "goal",
				path: this.baseFolder + "sprite/game/tiles/goal.png"
			},
			{
				name: "box",
				path: this.baseFolder + "sprite/game/tiles/box.png"
			},

			// Bord du jeu
			{
				name: "sideIntNO",
				path: this.baseFolder + "sprite/game/tiles/sideIntNO.png"
			},
			{
				name: "sideIntNE",
				path: this.baseFolder + "sprite/game/tiles/sideIntNE.png"
			},
			{
				name: "sideIntSO",
				path: this.baseFolder + "sprite/game/tiles/sideIntSO.png"
			},
			{
				name: "sideIntSE",
				path: this.baseFolder + "sprite/game/tiles/sideIntSE.png"
			},
			//
			{
				name: "sideLineS",
				path: this.baseFolder + "sprite/game/tiles/sideLineS.png"
			},
			{
				name: "sideLineN",
				path: this.baseFolder + "sprite/game/tiles/sideLineN.png"
			},
			{
				name: "sideLineO",
				path: this.baseFolder + "sprite/game/tiles/sideLineO.png"
			},
			{
				name: "sideLineE",
				path: this.baseFolder + "sprite/game/tiles/sideLineE.png"
			},
			//
			{
				name: "sideExtNO",
				path: this.baseFolder + "sprite/game/tiles/sideExtNO.png"
			},
			{
				name: "sideExtNE",
				path: this.baseFolder + "sprite/game/tiles/sideExtNE.png"
			},
			{
				name: "sideExtSO",
				path: this.baseFolder + "sprite/game/tiles/sideExtSO.png"
			},
			{
				name: "sideExtSE",
				path: this.baseFolder + "sprite/game/tiles/sideExtSE.png"
			},

			// Elements
			{
				name: "boxOnGoal",
				path: this.baseFolder + "sprite/game/tiles/boxOnGoal.gif"
			},
			{
				name: "player",
				path: this.baseFolder + "sprite/game/player.png"
			},
			{
				name: "playerMove",
				path: this.baseFolder + "sprite/game/playerMove.png"
			},

			// Image des boutons & differents background
			{
				name: "buttonLoginStatic",
				path: this.baseFolder + "sprite/ui/loginScreen/buttonStatic.png"
			},
			{
				name: "buttonLoginSurvol",
				path: this.baseFolder + "sprite/ui/loginScreen/buttonSurvol.png"
			},
			{
				name: "buttonLoginPress",
				path: this.baseFolder + "sprite/ui/loginScreen/buttonPress.png"
			},
			{
				name: "buttonMenuPress",
				path: this.baseFolder + "sprite/ui/menuScreen/buttonPress.png"
			},
			{
				name: "buttonMenuSurvol",
				path: this.baseFolder + "sprite/ui/menuScreen/buttonSurvol.png"
			},
				{
				name: "buttonMenuStatic",
				path: this.baseFolder + "sprite/ui/menuScreen/buttonStatic.png"
			},
			{
				name: "loadingBackground",
				path: this.baseFolder + "sprite/ui/loadingScreen/Background.png"
			},
			{
				name: "loadingBar",
				path: this.baseFolder + "sprite/ui/loadingScreen/loadingBar.png"
			},
			{
				name: "loadingCat",
				path: this.baseFolder + "sprite/ui/loadingScreen/loadingCat.gif"
			},
			{
				name: "popUp",
				path: this.baseFolder + "sprite/ui/popUp.png"
			},
			{
				name: "popUpVertical",
				path: this.baseFolder + "sprite/ui/popUpVertical.png"
			},

			// Drapeaux
			{
				name: "englishFlag",
				path: this.baseFolder + "sprite/ui/flags/englishFlag.png"
			},
			{
				name: "polandFlag",
				path: this.baseFolder + "sprite/ui/flags/polandFlag.png"
			},
			{
				name: "italianFlag",
				path: this.baseFolder + "sprite/ui/flags/italianFlag.png"
			},
			{
				name: "spanishFlag",
				path: this.baseFolder + "sprite/ui/flags/spanishFlag.png"
			},
			{
				name: "frenchFlag",
				path: this.baseFolder + "sprite/ui/flags/frenchFlag.png"
			},
			{
				name: "germanFlag",
				path: this.baseFolder + "sprite/ui/flags/germanFlag.png"
			},
			{
				name: "frenchFlagSurvol",
				path: this.baseFolder + "sprite/ui/flags/frenchFlagSurvol.png"
			},
			{
				name: "polandFlagSurvol",
				path: this.baseFolder + "sprite/ui/flags/polandFlagSurvol.png"
			},
			{
				name: "italianFlagSurvol",
				path: this.baseFolder + "sprite/ui/flags/italianFlagSurvol.png"
			},
			{
				name: "englishFlagSurvol",
				path: this.baseFolder + "sprite/ui/flags/englishFlagSurvol.png"
			},
			{
				name: "spanishFlagSurvol",
				path: this.baseFolder + "sprite/ui/flags/spanishFlagSurvol.png"
			},
			{
				name: "germanFlagSurvol",
				path: this.baseFolder + "sprite/ui/flags/germanFlagSurvol.png"
			},

			// Ecran selection de niveau
			{
				name: "btnLevelStatic",
				path: this.baseFolder + "sprite/ui/levelSelect/btnLevelStatic.png"
			},
			{
				name: "btnLevelSurvol",
				path: this.baseFolder + "sprite/ui/levelSelect/btnLevelSurvol.png"
			},
			{
				name: "btnLevelPress",
				path: this.baseFolder + "sprite/ui/levelSelect/btnLevelPress.png"
			},
			{
				name: "star",
				path: this.baseFolder + "sprite/ui/levelSelect/star.png"
			},
			{
				name: "emptyStar",
				path: this.baseFolder + "sprite/ui/levelSelect/emptyStar.png"
			},
			{
				name: "btnLock",
				path: this.baseFolder + "sprite/ui/levelSelect/btnLock.png"
			},
			{
				name: "GameStageBackground",
				path: this.baseFolder + "sprite/game/GameStageBackground.png"
			},
			{
				name: "hudSpecialLogo",
				path: this.baseFolder + "sprite/game/hudSpecialLogo.png"
			},
			{
				name: "helpBackground",
				path: this.baseFolder + "sprite/ui/helpBackground.png"
			},
			{
				name: "HelpBtnActive",
				path: this.baseFolder + "sprite/game/btnHelpActive.png"
			},
			{
				name: "HelpBtnHover",
				path: this.baseFolder + "sprite/game/btnHelpHover.png"
			},
			{
				name: "HelpBtnStatic",
				path: this.baseFolder + "sprite/game/btnHelpStatic.png"
			},
			{
				name: "MenuBtnActive",
				path: this.baseFolder + "sprite/game/btnHomeActive.png"
			},
			{
				name: "MenuBtnHover",
				path: this.baseFolder + "sprite/game/btnHomeHover.png"
			},
			{
				name: "MenuBtnStatic",
				path: this.baseFolder + "sprite/game/btnHomeStatic.png"
			},
			{
				name: "RedoBtnActive",
				path: this.baseFolder + "sprite/game/btnRedoActive.png"
			},
			{
				name: "RedoBtnHover",
				path: this.baseFolder + "sprite/game/btnRedoHover.png"
			},
			{
				name: "RedoBtnStatic",
				path: this.baseFolder + "sprite/game/btnRedoStatic.png"
			},
			{
				name: "UndoBtnActive",
				path: this.baseFolder + "sprite/game/btnUndoActive.png"
			},
			{
				name: "UndoBtnHover",
				path: this.baseFolder + "sprite/game/btnUndoHover.png"
			},
			{
				name: "UndoBtnStatic",
				path: this.baseFolder + "sprite/game/btnUndoStatic.png"
			},
			{
				name: "ResetBtnActive",
				path: this.baseFolder + "sprite/game/btnResetActive.png"
			},
			{
				name: "ResetBtnHover",
				path: this.baseFolder + "sprite/game/btnResetHover.png"
			},
			{
				name: "ResetBtnStatic",
				path: this.baseFolder + "sprite/game/btnResetStatic.png"
			},
			{
				name: "OptionsBtnActive",
				path: this.baseFolder + "sprite/game/btnSettingsActive.png"
			},
			{
				name: "OptionsBtnHover",
				path: this.baseFolder + "sprite/game/btnSettingsHover.png"
			},
			{
				name: "OptionsBtnStatic",
				path: this.baseFolder + "sprite/game/btnSettingsStatic.png"
			}
		]

		this.totalToLoad = this.list.length;
		this.currentLoaded = 0;

	}

	/**
	 * Charge toutes les images puis les stock dans spriteManager
	 */
	SpriteLoader.prototype.init = function () {
		Debug.success("SpriteLoader initialised.");			
		
		var debut = new Date(); // temps du début du chargement
		
		for (var i = 0; i < this.list.length; i++) {
			var image = new Image();
			image.src = this.list[i].path;
			image.onload = function () { // événement : une fois le chargement de l'image terminé

				this.currentLoaded++;
				if (this.currentLoaded === this.totalToLoad) {
					var fin = new Date(); // temps de fin du chargement
					Debug.success("SpriteLoader Completed, time: " + (fin.getTime()-debut.getTime()) + " ms.");
				}
			}.bind(this);
//			if (image.complete) this.currentLoaded++ ; // Si l'image est totalement chargée
			SpriteManager.push(this.list[i].name, image);
		}
//		if (this.currentLoaded === this.totalToLoad) {
//			Debug.success("SpriteLoader completed.");
//		} else {
//			Debug.error("SpriteLoader incompleted.");
//		}
		
		
	};


	/**
	 * Return la progression du chargement des images (0 à 1)
	 */
	SpriteLoader.prototype.getProgress = function () {
		return this.currentLoaded / this.totalToLoad;
	};


	return new SpriteLoader();
});