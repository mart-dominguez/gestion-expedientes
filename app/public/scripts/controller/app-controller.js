angular.module('appExpedientes').controller('expedientesController', ['$scope',function($scope){
        $scope.opcionesNav = [
                {destino:"configuracion",titulo:"Configurar"},
                {destino:"perfil",titulo:"Perfil"},
                {destino:"salir",titulo:"Cerrar Sesion"}
            ];
 		
 		$scope.opcionesMenu = [
 			{tituloGrupo: "menu1 ", 
 				opciones:[
 			    	{enlace:"expediente/abm",titulo:"Crear expedientes",activo:true},
 			    	{enlace:"expediente/lista",titulo:"Consultar expediente",activo:false},
 			    	{enlace:"url3",titulo:"Registrar pase",activo:false}
                ]
            },
 			{tituloGrupo: "menu 2 ", 
 				opciones:[
 			    	{enlace:"url1",titulo:"Registrar Areas",activo:true},
 			    	{enlace:"url2",titulo:"Consultar Areas",activo:false},
 			    	{enlace:"url3",titulo:"Asignar Areas Destino",activo:false}
                ]
            }
        ]            
}]);

