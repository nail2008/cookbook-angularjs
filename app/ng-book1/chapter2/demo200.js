/**
 * Created by Neil on 2015-4-13.
 */
var app = angular.module('ngb1.chp2.demo20', []);
app.controller('AddUserController', function ($scope) {
    $scope.user = {first:'Neil',last:'Duan',email:'duanyiding@gmail.com',age:34}
    $scope.message = '';
    $scope.addUser = function () {
        $scope.message = 'Thanks, '+$scope.user.first + ', we added you!';
    };
});


