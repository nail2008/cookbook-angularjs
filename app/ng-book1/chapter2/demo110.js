/**
 * Created by Neil on 2015-4-13.
 */
var app = angular.module('ngb1.chp2.demo11', []);
app.controller('ParentController', function ($scope) {
    $scope.parent = 'parent';
});
app.controller('ChildController', function ($scope) {
    $scope.child = 'child';
    //$scope.parent = 'child2';
});