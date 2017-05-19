/**
 * Test le fichier de configuration du jeu "src/utils/Config.js"
 */
define(["src/utils/Config"], function (Config) {
		
	describe('Test le fichier de configuration du jeu "src/utils/Config.js"', function() {		
		it('la version est définie', function() {
			expect(Config.version).toBeDefined();
		});
		it("Config.local = true; (les requêtes se font en local et non sur le serveur web)", function() {
			expect(Config.local).toBe(true);
		});
		it("la langue est comprise dans les langues disponibles", function() {
			expect(Config.availableLanguage).toContain(Config.language);
		});
		
	});
});



