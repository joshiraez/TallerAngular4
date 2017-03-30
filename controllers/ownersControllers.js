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
    vm.ape;
    vm.address;
    vm.city;
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
    
    vm.save = function(){
        json = {'firstName':vm.name, 'lastName':vm.ape, 'address':vm.address, 'city':vm.city, 'telephone':vm.phone};
        ownersFactory.createOwner();
    };
    
   }
  );
}());