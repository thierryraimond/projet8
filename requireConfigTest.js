// Configure le chargement des modules et bibliothèques tierces
requirejs.config ({
	// Le paramètre baseUrl permet de spécifier un
	// préfixe à appliquer à tous les chemins
	// qu'utilisera RequireJS pour résoudre les chemins
	// d'accès aux modules. S'il n'est pas précisé,
	// tous les chemins sont résolus par rapport à
	// l'emplacement du fichier requireConfig.js. 
	// Soit ici la racine du site
	baseUrl : "",

	// l'objet path va permettre de faire une
	// association entre un nom de module et son
	// chemin d'accès. Si vous ne faite pas ça,
	// RequireJS considère que le nom d'un module
	// est le nom du fichier (sans l'extension .js)
	// précédé de son chemin relatif par rapport au
	// fichier requireConfig.js
	paths : {
		"jquery" : "libs/jquery/jquery.min",
		"jquery-ui" : "libs/jquery-ui/jquery-ui.min",
		"howler" : "libs/howler.min",
		"underscore" : "libs/underscore-min",
		"pathfinding" : "libs/pathfinding-browser.min",
		"stats" : "libs/debug/stats.min",
		"datgui" : "libs/debug/dat.gui.min",
		
		// chargement de la bibliothèque jasmine
		"jasmine" : "libs/jasmine-2.6.1/jasmine",
		"jasmine-html" : "libs/jasmine-2.6.1/jasmine-html",
		"jasmine-boot" : "libs/jasmine-2.6.1/boot",
		"mock-ajax" : "libs/jasmine-2.6.1/mock-ajax"
	},
	
	// l'objet shim va permettre de spécifier les
	// dépendances entre fichiers qui n'utilisent
	// pas la fonction define et associer d'éventuelles
    // variables globales à un nom de module.
	shim : {
	    // Pour les scripts qui exposent une variable
	    // globale il faut la déclarer explicitement
		"jquery-ui" : {
			exports : "$", // Exporter la variable global $ en tant que module
			deps : ['jquery'] // dépendance à charger avant $
		},
		"howler" : {
			exports : "Howl"
		},
		"underscore" : {
			exports : "_"
		},
		"pathfinding" : {
			exports : "PF"
		},
		"stats" : {
			exports : "Stats"
		},
		"datgui" : {
			exports : "dat.gui"
		},
		"jasmine-html" : {
			deps : ['jasmine']
		},
		"jasmine-boot" : {
			deps : ['jasmine', 'jasmine-html']
		}
	},
	urlArgs : "d=" + Date.now()
});

// http://blog.kennethhansen.info/sharepoint-with-requirejs-and-jasmine-tests/
define(['jasmine-boot'], function () {
	require(['mock-ajax'], function() {
		require([
//			'test/src/gameTest', 
//			'test/src/my-library.specs.require',
			'test/src/game/GameTest',
			'test/src/utils/ConfigTest',
			'test/src/utils/loader/SpriteLoaderTest',
			'test/src/utils/loader/SoundLoaderTest',
			'test/src/game/controller/keyboardTest',
			'test/src/utils/loader/LoaderManagerTest',
			'test/src/utils/assetsmanager/SpriteManagerTest',
			'test/src/utils/assetsmanager/SoundManagerTest',
			'test/src/game/server/AccountTest'
		], 
		function(){
			//trigger Jasmine
		    window.onload();
		});
	});
});


/* Initialisation du jeu */

// La fonction define prend 2 paramètres:
// - Un tableau avec le nom des modules dont vous allez avoir besoin 
//   pour faire fonctionner votre propre module (ses dépendances).
// 
// - Une fonction qui contient le code de votre module et qui prend 
//   en paramètre l’API de chacun des modules définis dans la liste 
//   des dépendances. Elle retournera éventuellement elle-même une API 
//   qui pourra être utilisée par d’autre modules. C’est RequireJS qui 
//   va gérer l’exécution de cette fonction vous ne pouvez donc pas prédire 
//   quand il sera exécuté, c’est du code asynchrone.
//define([
//	"src/game/Game"
//], function (
//	game
//) {
//	game.init();
//});