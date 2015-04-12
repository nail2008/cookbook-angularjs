/**
 * Created by Administrator on 2015/4/12.
 */

var app = angular.module('chp5.demo03', []);
app.controller('FirstController', function ($scope) {
    //person对象采用json的形式来定义
    $scope.person = {
        name: 'Ari Lerner'
    };
});
