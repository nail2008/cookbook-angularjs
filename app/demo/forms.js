'use strict';
/**
 * Created by Neil on 2015-4-21.
 */
var app = angular.module('WxFormModule', [
    'ngRoute',
    'ngMessages',
    'ngSanitize',
    'ui.select',
    'mobile-angular-ui',
    'mobile-angular-ui.gestures'
])

//app.config(['$routeProvider', function ($routeProvider) {
//    $routeProvider.when('/view2', {
//        templateUrl: 'view2/view2.html',
//        controller: 'View2Ctrl'
//    });
//}])

app.controller('WxFormController', function ($scope) {
    //表单里的值都放在form对象中
    $scope.form = {};
    //一些成员的初始化值
    $scope.form.text1 = 'text123456';

    $scope.rememberMe = true;
    $scope.email = 'me@example.com';

    $scope.login = function () {
        alert('You submitted the login form');
    };

    $scope.person = {};
    $scope.people = [
        { name: 'Adam',      email: 'adam@email.com',      age: 12, country: 'United States' },
        { name: 'Amalie',    email: 'amalie@email.com',    age: 12, country: 'Argentina' },
        { name: 'Estefanía', email: 'estefania@email.com', age: 21, country: 'Argentina' },
        { name: 'Adrian',    email: 'adrian@email.com',    age: 21, country: 'Ecuador' },
        { name: 'Wladimir',  email: 'wladimir@email.com',  age: 30, country: 'Ecuador' },
        { name: 'Samantha',  email: 'samantha@email.com',  age: 30, country: 'United States' },
        { name: 'Nicole',    email: 'nicole@email.com',    age: 43, country: 'Colombia' },
        { name: 'Natasha',   email: 'natasha@email.com',   age: 54, country: 'Ecuador' },
        { name: 'Michael',   email: 'michael@email.com',   age: 15, country: 'Colombia' },
        { name: 'Nicolás',   email: 'nicolas@email.com',    age: 43, country: 'Colombia' }
    ];

    $scope.availableColors = ['Red','Green','Blue','Yellow','Magenta','Maroon','Umbra','Turquoise'];

    $scope.form.colors = ['Blue','Red'];



    //TODO 带查询的选择框
    $scope.querySelect = [];

    $scope.showSelectView = function () {
        alert('iamclick');
    };
});