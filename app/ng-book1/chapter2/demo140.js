/**
 * Created by Administrator on 2015/4/13.
 */

var app = angular.module('ngb1.chp2.demo14', []);//P38 需要多个模块，在[]配置依赖，比如：['ModuleA','ModuleB']
app.controller('CartController', function ($scope, Items) {
    $scope.items = Items;
});
//用factory创建服务很快捷，需要两个参数，一个是name，一个是getFn
app.factory('Items', function () {
    //在真实的应用中，会从服务端拉取这块数据
    return [
        {title: 'Paint pots', quantity: 8, price: 3.95},
        {title: 'Polka dots', quantity: 17, price: 12.95},
        {title: 'Pebbles', quantity: 5, price: 6.95}
    ];
});