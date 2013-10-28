'use strict';

pen.define([
	"phonecat/app",
	"common-ui/angular",
	"common-ui/angular-resource",
	"common-ui/angular-route"
	],

	function(myApp, ng, Resource){
		/* Controllers */

		function PhoneListCtrl($scope, Phone) {
		  $scope.phones = Phone.query();
		  $scope.orderProp = 'age';
		}



		function PhoneDetailCtrl($scope, $routeParams, Phone) {
		  $scope.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone) {
		    $scope.mainImageUrl = phone.images[0];
		  });

		  $scope.setImage = function(imageUrl) {
		    $scope.mainImageUrl = imageUrl;
		  }
		}


		myApp.controller('PhoneListCtrl', ['$scope', 'Phone', PhoneListCtrl]);
		myApp.controller('PhoneDetailCtrl', ['$scope', '$routeParams', 'Phone', PhoneDetailCtrl]);

});