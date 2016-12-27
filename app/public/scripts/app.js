angular.module('appExpedientes', ['ngRoute','ui.bootstrap'])
	.constant('URL_EXPEDIENTES','http://localhost:3000/api/expedientes')
	.config(function($routeProvider) {
		$routeProvider.when('/home', {
			controller : 'expedientesController',
			templateUrl : 'templates/dashboard/panel.html'
		}).when('/expediente/abm', {
			controller : 'ABMExpedientesCtrl',
			templateUrl : 'templates/expediente/abm.html'
		}).when('/expediente/abm/:idexpediente', {
			controller : 'ABMExpedientesCtrl',
			templateUrl : 'templates/expediente/abm.html'
		}).when('/expediente/lista', {
			controller : 'ListaExpedientesCtrl',
			templateUrl : 'templates/expediente/lista.html'
		}).otherwise({
				redirectTo: "/home"
		});
	});