/**
 * Manager qui gère les sons
 */
define([
	"howler",
	"src/utils/Config"
],
function (
	howler,
	Config
) {
	var SoundManager = function () {
		// Volume général
		this.volume = {
			global: 50,
			music: 100,
			sfx: 100
		}

		// Son sauvegardé
		var settings = JSON.parse(localStorage.getItem("settings"));
		if (settings == null) settings = {};
		if (typeof settings.global != "undefined") {
			this.volume = {
				global: settings.global,
				music: settings.music,
				sfx: settings.sfx
			}
		}

		this.list = [];
		this.currentMusicInstance = null;
		
		this.musicPlayer = $('#musiqueFond');
	};

	SoundManager.prototype.musicPlay = function (name, loop) {
		if (loop == "undefined") loop = false;

		var currentSound = this.get(name);
//		var currentSound = -1;
//		for (var i = 0; i < this.list.length; i++) {
//			if (this.list[i].name == name) {
//				currentSound = this.list[i];
//				break;
//			}
//		}
		
		if (currentSound == -1) throw new Error("SoundManager : Sound \"" + name + "\" does not exist.");

		var volumeType = this.volume[currentSound.type] * (this.volume.global / 100);
		var volumeSound = currentSound.volume * (volumeType / 100);
		volumeSound /= 100;

		// autoplay ?
		this.musicPlayer[0].loop = loop;
		
		// définit le volume
		this.musicPlayer[0].volume = volumeSound;
		
		this.musicPlayer[0].src = currentSound.path;
		
		this.musicPlayer[0].load();
		this.musicPlayer[0].play();
		
	};

	/*
	 * Joue un son, peut avoir un callback appellé quand le son se termine
	 */
	SoundManager.prototype.play = function (name, loop) {
		if (loop == "undefined") loop = false;

		var currentSound = this.get(name);

		if (currentSound == -1) throw new Error("SoundManager : Sound \"" + name + "\" does not exist.");

		var volumeType = this.volume[currentSound.type] * (this.volume.global / 100);
		var volumeSound = currentSound.volume * (volumeType / 100);
		volumeSound /= 100;

		// Callback
		if (loop) {
			if (Config.musicPreload) {
				currentSound.instance._onend = [function () {
					this.play(name);
				}.bind(this)];
			} 
		}
		
		currentSound.instance.volume(volumeSound);
			
		var instance = currentSound.instance.play();
					
		// Empeche le multichannel si la source audio est une musique
		if (currentSound.type == "music") {
			if (this.currentMusicInstance != null) {
				this.currentMusicInstance.stop();
			}
			this.currentMusicInstance = instance;
		}

		return instance;
	};
	
	/**
	 * Récupère l'objet d'un son de this.list grâce à son nom
	 */
	SoundManager.prototype.get = function (name) {
		for (var i = 0; i < this.list.length; i++) {
			if (this.list[i].name == name) {
				return this.list[i];
			}
		}
		return -1;
	};


	/**
	 * Stop un son
	 */
	SoundManager.prototype.stop = function (name) {
		for (var i = 0; i < this.list.length; i++) {
			if (this.list[i].name == name) {
				this.list[i].instance.stop();
				this.musicPlayer[0].pause();
				break;
			}
		}
	};


	/**
	 * Stop tout les sons en cours
	 */
	SoundManager.prototype.stopAll = function () {
		for (var i = 0; i < this.list.length; i++) {
			this.list[i].instance.stop();
			this.musicPlayer[0].pause();
		}
	};


	return new SoundManager();
});