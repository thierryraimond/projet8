/**
 * Test le fichier de chargement de toutes les images et différents spritesheet du jeu 
 * "src/utils/loader/SpriteLoader.js"
 */
define(["src/utils/loader/SpriteLoader", "src/utils/debug/Debug"], function(SpriteLoader, Debug){
		
	var spriteLoaderTest;
	
	describe('Test le fichier de chargement de toutes les images et différents spritesheet du jeu "src/utils/loader/SpriteLoader.js"', function() {
		
		beforeEach(function() {
			spriteLoaderTest = Object.create(SpriteLoader);
			spriteLoaderTest.init();
		});
		
		it('Tous les sprites sont chargés', function() {
			expect(spriteLoaderTest.currentLoaded).toEqual(spriteLoaderTest.totalToLoad);
			expect(spriteLoaderTest.getProgress()).toEqual(1);
		});
	});
});