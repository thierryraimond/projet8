/**
 * Tout ce qui concerne les paramètres du comptes et les requêtes AJAX disponible.
 */
define([
	"src/utils/Config",
	"src/game/server/ServerConfig"
],
function (
	Config,
	ServerConfig
) {
	var Account = function () {
		this.userId = 0;
		this.name = "";
		this.password = "";
		this.progress = {};
		this.highScore = 0;
//		this.playerScore = 0;
		this.status = {}; // statut de la connexion au compte de l'utilisateur sous la forme jqXHR object
	};


	Account.prototype.init = function (UIManager) {
		this.UIManager = UIManager;
	};


	/*
	 * Permet de se connecter ou créer un compte.
	 * @name Nom de compte
	 * @password Mot de passe du compte
	 * Return "AccountCreated" - Compte créer
	 *		  "GoodPassword" - Connexion réussie
	 *		  "WrongPassword" - Mot de passe incorrect ou compte déjà existant
	 */
	Account.prototype.connect = function (name, password) {
		this.name = name;
		this.password = password;
		this.status =
		$.post(ServerConfig.host + "request.php", {
			name: this.name,
			password: this.password,
			isRequest: false
		}, function (data, textStatus, jqXHR) {
			
//			var screenList = {
//				created: "AccountCreated",
//				connected: "GoodPassword",
//				wrongpassword: "WrongPassword"
//			};
//			
//			data = data.replace(/ /g,"");
//			data = data.replace(/\n/g,"");
			
//			this.UIManager.addScreen(screenList[data], true);
			
			// probleme d'encodage résolu
//			data = JSON.parse(data);
						
			this.UIManager.addScreen(data.message, true);

			if (data.message != 'WrongPassword') {
				this.getUserId();
//				this.refreshProgress();
//				this.refreshScore();
				this.getBestScore();
			}
		}.bind(this), 'json');
	};


	/**
	 * Refresh la progression du joueurs. (Niveau débloqué, score par niveau)
	 */
	Account.prototype.refreshProgress = function () {
		var result;
		$.post(ServerConfig.host + "request.php", {
			name: this.name,
			password: this.password,
			request: "getProgress",
			isRequest: true,
			userId: this.userId
		}, function (data) {
			data = JSON.parse(data);
			if (!data) data = [];

			data.push({
				score: 0
			});

			this.progress = {
				level: []
			}

//			console.log("refreshProgress => getProgress => data");
//			console.log(data);
			
			var unlocked;
			var score;
			for (var i = 0; i < Config.totalLevel; i++) {
				if (data.length <= i) {
					unlocked = false;
					score = 0;
				} else {
					unlocked = true;
					score = data[i].score;
				}

				this.progress.level.push({
					unlocked: unlocked,
					score: score,
				})
			};
//			console.log("this.progress");
//			console.log(this.progress);
		}.bind(this));
	}


	/*
	 * Permet d'ajouter ou mettre à jour un score dans la database.
	 * @level Niveau auquel correspond le score
	 * @score Score à ajouter ou modifier
	 */
	Account.prototype.addScore = function (level, score) {
		$.post(ServerConfig.host + "request.php", {
			name: this.name,
			password: this.password,
            request: "sendScore",
            level: level,
            score: score,
			isRequest: true,
			adventure: Config.adventure,
			userId: this.userId
		}, function (data) {
//			console.log("addScore => sendScore => data");
//			console.log(JSON.parse(data));
			this.refreshProgress();
//			this.refreshScore();
			this.getBestScore();
		}.bind(this));
	}

/** prototype inutile faisant doublon avec getBestScore */
//	/*
//	 * Récupère le score total du joueur.
//	 * Return Score du joueur.
//	 */
//	Account.prototype.getScore = function () {
//		var result;
//		$.post(ServerConfig.host + "request.php", {
//			name: this.name,
//			password: this.password,
//			request: "getBestScore",
//			isRequest: true
//		}, function (data) {
//			data = JSON.parse(data);
//			this.playerScore = data;
////			console.log("getScore => getBestScore => data => this.playerScore");
////			console.log(data);
//		}.bind(this));
//	}


	/*
	 * Récupère le top 10 des joueurs.
	 * Return Objet du top 10
	 */
	Account.prototype.getBestScore = function () {
		var result;
		$.post(ServerConfig.host + "request.php", {
			name: this.name,
			password: this.password,
			request: "getBestScore",
			isRequest: true
		}, function (data) {
			data = JSON.parse(data);
			this.highScore = data;
//			this.playerScore = data;
//			console.log("getBestScore => getBestScore => data => this.highScore");
//			console.log(data);
		}.bind(this));
	}
	
	/*
	 * Récupère le userId du joueur
	 */
	Account.prototype.getUserId = function () {
		$.post(ServerConfig.host + "request.php", {
			name: this.name,
			password: this.password,
			request: "getUserId",
			isRequest: true
		}, function (data) {
			data = JSON.parse(data);
			this.userId = data[0].userId;
//			console.log("getUserId => data => this.userId");
//			console.log(this.userId);
			this.refreshProgress();
		}.bind(this));
	};

/** avait de sens que pour lancer au moins deux méthodes */
//	/**
//	 * Met à jour la variable highScore et playerScore
//	 */
//	Account.prototype.refreshScore = function () {
//		this.getBestScore();
////		this.getScore(); // requête inutile
//	}


	return new Account();
});