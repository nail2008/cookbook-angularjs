'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', [function() {

}])

.directive('myHtml', function () {


      return{
        restrict:'A',
        link: function (scope,element,attr) {
         // scope.content="aaa";
          element.find("li div").bind('click', function(e){
            scope.content=$(this).html();
            scope.$apply();
          });

        }
      };
    })
;