/*
 * Configuration du serveur
 */
define([
	"src/utils/Config"
],
function (
	Config
) {
	var ServerConfig = function () {
		this.localhost = Config.localhost + '/src/game/server/php/';
		// this.localhost = 'https://fbgame.isartdigital.com/sokoban/sokoban26/src/game/server/php/';
		// this.localhost = 'http://localhost/sokoban/';
		this.webhost = Config.webhost + '/src/game/server/php/';
		this.host = Config.local ? this.localhost : this.webhost;
	};


	return new ServerConfig();
});