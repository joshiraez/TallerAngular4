/*(function () {
var modulo = angular.module("petclinicApp");
modulo.controller('OwnersControllers', function(ownersFactory) {

   var vm = this;

    vm.name;
    vm.address;
    vm.phone;
    vm.numPets;
    
   vm.filtro = "";
    
    vm.owners = ownersFactory.getOwners();
    vm.deleteOwner = function(owner) {
        ownersFactory.deleteOwner(owner);
    };
    
    vm.saveOwner = function(){
        ownersFactory.createOwner(vm.name, vm.address, vm.phone, vm.numPets);
    };
    
   }
  );
}());*/

(function () {
var modulo = angular.module("petclinicApp");
    modulo.controller('OwnersControllers', function(ownersFactory) {

   var vm = this;

    vm.name;
    vm.address;
    vm.phone;
    vm.numPets;
    
   vm.filtro = "";
    
    vm.owners; 
    ownersFactory.getOwners().then(function(response){
                                        vm.owners= response.data;
                                    }, 
                                   function(response) { 
                                        vm.owners= [] 
                                });
  
    
    vm.deleteOwner = function(owner) {
        ownersFactory.deleteOwner(owner.id).then(function(response){
                                                    ownersFactory.getOwners().then(function(response){
                                                            vm.owners= response.data;
                                                        }, 
                                                       function(response) { 
                                                           //nada
                                                    });
                                                }, 
                                                 function(response) {});
                                                   
    };
    
    vm.saveOwner = function(){
        ownersFactory.createOwner(vm.name, vm.address, vm.phone, vm.numPets);
    };
    
   }
  );
}());