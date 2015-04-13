/**
 * Created by Neil on 2015-4-13.
 */
var app = angular.module('ngb1.chp2.demo12', []);
app.controller('CartController', function ($scope) {
    $scope.items = [
        {title: 'Paint pots', quantity: 8, price: 3.95},
        {title: 'Polka dots', quantity: 17, price: 12.95},
        {title: 'Pebbles', quantity: 5, price: 6.95}
    ];
    $scope.discount = 0;
    $scope.totalCart = function () {
        var total = 0;
        for (var i = 0,len = $scope.items.length; i < len; i++) {
            total = total +  $scope.items[i].price * $scope.items[i].quantity;
        }
        return total;
    };
    $scope.subtotal = function () {
        return $scope.totalCart() - $scope.discount;
    };
    function calculateDiscount(newValue, oldValue, scope) {
        $scope.discount = newValue > 100 ? 10 : 0;
    }

    $scope.$watch($scope.totalCart,calculateDiscount);


});

