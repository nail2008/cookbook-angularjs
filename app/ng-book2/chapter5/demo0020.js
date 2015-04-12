/**
 * Created by Administrator on 2015/4/12.
 */

var app = angular.module('chp5.demo02', []);
app.controller('FirstController', function ($scope) {
    $scope.counter = 0;
    $scope.add = function (amount) {
        $scope.counter += amount;
    };
    $scope.subtract = function (amount) {
        $scope.counter -= amount;
    };
});
