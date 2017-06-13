/**
 * Vector2 class with usual functions "src/utils/math/Vector2.js"
 */
define(["src/utils/math/Vector2"], function (Vector2) {
	
	var vectorTest, v2, vectorAdd, vectorSub, vectorScale, vectorDistance, vectorLength, vectorNormalized;
	
	describe('Test le fichier des vecteurs "src/utils/math/Vector2.js"', function() {	
		
		beforeEach(function() {
			// instanciation de l'objet Vector2
			vectorTest = new Vector2(1,1);
			
			v2 = { x: 1, y: 1};
			
			// test Vector2.prototype.add
			spyOn(vectorTest, 'add').and.callThrough();
			vectorAdd = vectorTest.add(v2);
			
			// test Vector2.prototype.sub
			spyOn(vectorTest, 'sub').and.callThrough();
			vectorSub = vectorTest.sub(v2);
			
			// test Vector2.prototype.scale
			spyOn(vectorTest, 'scale').and.callThrough();
			vectorScale = vectorTest.scale(3);
			
			// test Vector2.prototype.distance
			spyOn(vectorTest, 'distance').and.callThrough();
			vectorDistance = vectorTest.distance(v2);
			
			// test Vector2.prototype.length
			spyOn(vectorTest, 'length').and.callThrough();
			vectorLength = vectorTest.length();
			
			// test Vector2.prototype.normalized
			spyOn(vectorTest, 'normalized').and.callThrough();
			vectorNormalized = vectorTest.normalized();
		});
		
		it('Initialisation de l\'objet Vector2', function(){
			expect(vectorTest.x).toEqual(1);
			expect(vectorTest.y).toEqual(1);
		});
		
		it('Ajoute un vecteur', function() {
			expect(vectorTest.add).toHaveBeenCalled();
			expect(typeof(vectorAdd)).toEqual('object');
			expect(vectorAdd).toEqual(new Vector2({ x: 2, y: 2 }));
		});	
		
		it('Soustrait un vecteur', function() {
			expect(vectorTest.sub).toHaveBeenCalled();
			expect(typeof(vectorSub)).toEqual('object');
			expect(vectorSub).toEqual(new Vector2({ x: 0, y: 0 }));
		});	
		
		it('Multiplie un vecteur', function() {
			expect(vectorTest.scale).toHaveBeenCalled();
			expect(typeof(vectorScale)).toEqual('object');
			expect(vectorScale).toEqual(new Vector2({ x: 3, y: 3 }));
		});	
		
		it('Distance du vecteur', function() {
			expect(vectorTest.distance).toHaveBeenCalled();
			expect(typeof(vectorDistance)).toEqual('number');
			expect(vectorDistance).toEqual(0);
		});	
		
		it('Taille du vecteur', function() {
			expect(vectorTest.length).toHaveBeenCalled();
			expect(typeof(vectorLength)).toEqual('number');
			expect(vectorLength).toEqual(Math.sqrt(2));
		});	
		
		it('Vecteur normalisé', function() {
			expect(vectorTest.normalized).toHaveBeenCalled();
			expect(typeof(vectorNormalized)).toEqual('object');
			var x = vectorTest.x/Math.sqrt(2);
			var y = vectorTest.y/Math.sqrt(2);
			expect(vectorNormalized).toEqual(new Vector2({ x: x, y: y }));

		});	

	});
});