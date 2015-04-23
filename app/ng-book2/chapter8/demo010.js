/**
 * Created by Administrator on 2015/4/23.
 */

var app = angular.module('ngb2.chp8.demo01', []);

//指令标签采用小写+连字符的形式定义，指令名义驼峰式定义

app.directive('myDirective', function () {
    return {
        restrict: 'EACM',  //E表示elemnent，A表示attribute，C表示class，M表示comment
        replace:true,
        template: '<a href="http://www.baidu.com">Click me to go to Baidu</a>'
    }
});
app.controller('MyController', function ($scope) {

});
