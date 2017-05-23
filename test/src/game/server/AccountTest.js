/**
 * Test le fichier qui concerne les paramètres du compte et les requêtes AJAX "src/game/server/Account.js"
 */
define(["src/game/server/Account"], function (Account) {
	
	
//	Account.connect('thra', '1');
	
//	Account.status.done(function (){
//		console.log(Account.status);
//		console.log(Account.status.responseText);
//	});
	
	var accountTest;
	
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(args) {
      if (this.readyState == this.DONE) {
    	console.log(xhr);
        console.log(this.responseText);
      }
    };

    xhr.open("POST", "http://localhost/oc/projet8//src/game/server/php/request.php");
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send("isRequest=false&name=thra&password=bidon");
    
	
	
	var test =
	$.post('http://localhost/oc/projet8//src/game/server/php/request.php', {
		name: 'thra',
		password: '1',
		isRequest: false
	}, function (data) {			
		data = JSON.parse(data);		
	}.bind(this))
	.done(function() {
		console.log(test);
//		console.log(typeof test);
//		console.log(Object.keys(test));
		console.log(JSON.parse(test.responseText));
	});	
	

	
	var resAjax = (function () {
	    var resultat = null;
	    $.ajax({
	    	'type': "POST",
	        'async': false,
	        'global': false,
	        'url': "http://localhost/oc/projet8//src/game/server/php/request.php",
	        'data': jQuery.param({ name: "thra", password: "1", isRequest: false }),
//	        'dataType': "json",
	        'success': function (response, textStatus, jqXHR) {
	            resultat = JSON.parse(response);
	            console.log(resultat);	
	        }
	    });
	    return resultat;
	})(); 
		
	beforeEach(function() {
		accountTest = Object.create(Account);
			
		spyOn(accountTest, 'init');
		accountTest.init();
		
		spyOn(accountTest, 'connect');
		accountTest.connect('thra', '1');
		
		jasmine.Ajax.install();
				
	});
	
	afterEach(function() {
		jasmine.Ajax.uninstall();
	});
		
	describe('Test le fichier qui concerne les paramètres du compte et les requêtes AJAX "src/game/server/Account.js"', function() {
		
		it('test le type de chaque attribut du constructeur', function() {
			expect(typeof(Account.name)).toEqual('string');
			expect(typeof(Account.password)).toEqual('string');
			expect(typeof(Account.progress)).toEqual('object');
			expect(typeof(Account.highScore)).toEqual('number');
			expect(typeof(Account.playerScore)).toEqual('number');
			expect(typeof(Account.status)).toEqual('object');
		});
		
		it('la méthode Account.init() est bien lancée', function() {
			expect(accountTest.init).toHaveBeenCalled();
		});
		
		it("la méthode Account.connect('thra', '1') se lance avec deux paramètres", function() {
			expect(accountTest.connect).toHaveBeenCalledWith('thra', '1');
		});

		it("La requête Ajax retourne 'GoodPassword' lorsqu'un utilisateur existant se connecte avec un mot de passe correct", function() {
			expect(resAjax.message).toEqual('GoodPassword');
		});
		
		it("La requête Ajax retourne 'WrongPassword' lorsqu'un utilisateur existant se connecte avec un mot de passe incorrect", function() {
		      var doneFn = jasmine.createSpy("success");
		      
		      var xhr = new XMLHttpRequest();
		      xhr.onreadystatechange = function(args) {
		        if (this.readyState == this.DONE) {
		          doneFn(this.responseText);
		        }
		      };
		
		      xhr.open("POST", "http://localhost/oc/projet8//src/game/server/php/request.php");
		      xhr.send("isRequest=false&name=thra&password=bidon");
		      console.log(xhr);
		      
		      expect(jasmine.Ajax.requests.mostRecent().url).toBe('http://localhost/oc/projet8//src/game/server/php/request.php');
		      expect(doneFn).not.toHaveBeenCalled();
		      
		      jasmine.Ajax.requests.mostRecent().respondWith({
		    	  "status": 200,
		    	  "contentType": 'application/x-www-form-urlencoded',
		    	  "responseText": 'WrongPassword'
		      });
		      expect(doneFn).toHaveBeenCalledWith('WrongPassword');
		});
		
		it("La requête Ajax retourne 'AccountCreated' lorsqu'un nouvel utilisateur se connecte", function () {
		      var doneFn = jasmine.createSpy("success");
		 
		      jasmine.Ajax.stubRequest('http://localhost/oc/projet8//src/game/server/php/request.php').andReturn({
		          "responseText": 'AccountCreated'
		      });
		      
		      var xhr = new XMLHttpRequest();
		      xhr.onreadystatechange = function(args) {
		        if (this.readyState == this.DONE) {
		          doneFn(this.responseText);
		        }
		      };

		      xhr.open("POST", "http://localhost/oc/projet8//src/game/server/php/request.php");
		      xhr.send("isRequest=false&name=newAccount&password=bidon");
		      console.log(xhr);

		      expect(doneFn).toHaveBeenCalledWith('AccountCreated');
		});
		
	
	});
});
