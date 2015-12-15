'use strict';

/**
 * @ngdoc function
 * @name blogApp.controller:BlogeditCtrl
 * @description
 * # BlogeditCtrl
 * Controller of the blogApp
 */
angular.module('blogApp')
  .controller('BlogeditCtrl', function ($scope, $routeParams, $location, Blog) {
    // Initialise un post vide
    $scope.post = {title: null, content: null};

    if ($routeParams['id'] !== undefined) {
        // on assigne le post au scope - puisque nous avons "bindé" le model
        // au scope dans la vue, le formulaire va utiliser les champs
        // et les assigner au contenu
        $scope.post = Blog.getPost($routeParams.id);
    }

    $scope.save = function(){
        if ($scope.post.id) {
            console.log("saving")
            // la méthode "$update" a été ajouté en "option" de la resource, voir
            // le service Blog dans services/blog.js
            $scope.post.$update().then(function(){
                // on attend la résolution de la promesse et on va à la page 
                // de vue du billet
                $location.url("/blog/" + $scope.post.id)
            });
        } else {
            // Sauve le post si pas de ID
            Blog.save($scope.post, function(saved){
                $location.url("/blog/" + saved.id)
            })
        }
    }
  });
