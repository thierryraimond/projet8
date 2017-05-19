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

		// Met la langue contenue dans le localstorage
		var settings = JSON.parse(localStorage.getItem("settings"));
		if (settings == null) settings = {};
		if (typeof settings.language != "undefined") Config.language = settings.language;

		$(document).tooltip(); // Active les tooltips
		
		PreLoad.init(function () {
			SpriteLoader.init();
			SoundLoader.init();
			GameManager.init();
		});
	}


	return new Game();
});