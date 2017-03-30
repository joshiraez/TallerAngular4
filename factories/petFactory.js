(function () {
var modulo = angular.module("petclinicApp");
modulo.factory('petFactory', petFactory);
                  
   function petFactory ($http) {

       var interface = {
           getPet : function(id){
               return  $http.get('http://localhost:8080/owner/*/pet/'+id);
               
           },
           getPetTypes : function(){
               return  $http.get('http://localhost:8080/petTypes');
           },
           createPet : function (pet, id){
               return $http.post('http://localhost:8080/owners/'+id+'/pets', pet);
           },
           updatePet:  function(pet, id, idPet){
                 return $http.put('http://localhost:8080/owners/'+id+'/pets/'+idPet, pet);
            }
        }
    return interface;
    }
} () );