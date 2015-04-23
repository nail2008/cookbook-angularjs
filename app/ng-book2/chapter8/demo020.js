/**
 * Created by Administrator on 2015/4/23.
 */

var app = angular.module('ngb2.chp8.demo02', []);
app.directive('myDirective', function () {
    return {
        restrict: 'A',
        template: '<a href="http://www.baidu.com">Click me to go to Baidu</a>'
    }
});
app.controller('MyController', function ($scope) {

});
