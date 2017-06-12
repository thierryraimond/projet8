/**
 * Test le fichier Manager qui gère les sprites "src/utils/assetsmanager/SpriteManager.js"
 */
define([
	"src/utils/assetsmanager/SpriteManager"
], 
function(
	SpriteManager
){
	
	describe('Test le fichier Manager qui gère les sprites "src/utils/assetsmanager/SpriteManager.js"', function() {
		
		var spriteManagerTest, sprite, image, tailleListn, retourGet, retourGetObj ;
		
		beforeEach(function() {
			spriteManagerTest = Object.create(SpriteManager);
			image = new Image();
			
			image.src = "chemin/bidon.png";
			
			// test SpriteManager.prototype.push
			spyOn(spriteManagerTest, 'push').and.callThrough();
			tailleList = spriteManagerTest.list.length;
			spriteManagerTest.push("unSprite", image, "", "");
			
			// test SpriteManager.prototype.get
			spyOn(spriteManagerTest, 'get').and.callThrough();
			retourGet = spriteManagerTest.get("unSprite");
			
			// test SpriteManager.prototype.getObj
			spyOn(spriteManagerTest, 'getObj').and.callThrough();
			retourGetObj = spriteManagerTest.getObj("unSprite");
		});
		
		
		it("Test l'ajout d'une nouvelle image et/ou sprite", function() {
			expect(spriteManagerTest.push).toHaveBeenCalled();
			expect(spriteManagerTest.list.length).toEqual(tailleList+1);
			expect(spriteManagerTest.list[spriteManagerTest.list.length-1].name).toEqual("unSprite");
			expect(spriteManagerTest.list[spriteManagerTest.list.length-1].img).toEqual(image);
			expect(spriteManagerTest.list[spriteManagerTest.list.length-1].backgroundSize).toEqual("");
			expect(spriteManagerTest.list[spriteManagerTest.list.length-1].position).toEqual("");
		});
		
		it("Récupère l'objet d'une image grâce son nom", function() {
			expect(spriteManagerTest.get).toHaveBeenCalled();
			expect(retourGet).toEqual(image);
		});
		
		it("Récupère l'objet complet du sprite de la liste à partir de son nom", function() {
			expect(spriteManagerTest.getObj).toHaveBeenCalled();
			expect(retourGetObj).toEqual(
				{ name: "unSprite", img: image, backgroundSize: "", position: "" }
			);
			expect(retourGetObj.position).toEqual('');
		});
	});
	
});