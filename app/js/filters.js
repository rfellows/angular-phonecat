'use strict';

/* Filters */
pen.define('phonecat/filters', ["common-ui/angular","common-ui/angular-resource"], function(ng, Resource){

	angular.module('phonecatFilters', []).filter('checkmark', function() {
	  return function(input) {
	    return input ? '\u2713' : '\u2718';
	  };
	});
});

