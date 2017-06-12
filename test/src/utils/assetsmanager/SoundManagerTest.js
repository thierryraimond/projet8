/**
 * Test le fichier Manager qui gère les sons "src/utils/assetsmanager/SoundManager.js"
 */
define([
	"src/utils/assetsmanager/SoundManager"
], 
function(
	SoundManager
){
	
	describe('Test le fichier Manager qui gère les sons "src/utils/assetsmanager/SoundManager.js"', function() {
		
		var soundManagerTest, son, retourGet ;
		
		
		beforeEach(function() {
			soundManagerTest = Object.create(SoundManager);
			son = {
					name: "un_son",
					path: "un/chemin",
					volume: 50,
					type: "music"
				};
			soundManagerTest.list = [
				son
			];
		
			// test SoundManager.prototype.get
			spyOn(soundManagerTest, 'get').and.callThrough();
			retourGet = soundManagerTest.get("un_son");
			
		});
		
		it("Récupère l'objet d'un son de this.list grâce à son nom", function() {
			expect(soundManagerTest.get).toHaveBeenCalled();
			expect(retourGet).toEqual(son);
			expect(soundManagerTest.get('')).toEqual(-1);
		});	
		
	});
	
});