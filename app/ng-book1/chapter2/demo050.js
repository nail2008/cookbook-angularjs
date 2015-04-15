/**
 * Created by Neil on 2015-4-13.
 */
var app = angular.module('ngb1.chp2.demo5', []);

var students = [
    {name: 'Mary Jean', id: '1'},
    {name: 'Jack Sprat', id: '2'},
    {name: 'Jill Hill', id: '3'}
];

app.controller('StudentListController', function ($scope) {
    $scope.students = students;

    $scope.insertTom = function () {
      $scope.students.splice(1,0,{name:'Tom Thumb',id:'4'});
    };
});
