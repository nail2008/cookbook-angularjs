/**
 * Created by Neil on 2015-4-13.
 */
var app = angular.module('ngb1.chp2.demo9', []);
var students = [
    {name: 'Mary Jean', id: '1'},
    {name: 'Jack Sprat', id: '2'},
    {name: 'Jill Hill', id: '3'}
];

app.controller('StudentListController', function ($scope) {
    $scope.students = students;

    $scope.selectStudent = function (row) {
        $scope.selectedRow = row;
    };
});