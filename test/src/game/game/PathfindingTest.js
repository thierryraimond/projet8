/**
 * Test le fichier qui gère le pathfinding "src/game/game/Pathfinding.js"
 */  
define(["src/game/game/Pathfinding"], function (Pathfinding) {
	
	var pathfindingTest, map, pos1, pos2, pos3, path1, path2;
	
	describe('Test le fichier qui gère le pathfinding "src/game/game/Pathfinding.js"', function() {	
		
		beforeEach(function() {
			pathfindingTest = Object.create(Pathfinding);
			
			// test initialisation du pathfinding
			spyOn(pathfindingTest, 'init').and.callThrough();
			pathfindingTest.init();

			map = [
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
			pos1 = { x: 4, y:4 };
			pos2 = { x: 4, y:5 };
			pos3 = { x: 1, y:1 };
			
			// test MapManager.prototype.getCellValue
			spyOn(pathfindingTest, 'find').and.callThrough();
			path1 = pathfindingTest.find(pos1, pos2, map);
			path2 = pathfindingTest.find(pos1, pos3, map);
			
		});
		
		it('Initialisation du pathfinding', function() {
			expect(pathfindingTest.init).toHaveBeenCalled();
			expect(pathfindingTest.unWalkable[0]).toEqual(7);
			expect(pathfindingTest.map.length).toBeGreaterThan(-1);
		});
		
		
		it('Trouve un chemin sur la carte', function() {
			expect(pathfindingTest.find).toHaveBeenCalled();
			expect(typeof(path1)).toEqual('object');
			expect(path1.length).toBeGreaterThan(0);
			expect(path1).toEqual([ [ 4, 4 ], [ 4, 5 ] ]);
			expect(typeof(path2)).toEqual('boolean');
			expect(path2).toEqual(false);
		});	

	});
});