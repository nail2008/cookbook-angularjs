/**
 * Created by Administrator on 2015/4/12.
 */

var app = angular.module('ngb2.chp6.demo01', []);
app.controller('MyController', function ($scope,$parse) {
    //$watch函数坚挺expr的变化
    $scope.$watch('expr', function (newVal, oldVal, scope) {
        if(newVal!==oldVal){
            var parseFun = $parse(newVal);
            $scope.parseValue = parseFun(scope);
        }
    });
});
