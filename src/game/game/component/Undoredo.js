/**
 * Class qui gère le undo / redo du jeu
 */
define([
	"src/utils/assetsmanager/SpriteManager",
	"src/utils/Config",
],
function (
	SpriteManager,
	Config
) {
	var Undoredo = function () {

	}


	/**
	 * Ajoute la fonction undo redo
	 */
	Undoredo.prototype.add = function (Object) {

		var obj = Object.prototype;

		obj.actionHistory = {
			index: -1,
			list: []
		};

		// Opposé des directions
		obj.moveReverse = {
			"left" : "right",
			"right" : "left",
			"up" : "down",
			"down" : "up"
		}

		obj.undo = function () {
			if (this.actionHistory.index < 0) return false; 
			var index = this.actionHistory.index;
			var currAction;
			var direction;
			for (var i = this.actionHistory.list[index].length - 1; i >= 0; i--) {
				currAction = this.actionHistory.list[index][i];
				if (currAction.type == "move") {
					direction = this.moveReverse[currAction.param]
					currAction.ref.move(direction, false);
				}
				if (currAction.type == "eat") {
					this.currentMap[currAction.param] = this.cell.wall;
					
					if (Config.spriteSheet && Config.adventureSelect === 2) {
						$("#tile" + currAction.param).css("background-image", "url(" + SpriteManager.getObj("wall").img.src + ")")
							.css('background-size', SpriteManager.getObj("wall").backgroundSize)
							.css('background-position', SpriteManager.getObj("wall").position);
					} else {
						$("#tile" + currAction.param).css("background-image", "url(" + SpriteManager.get("wall").src + ")");
					}
					
					$("#tile" + currAction.param).css("background-image", "url(" + SpriteManager.get("wall").src + ")");
					this.Player.eatPower++;
				}
			};
			this.actionDecrement();
			this.actionHistoryIndexDecrem();
		}

		obj.redo = function () {
			if (this.actionHistory.index + 1 >= this.actionHistory.list.length) return false;
			var index = this.actionHistory.index + 1;
			var currAction;
			for (var i = 0; i < this.actionHistory.list[index].length; i++) {
				currAction = this.actionHistory.list[index][i];
				if (currAction.type == "move") {
					currAction.ref.move(currAction.param, false);
				}
				if (currAction.type == "eat") {
					this.currentMap[currAction.param] = this.cell.floor;
					
					if (Config.spriteSheet && Config.adventureSelect === 2) {
						$("#tile" + currAction.param).css("background-image", "url(" + SpriteManager.getObj( $("#tile" + currAction.param).data().floorColor ).img.src + ")")
							.css('background-size', SpriteManager.getObj( $("#tile" + currAction.param).data().floorColor ).backgroundSize)
							.css('background-position', SpriteManager.getObj( $("#tile" + currAction.param).data().floorColor ).position);
					} else {
						$("#tile" + currAction.param).css("background-image", "url(" + SpriteManager.get( $("#tile" + currAction.param).data().floorColor ).src + ")");
					}
					
//					$("#tile" + currAction.param).css("background-image", "url(" + SpriteManager.get( $("#tile" + currAction.param).data().floorColor ).src + ")");
					this.Player.eatPower--;
				}
			};
			this.actionIncrement();
			this.actionHistoryIndexIncrem();
		}

		/**
		 * Ajoute une action à l'index spécifier dans la chronologie de l'historique
		 * @action Objet contenant :
		 * 		ref - Reference vers l'objet qui a fait une action (player, box ...)
		 * 		type - Type de l'action (eat, move)
		 * 		param - Si le type est "move" cela correspond à la direction correspondante. (Up, down, right, left)
		 *				Si le type est "eat" cela correspond à la case qui a été mangé
		 */
		obj.addAction = function (action) {
			var i = this.actionHistory.index;
			if (typeof this.actionHistory.list[i] == "undefined") this.actionHistory.list[i] = [];
			this.actionHistory.list[i].push(action);
			this.actionHistory.list.splice(i + 1);
		}

		/**
		 * Increment l'index dans la chronologie
		 */
		obj.actionHistoryIndexIncrem = function () {
			this.actionHistory.index++;
		}

		/**
		 * Decrement l'index dans la chronologie
		 */
		obj.actionHistoryIndexDecrem = function () {
			this.actionHistory.index--;
		}

		obj.resetActionHistory = function () {
			this.actionHistory = {
				index: -1,
				list: []
			};
		}
	}


	return new Undoredo();
});