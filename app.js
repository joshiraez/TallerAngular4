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
                    templateUrl: "/template/owners.html",
                    controller: "OwnersControllers",
                    controllerAs: "vm"
                }
              )
        .state('vet',
                {
                    url: '/vet',
                    templateUrl: "/template/veterinarians.html",
                    controller: 'VetController',
                    controllerAs: "vm"
                }
              )
        .state('ownerDetails', 
               {
                    url: '/owners/details/:ownerId',
                    templateUrl: "/template/owner.html",
                    controller: 'OwnerController',
                    controllerAs: "vm"
               }
              )
        .state('ownerDetails.petCreate', 
               {
                    url: '/owners/details/:ownerId/new',
                    templateUrl: "/template/petForm.html",
                    controller: 'PetController',
                    controllerAs: "vm"
               }
              )
        .state('ownerDetails.petEdit', 
               {
                    url: '/owners/details/:ownerId/edit/:petId',
                    templateUrl: "/template/petForm.html",
                    controller: 'PetController',
                    controllerAs: "vm"
               }
              )
    ;//Fin State Provider
    
})//Fin Config
;//Fin Angular