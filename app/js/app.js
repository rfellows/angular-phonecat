'use strict';

/* App Module */
define(["angular","angular-resource","phonecat/text","text!partials/phone-list.html","text!partials/phone-detail.html","text!partials/list-overlay.html"], 
	function(angular, Resource, text, listTemplate, detailTemplate, overlayTemplate){

	var myApp = angular.module('phonecatApp', ['phonecatFilters', 'phonecatServices']);

	var template = $('<div>' + listTemplate.replace(/^\s*/, '').replace(/\s*$/, '') + '</div>');
	var overlay = $('<div>' + overlayTemplate.replace(/^\s*/, '').replace(/\s*$/, '') + '</div>');
	var targets = overlay[0].childNodes;
	$.each(targets, function(num, target){
		var id = target.getAttribute("id");
		var fromTemplate = template.find("#"+id)[0];
		$.each($(target).children(), function(num, child){
			fromTemplate.appendChild(child);
		});
	});

	listTemplate = template.html();
	  

	// load templates
	myApp.run(function($templateCache) {
 		$templateCache.put('partials/phone-list.html', listTemplate);
 		$templateCache.put('partials/phone-detail.html', detailTemplate);
	});

	myApp.config(['$routeProvider', function($routeProvider) {
	  $routeProvider.
	      when('/phones', {templateUrl: 'partials/phone-list.html',   controller: 'PhoneListCtrl'}).
	      when('/phones/:phoneId', {templateUrl: 'partials/phone-detail.html', controller: 'PhoneDetailCtrl'}).
	      otherwise({redirectTo: '/phones'});
	}]);

	return myApp;
});
