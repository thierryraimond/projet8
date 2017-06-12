/**
 * Test le fichier de chargement de toutes les images et différents spritesheet du jeu 
 * "src/utils/loader/SpriteLoader.js"
 */
define([
	"src/utils/loader/SpriteLoader", 
	"src/utils/Config"
], 
function(
	SpriteLoader, 
	Config
){
		


	
//	spriteLoaderTest = Object.create(SpriteLoader);
//	spriteLoaderTest.init();
//	
	describe('Test le fichier de chargement de toutes les images et différents spritesheet du jeu "src/utils/loader/SpriteLoader.js"', function() {
		
		var spriteLoaderTest, configTest;
		
		beforeEach(function() {
			spriteLoaderTest = Object.create(SpriteLoader);
			configTest = Object.create(Config);
			
			configTest.spriteSheet = true;
			spyOn(spriteLoaderTest, 'getListNoSprite').and.callThrough();
			
			spriteLoaderTest.totalToLoad = configTest.spriteSheet ? spriteLoaderTest.spriteSheet.length + spriteLoaderTest.getListNoSprite() : spriteLoaderTest.list.length ;
//			console.log(spriteLoaderTest.totalToLoad);
//			console.log(spriteLoaderTest.spriteSheet.length);
//			console.log(spriteLoaderTest.getListNoSprite());
//			console.log(spriteLoaderTest.list.length);

		});
		

		
//		beforeEach(function(done) {
//		    setTimeout(function() {
//		    	done();
//		    }, 2000);
//		});
//		
//		it('Tous les sprites sont chargés', function(done) {
//			expect(spriteLoaderTest.currentLoaded).toEqual(spriteLoaderTest.totalToLoad);
//			expect(spriteLoaderTest.getProgress()).toEqual(1);
//			done();
//		});
		
		it('Si Config.spriteSheet = true alors this.getListNoSprite() est appelé, il alimente this.listNoSprite et retourne un nombre', function() {
			expect(spriteLoaderTest.getListNoSprite).toHaveBeenCalled();
			expect(typeof(spriteLoaderTest.getListNoSprite())).toEqual('number');
			expect(spriteLoaderTest.listNoSprite.length).toBeGreaterThan(-1);
		});
		
		
	});
});