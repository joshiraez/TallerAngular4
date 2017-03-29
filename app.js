angular.module("petclinicApp",['ui.router'])
.config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/owners'); 
    //URL de un estado (ruta)
    //EVITAR FICHERO, no tendria sentido (fuera de paradigma SPA), aunque funcionaria.
    
    $stateProvider
        
        .state('home',
                {
                    url: '/home',
                    templateUrl: "/template/home.html"
                    //controller: "nController"
                }
              )
        .state('owners',
                {
                    url: '/owners',
                    templateUrl: "/template/owners.html"
                    //controller: "nController"
                }
              )
        .state('vet',
                {
                    url: '/vet',
                    templateUrl: "/template/veterinarians.html"
                    //controller: "nController"
                }
              )
    ;//Fin State Provider
    
})//Fin Config
;//Fin Angular