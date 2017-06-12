/**
 * Test le fichier qui précharge tous les sons "src/utils/loader/SoundLoader.js"
 */
define(["src/utils/loader/SoundLoader", "src/utils/Config"], function (SoundLoader, Config) {
	
	var soundLoaderTest;
	
	describe('Test le fichier qui précharge tous les sons "src/utils/loader/SoundLoader.js"', function() {	
		
		beforeEach(function() {
			soundLoaderTest = Object.create(SoundLoader);
			configTest = Object.create(Config);
			configTest.musicPreload = false;
			
			// test SoundLoader.prototype.getListMusic
			spyOn(soundLoaderTest, 'getListMusic').and.callThrough();
			
			soundLoaderTest.totalToLoad = configTest.musicPreload ? soundLoaderTest.list.length : soundLoaderTest.list.length - soundLoaderTest.getListMusic();
		});
		
		it('Si Config.musicPreload = false alors this.getListMusic() est appelé, il alimente this.listMusic et retourne un nombre', function() {
			expect(soundLoaderTest.getListMusic).toHaveBeenCalled();
			expect(typeof(soundLoaderTest.getListMusic())).toEqual('number');
			expect(soundLoaderTest.listMusic.length).toBeGreaterThan(-1);
		});	

	});
});