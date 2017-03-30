(function() {
    
    angular.module('petclinicApp')
        .controller('OwnerController', ownerController);
    
    function ownerController(ownersFactory,$stateParams) {        
        var vm = this;
        vm.owner;
        
        if($stateParams.ownerId){
            ownersFactory.getOwner($stateParams.ownerId).then(
                function(res){ 
                    vm.owner = res.data;
                }, function(res){
                    vm.error = "Se ha producido un error al traer la lista de propietarios";
            });
        }
    }    
    
}()); // Sintáxis JS para invocación inmediata