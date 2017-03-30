(function () {
    var modulo = angular.module("petclinicApp");
    modulo.controller('PetController', function(petFactory, $state, $stateParams) {

   var vm = this;

    vm.petTypes = [];
    
    vm.ownerId = $stateParams.ownerId || 0; //Nunca será 0 si se entra bien.
    vm.petId = $stateParams.petId || 0;
    
    vm.labelButton = "Enviar";
        
    vm.nPet;
    vm.petName;
    vm.birthDate;
    //vm.birthDate.dateAsString = $filter('date')(vm.birthDate, "yyyy-MM-dd");    
    vm.type;
        
    petFactory.getPetTypes().then(function(response){
                                    vm.petTypes= response.data;
                                }, 
                               function(response) { 
                                    vm.petTypes= [] 
                            });    
        
        
    if(!vm.petId){
        vm.labelButton = "Crear";
        vm.pet={};
    }else{
        vm.labelButton="Actualizar";
        petFactory.getPet($stateParams.petId).then(
                                                    function(res) {
                                                        vm.nPet = res.data;
                                                    }
        );
    }
        
        
    vm.submitPetForm = function() {
        var ownerId = vm.ownerId;
        var petId = vm.petId;
        var req;
        
        vm.nPet = {
              "name": vm.petName,
              "birthDate": vm.birthDate.dateAsString,
              "typeId" : vm.type
              };
            
        
        
        if(petId){
            petFactory.updatePet(vm.nPet, ownerId, petId).then(
                function(response) {
                    $state.go('ownerDetails({ ownerId: owner.id })');
                }    
            );   
        }else{
            petFactory.createPet(vm.nPet, ownerId).then(
                function(response) {
                    $state.go('ownerDetails({ ownerId: owner.id })');
                }    
            )
        }
    };

  
    
    
   }
  );
}());