'use strict';

/* App Module */
define(["angular/angular","angular/angular-resource"], function(angular, Resource){

	var myApp = angular.module('phonecatApp', ['phonecatFilters', 'phonecatServices']).
	  config(['$routeProvider', function($routeProvider) {
	  $routeProvider.
	      when('/phones', {templateUrl: 'partials/phone-list.html',   controller: 'PhoneListCtrl'}).
	      when('/phones/:phoneId', {templateUrl: 'partials/phone-detail.html', controller: 'PhoneDetailCtrl'}).
	      otherwise({redirectTo: '/phones'});
	}]);
	return myApp;
});
