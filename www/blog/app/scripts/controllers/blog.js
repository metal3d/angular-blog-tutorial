'use strict';

/**
 * @ngdoc function
 * @name blogApp.controller:BlogCtrl
 * @description
 * # BlogCtrl
 * Controller of the blogApp
 */
angular.module('blogApp')
  .controller('BlogCtrl', function ($scope, $routeParams, Blog) {
      $scope.post = Blog.getPost($routeParams.id)
  });
