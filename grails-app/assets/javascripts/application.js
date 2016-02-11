//= require jquery-2.2.0.min
//= require bootstrap
//= require bower_components/angular/angular
//= require_tree .
//= require_self

(function(){
    angular.module('github.stats',[
        'ngRoute',
        'ngResource',
        'ui.bootstrap',
        'github.stats.dashboard'
    ]).config(function($routeProvider, $locationProvider){
        $routeProvider.when('/', {
            templateUrl: 'assets/dashboard/dashboard.html',
            controller: "DashboardController",
            controllerAs: "vm"
        }).otherwise({
            redirectTo: '/error'
        });

        $locationProvider.html5Mode(true);
    }).constant("URL", {
        base: "https://api.github.com"
    });
})();