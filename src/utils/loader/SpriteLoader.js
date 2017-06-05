/**
* Load toutes les images et differents spritesheet du jeu
*/
define([
	"underscore",
	"src/utils/debug/Debug",
	"src/utils/assetsmanager/SpriteManager",
	"src/utils/Config"
],
function (
	_,
	Debug,
	SpriteManager,
	Config
) {
	var SpriteLoader = function () {
		this.baseFolder = "assets/img/"
			
		this.spriteSheet = [
//			{
//				name: "tilesClassic",
//				path: this.baseFolder + "/sprite/game/newTileSet.png",
//				tilewidth: 100,
//				tileheight: 100,
//				imagewidth: 700,
//				imageheight: 400,
//				backgroundSize: "700% 400%" 
//			},
			{
				name: "tilesNew",
				path: this.baseFolder + "/spriteSheet/newAdventureSpriteSheet.png",
				tilewidth: 16,
				tileheight: 16,
				imagewidth: 176,
				imageheight: 176,
				backgroundSize: "1100% 1100%" 
			},
			{
				name: "flagSpriteSheet",
				path: this.baseFolder + "/spriteSheet/flagSpriteSheet.png",
				tilewidth: 80,
				tileheight: 90,
				imagewidth: 960,
				imageheight: 90,
				backgroundSize: "1200% 100%"
			},
			{
				name: "btnSpriteSheet",
				path: this.baseFolder + "/spriteSheet/btnSpriteSheet.png",
				tilewidth: 87,
				tileheight: 66,
				imagewidth: 261,
				imageheight: 528,
				backgroundSize: "300% 800%"
			},
			{
				name: "pnjSpriteSheet",
				path: this.baseFolder + "/spriteSheet/pnjTileSet.png",
				tilewidth: 32,
				tileheight: 32,
				imagewidth: 96,
				imageheight: 128,
				backgroundSize: "300% 400%"
			},
		];		
		
		this.list = [

			// Tiles du jeu:
			{
				name: "void",
				path: this.baseFolder + "sprite/game/tiles/void.png",
//				spriteSheetName: "tilesClassic",
				spriteSheetName: "",
				position: "100% 100%"
			},
			// Floor de differentes couleurs :
			{
				name: "floorRed",
				path: this.baseFolder + "sprite/game/tiles/floorRed.png",
//				spriteSheetName: "tilesClassic",
				spriteSheetName: "",
				position: "0 0"
			},
			{
				name: "floorOrange",
				path: this.baseFolder + "sprite/game/tiles/floorOrange.png",
//				spriteSheetName: "tilesClassic",
				spriteSheetName: "",
				position: "16.67% 0"
			},
			{
				name: "floorYellow",
				path: this.baseFolder + "sprite/game/tiles/floorYellow.png",
//				spriteSheetName: "tilesClassic",
				spriteSheetName: "",
				position: "33.33% 0"
			},
			{
				name: "floorGreen",
				path: this.baseFolder + "sprite/game/tiles/floorGreen.png",
//				spriteSheetName: "tilesClassic",
				spriteSheetName: "",
				position: "50% 0"
			},
			{
				name: "floorBlue",
				path: this.baseFolder + "sprite/game/tiles/floorBlue.png",
//				spriteSheetName: "tilesClassic",
				spriteSheetName: "",
				position: "66.67% 0"
			},
			{
				name: "floorPurple",
				path: this.baseFolder + "sprite/game/tiles/floorPurple.png",
//				spriteSheetName: "tilesClassic",
				spriteSheetName: "",
				position: "83.33% 0"
			},

			// Elements :
			{
				name: "wall",
				path: this.baseFolder + "sprite/game/tiles/wall.png",
//				spriteSheetName: "tilesClassic",
				spriteSheetName: "",
				position: "100% 0"
			},
			{
				name: "goal",
				path: this.baseFolder + "sprite/game/tiles/goal.png",
//				spriteSheetName: "tilesClassic",
				spriteSheetName: "",
				position: "0 33.33%"
			},
			{
				name: "box",
				path: this.baseFolder + "sprite/game/tiles/box.png",
//				spriteSheetName: "tilesClassic",
				spriteSheetName: "",
				position: "100% 66.67%"
			},
			
			// Bord du jeu
			{
				name: "sideIntNO",
				path: this.baseFolder + "sprite/game/tiles/sideIntNO.png",
//				spriteSheetName: "tilesClassic",
				spriteSheetName: "",
				position: "16.67% 33.33%"
			},
			{
				name: "sideIntNE",
				path: this.baseFolder + "sprite/game/tiles/sideIntNE.png",
//				spriteSheetName: "tilesClassic",
				spriteSheetName: "",
				position: "33.33% 33.33%"
			},
			{
				name: "sideIntSO",
				path: this.baseFolder + "sprite/game/tiles/sideIntSO.png",
//				spriteSheetName: "tilesClassic",
				spriteSheetName: "",
				position: "50% 33.33%"
			},
			{
				name: "sideIntSE",
				path: this.baseFolder + "sprite/game/tiles/sideIntSE.png",
//				spriteSheetName: "tilesClassic",
				spriteSheetName: "",
				position: "66.67% 33.33%"
			},
			//
			{
				name: "sideLineS",
				path: this.baseFolder + "sprite/game/tiles/sideLineS.png",
//				spriteSheetName: "tilesClassic",
				spriteSheetName: "",
				position: "83.33% 33.33%"
			},
			{
				name: "sideLineN",
				path: this.baseFolder + "sprite/game/tiles/sideLineN.png",
//				spriteSheetName: "tilesClassic",
				spriteSheetName: "",
				position: "100% 33.33%"
			},
			{
				name: "sideLineO",
				path: this.baseFolder + "sprite/game/tiles/sideLineO.png",
//				spriteSheetName: "tilesClassic",
				spriteSheetName: "",
				position: "0 66.67%"
			},
			{
				name: "sideLineE",
				path: this.baseFolder + "sprite/game/tiles/sideLineE.png",
//				spriteSheetName: "tilesClassic",
				spriteSheetName: "",
				position: "16.67% 66.67%"
			},
			//
			{
				name: "sideExtNO",
				path: this.baseFolder + "sprite/game/tiles/sideExtNO.png",
//				spriteSheetName: "tilesClassic",
				spriteSheetName: "",
				position: "33.33% 66.67%"
			},
			{
				name: "sideExtNE",
				path: this.baseFolder + "sprite/game/tiles/sideExtNE.png",
//				spriteSheetName: "tilesClassic",
				spriteSheetName: "",
				position: "50% 66.67%"
			},
			{
				name: "sideExtSO",
				path: this.baseFolder + "sprite/game/tiles/sideExtSO.png",
//				spriteSheetName: "tilesClassic",
				spriteSheetName: "",
				position: "66.67% 66.67%"
			},
			{
				name: "sideExtSE",
				path: this.baseFolder + "sprite/game/tiles/sideExtSE.png",
//				spriteSheetName: "tilesClassic",
				spriteSheetName: "",
				position: "83.33% 66.67%"
			},

			// Elements
			{
				name: "boxOnGoal",
				path: this.baseFolder + "sprite/game/tiles/boxOnGoal.gif",
				spriteSheetName: ""
			},
			{
				name: "player",
				path: this.baseFolder + "sprite/game/player.png",
				spriteSheetName: ""
			},
			{
				name: "playerMove",
				path: this.baseFolder + "sprite/game/playerMove.png",
				spriteSheetName: ""
			},

			// Image des boutons & differents background
			{
				name: "buttonLoginStatic",
				path: this.baseFolder + "sprite/ui/loginScreen/buttonStatic.png",
				spriteSheetName: ""
			},
			{
				name: "buttonLoginSurvol",
				path: this.baseFolder + "sprite/ui/loginScreen/buttonSurvol.png",
				spriteSheetName: ""
			},
			{
				name: "buttonLoginPress",
				path: this.baseFolder + "sprite/ui/loginScreen/buttonPress.png",
				spriteSheetName: ""
			},
			{
				name: "buttonMenuPress",
				path: this.baseFolder + "sprite/ui/menuScreen/buttonPress.png",
				spriteSheetName: ""
			},
			{
				name: "buttonMenuSurvol",
				path: this.baseFolder + "sprite/ui/menuScreen/buttonSurvol.png",
				spriteSheetName: ""
			},
				{
				name: "buttonMenuStatic",
				path: this.baseFolder + "sprite/ui/menuScreen/buttonStatic.png",
				spriteSheetName: ""
			},
			{
				name: "loadingBackground",
				path: this.baseFolder + "sprite/ui/loadingScreen/Background.png",
				spriteSheetName: ""
			},
			{
				name: "loadingBar",
				path: this.baseFolder + "sprite/ui/loadingScreen/loadingBar.png",
				spriteSheetName: ""
			},
			{
				name: "loadingCat",
				path: this.baseFolder + "sprite/ui/loadingScreen/loadingCat.gif",
				spriteSheetName: ""
			},
			{
				name: "popUp",
				path: this.baseFolder + "sprite/ui/popUp.png",
				spriteSheetName: ""
			},
			{
				name: "popUpVertical",
				path: this.baseFolder + "sprite/ui/popUpVertical.png",
				spriteSheetName: ""
			},

			// Drapeaux
			{
				name: "englishFlag",
				path: this.baseFolder + "sprite/ui/flags/englishFlag.png",
				spriteSheetName: "flagSpriteSheet",
				position: "72.73% 0"
			},
			{
				name: "polandFlag",
				path: this.baseFolder + "sprite/ui/flags/polandFlag.png",
				spriteSheetName: "flagSpriteSheet",
				position: "36.36% 0"
			},
			{
				name: "italianFlag",
				path: this.baseFolder + "sprite/ui/flags/italianFlag.png",
				spriteSheetName: "flagSpriteSheet",
				position: "18.18% 0"
			},
			{
				name: "spanishFlag",
				path: this.baseFolder + "sprite/ui/flags/spanishFlag.png",
				spriteSheetName: "flagSpriteSheet",
				position: "54.55% 0"
			},
			{
				name: "frenchFlag",
				path: this.baseFolder + "sprite/ui/flags/frenchFlag.png",
				spriteSheetName: "flagSpriteSheet",
				position: "90.91% 0"
			},
			{
				name: "germanFlag",
				path: this.baseFolder + "sprite/ui/flags/germanFlag.png",
				spriteSheetName: "flagSpriteSheet",
				position: "0 0"
			},
			{
				name: "frenchFlagSurvol",
				path: this.baseFolder + "sprite/ui/flags/frenchFlagSurvol.png",
				spriteSheetName: "flagSpriteSheet",
				position: "100% 0"
			},
			{
				name: "polandFlagSurvol",
				path: this.baseFolder + "sprite/ui/flags/polandFlagSurvol.png",
				spriteSheetName: "flagSpriteSheet",
				position: "45.45% 0"
			},
			{
				name: "italianFlagSurvol",
				path: this.baseFolder + "sprite/ui/flags/italianFlagSurvol.png",
				spriteSheetName: "flagSpriteSheet",
				position: "27.27% 0"
			},
			{
				name: "englishFlagSurvol",
				path: this.baseFolder + "sprite/ui/flags/englishFlagSurvol.png",
				spriteSheetName: "flagSpriteSheet",
				position: "81.82% 0"
			},
			{
				name: "spanishFlagSurvol",
				path: this.baseFolder + "sprite/ui/flags/spanishFlagSurvol.png",
				spriteSheetName: "flagSpriteSheet",
				position: "63.64% 0"
			},
			{
				name: "germanFlagSurvol",
				path: this.baseFolder + "sprite/ui/flags/germanFlagSurvol.png",
				spriteSheetName: "flagSpriteSheet",
				position: "9.09% 0"
			},

			// Ecran selection de niveau
			{
				name: "btnLevelStatic",
				path: this.baseFolder + "sprite/ui/levelSelect/btnLevelStatic.png",
				spriteSheetName: "btnSpriteSheet",
				position: "0 85.71%"
			},
			{
				name: "btnLevelSurvol",
				path: this.baseFolder + "sprite/ui/levelSelect/btnLevelSurvol.png",
				spriteSheetName: "btnSpriteSheet",
				position: "100% 85.71%"
			},
			{
				name: "btnLevelPress",
				path: this.baseFolder + "sprite/ui/levelSelect/btnLevelPress.png",
				spriteSheetName: "btnSpriteSheet",
				position: "50% 85.71%"
			},
			{
				name: "star",
				path: this.baseFolder + "sprite/ui/levelSelect/star.png",
				spriteSheetName: ""
			},
			{
				name: "emptyStar",
				path: this.baseFolder + "sprite/ui/levelSelect/emptyStar.png",
				spriteSheetName: ""
			},
			{
				name: "btnLock",
				path: this.baseFolder + "sprite/ui/levelSelect/btnLock.png",
				spriteSheetName: "btnSpriteSheet",
				position: "0 100%"
			},
			{
				name: "GameStageBackground",
				path: this.baseFolder + "sprite/game/GameStageBackground.png",
				spriteSheetName: ""
			},
			{
				name: "hudSpecialLogo",
				path: this.baseFolder + "sprite/game/hudSpecialLogo.png",
				spriteSheetName: ""
			},
			{
				name: "helpBackground",
				path: this.baseFolder + "sprite/ui/helpBackground.png",
				spriteSheetName: ""
			},
			{
				name: "HelpBtnActive",
				path: this.baseFolder + "sprite/game/btnHelpActive.png",
				spriteSheetName: "btnSpriteSheet",
				position: "50% 0"
			},
			{
				name: "HelpBtnHover",
				path: this.baseFolder + "sprite/game/btnHelpHover.png",
				spriteSheetName: "btnSpriteSheet",
				position: "100% 0"
			},
			{
				name: "HelpBtnStatic",
				path: this.baseFolder + "sprite/game/btnHelpStatic.png",
				spriteSheetName: "btnSpriteSheet",
				position: "0 0"
			},
			{
				name: "MenuBtnActive",
				path: this.baseFolder + "sprite/game/btnHomeActive.png",
				spriteSheetName: "btnSpriteSheet",
				position: "50% 14.29%"
			},
			{
				name: "MenuBtnHover",
				path: this.baseFolder + "sprite/game/btnHomeHover.png",
				spriteSheetName: "btnSpriteSheet",
				position: "100% 14.29%"
			},
			{
				name: "MenuBtnStatic",
				path: this.baseFolder + "sprite/game/btnHomeStatic.png",
				spriteSheetName: "btnSpriteSheet",
				position: "0 14.29%"
			},
			{
				name: "RedoBtnActive",
				path: this.baseFolder + "sprite/game/btnRedoActive.png",
				spriteSheetName: "btnSpriteSheet",
				position: "50% 28.57%"
			},
			{
				name: "RedoBtnHover",
				path: this.baseFolder + "sprite/game/btnRedoHover.png",
				spriteSheetName: "btnSpriteSheet",
				position: "100% 28.57%"
			},
			{
				name: "RedoBtnStatic",
				path: this.baseFolder + "sprite/game/btnRedoStatic.png",
				spriteSheetName: "btnSpriteSheet",
				position: "0 28.57%"
			},
			{
				name: "UndoBtnActive",
				path: this.baseFolder + "sprite/game/btnUndoActive.png",
				spriteSheetName: "btnSpriteSheet",
				position: "50% 57.14%"
			},
			{
				name: "UndoBtnHover",
				path: this.baseFolder + "sprite/game/btnUndoHover.png",
				spriteSheetName: "btnSpriteSheet",
				position: "100% 57.14%"
			},
			{
				name: "UndoBtnStatic",
				path: this.baseFolder + "sprite/game/btnUndoStatic.png",
				spriteSheetName: "btnSpriteSheet",
				position: "0 57.14%"
			},
			{
				name: "ResetBtnActive",
				path: this.baseFolder + "sprite/game/btnResetActive.png",
				spriteSheetName: "btnSpriteSheet",
				position: "50% 42.86%"
			},
			{
				name: "ResetBtnHover",
				path: this.baseFolder + "sprite/game/btnResetHover.png",
				spriteSheetName: "btnSpriteSheet",
				position: "100% 42.86%"
			},
			{
				name: "ResetBtnStatic",
				path: this.baseFolder + "sprite/game/btnResetStatic.png",
				spriteSheetName: "btnSpriteSheet",
				position: "0 42.86%"
			},
			{
				name: "OptionsBtnActive",
				path: this.baseFolder + "sprite/game/btnSettingsActive.png",
				spriteSheetName: "btnSpriteSheet",
				position: "50% 71.43%"
			},
			{
				name: "OptionsBtnHover",
				path: this.baseFolder + "sprite/game/btnSettingsHover.png",
				spriteSheetName: "btnSpriteSheet",
				position: "100% 71.43%"
			},
			{
				name: "OptionsBtnStatic",
				path: this.baseFolder + "sprite/game/btnSettingsStatic.png",
				spriteSheetName: "btnSpriteSheet",
				position: "0 71.43%"
			},
			
			/** Tiles de la nouvelle aventure */
			// floors
			{
				name: "level1Floor",
				path: this.baseFolder + "sprite/game/tilesNew/level1_floor.jpg",
				spriteSheetName: "tilesNew",
//				spriteSheetName: "",
				position: "10% 90%"
			},
			// hedge
			{
				name: "level1HedgeSideE",
				path: this.baseFolder + "sprite/game/tilesNew/level1_hedgeSideE.jpg",
				spriteSheetName: "tilesNew",
//				spriteSheetName: "",
				position: "30% 10%"
			},
			{
				name: "level1HedgeSideNE",
				path: this.baseFolder + "sprite/game/tilesNew/level1_hedgeSideNE.jpg",
				spriteSheetName: "tilesNew",
//				spriteSheetName: "",
				position: "30% 0"
			},
			{
				name: "level1HedgeSideNO",
				path: this.baseFolder + "sprite/game/tilesNew/level1_hedgeSideNO.jpg",
				spriteSheetName: "tilesNew",
//				spriteSheetName: "",
				position: "0 0"
			},
			{
				name: "level1HedgeSideNSOpenERock",
				path: this.baseFolder + "sprite/game/tilesNew/level1_hedgeSideNS_openE_rock.jpg",
				spriteSheetName: "tilesNew",
//				spriteSheetName: "",
				position: "10% 30%"
			},
			{
				name: "level1HedgeSideNSOpenE",
				path: this.baseFolder + "sprite/game/tilesNew/level1_hedgeSideNS_openE.jpg",
				spriteSheetName: "tilesNew",
//				spriteSheetName: "",
				position: "10% 20%"
			},
			{
				name: "level1HedgeSideNSOpenORock",
				path: this.baseFolder + "sprite/game/tilesNew/level1_hedgeSideNS_openO_rock.jpg",
				spriteSheetName: "tilesNew",
//				spriteSheetName: "",
				position: "20% 30%"
			},
			{
				name: "level1HedgeSideNSOpenO",
				path: this.baseFolder + "sprite/game/tilesNew/level1_hedgeSideNS_openO.jpg",
				spriteSheetName: "tilesNew",
//				spriteSheetName: "",
				position: "20% 20%"
			},
			{
				name: "level1HedgeSideNSRock1",
				path: this.baseFolder + "sprite/game/tilesNew/level1_hedgeSideNS_rock1.jpg",
				spriteSheetName: "tilesNew",
//				spriteSheetName: "",
				position: "10% 10%"
			},
			{
				name: "level1HedgeSideNSRock2",
				path: this.baseFolder + "sprite/game/tilesNew/level1_hedgeSideNS_rock2.jpg",
				spriteSheetName: "tilesNew",
//				spriteSheetName: "",
				position: "20% 10%"
			},
			{
				name: "level1HedgeSideNS",
				path: this.baseFolder + "sprite/game/tilesNew/level1_hedgeSideNS.jpg",
				spriteSheetName: "tilesNew",
//				spriteSheetName: "",
				position: "10% 0"
			},
			{
				name: "level1HedgeSideO",
				path: this.baseFolder + "sprite/game/tilesNew/level1_hedgeSideO.jpg",
				spriteSheetName: "tilesNew",
//				spriteSheetName: "",
				position: "0 10%"
			},
			{
				name: "level1HedgeSideSERock",
				path: this.baseFolder + "sprite/game/tilesNew/level1_hedgeSideSE_rock.jpg",
				spriteSheetName: "tilesNew",
//				spriteSheetName: "",
				position: "30% 30%"
			},
			{
				name: "level1HedgeSideSE",
				path: this.baseFolder + "sprite/game/tilesNew/level1_hedgeSideSE.jpg",
				spriteSheetName: "tilesNew",
//				spriteSheetName: "",
				position: "30% 20%"
			},
			{
				name: "level1HedgeSideSORock",
				path: this.baseFolder + "sprite/game/tilesNew/level1_hedgeSideSO_rock.jpg",
				spriteSheetName: "tilesNew",
//				spriteSheetName: "",
				position: "0 30%"
			},
			{
				name: "level1HedgeSideSO",
				path: this.baseFolder + "sprite/game/tilesNew/level1_hedgeSideSO.jpg",
				spriteSheetName: "tilesNew",
//				spriteSheetName: "",
				position: "0 20%"
			},
			// wall
			{
				name: "level1WallGreenPlant",
				path: this.baseFolder + "sprite/game/tilesNew/level1_wallGreenPlant.jpg",
				spriteSheetName: "tilesNew",
//				spriteSheetName: "",
				position: "0 50%"
			},
			// PNJ
			{
				name: "pnjWalkS1",
				path: this.baseFolder + "/spriteSheet/player.png",
				spriteSheetName: "pnjSpriteSheet",
//				spriteSheetName: "",
				position: "0 0"
			},
			{
				name: "pnjStaticS",
				path: this.baseFolder + "/spriteSheet/player.png",
				spriteSheetName: "pnjSpriteSheet",
//				spriteSheetName: "",
				position: "50% 0"
			},
			{
				name: "pnjWalkS2",
				path: this.baseFolder + "/spriteSheet/player.png",
				spriteSheetName: "pnjSpriteSheet",
//				spriteSheetName: "",
				position: "100% 0"
			},
			{
				name: "pnjWalkO1",
				path: this.baseFolder + "/spriteSheet/player.png",
				spriteSheetName: "pnjSpriteSheet",
//				spriteSheetName: "",
				position: "0 33.33%"
			},
			{
				name: "pnjStaticO",
				path: this.baseFolder + "/spriteSheet/player.png",
				spriteSheetName: "pnjSpriteSheet",
//				spriteSheetName: "",
				position: "50% 33.33%"
			},
			{
				name: "pnjWalkO2",
				path: this.baseFolder + "/spriteSheet/player.png",
				spriteSheetName: "pnjSpriteSheet",
//				spriteSheetName: "",
				position: "100% 33.33%"
			},
			{
				name: "pnjWalkE1",
				path: this.baseFolder + "/spriteSheet/player.png",
				spriteSheetName: "pnjSpriteSheet",
//				spriteSheetName: "",
				position: "0 66.67%"
			},
			{
				name: "pnjStaticE",
				path: this.baseFolder + "/spriteSheet/player.png",
				spriteSheetName: "pnjSpriteSheet",
//				spriteSheetName: "",
				position: "50% 66.67%"
			},
			{
				name: "pnjWalkE2",
				path: this.baseFolder + "/spriteSheet/player.png",
				spriteSheetName: "pnjSpriteSheet",
//				spriteSheetName: "",
				position: "100% 66.67%"
			},
			{
				name: "pnjWalkN1",
				path: this.baseFolder + "/spriteSheet/player.png",
				spriteSheetName: "pnjSpriteSheet",
//				spriteSheetName: "",
				position: "0 100%"
			},
			{
				name: "pnjStaticN",
				path: this.baseFolder + "/spriteSheet/player.png",
				spriteSheetName: "pnjSpriteSheet",
//				spriteSheetName: "",
				position: "50% 100%"
			},
			{
				name: "pnjWalkN2",
				path: this.baseFolder + "/spriteSheet/player.png",
				spriteSheetName: "pnjSpriteSheet",
//				spriteSheetName: "",
				position: "100% 100%"
			},
		]

		// TODO calculer le nombre total d'image à charger srpitesheet et images comprise
		//this.imgToLoad = this.getListNoSprite(); // toutes les images sans sprite
		this.listNoSprite = [];
		
		
		this.totalToLoad = Config.spriteSheet ? this.spriteSheet.length + this.getListNoSprite() : this.list.length;
		
		this.currentLoaded = 0;

	}
	
	/**
	 * Charge la liste de toutes les images n'appartenant pas à une spritesheet
	 * dans la variable this.listNoSprite.
	 * @return nombre de tile sans spriteSheet
	 */
	SpriteLoader.prototype.getListNoSprite = function () {
		// pour chaque tile qui ne possède pas de spriteSheet
		for (var i = 0; i < this.list.length; i++) {
			
			if(this.list[i].spriteSheetName === "") {
				this.listNoSprite.push(
					{
						name: this.list[i].name,
						path: this.list[i].path
					}
				);
			}
		}
		return this.listNoSprite.length;
	};

	/**
	 * Charge toutes les images ou spriteSheets puis les stock dans spriteManager
	 */
	SpriteLoader.prototype.init = function () {
		Debug.success("SpriteLoader initialised.");
				
		var debut = new Date(); // temps du début du chargement
		
		// Si Config.spriteSheet est activé, on charge les spriteSheets au lieu des images une par une
		if(Config.spriteSheet) {
			
			
			// parcourir spriteSheet
			for (var i = 0; i < this.spriteSheet.length; i++) {
				// association de l'image spriteSheet à un objet Image
				var image = new Image();
				image.src = this.spriteSheet[i].path;
				image.onload = function() {
					this.currentLoaded++;
					if (this.currentLoaded === this.totalToLoad) {
						var fin = new Date(); // temps de fin du chargement
						Debug.success("SpriteLoader Completed, time: " + (fin.getTime()-debut.getTime()) + " ms.");
					}
				}.bind(this);
				// pour chaque tile de la spriteSheet
				for (var j = 0; j < this.list.length ; j++) {		
					
//					console.log("this.spriteSheet[i].name = " +this.spriteSheet[i].name);
					
					if (this.spriteSheet[i].name === this.list[j].spriteSheetName) {
						SpriteManager.push(this.list[j].name, image, this.spriteSheet[i].backgroundSize, this.list[j].position);
//						console.log(this.list[j].name + ', ' + image + ', ' + this.spriteSheet[i].backgroundSize + ', ' + this.list[j].position);
//						console.log(SpriteManager.getObj(this.list[j].name));
					}
				}

			}
			// pour chaque tile qui ne possède pas de spriteSheet
			for (var i = 0; i < this.list.length; i++) {
				
				if(this.list[i].spriteSheetName === "") {
					var image = new Image();
					image.src = this.list[i].path;
					image.onload = function () { // événement : une fois le chargement de l'image terminé

						this.currentLoaded++;
						if (this.currentLoaded === this.totalToLoad) {
							var fin = new Date(); // temps de fin du chargement
							Debug.success("SpriteLoader Completed, time: " + (fin.getTime()-debut.getTime()) + " ms.");
						}
					}.bind(this);
					SpriteManager.push(this.list[i].name, image, "", "");
//					console.log(SpriteManager.getObj(this.list[i].name));
				}
			}
			
//			//test
//			console.log(SpriteManager.list[0]);
//			var test = SpriteManager.getObj('englishFlag');
//			console.log(test);
//			console.log(SpriteManager.getObj('englishFlag').backgroundSize);
			
			
			// chargement des spriteSheets
			//TODO
			
			// parcourir la liste
			
			// chargement de tous les élèments de la liste (images) qui n'ont pas de spriteSheet
			//TODO
			
			// chargement de tous les sprites de la liste associé à une spriteSheet
			
		} else { // Sinon on charge les images une par une sans les spriteSheet
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
//				if (image.complete) this.currentLoaded++ ; // Si l'image est totalement chargée
				SpriteManager.push(this.list[i].name, image, "", "");
			}
//			if (this.currentLoaded === this.totalToLoad) {
//				Debug.success("SpriteLoader completed.");
//			} else {
//				Debug.error("SpriteLoader incompleted.");
//			}
		}
		
//		var test = SpriteManager.getObj('englishFlag');
//		console.log(test);
	};


	/**
	 * Return la progression du chargement des images (0 à 1)
	 */
	SpriteLoader.prototype.getProgress = function () {
		return this.currentLoaded / this.totalToLoad;
	};


	return new SpriteLoader();
});