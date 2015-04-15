/**
 * Created by Neil on 2015-4-13.
 */
var app = angular.module('ngb1.chp2.demo2', []);
app.controller('MyController', function ($scope) {
    $scope.youCheckedIt = true;
});
app.controller('StartUpController', function ($scope) {
    $scope.funding = {startingEstimate: 0};
    $scope.computeNeeded = function () {
        $scope.funding.needed = $scope.funding.startingEstimate * 10;
    };
});
