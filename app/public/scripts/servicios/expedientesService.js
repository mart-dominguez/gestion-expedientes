angular.module('appExpedientes').factory('expedientesService', 
['$http','$q',function($http,$q){        
        var _crearExpediente = function(nuevoExpediente){
            var deffered = $q.defer();
            $http.post("http://localhost:3000/api/expediente/",unObjeto).success(function(data, status, headers, config) {
                deffered.resolve(data);
            }).error(function(data, status, headers, config) {
                deffered.reject({data:data,status:status});
            });
            return deffered.promise;
        };
        return {              
            buscarExpediente: function(text){
                console.log("Buscando expediente "+text);
            },
            crearExpediente : _crearExpediente
        };        
}]);