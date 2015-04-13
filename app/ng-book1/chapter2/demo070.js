/**
 * Created by Neil on 2015-4-13.
 */
var app = angular.module('ngb1.chp2.demo7', []);
app.controller('MyController', function ($scope) {
    $scope.menuState = {};
    $scope.menuState.show = false;

    $scope.toggleMenu = function () {
        $scope.menuState.show = !$scope.menuState.show;
    };

    $scope.stun = function () {
        $scope.isDisabled = true;
    }

    $scope.expr = 'color:gray;';
});
