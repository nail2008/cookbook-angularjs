/**
 * Created by Neil on 2015-4-13.
 */
var app = angular.module('ngb1.chp2.demo16', []);
app.controller('MyController', function ($scope) {
    $scope.pageHeading = 'behold the majesty of your page title';
});
app.filter('titleCase', function () {
    var titleCaseFilter = function (input) {
        var words = input.split(' ');
        for(var i=0;i<words.length;i++){
            words[i] = words[i].charAt(0).toUpperCase()+words[i].slice(1);
        }
        return words.join(' ');
    };
    return titleCaseFilter;
});

