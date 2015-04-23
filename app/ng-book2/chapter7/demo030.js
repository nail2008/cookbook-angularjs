/**
 * Created by Administrator on 2015/4/12.
 */

var app = angular.module('ngb2.chp7.demo03', []);
app.controller('MyController', function ($scope) {

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
app.filter('capitalize', function () {
    return function(input){
        if(input){
            return input[0].toUpperCase()+input.slice(1);
        }
    };
});