"use strict";
/**
 * 微信机组通
 * Created by Neil on 2015-4-13.
 */
var app = angular.module('JZT', [
    'ngRoute',
    'ngMessages',
    'ngSanitize',
    'ui.select',
    'mobile-angular-ui',
    'mobile-angular-ui.gestures'
]);

//
// You can configure ngRoute as always, but to take advantage of SharedState location
// feature (i.e. close sidebar on backbutton) you should setup 'reloadOnSearch: false'
// in order to avoid unwanted routing.
//
app.config(function ($routeProvider) {
    $routeProvider.when('/', {templateUrl: 'home.html', reloadOnSearch: false});
    $routeProvider.when('/scroll', {templateUrl: 'scroll.html', reloadOnSearch: false});
    $routeProvider.when('/overlay', {templateUrl: 'overlay.html', reloadOnSearch: false});
    $routeProvider.when('/forms', {templateUrl: 'views/forms.html', reloadOnSearch: false});
    $routeProvider.when('/form1', {templateUrl: 'views/form1.html', reloadOnSearch: false});
    $routeProvider.when('/drag', {templateUrl: 'drag.html', reloadOnSearch: false});

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


    // Fake text i used here and there.
    $scope.lorem = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel explicabo, aliquid eaque soluta nihil eligendi adipisci error, illum corrupti nam fuga omnis quod quaerat mollitia expedita impedit dolores ipsam. Obcaecati.';

    //
    // 'Scroll' screen
    //
    var scrollItems = [];

    for (var i = 1; i <= 100; i++) {
        scrollItems.push('Item ' + i);
    }

    $scope.scrollItems = scrollItems;

    $scope.bottomReached = function () {
        alert('Congrats you scrolled to the end of the list!');
    }

    //
    // Right Sidebar
    //
    $scope.chatUsers = [
        {name: 'Carlos  Flowers', online: true},
        {name: 'Byron Taylor', online: true},
        {name: 'Jana  Terry', online: true},
        {name: 'Darryl  Stone', online: true},
        {name: 'Fannie  Carlson', online: true},
        {name: 'Holly Nguyen', online: true},
        {name: 'Bill  Chavez', online: true},
        {name: 'Veronica  Maxwell', online: true},
        {name: 'Jessica Webster', online: true},
        {name: 'Jackie  Barton', online: true},
        {name: 'Crystal Drake', online: false},
        {name: 'Milton  Dean', online: false},
        {name: 'Joann Johnston', online: false},
        {name: 'Cora  Vaughn', online: false},
        {name: 'Nina  Briggs', online: false},
        {name: 'Casey Turner', online: false},
        {name: 'Jimmie  Wilson', online: false},
        {name: 'Nathaniel Steele', online: false},
        {name: 'Aubrey  Cole', online: false},
        {name: 'Donnie  Summers', online: false},
        {name: 'Kate  Myers', online: false},
        {name: 'Priscilla Hawkins', online: false},
        {name: 'Joe Barker', online: false},
        {name: 'Lee Norman', online: false},
        {name: 'Ebony Rice', online: false}
    ];


    //
    // 'Drag' screen
    //
    $scope.notices = [];

    for (var j = 0; j < 10; j++) {
        $scope.notices.push({icon: 'envelope', message: 'Notice ' + (j + 1)});
    }

    $scope.deleteNotice = function (notice) {
        var index = $scope.notices.indexOf(notice);
        if (index > -1) {
            $scope.notices.splice(index, 1);
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

//组对预热
app.controller('FormController', function ($scope, $http) {
    //监听select的值，当改变时更新data.STAKE_ID
    //$scope.setStakeId = function(newValue,oldValue,scope) {
    //  debugger;
    //    alert(newValue.ID+" "+oldValue);
    //  // $scope.data.STAKE_ID = newValue.selected.ID;
    //};
    //$scope.$watch($scope.data.STAKE_ID,$scope.setStakeId,true);


    //提交的方法
    $scope.commit = function (sid) {
        if(!sid) {
            return;
        }
        $http({
            method: 'POST',
            url: '/sy/base/view/' + sid + '.save.do',
            data: $scope.data,  // pass in data as strings
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}  // set the headers so angular passing info as form data (not request payload)
        })
            .success(function (data) {
                $scope.isAdd = false;
                if (data.ID) {
                    $scope.findById(sid, data.ID);
                }
                alert(data._MSG_)

            });
    };

    //表单数据
    $scope.data = {};
    /*获取表单数据的方法
     * @param sid 服务code 暂时为CPDCP_PREHEAT_WELD_GROUP
     * @param oid 业务对象id
     * */
    $scope.findById = function (sid, oid) {
        var params = {
            _PK_: oid
        };
        return $http.get('/' + sid + '.byid.do', {params: params})
            .success(function (data) {
                $scope.data = data;
                //$scope.data.STAKE_ID = "CZ-AA001";
            });
    };

    //初始化
    $scope.isAdd = true;
    //$scope.findById('CPDCP_PREHEAT_WELD_GROUP', '');
    $scope.findById('CPDCP_PREHEAT_WELD_GROUP','0KMBu6XYResVgEYZT8vNh9');

    $scope.CPDCP_XL_PEG = [];
    //桩下拉列表
    //@param str : 查询关键字
    $scope.refreshPegSelect = function (str) {
        var params = {
            DICT_ID: 'CPDCP_XL_PEG',
            _extWhere: " and PEG_NO like '%" + str + "%'"
        };
        return $http.get('/SY_COMM_INFO.dict.do', {params: params})
            .success(function (data) {
                $scope.CPDCP_XL_PEG = data.CHILD;
            });
    };

    $scope.CPDCP_PIPE = [];
    //钢管下拉列表
    //@param str : 查询关键字
    $scope.refreshPipeSelect = function (str) {
        var params = {
            DICT_ID: 'CPDCP_PIPE',
            _extWhere: " and TUBE_NO like '%" + str + "%'"
        };
        return $http.get('/SY_COMM_INFO.dict.do', {params: params})
            .success(function (data) {
                $scope.CPDCP_PIPE = data.CHILD;
            });
    };

    //$scope.CPDCP_PROJECT = [];
    ////项目下拉列表
    ////@param str : 查询关键字
    //$scope.refreshProjectSelect = function (str) {
    //    var params = {
    //        DICT_ID: 'CPDCP_PROJECT',
    //        _extWhere: " and PROJ_NAME like '%" + str + "%'"
    //    };
    //    return $http.get('/SY_COMM_INFO.dict.do', {params: params})
    //        .success(function (data) {
    //            $scope.CPDCP_PROJECT = data.CHILD;
    //        });
    //};


});

