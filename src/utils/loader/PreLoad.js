/**
 * Charge les images de l'écran de loading
 */
define([
	"src/utils/localization/txt"
],
function (
	txt
) {
	var PreLoad = function () {

	};


	/**
	 * Initialise les images de l'écran de loading, une fois fini, execute le callback.
	 */
	PreLoad.prototype.init = function (callback) {
		
		this.baseFolder = "assets/img/";
		txt.init();

//		this.imgSrc = [
////			this.baseFolder + "sprite/ui/loadingScreen/Background.png",
//			this.baseFolder + "sprite/ui/loadingScreen/background.jpg",
//			this.baseFolder + "sprite/ui/loadingScreen/loadingBar.png",
////			this.baseFolder + "sprite/ui/loadingScreen/loadingBarEmpty.jpg",
//			this.baseFolder + "sprite/ui/loadingScreen/loadingCat.gif",
////			this.baseFolder + "sprite/ui/loadingScreen/sokonyan.png"
//		];

		this.list = [
			{ 
				name: "background",
				path: this.baseFolder + "sprite/ui/loadingScreen/background.jpg",
				image: new Image()
			},
//			{ 
//				name: "loadingBarEmpty",
//				path: this.baseFolder + "sprite/ui/loadingScreen/loadingBarEmpty.jpg",
//				image: new Image()
//			},
			{ 
				name: "loadingBar",
				path: this.baseFolder + "sprite/ui/loadingScreen/loadingBar.png",
				image: new Image()
			},
			{ 
				name: "loadingCat",
				path: this.baseFolder + "sprite/ui/loadingScreen/loadingCat.gif",
				image: new Image()
			},
			{ 
				name: "sokonyan",
				path: this.baseFolder + "sprite/ui/loadingScreen/sokonyan.png",
				image: new Image()
			},

			
//			new Image(),
//			new Image(),
////			new Image(),
//			new Image()
		];

		var loadingText = $("<div class='loadingText'>...</div>");
		$('body').append(loadingText);

		for (var i = 0; i < this.list.length; i++) {
//			this.list[i].src = this.imgSrc[i];

			this.list[i].image.src = this.list[i].path;
			
			if (i == this.list.length - 1) {
				this.list[i].image.onload = function () {
//				this.list[i].onload = function () {
					$('.loadingText').fontSpy({
						onLoad: function () {	
							callback();						
							$(loadingText).remove();
						},
						onFail: function () {
							console.log("fail to load font");
						}
					});
				};
			}
		}
	};

	return new PreLoad();
});