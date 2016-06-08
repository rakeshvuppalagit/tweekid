'use strict';

/**
 * @ngdoc function
 * @name tweekidApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the tweekidApp
 */
angular.module('tweekidApp')
  .controller('MainCtrl', function ($scope,$firebaseObject) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    var ref = new Firebase("https://<YOUR-FIREBASE-APP>.firebaseio.com");
    // download the data into a local object
    $scope.data = $firebaseObject(ref);
    // putting a console.log here won't work, see below

  });
