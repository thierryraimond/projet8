define([
	"src/utils/Config"
],
function (
	Config
) {
	/**
	 * Configuration du jeu.
	 */
	var Config = function () {
		/**
		 * Information du jeu
		 */
		this.version = "1.0.0";
		/* Réglage serveur local ou web */
		this.local = true; // Si les requêtes se font en local ou vers le serveur web.
		this.localhost = 'http://localhost/oc/projet8/';
		// var localhost = 'http://localhost/sokoban/localization/';
		// var localhost = 'https://fbgame.isartdigital.com/sokoban/sokoban26/bin/localization/';
		this.webhost = 'http://sokonyan.delfisakura.com/';
		/* réglage de la langue à traduire */
		this.availableLanguage = [
			"de",
			"en",
			"es",
			"fr",
			"it",
			"pl"
		];
		this.language = this.DefineLanguage(JSON.parse(localStorage.getItem("settings"))); // définit la langue
		var localization = 'bin/localization/';
		this.xliffPath = this.local ? this.localhost+localization : this.webhost+localization ; // Chemin vers les fichiers de langues xliff
		
		this.tooltip = true; // Active/Desactive les tooltips issus de "jquery-ui"
		if(this.tooltip) { $(document).tooltip(); }

		/**
		 * Reglage écran
		 */
		this.fullScreen = false;
		this.ratio = 16 / 9;
		this.WINDOW_WIDTH = 1136; // Si fullScreen = false
		this.WINDOW_HEIGHT = 640; // *
		this.SAFE_ZONE_WIDTH = 2048;
		this.SAFE_ZONE_HEIGHT = 1366;

		/*
		 * Outils de debug
		 */
		this.debug = true; // Active/Desactive les log dans la console
		this.guiDebug = false; // Active/Desactive la gui de debugging
		this.fps = false; // Active/Desactive le compteur de fps
		this.ms = false; // Active/Desactive le compteur de ms par frame
		this.showHitbox = false; // Active/Desactive l'affichage des hitbox
		this.showPivot = false; // Active/Desactive l'affichage des points de pivots


		/**
		 * Jeu
		 */

		// Nombre de niveau au total
		this.totalLevel = 15;

		// Taille de la map
		this.mapSizeX = 11;
		this.mapSizeY = 11;
		this.mapWidth = 61;
		this.mapHeight = 61;

		// Effet chargement de la map
		this.fadeInMin = 0;
		this.fadeInMax = 400;

		// UI Manager
		this.changeScreenFadeDelay = 500; // Temps de transition entre 2 screen

		// Vitesse de translation d'une case à une autre
		this.translationSpeed = 15;
	}
	
	/**
	 * Retourne la langue du localstorage cité en paramètre comprise dans le tableau this.availableLanguage
	 * sinon retourne la langue par défaut 'fr'
	 * 
	 *  @params Object localStorage (objet natif)
	 *  @returns String la langue comprise dans Array this.availableLanguage
	 *  @link https://www.alsacreations.com/article/lire/1402-web-storage-localstorage-sessionstorage.html   
	 */
	Config.prototype.DefineLanguage = function (settings) { 
		if (settings == null) settings = {};	
		return (typeof settings.language != "undefined" && $.inArray(settings.language, this.availableLanguage) != -1) ? settings.language : 'fr' ;	
	};


	return new Config();
});