/**
 * Test le fichier de configuration du jeu "src/utils/Config.js"
 */
define(["src/utils/Config"], function (Config) {
	
	var configTest;
	
	beforeEach(function() {
		configTest = Object.create(Config);
		
			
//		spyOn(accountTest, 'init');
//		accountTest.init();
//		
//		spyOn(accountTest, 'connect');
//		accountTest.connect('thra', '1');
		

				
	});
		
	describe('Test le fichier de configuration du jeu "src/utils/Config.js"', function() {		
		it('la version est définie', function() {
			expect(Config.version).toBeDefined();
		});
		it("Config.local = true; (les requêtes se font en local et non sur le serveur web)", function() {
			expect(Config.local).toBe(true);
		});
//		it("la langue est comprise dans les langues disponibles", function() {
//			expect(Config.availableLanguage).toContain(Config.language);
//		});
		it("la langue est correctement définie", function(){
			expect(configTest.DefineLanguage(null)).toEqual('fr');
			expect(configTest.DefineLanguage(JSON.parse(localStorage.getItem("settings")))).toEqual('fr');
		});
		
	});
});



