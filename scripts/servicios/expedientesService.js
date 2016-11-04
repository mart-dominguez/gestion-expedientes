angular.module('appExpedientes').factory('expedientesService', function(){        
    return {
        buscarExpediente: function(text){
            console.log("Buscando expediente "+text);
        }  
    };        
});