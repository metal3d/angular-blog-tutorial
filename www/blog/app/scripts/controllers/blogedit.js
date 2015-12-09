'use strict';

/**
 * @ngdoc function
 * @name blogApp.controller:BlogeditCtrl
 * @description
 * # BlogeditCtrl
 * Controller of the blogApp
 */
angular.module('blogApp')
  .controller('BlogeditCtrl', function ($scope, $location, Blog) {
    $scope.post = {
        title: "",
        content: ""
    };
    $scope.save = function(){
        // après avoir sauvé notre resource, nous allons
        // sur le route blog/id où id = la resource sauvée
        Blog.save($scope.post, function(saved){
            $location.url("/blog/" + saved.id)
        });
    }
  });
