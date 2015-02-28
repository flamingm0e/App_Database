/**
 * Created by m@ on 2/19/15.
 */

/* Description: replaces white spaces with dashes
 * Usage: {{some_text | spaceDash}}
 */
angular.module('Filters', [])
    .filter('spaceDash', function () {
        return function (value) {
            return (!value) ? '' : value.replace(/ /g, '-');
        };
    })
    .filter('insertSpace', function () {
        return function (value) {
            return (!value) ? '' : value.replace(/_/g, ' ');
        };
    })
    .filter('debugPrint', [ function() {
        return function(str){
            console.log('filters.debug.print', str);
            return str;
        }
    }
    ])
/***  Boolean Filters *****/
    .filter('boolYesNo', [ function() {
        return function(b){
            return b === true? 'Yes' : 'No';
        }
    }
    ])
/***  String Filters *****/
    .filter('strformat', [ function() {
        return function(str){
            if (!str || arguments.length <=1 ) return str;
            var args = arguments;
            for (var i = 1; i < arguments.length; i++) {
                var reg = new RegExp('\\{' + (i - 1) + '\\}', 'gm');
                str = str.replace(reg, arguments[i]);
            }
            return str;
        }
    }
    ]).filter('strhtml2string', [ function() {
        return function(str){
            if (!str) return str;
            return $('<div/>').html(str).text();
        }
    }
    ]).filter('strshorten', [ function() {
        return function(str,length){
            if (!str || !length || str.length <= length) return (str || '');
            return  str.substr(0, length) + (length <= 3 ? '' : '...');
        }
    }
    ]).filter('strlowercase', [ function() {
        return function(str){
            return (str || '').toLowerCase();
        }
    }
    ]).filter('struppercase', [ function() {
        return function(str){
            return (str || '').toUpperCase();
        }
    }
    ]).filter('strcamelcase', [ function(){
        return function(str){
            return (str || '').toLowerCase().replace(/(\s.|^.)/g, function(match, group) {
                return group ? group.toUpperCase() : '';
            });
        }
    }
    ]).filter('strtrim', [ function(){
        return function(str){
            return (str || '').replace(/(^\s*|\s*$)/g, function(match, group) {
                return '';
            });
        }
    }
    ]).filter('strtrimstart', [ function(){
        return function(str){
            return (str || '').replace(/(^\s*)/g, function(match, group) {
                return '';
            });
        }
    }
    ]).filter('strtrimend', [ function(){
        return function(str){
            return (str || '').replace(/(\s*$)/g, function(match, group) {
                return '';
            });
        }
    }
    ]).filter('strreplace', [ function(){
        return function(str, pattern, replacement){
            try {
                return (str || '').replace(pattern,replacement);
            } catch(e) {
                console.error('error in strreplace', e);
                return (str || '');
            }
        }
    }
    ]).filter('mathMax', [ function(){
        return function(arr){
            if (!arr) return arr;
            return Math.max.apply(null, arr);
        }
    }
    ]).filter('mathMin', [ function(){
        return function(arr){
            if (!arr) return arr;
            return Math.min.apply(null, arr);
        }
    }
    ]).filter('arrayJoin', [ function(){
        return function(arr,seperator){
            if (!arr) return arr;
            return arr.join(seperator || ',');
        }
    }
    ]).filter('arrayReverse', [ function(){
        return function(arr){
            if (!arr) return arr;
            return arr.reverse();
        }
    }
    ]);
