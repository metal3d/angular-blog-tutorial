'use strict';

/**
 * @ngdoc service
 * @name blogApp.blog
 * @description
 * # blog
 * Service in the blogApp.
 */
angular.module('blogApp')
  .service('Blog', function ($resource) {
    // le service dépend de $resource pour aller chercher des données REST

    // On crée une fonction pour lire les données dans le serveur REST.
    // Nous admettons que le serveur est sur localhost:3000

    var server = 'http://localhost:3000';
    var endpoint = '/posts';

    // configure notre resource
    var resource = $resource(server + endpoint + '/:id?', {id: '@id'});

    // Fonction pour récupérer tous les message de blog
    function getPosts(){
        // query() retourne une liste
        return resource.query();
    }


    // retourne un post ayant un ID donné
    function getPost(id) {
        return resource.get({id: id});
    }
    
    // on retourne un objet qui représente le service
    return {
        getPosts: getPosts,
        getPost: getPost
    };

  });
