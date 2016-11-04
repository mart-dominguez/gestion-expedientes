angular.module('appExpedientes').controller('expedientesController', ['$scope',function($scope){
        $scope.opcionesNav = [
                {destino:"configuracion",titulo:"Configurar"},
                {destino:"perfil",titulo:"Perfil"},
                {destino:"salir",titulo:"Cerrar Sesion"}
            ];
}]);

