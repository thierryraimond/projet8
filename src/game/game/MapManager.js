/**
 * Class qui permet de charger les maps
 */
define([
	"jquery",
	"src/game/ui/UIManager",
	"src/utils/Config",
	"src/game/server/Account",
	"src/utils/assetsmanager/SoundManager",
	"src/utils/assetsmanager/SpriteManager",
	"src/utils/math/Vector2",
	"src/game/game/component/Undoredo",
	"src/game/game/box/Box",
	"src/game/game/box/BoxManager",
	"src/utils/localization/txt",
	"assets/map/level1",
	"assets/map/level2",
	"assets/map/level3",
	"assets/map/level4",
	"assets/map/level5",
	"assets/map/level6",
	"assets/map/level7",
	"assets/map/level8",
	"assets/map/level9",
	"assets/map/level10",
	"assets/map/level11",
	"assets/map/level12",
	"assets/map/level13",
	"assets/map/level14",
	"assets/map/level15",
	"assets/map/new_level1",
	"assets/map/new_level2",
	"assets/map/new_level3"
],
function (
	$,
	UIManager,
	Config,
	Account,
	SoundManager,
	SpriteManager,
	Vector2,
	Undoredo,
	Box,
	BoxManager,
	txt,
	level1,
	level2,
	level3,
	level4,
	level5,
	level6,
	level7,
	level8,
	level9,
	level10,
	level11,
	level12,
	level13,
	level14,
	level15,
	new_level1,
	new_level2,
	new_level3
) {
	var MapManager = function () {
		this.currentMap = [];
		this.cell = {
			void: 0,
			floor: 1,

			floorRed: 1,
			floorOrange: 2,
			floorYellow: 3,
			floorGreen: 4,
			floorBlue: 5,
			floorPurple: 6,

			wall: 7,
			goal: 8,

			sideIntNO: 9,
			sideIntNE: 10,
			sideIntSO: 11,
			sideIntSE: 12,

			sideLineS: 13,
			sideLineN: 14,
			sideLineO: 15,
			sideLineE: 16,

			sideExtNO: 17,
			sideExtNE: 18,
			sideExtSO: 19,
			sideExtSE: 20,

			box: 21,
			boxOnGoal: 22,
			player: 23,
			playerOnGoal: 24,
			
			/** new adventure */
			
			level1Floor: 25,
			level2Floor: 82,
			level3Floor: 83,
			
			level1HedgeSideNO: 26,			
			level1HedgeSideNE: 27,
			level1HedgeSideSO: 28,
			level1HedgeSideSE: 29,
			
			level1HedgeSideO: 30,
			level1HedgeSideE: 31,
			level1HedgeSideNS: 32,
			
			level1HedgeSideNSOpenO: 33,
			level1HedgeSideNSOpenORock: 34,
			level1HedgeSideNSOpenE: 35,
			level1HedgeSideNSOpenERock: 36,

			level1HedgeSideSORock: 37,
			level1HedgeSideSERock: 40,
			level1HedgeSideNSRock1: 41,
			level1HedgeSideNSRock2: 42,
			
			// fences
			level2FenceSideNO: 85,
			level2FenceSideOE: 86,
			level2FenceSideSO: 87,
			level2FenceSideNS: 88,
			level2FenceSideNE: 89,
			level2FenceSideSE: 90,
			
			level3FenceSideNO: 107,
			level3FenceSideOE: 108,
			level3FenceSideSO: 109,
			level3FenceSideNS: 110,
			level3FenceSideNE: 111,
			level3FenceSideSE: 112,
			
			// tree
			level3TreeLeaf1: 113,
			level3TreeLeaf2: 114,
			level3TreeLeaf3: 115,
			level3TreeLeaf4: 116,
			level3TreeLeaf5: 117,
			level3TreeLeaf6: 118,
			level3TreeLeaf7: 119,
			level3TreeLeaf8: 120,
			level3TreeLeaf9: 121,
			level3TreeLeaf10: 122,
			level3TreeLeaf11: 123,
			level3TreeLeaf12: 124,
			level3TreeRoot1: 125,
			level3TreeRoot2: 126,
			level3TreeRoot3: 127,
			level3TreeRoot4: 128,
			level3TreeRoot5: 129,
			level3TreeRoot6: 130,
			level3TreeRoot7: 131,
			level3TreeRoot8: 132,
			
			// mail boxe
			level2MailSideN: 91,
			level2MailSideS: 92,
			
			// new adventure wall
			level1WallGreenPlant: 43,
			level2WallClover: 80,
			level2WallGreenPlant: 81,
			level3WallRedPlant: 84,
			
			// house
			level2HouseRoofSideNO: 93,
			level2HouseRoofSideN: 94,
			level2HouseRoofSideNE: 95,
			level2HouseRoofSideO: 96,
			level2HouseRoofSideM: 97, 
			level2HouseRoofSideE: 98,
			level2HouseRoofSideSO: 99,
			level2HouseRoofDoorSideO: 100,
			level2HouseRoofDoorSideE: 101,
			level2HouseRoofSideSE: 102,
			level2HouseWallSideSO: 103,
			level2HouseDoorSideO: 104,
			level2HouseDoorSideE: 105,
			level2HouseWallSideSE: 106,
			
			/** PNJ */
			// level1
			level1PnjWalkS1: 44,
			level1PnjStaticS: 45,
			level1PnjWalkS2: 46,
			level1PnjWalkO1: 47,
			level1PnjStaticO: 48,
			level1PnjWalkO2: 49,
			level1PnjWalkE1: 50,
			leve1PnjStaticE: 51,
			level1PnjWalkE2: 52,
			level1PnjWalkN1: 53,
			level1PnjStaticN: 54,
			level1PnjWalkN2: 55,
			// level2
			level2PnjWalkS1: 56,
			level2PnjStaticS: 57,
			level2PnjWalkS2: 58,
			level2PnjWalkO1: 59,
			level2PnjStaticO: 60,
			level2PnjWalkO2: 61,
			level2PnjWalkE1: 62,
			level2PnjStaticE: 63,
			level2PnjWalkE2: 64,
			level2PnjWalkN1: 65,
			level2PnjStaticN: 66,
			level2PnjWalkN2: 67,
			// level3
			level3PnjWalkS1: 68,
			level3PnjStaticS: 69,
			level3PnjWalkS2: 70,
			level3PnjWalkO1: 71,
			level3PnjStaticO: 72,
			level3PnjWalkO2: 73,
			level3PnjWalkE1: 74,
			leve13njStaticE: 75,
			level3PnjWalkE2: 76,
			level3PnjWalkN1: 77,
			level3PnjStaticN: 78,
			level3PnjWalkN2: 79
		}

		this.floorColor = [
			"floorRed",
			"floorOrange",
			"floorYellow",
			"floorGreen",
			"floorBlue",
			"floorPurple"
		];
		
		this.newFloorColor = [
			{ name: "level1Floor", value: 25 },
			{ name: "level2Floor", value: 82 },
			{ name: "level3Floor", value: 83 }
		];
		
		this.newWall = [
			{ name: "level1WallGreenPlant", value: 43 },
			{ name: "level2WallClover", value: 80 },
			{ name: "level3WallRedPlant", value: 84 }
		];
		
		this.pnj = {
			exists : false,
			speed: 1000,
			path: [],
			currentPosition : 0,
			nextPosition: 0,
			timeToMove: Date.now() + 1000
		}
	}


	MapManager.prototype.init = function (Player) {
		this.Player = Player;
		Undoredo.add(MapManager);
	}


	MapManager.prototype.update = function () {
		$("#hudTimeText").text(Math.floor((Date.now() - this.levelStartDate) / 1000) + " s");
		for (var i = 0; i < 3; i++) {
			if (this.Player.eatPower > i) {
				$("#specialLogo" + i).show();
			} else {
				$("#specialLogo" + i).hide();
			}
			if (this.Player.eatPower == 0) {
				$("#specialLogo0").show();
				$("#specialLogo0").text(txt.get("LABEL_HUD_EMPTYSKILL"));
				$("#specialLogo0").css("margin-left", 45)
								  .css("background-image", "");
			} else {
				$("#specialLogo0").text("");
				$("#specialLogo0").css("margin-left", 0)
								  .css("background-image", "url(" + SpriteManager.get("hudSpecialLogo").src + ")");
			}
		}
		
		// mouvement du pnj
		if (this.pnj.exists && Date.now() >= this.pnj.timeToMove) {
			
			// si le parcours est terminé on recommence à 0
			if (this.pnj.nextPosition >= this.pnj.path.length) {
				this.pnj.nextPosition = 0;
			}
						
			var nextPosition = this.pnj.nextPosition;
			var currentPosition = this.pnj.currentPosition;
			
			// gestion de la collision		
			// si la prochaine case du pnj contient le joueur ou la box
			// alors la carte est rechargée
			if (this.currentMap[this.pnj.path[nextPosition].idCase] == this.cell.player ||
					this.currentMap[this.pnj.path[nextPosition].idCase] == this.cell.box ) {
				SoundManager.play("meow5");
				this.removeMap(this.mapName);
			} else {
				// afficher une case vide sur la case actuelle du pnj
				$('#tile'+ this.pnj.path[currentPosition].idCase).css("background-image", "url(" + SpriteManager.getObj(this.newFloorColor[this.levelNum-1].name).img.src + ")")
				.css('background-size', SpriteManager.getObj(this.newFloorColor[this.levelNum-1].name).backgroundSize)
				.css('background-position', SpriteManager.getObj(this.newFloorColor[this.levelNum-1].name).position);
				
				this.currentMap[this.pnj.path[currentPosition].idCase] = this.cell.floor;
				
				// afficher le pnj sur la prochaine case
				$('#tile'+ this.pnj.path[nextPosition].idCase).css("background-image", "url(" + SpriteManager.getObj(this.pnj.path[nextPosition].cellName).img.src + ")")
				.css('background-size', SpriteManager.getObj(this.pnj.path[nextPosition].cellName).backgroundSize)
				.css('background-position', SpriteManager.getObj(this.pnj.path[nextPosition].cellName).position);
				
				this.currentMap[this.pnj.path[nextPosition].idCase] = this.pnj.path[nextPosition].cellValue;
				
				this.pnj.currentPosition = this.pnj.nextPosition;
				this.pnj.nextPosition++;
				this.pnj.timeToMove = Date.now() + this.pnj.speed;
			}			

		}

		if ($("#mapContainer").length > 0 && this.currentMap.length > 0) {
			var won = true;
			for (var i = 0; i < this.currentMap.length; i++) {
				if (this.currentMap[i] == this.cell.box) {
					var won = false;
				}
			};
			if (won) {
				var score;
				score = this.actionCount > this.levelPar ? 1 : 2;
				Account.addScore(this.levelNum, score);
				
				//alert("Bravo, tu as gagné.\nTon nombre d'action :" + this.actionCount + "\nLe par du niveau :" + this.levelPar + "\nTon score : " + score + "\nDev tip: Message temporaire");
				if (this.levelNum + 1 == Config.totalLevel + 1) {
//					//alert("Bravo, tu as fini le jeu");
//					//UIManager.closeScreen("GameStage", false);
//					this.removeMap();
//					UIManager.addScreen("Menu", true);
					$('#MenuBtn').trigger('mouseup');
					
					
				} else {
					if (Config.adventureSelect == 2) {
						this.removeMap('new_level' + (this.levelNum + 1));
					} else {
						this.removeMap('level' + (this.levelNum + 1));
					}
					
				}
			}
		}
	}


	/**
	 * Charge une map et l'affiche sur le jeu
	 */
	MapManager.prototype.loadMap = function (name) {	
		this.resetActionHistory();
		this.currentMap = [];
		this.actionCount = 0; // Nombre d'action effectué par le joueur (deplacement, undo, redo)
		this.levelNum = parseInt(name.substr(name.length - 2, 2));
		if (isNaN(this.levelNum)) this.levelNum = parseInt(name.substr(name.length - 1, 1)); // To do, cleaner ça, hack fait 1 j avant le rendu
		this.levelStartDate = Date.now();
		this.mapName = name;
		
		console.log("levelNum = " + this.levelNum);
		// Si il s'agit d'une nouvelle aventure 
		// Change les valeurs de this.cell.floor et this.cell.wall puis met à jour Player
		if (Config.adventureSelect === 2) {
			this.cell.floor = this.newFloorColor[this.levelNum-1].value;
			this.Player.modifier.currentCell[0][1] = this.cell.floor;
			this.Player.modifier.nextCell[0][0] = this.cell.floor;
			this.cell.wall = this.newWall[this.levelNum-1].value;
		} else {
			this.cell.floor = 1;
			this.Player.modifier.currentCell[0][1] = this.cell.floor;
			this.Player.modifier.nextCell[0][0] = this.cell.floor;
			this.cell.wall = 7;
		}
		console.log("this.cell.floor = " + this.cell.floor);
		console.log(this.Player.modifier);
		
//		var baseFolder = "assets/sound/";
//		var nyan_multigenre = Config.localhost + baseFolder + "music/nyan_multigenre.mp3";
		// music play list
		this.musicList = [
			"",
			"nyan_multigenre", // 1 - 5
//			nyan_multigenre,
			false,
			false,
			false,
			false, 

			"nyan_8bit", // 6 - 10
			false,
			false,
			false,
			false,

			"nyan_part_trance", // 11 - 15
			"nyan_part_rock",
			"nyan_part_electro",
			"nyan_part_dubstep",
			"nyan_part_drumandbass"
		];

		var musicToPlay = this.musicList[this.levelNum];
		if (Config.musicPreLoad) {
			musicToPlay ? SoundManager.play(musicToPlay, true) : null;
		} else {
			musicToPlay ? SoundManager.musicPlay(musicToPlay, true) : null;
		}
		

		var imageName = "";
		var map = eval(name);
		Config.mapSizeX = Math.sqrt(map.layers[0].data.length); // Math.sqrt = racine carré
		Config.mapSizeY = Math.sqrt(map.layers[0].data.length);
		
		// affiche Config.mapSize modifié
		console.log("Config.mapSizeX = " + Config.mapSizeX);
		console.log("Config.mapSizeY = " + Config.mapSizeX);
		
		// Vérification de l'existence d'un PNJ
		if (typeof map.PNJPath == "undefined") { 
			this.pnj.exists = false; 			
		} else {
			// initialisation du pnj et chargement de son parcours
			this.pnj.exists = true;
			this.pnj.currentPosition = 0;
			this.pnj.nextPosition = 0;
			this.pnj.path = map.PNJPath;
			this.pnj.timeToMove = Date.now() + this.pnj.speed;
		}
		console.log(this.pnj.exists);
		console.log(this.pnj.path);
		console.log(this.pnj.timeToMove);

		$("#gameContainer").append("<div id='mapContainer'></div>")

		this.levelPar = map.properties.par;
		$("#hudParNumberText").text(this.levelPar);
		this.Player.eatPower = map.properties.eatPower || 0;
		
		// boucle sur les datas de la map issue de tiled map editor
		for (var i = 0; i < map.layers[0].data.length; i++) {

			if (map.layers[0].data[i] >= this.cell.floorRed ||
				map.layers[0].data[i] <= this.cell.floorPurple) {
				map.layers[0].data[i] == this.cell.floor;
			}

			this.currentMap.push(map.layers[0].data[i]);

			for (cellName in this.cell){
				if (this.cell[cellName] == map.layers[0].data[i]) {
					imageName = cellName;
				}
			}
			
			var floorImageName;
			if (Config.adventureSelect === 2) {
				floorImageName = this.newFloorColor[this.levelNum-1].name;
//				if(map.layers[0].data[i] === 25) {
//					this.currentMap.push(this.cell.floor);
//				}
				
			} else {
				// toute une ligne de la map prend la même floor color
				floorImageName = this.floorColor[Math.floor(i / Config.mapSizeY) % this.floorColor.length];
//				console.log("floorImageName = " + floorImageName);
				
			}
			


			switch (map.layers[0].data[i]) {
				case this.cell.floorRed:
				case this.cell.floorOrange:
				case this.cell.floorYellow:
				case this.cell.floorGreen:
				case this.cell.floorBlue:
				case this.cell.floorPurple:
				case this.cell.floor:
					imageName = floorImageName;
					break;
				case this.cell.box:
					imageName = floorImageName;
					new Box((i % Config.mapSizeX), Math.floor(i / Config.mapSizeY), false, this, this.Player);
					break;
				case this.cell.boxOnGoal:
					imageName = "goal";
					new Box((i % Config.mapSizeX), Math.floor(i / Config.mapSizeY), true, this, this.Player);
					break;
				case this.cell.playerOnGoal:
					imageName = "goal";
					break;
				case this.cell.player:
					imageName = floorImageName;
					break;
			}
			
			if (map.layers[0].data[i] == this.cell.playerOnGoal ||
				map.layers[0].data[i] == this.cell.player) {
				$("#mapContainer").append("<div id='player'></div>");
				$("#player").css("background-image", "url(" + SpriteManager.get("player").src + ")")
					.css("width", 141 * Math.max(Config.mapWidth, Config.mapHeight) / 110)
					.css("height", 87 * Math.max(Config.mapWidth, Config.mapHeight) / 110);
			}

			$('#mapContainer').append('<div id="tile' + i + '" class="' + imageName + ' tile"></div>');
//			if (Config.spriteSheet && Config.adventureSelect === 2) {
			if (Config.spriteSheet) {
				$('#tile' + i).css("background-image", "url(" + SpriteManager.getObj(imageName).img.src + ")")
					.css('background-size', SpriteManager.getObj(imageName).backgroundSize)
					.css('background-position', SpriteManager.getObj(imageName).position);
			} else {
				$('#tile' + i).css("background-image", "url(" + SpriteManager.get(imageName).src + ")");
			}
//			$('#tile' + i).css("background-image", "url(" + SpriteManager.get(imageName).src + ")");
			
			$('#tile' + i).css("left", Config.mapWidth * (i % Config.mapSizeX))
						  .css("top", Config.mapHeight * Math.floor(i / Config.mapSizeY))
						  .css("width", Config.mapWidth)
						  .css("height", Config.mapHeight)
						  .data("floorColor", floorImageName);


			var mouseUpEvent = (function (MapManager, i, Player) {
				return function () {
					var clickX = i % Config.mapSizeX;
					var clickY = Math.floor(i / Config.mapSizeY);
					var nextDir = Player.XYToDir(clickX, clickY);
					var moved = false;
					if (nextDir != false) {
						moved = Player.move(nextDir);
					} else {
						moved = Player.move(clickX, clickY);
					}
					if (moved) MapManager.actionIncrement();
					
					// log des évents
					console.log(
						'EVENTS :  \n'+
						' clickX = ' + clickX + ' - clickY = ' + clickY + '\n'+
						' nextDir = ' + nextDir + ' - moved = ' + moved
					);
				}
			})(this, i, this.Player);

			$('#tile' + i).mouseup(mouseUpEvent);

			$('#tile' + i).hide();
			setTimeout((function (id) {
				return function () {
					$('#tile' + id).fadeIn(400);
				};
			})(i), Config.fadeInMin + Math.random() * (Config.fadeInMax - Config.fadeInMin));
		}
		console.log(this.currentMap);
	}


	/**
	 * Incremente le compteur d'action de player
	 */
	MapManager.prototype.actionIncrement = function () {
		this.actionCount++;
		$("#hudActionNumberText").text(this.actionCount);
	}


	/**
	 * Décremente le compteur d'action de player
	 */
	MapManager.prototype.actionDecrement = function () {
		this.actionCount--;
		$("#hudActionNumberText").text(this.actionCount);
	}


	/**
	 * Détruit la map actuelle
	 * @mapName String - Nom de la map à charger après le remove
	 */
	MapManager.prototype.removeMap = function (mapName) {
		if (typeof mapName == "undefined") mapName = false;
		$("#hudActionNumberText").text(0); // Reset du nombre d'actions

		var mapLength = this.currentMap.length;
		this.currentMap = [];
		BoxManager.destroyAll();

		for (var i = 0; i < mapLength; i++) {
			setTimeout((function (id) {
				return function () {
					$('#tile' + id).fadeOut(400, function () {
						$('#tile' + id).remove();
					});
				};
			})(i), Config.fadeInMin + Math.random() * (Config.fadeInMax - Config.fadeInMin));
		}

		setTimeout((function (MapManager, mapName) {
			return function () {
				if (mapName != false) {
					$("#mapContainer").remove();
					MapManager.loadMap(mapName);
				}
			}
		})(this, mapName), Config.fadeInMax + 400 * 2);
		
		// arrêt du pnj
		this.pnj.exists = false; 
		this.pnj.path = [];
//		this.pnj.currentPosition = 0;
//		this.pnj.nextPosition = 0;
		console.log("remove map, this.pnj.exists = " + this.pnj.exists);
		
	};


	/**
	  * Return la valeur d'une case
	  * @x Abcisse de la case
	  * @y Ordonnée de la case
	  */
	MapManager.prototype.getCellValue = function (x, y) {
		if (x < 0 || x > Config.mapSizeX - 1 || y < 0 || y > Config.mapSizeY - 1) return this.cell.wall;
		return this.currentMap[(y % Config.mapSizeX) * Config.mapSizeX + x];
	}


	/**
	 * Retourne l'id de la case se trouvant à la position x et y
	 */
	MapManager.prototype.getCellId = function (x, y) {
		return (y % Config.mapSizeX) * Config.mapSizeX + x;
	}
	

	return new MapManager();
});