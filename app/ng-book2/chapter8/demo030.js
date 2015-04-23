/**
 * Created by Administrator on 2015/4/23.
 */

var app = angular.module('ngb2.chp8.demo03', []);
//涉及到作用域问题，一定要有controller定义
app.controller('MyController', function ($scope) {

});
app.directive('myDirective', function () {
    return {
        restrict: 'A',
        replace:true,
        scope:{
            myUrl:'@url1',
            myLinkText:'@'
        },
        template: '<a href="{{ myUrl }}">{{ myLinkText }}</a>'
    };
});
