/**
 * Created by Neil on 2015-4-13.
 */
var app = angular.module('ngb1.chp2.demo8', []);
app.controller('MyController', function ($scope) {
    $scope.isWarning = false;
    $scope.isError = false;
    $scope.showError = function () {
        $scope.messageText = 'This is an error';
        $scope.isError = true;
        $scope.isWarning = false;
    };
    $scope.showWarning = function () {
        $scope.messageText = 'Just a warning.Please carry on.';
        $scope.isWarning = true;
        $scope.isError = false;
    };
});
