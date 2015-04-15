/**
 * Created by Neil on 2015-4-13.
 */
var app = angular.module('ngb1.chp1.demo4',[]);
app.controller('CartController',function($scope) {
    $scope.items = [
        {title:'Paint pots',quantity:8,price:3.95},
        {title:'Polka dots',quantity:17,price:12.95},
        {title:'Pebbles',quantity:5,price:6.95}
    ];
    $scope.remove = function (index) {
        $scope.items.splice(index, 1);
    }
});

