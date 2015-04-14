/**
 * Created by Neil on 2015-4-13.
 */
var app = angular.module('ngb1.chp2.demo19', []);
app.directive('ngbkFocus',function(){
    return{
      link:function(scope,element,attrs,controller){
          element[0].focus();
      }
    };
});

app.controller('MyController', function ($scope) {
    $scope.message = {text:'nothing clicked yet'};
    $scope.clickUnfocused = function () {
        $scope.message.text = 'unfocused button clicked';
    };
    $scope.clickFocused = function () {
        $scope.message.text = 'focus button clicked';
    };
});


