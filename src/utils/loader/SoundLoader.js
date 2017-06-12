/**
 * Load tout les sons du jeu
 */
define([
	"underscore",
	"howler",
	"src/utils/debug/Debug",
	"src/utils/assetsmanager/SoundManager",
	"src/utils/Config"
],
function (
	_,
	howler,
	Debug,
	SoundManager,
	Config
) {
	var SoundLoader = function () {
		this.baseFolder = "assets/sound/";

		this.list = [
			{
				name: "nyan_8bit",
				path: this.baseFolder + "music/nyan_8bit.mp3",
				volume: 50,
				type: "music"
			},
			{
				name: "nyan_elevator",
				path: this.baseFolder + "music/nyan_elevator.mp3",
				volume: 50,
				type: "music"
			},
			{
				name: "nyan_multigenre",
				path: this.baseFolder + "music/nyan_multigenre.mp3",
				volume: 50,
				type: "music"
			},
			{
				name: "nyan_part_drumandbass",
				path: this.baseFolder + "music/nyan_part_drumandbass.mp3",
				volume: 50,
				type: "music"
			},
			{
				name: "nyan_part_dubstep",
				path: this.baseFolder + "music/nyan_part_dubstep.mp3",
				volume: 50,
				type: "music"
			},
			{
				name: "nyan_part_electro",
				path: this.baseFolder + "music/nyan_part_electro.mp3",
				volume: 50,
				type: "music"
			},
			{
				name: "nyan_part_rock",
				path: this.baseFolder + "music/nyan_part_rock.mp3",
				volume: 50,
				type: "music"
			},
			{
				name: "nyan_part_trance",
				path: this.baseFolder + "music/nyan_part_trance.mp3",
				volume: 50,
				type: "music"
			},
			{
				name: "buttonHover",
				path: this.baseFolder + "sfx/buttonHover.mp3",
				volume: 20,
				type: "sfx"
			},
			{
				name: "buttonBlopEffect",
				path : this.baseFolder + "sfx/buttonBlopEffect.mp3",
				volume: 50,
				type: "sfx"
			},
			{
				name: "buttonPress",
				path: this.baseFolder + "sfx/buttonPress.mp3",
				volume: 50,
				type: "sfx"
			},
			{
				name: "buttonForbidden",
				path: this.baseFolder + "sfx/buttonForbidden.mp3",
				volume: 100,
				type: "sfx"
			},
			{
				name: "playerMove",
				path: this.baseFolder + "sfx/playerMove.mp3",
				volume: 100,
				type: "sfx"
			}
		];

		/**
		 * Push les 23 sons de miaulements
		 */
		for (var i = 0; i < 16; i++) {
			this.list.push({
				name: "meow" + i,
				path: this.baseFolder + "sfx/meow/meow" + i + ".mp3",
				volume: 50,
				type: "sfx"
			});
		}

		this.listMusic = [];
		
		this.totalToLoad = Config.musicPreload ? this.list.length : this.list.length - this.getListMusic();
		
//		this.totalToLoad = this.list.length;
		
		this.currentLoaded = 0;
	}
	
	/**
	 * Charge la liste de toutes les musiques
	 * dans la variable this.listMusic.
	 * @return nombre de musique contenu dans this.listMusic
	 */
	SoundLoader.prototype.getListMusic = function () {		
		for (var i = 0; i < this.list.length; i ++) {
			if(this.list[i].type === "music") {
				this.listMusic.push(this.list[i]);
			}
		}
		return this.listMusic.length;
	};


	/**
	 * Charge tous les sons, puis les stock dans le soundManager une fois chargés
	 */
	SoundLoader.prototype.init = function () {
		Debug.success("SoundLoader initialised.");
				
		SoundManager.list = _.clone(this.list);
		console.log(SoundManager.list);
		
		var debut = new Date(); // temps du début du chargement
		
		
		for (var i = 0; i < this.list.length; i ++) {
			// le préchargement des sons s'effectue pour tous les sons sauf pour les musiques si Config.musicPreload est à false
			if (Config.musicPreLoad || this.list[i].type != "music") {
				this.list[i].instance = new howler.Howl({
					urls: [this.list[i].path],
					onload: function () {
						this.currentLoaded++;
						if(this.currentLoaded === this.totalToLoad) {
							var fin = new Date(); // temps de fin du chargement
							Debug.success("SoundLoader Completed, time: " + (fin.getTime()-debut.getTime()) + " ms.");
						}
					}.bind(this)
				});		
			}
		}
	    
	};


	/**
	 * Return la progression du chargement des sons (0 à 1)
	 */
	SoundLoader.prototype.getProgress = function () {
		return this.currentLoaded / this.totalToLoad;
	}


	return new SoundLoader();
});