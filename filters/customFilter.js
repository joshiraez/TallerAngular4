(function () {
    var modulo = angular.module("petclinicApp");
    modulo.filter('customFilter', function(){
    return function (input) {
        var number = input || '';
        
            if (number.length == 9){

                number = [number.substr(0,3), number.substr(3,3), number.substr(6,11)].join(' ');
            }
            return number;
        
        };

    });
            
 
} () );