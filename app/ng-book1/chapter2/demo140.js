/**
 * Created by Administrator on 2015/4/13.
 */

var app = angular.module('ngb1.chp2.demo14', []);//P38 ��Ҫ���ģ�飬��[]�������������磺['ModuleA','ModuleB']
app.controller('CartController', function ($scope, Items) {
    $scope.items = Items;
});
//��factory��������ܿ�ݣ���Ҫ����������һ����name��һ����getFn
app.factory('Items', function () {
    //����ʵ��Ӧ���У���ӷ������ȡ�������
    return [
        {title: 'Paint pots', quantity: 8, price: 3.95},
        {title: 'Polka dots', quantity: 17, price: 12.95},
        {title: 'Pebbles', quantity: 5, price: 6.95}
    ];
});