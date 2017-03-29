(function () {
    var modulo = angular.module("petclinicApp");
    modulo.controller('VetController', function(vetFactory) {

   var vm = this;

    vm.filtro = "";
    vm.vets = [];
        
    vetFactory.getVets().then(function(response){
                                        vm.vets= response.data;
                                    }, 
                                   function(response) { 
                                        vm.vets= [] 
                                });
  
    
    
   }
  );
}());