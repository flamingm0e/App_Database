/**
 * Created by m@ on 2/19/15.
 */
angular.module('AppCtrl', [])
    .controller('CatController', function ($scope, $http, getPath, appsData) {
        $scope.loadData = function() {
            $scope.appDetails = appsData.query({category: getPath});
        };
        $scope.loadData();
        $scope.updateApp = function (item) {
            appsData.update({category: getPath}, item);
        };

    })
    .controller('MainController', function ($rootScope, $scope, appConfig, getPath, getCats, $window, $modal) {
        $scope.projectName = appConfig.name;
        $scope.refresh = function(){
            $window.location.reload();
        };
        var location = getPath;
        location = location.replace('-', ' & ');
        location = location.replace('_', ' ');
        $scope.appHeader = 'Applications in '+location+' category';
        $rootScope.global = {
            search: '',
            categories: getCats.query(),
            fil: { },
            filterMethod: function(){
              return function(item)
              {
                var filters = $rootScope.global.fil;
                if((typeof filters.complete === 'undefined' || filters.complete === false) &&
                  (typeof filters.stage === 'undefined' || filters.stage === false) &&
                  (typeof filters.fix === 'undefined' || filters.fix === false))
                  return true;

                var filterArray = [];//0 == complete, 1 == stage, 2 == fix
                filterArray.push(
                  (typeof filters.complete === 'undefined' || filters.complete === false ? false : true),
                  (typeof filters.stage === 'undefined' || filters.stage === false ? false : true),
                  (typeof filters.fix  === 'undefined' || filters.fix === false? false : true));

                var itemStatus = [];
                itemStatus.push(item.complete,item.stage,item.fix);

                for(var i = 0; i < filterArray.length; i++){
                  if(itemStatus[i] === false && filterArray[i] === true){
                    return false;
                  }
                }
                return true;
              };
            }
        };
        $scope.openAppForm = function (size) {
            var modalInstance = $modal.open({
                templateUrl:'views/applicationform.html',
                controller: 'AddController',
                size : size
            });
        };
        $scope.showAll = function() {
            $scope.global.fil = {};
        };
    })
    .controller('AddController', function($scope, $http, appsData, $timeout, $modalInstance) {
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
            $modalInstance.close();
        };
        $scope.reset = function() {
            $scope.newApp = angular.copy($scope.master);
        };
        $scope.reset();
        $scope.cancel = function () {
            $modalInstance.dismiss('cancel');
        };
    });
