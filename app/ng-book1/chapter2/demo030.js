/**
 * Created by Neil on 2015-4-13.
 */
var app = angular.module('ngb1.chp2.demo3', []);
app.controller('StartUpController', function ($scope) {
    $scope.funding = {startingEstimate: 0};
    computeNeeded = function () {
        $scope.funding.needed = $scope.funding.startingEstimate * 10;
    };
    $scope.$watch('funding.startingEstimate',computeNeeded);
});