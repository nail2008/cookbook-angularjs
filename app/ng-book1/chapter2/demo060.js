/**
 * Created by Neil on 2015-4-13.
 */
var app = angular.module('ngb1.chp2.demo6', []);
app.controller('MyController', function ($scope) {
    $scope.menuState = {};//原书中没有声明，这样做是不规范的。
    $scope.menuState.show = false;

    $scope.toggleMenu = function () {
        $scope.menuState.show = !$scope.menuState.show;
    };
});
