// http://www.webdeveasy.com/optimize-requirejs-projects/
({
    appDir: './',
    baseUrl: './',
    dir: './dist',
    modules: [
        {
            name: 'requireConfig'
        }
    ],
    fileExclusionRegExp: /^(r|build)\.js$/,
    optimizeCss: 'standard',
    removeCombined: true,
    paths: {
		"jquery" : "libs/jquery/jquery.min",
		"jquery-ui" : "libs/jquery-ui/jquery-ui.min",
		"howler" : "libs/howler.min",
		"underscore" : "libs/underscore-min",
		"pathfinding" : "libs/pathfinding-browser.min",
		"datgui" : "libs/debug/dat.gui.min"
    },
	shim : {
	    // Pour les scripts qui exposent une variable
	    // globale il faut la déclarer explicitement
		"jquery-ui" : {
			exports : "$", // Exporter la variable global $ en tant que module
			deps : ['jquery'] // dépendance à charger avant $
		},
		"howler" : {
			exports : "Howl"
		},
		"underscore" : {
			exports : "_"
		},
		"pathfinding" : {
			exports : "PF"
		},
		"datgui" : {
			exports : "dat.gui"
		}
	}
})