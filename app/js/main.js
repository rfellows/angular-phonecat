require.config({
    paths:{
      phonecat: '.',
      angular: '../lib/angular'
    }
});


require(["phonecat/app","phonecat/controllers", "phonecat/filters","phonecat/directives","phonecat/services"], function(){
  angular.bootstrap(document , ['phonecatApp']);
});