/**
 * Created by Neil on 2015-4-13.
 */
var app = angular.module('ngb1.chp2.demo6', []);
app.controller('MyController', function ($scope) {
    $scope.menuState = {};//ԭ����û���������������ǲ��淶�ġ�
    $scope.menuState.show = false;

    $scope.toggleMenu = function () {
        $scope.menuState.show = !$scope.menuState.show;
    };
});
