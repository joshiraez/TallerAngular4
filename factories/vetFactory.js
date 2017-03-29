(function () {
var modulo = angular.module("petclinicApp");
modulo.factory('vetFactory', vetFactory);
                  
   function vetFactory ($http) {

       var interface = {
           getVets : function(){
               return  $http.get('http://localhost:8080/vets');
           },
       };
           
    return interface;
    }
} () );