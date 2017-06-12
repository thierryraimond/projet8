/**
 * Test le fichier qui fait le lien entre tous les loaders pour récuperer le chargement total
 * "src/utils/loader/LoaderManager.js" 
 */
define([
	"src/utils/loader/LoaderManager", 
	"src/utils/Config",
	"src/utils/loader/SpriteLoader",
	"src/utils/loader/SoundLoader"
], 
function(
	LoaderManager,
	Config,
	SpriteLoader,
	SoundLoader
){
	
//	var loaderManagerTest = Object.create(LoaderManager);
//	var spriteLoaderTest = Object.create(SpriteLoader);
//	var soundLoaderTest = Object.create(SoundLoader);
//	spriteLoaderTest.init();
//	soundLoaderTest.init();
	SoundLoader.init();
	SpriteLoader.init();
	
	
	describe('Test le fichier qui fait le lien entre tous les loaders pour récuperer le chargement total "src/utils/loader/LoaderManager.js"', function() {
		
		beforeEach(function() {
			
			
		});
		
//		it("le chargement total est en cours", function() {
////			expect(loaderManagerTest.getProgress()).toEqual(0);
//			expect(SpriteLoader.currentLoaded).toEqual(0);
//			expect(SpriteLoader.getProgress()).toEqual(0);
//			expect(SoundLoader.currentLoaded).toEqual(0);
//			expect(SoundLoader.getProgress()).toEqual(0);
//			expect(LoaderManager.getProgress()).toEqual(0);
//		});
		
		describe('Test le chargement de toutes les images et spritesheet ainsi que les sons en moins de 2 secondes', function() {
			
			beforeEach(function(done) {
			    setTimeout(function() {

			    	done();
			    }, 2000);
			});
			
//			it('Tous les sprites sont chargés', function(done) {
//				expect(spriteLoaderTest.currentLoaded).toEqual(spriteLoaderTest.totalToLoad);
//				expect(spriteLoaderTest.getProgress()).toEqual(1);
//				done();
//			});
//			
//			it('Tous les sons sont chargés', function(done) {
//				expect(soundLoaderTest.currentLoaded).toEqual(soundLoaderTest.totalToLoad);
//				expect(soundLoaderTest.getProgress()).toEqual(1);
//				done();
//			});	
			
			it("le chargement total est terminée en moins de 2 secondes", function(done) {
				expect(SpriteLoader.currentLoaded).toEqual(SpriteLoader.totalToLoad);
				expect(SpriteLoader.getProgress()).toEqual(1);
				expect(SoundLoader.currentLoaded).toEqual(SoundLoader.totalToLoad);
				expect(SoundLoader.getProgress()).toEqual(1);
				expect(LoaderManager.getProgress()).toEqual(1);
				done();
			});
			
		});
		
	});
	
});