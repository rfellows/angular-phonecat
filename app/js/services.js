'use strict';

/* Services */
pen.define(["common-ui/angular","common-ui/angular-resource"], function(angular, Resource){

	angular.module('phonecatServices', ['ngResource']).
	    factory('Phone', function($resource){
	  return $resource('phones/:phoneId.json', {}, {
	    query: {method:'GET', params:{phoneId:'phones'}, isArray:true}
	  });
	});
});