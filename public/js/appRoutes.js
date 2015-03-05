// public/js/appRoutes.js
angular.module('appRoutes', [])
    .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider
        // home page
        .when('/', {
            templateUrl: 'views/home.html'
            //controller: 'HomeController'
        })
        // categories page that will use the CatController
        .when('/:appCategory', {
            templateUrl: 'views/category.html',
            controller: 'CatController'
        });
    $locationProvider.html5Mode(true);
    }])
    .constant('appConfig', {
       name: 'App Database'
    });
    //.run(['$route', function($route)  {
    //    $route.reload();
    //}]);
