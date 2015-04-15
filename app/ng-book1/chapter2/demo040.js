/**
 * Created by Neil on 2015-4-13.
 */
var app = angular.module('ngb1.chp2.demo4', []);
app.controller('StartUpController', function ($scope) {
    $scope.computeNeeded = function () {
        $scope.needed = $scope.startingEstimate * 10;
    };
    $scope.requestFunding = function () {
        window.alert("Sorry,please get more customers first.");
    }
    $scope.reset = function () {
        $scope.startingEstimate = 0;
    }
});
