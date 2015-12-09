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

    // Fonction pour récupérer tous les message de blog
    function getPosts(){
        // Dans la cas où le service retourne un tableau
        // il faut préciser dans la configuration de l'appel
        // que la méthode retournera un array.
        return $resource(server + endpoint, null, {
            'get' : {method: 'GET', isArray: true}
        }).get();
    }


    // retourne un post ayant un ID donné
    function getPost(id) {
        return $resource(server + endpoint + '/:id').get({id: id});
    }
    
    // on retourne un objet qui représente le service
    return {
        getPosts: getPosts,
        getPost: getPost
    };

  });
