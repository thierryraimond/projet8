/**
 * Test le fichier d'initialisation du jeu "src/game/Game.js"
 */
define(["src/game/Game"], function (Game) {
	
	var gameTest;
	
	describe('Test le fichier d\'initialisation du jeu "src/game/Game.js"', function() {	
		
		beforeEach(function() {
			gameTest = Object.create(Game);
				
			spyOn(gameTest, 'init');
			gameTest.init();
		});
		
		it('l\'initialisation du jeu est bien lancée', function() {
			expect(gameTest.init).toHaveBeenCalled();
		});		
	});
});