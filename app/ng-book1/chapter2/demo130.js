/**
 * Created by Administrator on 2015/4/13.
 */

var app = angular.module('ngb1.chp2.demo13', []);
app.controller('CartController', function ($scope) {
    $scope.bill = {};
    $scope.bill.discount = 0;
    $scope.items = [
        {title: 'Paint pots', quantity: 8, price: 3.95},
        {title: 'Polka dots', quantity: 17, price: 12.95},
        {title: 'Pebbles', quantity: 5, price: 6.95}
    ];

    function CalculateTotals () {
        var total = 0;
        for (var i = 0, len = $scope.items.length; i < len; i++) {
            total += $scope.items[i].price * $scope.items[i].quantity;
        }
        $scope.bill.totalCart = total;
        $scope.bill.discount = total>100?10:0;
        $scope.bill.subtotal = total-$scope.bill.discount;
    };
    //$watch函数在监控数组或对象的所有成员时，deepWatch参数必须为true
    //$scope.$watch('items',CalculateTotals,true);
    $scope.$watch($scope.items,CalculateTotals,true);
});
