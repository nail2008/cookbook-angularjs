/**
 * Created by Administrator on 2015/4/12.
 */

var app = angular.module('chp5.demo04', []);
app.controller('ParentController', function ($scope) {
    $scope.person = {
        greeted: false
    };
});
app.controller('ChildController', function ($scope) {
    $scope.sayHello = function () {
        $scope.person.name = 'Ari Lerner';
    };
});