/**
 * Test le fichier de gestion du Keyboard, modifie les attributs de la class Controller 
 * "src/game/controller/Keyboard.js"
 */
define(["src/game/controller/Controller","src/game/controller/Keyboard"], function(Controller, Keyboard){
		
	var keyboardTest, e;
	
	describe('Test le fichier de gestion du Keyboard, modifie les attributs de la class Controller "src/game/controller/Keyboard.js"', function() {
		
		beforeEach(function() {		
			keyboardTest = Object.create(Keyboard);
			keyboardTest.init();
			keyboardTest.changeKeyState(38,1); // keyboardTest.UP_KEYCODE
			keyboardTest.changeKeyState(40,1); // keyboardTest.DOWN_KEYCODE
		});
		
		it('Test la modification de la class Controller lorsqu\'une touche est appuyée', function() {
			expect(Controller.left).toEqual(0); // keyboardTest.LEFT_KEYCODE
			expect(Controller.right).toEqual(0);
			expect(Controller.up).toEqual(1);
			expect(Controller.down).toEqual(1);
//			$('body').keyup(function () {
//
//			});
		});
		
//		it('Test l\'événement "keydown"', function() {
//			$('body').trigger($.Event('keydown', { keyCode: 37 })); // keyboardTest.LEFT_KEYCODE
//
//			expect(Controller.left).toEqual(1); // keyboardTest.LEFT_KEYCODE
//		});
	});
});