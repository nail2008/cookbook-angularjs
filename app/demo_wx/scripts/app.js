'use strict';
/**
 * 微信机组通
 * Created by Neil on 2015-4-13.
 */
var app = angular.module('JZT', [
    'ngRoute',
    'ngMessages',
    'ngSanitize', 'ui.select',
    'mobile-angular-ui',
    'mobile-angular-ui.gestures'
]);

// 
// You can configure ngRoute as always, but to take advantage of SharedState location
// feature (i.e. close sidebar on backbutton) you should setup 'reloadOnSearch: false' 
// in order to avoid unwanted routing.
// 
app.config(function ($routeProvider) {
    $routeProvider.when('/', {templateUrl: 'views/home.html', reloadOnSearch: false});
    $routeProvider.when('/list', {templateUrl: 'views/list.html', reloadOnSearch: false});
    $routeProvider.when('/overlay', {templateUrl: 'overlay.html', reloadOnSearch: false});
    $routeProvider.when('/forms', {templateUrl: 'views/forms.html', reloadOnSearch: false});
    $routeProvider.when('/form1', {
        templateUrl: 'views/form1.html',
        controller: 'FormController',
        reloadOnSearch: false
    });
    $routeProvider.when('/drag', {templateUrl: 'drag.html', reloadOnSearch: false});
    $routeProvider.otherwise({redirectTo:'/'});

});

//
// `$drag` example: drag to dismiss
//
app.directive('dragToDismiss', function ($drag, $parse, $timeout) {
    return {
        restrict: 'A',
        compile: function (elem, attrs) {
            var dismissFn = $parse(attrs.dragToDismiss);
            return function (scope, elem, attrs) {
                var dismiss = false;

                $drag.bind(elem, {
                    constraint: {
                        minX: 0,
                        minY: 0,
                        maxY: 0
                    },
                    move: function (c) {
                        if (c.left >= c.width / 4) {
                            dismiss = true;
                            elem.addClass('dismiss');
                        } else {
                            dismiss = false;
                            elem.removeClass('dismiss');
                        }
                    },
                    cancel: function () {
                        elem.removeClass('dismiss');
                    },
                    end: function (c, undo, reset) {
                        if (dismiss) {
                            elem.addClass('dismitted');
                            $timeout(function () {
                                scope.$apply(function () {
                                    dismissFn(scope);
                                });
                            }, 400);
                        } else {
                            reset();
                        }
                    }
                });
            };
        }
    };
});

//处理日期格式的指令
app.directive('myFormatDate', function () {
    return {
        require: 'ngModel',
        link: function (scope, elem, attr, ngModelCtrl) {
            ngModelCtrl.$formatters.push(function (modelValue) {
                if (modelValue) {
                    return new Date(modelValue);
                }
            });

            ngModelCtrl.$parsers.push(function (value) {
                if (value) {
                    return $filter('date')(value, 'yyyy-MM-dd');
                }
            });
        }
    };
});



//
// For this trivial demo we have just a unique MainController 
// for everything
//
app.controller('MainController', function ($rootScope, $scope, $http) {

    // User agent displayed in home page
    $scope.userAgent = navigator.userAgent;

    // Needed for the loading screen
    $rootScope.$on('$routeChangeStart', function () {
        $rootScope.loading = true;
    });

    $rootScope.$on('$routeChangeSuccess', function () {
        $rootScope.loading = false;
    });

    $http.defaults.headers.put['Content-Type'] = 'application/x-www-form-urlencoded';
    $http.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
    // Override $http service's default transformRequest
    $http.defaults.transformRequest = [function (data) {
        /**
         * The workhorse; converts an object to x-www-form-urlencoded serialization.
         * @param {Object} obj
         * @return {String}
         */
        var param = function (obj) {
            var query = '';
            var name, value, fullSubName, subName, subValue, innerObj, i;
            for (name in obj) {
                value = obj[name];
                if (value instanceof Array) {
                    for (i = 0; i < value.length; ++i) {
                        subValue = value[i];
                        fullSubName = name + '[' + i + ']';
                        innerObj = {};
                        innerObj[fullSubName] = subValue;
                        query += param(innerObj) + '&';
                    }
                } else if (value instanceof Object) {
                    for (subName in value) {
                        subValue = value[subName];
                        fullSubName = name + '[' + subName + ']';
                        innerObj = {};
                        innerObj[fullSubName] = subValue;
                        query += param(innerObj) + '&';
                    }
                } else if (value !== undefined && value !== null) {
                    query += encodeURIComponent(name) + '='
                    + encodeURIComponent(value) + '&';
                }
            }

            return query.length ? query.substr(0, query.length - 1) : query;
        };
        return angular.isObject(data) && String(data) !== '[object File]'
            ? param(data)
            : data;
    }];
});

