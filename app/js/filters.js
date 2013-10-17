'use strict';

/* Filters */
define(["angular","angular-resource"], function(angular, Resource){

	angular.module('phonecatFilters', []).filter('checkmark', function() {
	  return function(input) {
	    return input ? '\u2713' : '\u2718';
	  };
	});
});

