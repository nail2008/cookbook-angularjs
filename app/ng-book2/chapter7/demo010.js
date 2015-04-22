/**
 * Created by Administrator on 2015/4/12.
 */

var app = angular.module('ngb2.chp7.demo01', []);
app.controller('MyController', function ($scope,$filter) {
    $scope.name = "Ari";
    $scope.name = $filter('uppercase')($scope.name);
});
