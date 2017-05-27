/**
 * Test le fichier qui précharge tous les sons "src/utils/loader/SoundLoader.js"
 */
define(["src/utils/loader/SoundLoader"], function (SoundLoader) {
	
	var soundLoaderTest;
	
	describe('Test le fichier qui précharge tous les sons "src/utils/loader/SoundLoader.js"', function() {	
		
		beforeEach(function() {
			soundLoaderTest = Object.create(SoundLoader);
			soundLoaderTest.init();
		});
		
		it('Tous les sons sont chargés', function() {
			expect(soundLoaderTest.currentLoaded).toEqual(soundLoaderTest.totalToLoad);
			expect(soundLoaderTest.getProgress()).toEqual(1);
		});	
	});
});