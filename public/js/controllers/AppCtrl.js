/**
 * Created by m@ on 2/19/15.
 */
angular.module('AppCtrl', [])
    .controller('CatController', function ($scope, $http, getPath, appsData, $timeout) {
        //$scope.appDetails = appsData.query({category: getPath});
        $scope.loadData = function() {
            $scope.appDetails = appsData.query({category: getPath});
        }
        $scope.loadData();
        $scope.updateApp = function (item) {
            appsData.update({category: getPath}, item);
            //$http.post('/api/'+getPath, item)
        };
    })
    .controller('MainController', function ($rootScope, $scope, appConfig, getPath, getCats, $window) {
        $scope.projectName = appConfig.name;
        $scope.refresh = function(){
            $window.location.reload();
        };
        var location = getPath;
        var location = location.replace('-', ' & ');
        var location = location.replace('_', ' ');
        $scope.appHeader = 'Applications in '+location+' category';
        $rootScope.global = {
            search: '',
            categories: getCats.query()
        };
    })
    //.controller('NavController', function ($scope, getCats) {
    //    $scope.categories = getCats.query();
    //})
    .controller('AddController', function($scope, $http, appsData, $timeout) {
        $scope.master = {};
        $scope.appCat = {};
        $scope.addApp = function(appCat, newApp) {
            $scope.master = angular.copy(newApp);
            $scope.appCat = angular.copy(appCat);
            var appCategory = appCat.toLowerCase();
            var appCategory = appCategory.replace(' & ', '-');
            var appCategory = appCategory.replace(' ', '_');
            appsData.save({category: appCategory}, newApp);
            $timeout(function() {
                location.reload();
            }, 250);
        };
        $scope.reset = function() {
            $scope.newApp = angular.copy($scope.master);
        };
        $scope.reset();
    });
