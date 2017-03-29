/*(function () {
var modulo = angular.module("petclinicApp");
modulo.factory('ownersFactory', ownersFactory);
                  
   function ownersFactory () {
      var owners = [{'name':'Propietario 1', 'address':'Cartuja',                      'phone':'654789654','numPets':2},
                           {'name':'Propietario 2', 'address':'Cartuja', 'phone':'654789654','numPets':0},
                           {'name':'Propietario 3', 'address':'Cartuja', 'phone':'654789654','numPets':1}];

   
   var interface = {
           getOwners : function(){
               return owners;
           },
           createOwner : function (name, address, phone, numPets){
               owners.push({'name':name,'address':address,'phone':phone,'numPets':numPets});
           },
             deleteOwner : function (owner) {
                owners.splice(owners.indexOf(owner),1);

            }
        }
    return interface;
    }
} () );*/

(function () {
var modulo = angular.module("petclinicApp");
modulo.factory('ownersFactory', ownersFactory);
                  
   function ownersFactory ($http) {

       var interface = {
           getOwners : function(){
               return  $http.get('http://localhost:8080/owner/list');
           },
           createOwner : function (name, address, phone, numPets){
               //owners.push({'name':name,'address':address,'phone':phone,'numPets':numPets});
           },
             deleteOwner : function (id) {
                return  $http.delete('http://localhost:8080/owner/'+id);

            }
        }
    return interface;
    }
} () );