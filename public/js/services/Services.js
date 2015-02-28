/**
 * Created by m@ on 2/19/15.
 */
angular.module('AppServices', [])
    .factory('getPath', function ($location) {
        //use $location.path() to get the current category
        return $location.path().substring(1);
    })
    .factory('getCats', function ($resource) {
        //use $resource to talk to the categories api,
        // giving us the array of categories from our db
        return $resource('/api/categories', {}, {
            query: {method:'GET', isArray: true}})
    })
    .factory('appsData', function($resource) {
        //use $resource to talk to the individual category,
        // using getPath to extract the location
        return $resource('/api/:category', {}, {
            query: {method:'GET', params:{category: '@category'}, isArray: true},
            save: {method:'POST', params:{category:'@appCategory'}},
            update:{method:'PUT', params:{category:'@category', appName:'@appName'}}})
    })
    .directive('myDirective', [function() {
        return {
            link: function($element, $scope, $attrs) {
                $scope.$watch($attrs.textSearch, function(newValue, oldValue) {

                    // Do stuff here...

                });
            }
        };
    }]);
