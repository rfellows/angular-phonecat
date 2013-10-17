require.config({
    paths:{
      jQuery: '//ajax.googleapis.com/ajax/libs/jquery/1.10.1/jquery.min',
      phonecat: '.',
      partials: '../partials',
      angular: '../lib/angular/angular',
      'angular-resource': '../lib/angular/angular-resource'
    },
  	shim: {
    	'angular' : {'exports' : 'angular'},
    	'angular-resource': { deps:['angular']},
    	'jQuery': {'exports' : 'jQuery'}
  	}
});


require(["jQuery","phonecat/app","phonecat/controllers", "phonecat/filters","phonecat/directives","phonecat/services"], function(){
  angular.bootstrap(document , ['phonecatApp']);
});