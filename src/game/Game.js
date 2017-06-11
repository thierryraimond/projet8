/*
 * Initialise le jeu, lance tout les loader et démarre la gameLoop
 * To do:
 * -SceneManager
 * -Affichage hitbox + point de pivot
 * -Gestion des langues
 * -fonction aabb, hitestobject
 */
define([
	"jquery",
	"jquery-ui",
	"src/utils/localization/txt",
	"src/utils/debug/Debug",
	"src/game/game/GameManager",
	"src/utils/loader/SpriteLoader",
	"src/utils/loader/SoundLoader",
	"src/utils/loader/PreLoad",
	"src/utils/Config"
],
function (
	$,
	ui,
	txt,
	Debug,
	GameManager,
	SpriteLoader,
	SoundLoader,
	PreLoad,
	Config
) {
	var Game = function () {

	}


	/*
	 * Initialise le jeu, lance tous les loaders puis démarre la gameloop
	 */
	Game.prototype.init = function () {
		Debug.success("Game initialised.");
		var debut = new Date(); // temps du début du chargement
		Debug.success("Language loader initialised");
		// lance le Preload après le chargement des langues
		txt.init(function (){
			var fin = new Date(); // temps de fin du chargement
			Debug.success("Language loader Completed, time: " + (fin.getTime()-debut.getTime()) + " ms.");
			PreLoad.init(function () {			
				SpriteLoader.init(); 
				SoundLoader.init();
				GameManager.init();
			});
		});
			
//		PreLoad.init(function () {			
//			SpriteLoader.init(); 
//			SoundLoader.init();
//			GameManager.init();
//		});
	}


	return new Game();
});