/**
 * Test le fichier qui charge les maps et permet d'interargir avec le contenu "src/game/game/MapManager.js"
 */
define(["src/game/game/MapManager"], function (MapManager) {
	
	var mapManagerTest, retourGetCellValue, retourGetCellId;
	
	describe('Test le fichier qui charge les maps et permet d\'interargir avec le contenu "src/game/game/MapManager.js"', function() {	
		
		beforeEach(function() {
			mapManagerTest = Object.create(MapManager);

			mapManagerTest.currentMap = [
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
			
			// test MapManager.prototype.getCellValue
			spyOn(mapManagerTest, 'getCellValue').and.callThrough();
			retourGetCellValue = mapManagerTest.getCellValue(1,1);		
			
			// test MapManager.prototype.getCellId
			spyOn(mapManagerTest, 'getCellId').and.callThrough();
			retourGetCellId = mapManagerTest.getCellId(1,1);	
			
		});
		
		it('obtenir la valeur d\'une case de la map', function() {
			expect(mapManagerTest.getCellValue).toHaveBeenCalled();
			expect(typeof(retourGetCellValue)).toEqual('number');
			expect(retourGetCellValue).toEqual(26);
			expect(mapManagerTest.getCellValue(12,12)).toEqual(mapManagerTest.cell.wall);
		});	
		
		it('obtenir l\'id de la case sur la map se trouvant à la position x et y', function() {
			expect(mapManagerTest.getCellId).toHaveBeenCalled();
			expect(typeof(retourGetCellId)).toEqual('number');
			expect(retourGetCellId).toEqual(12);
		});	

	});
});