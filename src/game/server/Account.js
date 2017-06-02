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
		this.progress = [];
		this.highScore = [];
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
//				this.getBestScore();
				this.refreshHighScore();
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
//			if (!data) data = [];

//			data.push({
//				score: 0
//			});

//			this.progress = {
//				level: []
//			}
			this.progress = [];

//			console.log("refreshProgress => getProgress => data");
//			console.log(data);
			
			// trie par aventure
			var classique = [];
			var nouvelle = [];

			
			for (var i = 0; i < data.length ; i++) {
				
//				console.log(typeof(parseInt(data[0].score)));
//				console.log(typeof(data[0].adventureId));
				
				if (parseInt(data[i].adventureId) == 1) {
					classique.push(data[i]);
				}
				if (parseInt(data[i].adventureId) == 2) {
					nouvelle.push(data[i]);
				}
			}
//			console.log(classique);
//			console.log(nouvelle);
			
			var unlocked;
			var score;
			
			/** intégration des aventures */
			for (var n = 0; n < Config.adventure.length; n++) {
				var temp = (n === 0) ? classique : nouvelle ;
				if (temp.length == 0) temp.push({score:0});
//				console.log(temp);
				this.progress.push(
					{ level: [] }	
				);
				for (var i = 0; i < Config.adventure[n].totalLevel; i++) {
								
					if (temp.length <= i) {
						unlocked = false;
						score = 0;
					} else {
						unlocked = true;
						score = temp[i].score;
					}
					
//					if (data.length <= i) {
//						unlocked = false;
//						score = 0;
//					} else {
//						unlocked = true;
//						score = data[i].score;
//					}

					this.progress[n].level.push({
						unlocked: unlocked,
						score: score,
					});
				}
			}			

//			console.log("this.progress");
//			console.log(this.progress);
//			console.log(this.progress[0].level[0].score);
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
			adventure: Config.adventureSelect,
			userId: this.userId
		}, function (data) {
//			console.log("addScore => sendScore => data");
//			console.log(JSON.parse(data));
			this.refreshProgress();
//			this.refreshScore();
//			this.getBestScore();
			this.refreshHighScore();
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
	 * Récupère le top 10 des joueurs par aventure
	 * @param adventureId
	 * Return Objet du top 10
	 */
	Account.prototype.getBestScore = function (adventureId) {
		var result;
		$.post(ServerConfig.host + "request.php", {
			name: this.name,
			password: this.password,
			request: "getBestScore",
			isRequest: true,
			adventureId: adventureId
		}, function (data) {
			data = JSON.parse(data);
			
			for (var i=0; i < data.length ; i++) {
				this.highScore[adventureId-1].result.push(data[i]);
			}
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
	
	/**
	 * Met à jour la variable highScore en récupérant 
	 * la somme des scores de chaque joueur par aventure
	 */
	Account.prototype.refreshHighScore = function () {
		this.highScore = [];
		for (var i = 0; i < Config.adventure.length; i++) {
			this.highScore.push(
					{ result: [] }	
				);
			this.getBestScore(i+1);
		}
//		console.log("highScore");
//		console.log(this.highScore);
	}


	return new Account();
});