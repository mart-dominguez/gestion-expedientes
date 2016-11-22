angular.module('appExpedientes').controller('expedientesController', ['$scope',function($scope){
        $scope.opcionesNav = [
                {destino:"configuracion",titulo:"Configurar"},
                {destino:"perfil",titulo:"Perfil"},
                {destino:"salir",titulo:"Cerrar Sesion"}
            ];
 		
 		$scope.opcionesMenu = [
 			{tituloGrupo: "menu1 ", 
 				opciones:[
 			    	{enlace:"url1",titulo:"SubMenu1-1",activo:true},
 			    	{enlace:"url2",titulo:"SubMenu1-2",activo:false},
 			    	{enlace:"url3",titulo:"SubMenu1-3",activo:false}
                ]
            },
 			{tituloGrupo: "menu 2 ", 
 				opciones:[
 			    	{enlace:"url1",titulo:"SubMenu2-1",activo:true},
 			    	{enlace:"url2",titulo:"SubMenu2-2",activo:false},
 			    	{enlace:"url3",titulo:"SubMenu2-3",activo:false}
                ]
            }
        ]            
}]);

