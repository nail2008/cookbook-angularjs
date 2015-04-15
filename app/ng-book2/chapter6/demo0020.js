/**
 * Created by Administrator on 2015/4/12.
 */

var app = angular.module('ngb2.chp6.demo02', []);
app.controller('MyController', function ($scope, $interpolate) {
//…Ë÷√º‡Ã˝
    $scope.$watch('emailBody', function (body) {
        if(body){
            var template = $interpolate(body);
            $scope.previewText = template({to:$scope.to});
        }
    });
});
