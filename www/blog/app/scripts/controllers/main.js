'use strict';

/**
 * @ngdoc function
 * @name blogApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the blogApp
 */
angular.module('blogApp')
  .controller('MainCtrl', function ($scope, Blog) {
      var posts = Blog.getPosts();
      $scope.posts = posts;

      // en admettant que le post "1" existe:
      $scope.firstPost = Blog.getPost(1);
  });
