/**
 * Created by Administrator on 2015/4/12.
 */

var app = angular.module('ngb2.chp7.demo02', []);
app.controller('MyController', function ($scope,$filter) {
    //2.date
    $scope.today = new Date();

    //3.filter
    $scope.isCaptitalized = function (str) {
        //第一个字母为大写，返回true
        return str[0] == str[0].toUpperCase();
    };
});
