'use strict';

/* App Module */
pen.define(["common-ui/angular-route"],
	 
	function(ng, Resource){

	var myApp = angular.module('phonecatApp', ['phonecatFilters', 'phonecatServices', 'ngRoute']);

	myApp.config(['$routeProvider', function($routeProvider) {
	  $routeProvider.
	      when('/phones', {templateUrl: 'partials/phone-list.html',   controller: 'PhoneListCtrl'}).
	      when('/phones/:phoneId', {templateUrl: 'partials/phone-detail.html', controller: 'PhoneDetailCtrl'}).
	      otherwise({redirectTo: '/phones'});
	}]);

	return myApp;
});
