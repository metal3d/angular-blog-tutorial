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

    // on paramètre notre resource
    var resource = $resource(server + endpoint + '/:id?', {id: '@id'}, {
        'update' : {method: 'PUT'} // nous définissons ici une nouvelle méthode "update" qui fait un "put"
    })

    // Fonction pour récupérer tous les message de blog
    function getPosts(){
        // la méthode "query" retourne un tableau (à l'inverse de get qui retourne 
        // un seul élément)
        return resource.query();
    }


    // retourne un post ayant un ID donné
    function getPost(id) {
        return resource.get({id: id});
    }
    

    // fonction pour sauver un post. Les méthodes $resource prennent en argument
    // une fonction "sucess".
    function savePost(data, success){
        // sinon on sauve
        return resource.save(data, success);
    }

    // on retourne un objet qui représente le service
    return {
        getPosts: getPosts,
        getPost: getPost,
        save: savePost
    };

  });
