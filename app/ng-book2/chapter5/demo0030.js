/**
 * Created by Administrator on 2015/4/12.
 */

var app = angular.module('ngb2.chp5.demo03', []);
app.controller('FirstController', function ($scope) {
    //person�������json����ʽ������
    $scope.person = {
        name: 'Ari Lerner'
    };
});
