'use strict';

/**
 * @ngdoc function
 * @name tweekidApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the tweekidApp
 */
angular.module('tweekidApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
