/**
 * Class qui gère le pathfinding
 */
define([
	"src/game/game/MapManager",
	"src/utils/Config",
	"pathfinding"
],
function (
	MapManager,
	Config,
	PF
) {
	var Pathfinding = function () {

	}


	Pathfinding.prototype.init = function () {
		// Tableau des cases non franchissable par le joueur
		this.unWalkable = [
			MapManager.cell.wall,
			MapManager.cell.box,
			MapManager.cell.boxOnGoal,
			MapManager.cell.void,
			MapManager.cell.sideIntNO,
			MapManager.cell.sideIntNE,
			MapManager.cell.sideIntSO,
			MapManager.cell.sideIntSE,
			MapManager.cell.sideLineS,
			MapManager.cell.sideLineN,
			MapManager.cell.sideLineO,
			MapManager.cell.sideLineE,
			MapManager.cell.sideExtNO,
			MapManager.cell.sideExtNE,
			MapManager.cell.sideExtSO,
			MapManager.cell.sideExtSE,
			//new adventure
			MapManager.cell.level1HedgeSideNO,			
			MapManager.cell.level1HedgeSideNE,
			MapManager.cell.level1HedgeSideSO,
			MapManager.cell.level1HedgeSideSE,
			MapManager.cell.level1HedgeSideO,
			MapManager.cell.level1HedgeSideE,
			MapManager.cell.level1HedgeSideNS,			
			MapManager.cell.level1HedgeSideNSOpenO,
			MapManager.cell.level1HedgeSideNSOpenORock,
			MapManager.cell.level1HedgeSideNSOpenE,
			MapManager.cell.level1HedgeSideNSOpenERock,
			MapManager.cell.level1HedgeSideSORock,
			MapManager.cell.level1HedgeSideSERock,
			MapManager.cell.level1HedgeSideNSRock1,
			MapManager.cell.level1HedgeSideNSRock2,
			// fences
			MapManager.cell.level2FenceSideNO,
			MapManager.cell.level2FenceSideOE,
			MapManager.cell.level2FenceSideSO,
			MapManager.cell.level2FenceSideNS,
			MapManager.cell.level2FenceSideNE,
			MapManager.cell.level2FenceSideSE,		
			// mail boxe
			MapManager.cell.level2MailSideN,
			MapManager.cell.level2MailSideS,
			// new adventure wall
			MapManager.cell.level1WallGreenPlant,
			MapManager.cell.level2WallClover,
			MapManager.cell.level2WallGreenPlant,
			MapManager.cell.level3WallRedPlant,
			/** PNJ */
			// level1
			MapManager.cell.level1PnjWalkS1,
			MapManager.cell.level1PnjStaticS,
			MapManager.cell.level1PnjWalkS2,
			MapManager.cell.level1PnjWalkO1,
			MapManager.cell.level1PnjStaticO,
			MapManager.cell.level1PnjWalkO2,
			MapManager.cell.level1PnjWalkE1,
			MapManager.cell.leve1PnjStaticE,
			MapManager.cell.level1PnjWalkE2,
			MapManager.cell.level1PnjWalkN1,
			MapManager.cell.level1PnjStaticN,
			MapManager.cell.level1PnjWalkN2,
			// level2
			MapManager.cell.level2PnjWalkS1,
			MapManager.cell.level2PnjStaticS,
			MapManager.cell.level2PnjWalkS2,
			MapManager.cell.level2PnjWalkO1,
			MapManager.cell.level2PnjStaticO,
			MapManager.cell.level2PnjWalkO2,
			MapManager.cell.level2PnjWalkE1,
			MapManager.cell.level2PnjStaticE,
			MapManager.cell.level2PnjWalkE2,
			MapManager.cell.level2PnjWalkN1,
			MapManager.cell.level2PnjStaticN,
			MapManager.cell.level2PnjWalkN2,
			// level3
			MapManager.cell.level3PnjWalkS1,
			MapManager.cell.level3PnjStaticS,
			MapManager.cell.level3PnjWalkS2,
			MapManager.cell.level3PnjWalkO1,
			MapManager.cell.level3PnjStaticO,
			MapManager.cell.level3PnjWalkO2,
			MapManager.cell.level3PnjWalkE1,
			MapManager.cell.leve13njStaticE,
			MapManager.cell.level3PnjWalkE2,
			MapManager.cell.level3PnjWalkN1,
			MapManager.cell.level3PnjStaticN,
			MapManager.cell.level3PnjWalkN2
		];

		this.map = [];

		for (var i = 0; i < Config.mapSizeY; i++) {
			this.map[i] = [];
			for (var j = 0; j < Config.mapSizeX; j++) {
				this.map[i][j] = 0;
			};
		};
		this.grid = new PF.Grid(Config.mapSizeX, Config.mapSizeY, this.map);
		this.finder = new PF.AStarFinder();
	}


	/**
	 * Return l'array du chemin trouvé par le pathfinding
	 * @pos1 Vector de la position de départ
	 * @pos2 Vector de la position d'arrivé
	 * @map Map du sokoban
	 * @return Array - Path
	 *		   False - Pas de chemin possible.
	 */
	Pathfinding.prototype.find = function (pos1, pos2, map) {
		this.refreshGrid(map);
		var path = this.finder.findPath(pos1.x, pos1.y, pos2.x, pos2.y, this.grid);
		if (path.length == 0) {
			return false
		}
		return path;
	}


	/**
	 * Permet de mettre à jour la grid pour le pathfinding grâce à la map du sokoban
	 * @map Carte du sokoban
	 */
	Pathfinding.prototype.refreshGrid = function (map) {
		var x;
		var y;
		for (var i = 0; i < map.length; i++) {
			x = Math.floor(i / Config.mapSizeY);
			y = i % Config.mapSizeX;
			if (this.unWalkable.indexOf(map[i]) == -1) {
				this.map[x][y] = 0;
			} else {
				this.map[x][y] = 1;
			}
		};
		this.grid = new PF.Grid(Config.mapSizeX, Config.mapSizeY, this.map);
	}


	return new Pathfinding();
});