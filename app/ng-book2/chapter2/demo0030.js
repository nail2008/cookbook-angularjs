/**
 * Created by Administrator on 2015/4/12.
 */

/**
 * 1.2可以这样声明全局的controller，这在1.3是不允许的。
 * 1.2的声明：function MyController($scope){}
 * 1.3应改为如下：
 */
angular.module('ngb2.chp2.demo0030', []).controller('MyController', function ($scope) {
    $scope.clock = {now: new Date()};

    var updateClock = function () {

        $scope.clock.now = new Date()
    };
    setInterval(function () {
        $scope.$apply(updateClock);
    }, 1000);
    updateClock();
});

//或者分开写也可以
/*
var app = angular.module('ngb2.chp2.demo0030', []);
app.controller('MyController', function ($scope) {
    $scope.clock = {now: new Date()};

    var updateClock = function () {

        $scope.clock.now = new Date()
    };
    setInterval(function () {
        $scope.$apply(updateClock);
    }, 1000);
    updateClock();
});
    */