/**
 * Test le fichier qui gère le joueur "src/game/game/Player.js"
 */  
define([
	"src/game/game/Player",
	"src/game/game/MapManager",
	"src/utils/math/Vector2"
], 
function (
	Player,
	MapManager,
	Vector2
) {
	
	var playerTest, retourGetPlayerPos1, retourGetPlayerPos2, retourXYToDir;
	
	describe('Test le fichier qui gère le joueur "src/game/game/Player.js"', function() {	
		
		beforeEach(function() {
			playerTest = Object.create(Player);
			
			// test Player.prototype.getPlayerPos
			spyOn(playerTest, 'getPlayerPos').and.callThrough();	
			// la position du joueur sur la carte est à { x:-1, y:-1 }
			retourGetPlayerPos1 = playerTest.getPlayerPos();
			
			MapManager.currentMap = [
	        	 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	        	 0, 26, 32, 32, 32, 32, 32, 32, 32, 27, 0,
	        	 0, 30, 41, 42, 41, 42, 41, 42, 41, 31, 0,
	        	 0, 30, 45, 25, 25, 25, 25, 25, 25, 31, 0,
	        	 0, 30, 25, 21, 23, 25, 25, 25, 25, 31, 0,
	        	 0, 30, 25, 25, 25, 25, 25, 25, 25, 31, 0,
	        	 0, 30, 25, 25, 25, 25, 25, 25, 25, 31, 0,
	        	 0, 30, 25, 25, 25, 25, 25, 25, 25, 31, 0,
	        	 0, 28, 32, 32, 35, 43, 33, 32, 32, 29, 0,
	        	 0, 37, 41, 42, 36, 8, 34, 42, 41, 40, 0,
	        	 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
	         ];
			// la position du joueur sur la carte est à { x:4, y:4 }
			retourGetPlayerPos2 = playerTest.getPlayerPos();			
			playerTest.position = retourGetPlayerPos2;
			
			// test Player.prototype.XYToDir
			spyOn(playerTest, 'XYToDir').and.callThrough();
			// retourne 'right'
			retourXYToDir = playerTest.XYToDir(5,4);
			
		});
		
		it('Récupère la position du joueur', function() {
			expect(playerTest.getPlayerPos).toHaveBeenCalled();
			expect(typeof(retourGetPlayerPos1)).toEqual('object');
			expect(retourGetPlayerPos1).toEqual(new Vector2(-1,-1));
			expect(typeof(retourGetPlayerPos2)).toEqual('object');
			expect(retourGetPlayerPos2).toEqual(new Vector2(4,4));
		});
		
		it('Transforme une direction x, y en direction sous forme de string (Left, Right, up, down)', function() {
			expect(playerTest.XYToDir).toHaveBeenCalled();
			expect(typeof(retourXYToDir)).toEqual('string');
			expect(retourXYToDir).toEqual('right');
			// doit retourner 'down'
			expect(playerTest.XYToDir(4,5)).toEqual('down');
		});

	});
});