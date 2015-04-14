/**
 * Created by Neil on 2015-4-14.
 */
var app = angular.module('AMail', ['ngRoute']);
function emailRouteConfig($routeProvider) {
    $routeProvider.when('/amail', {
        templateUrl: 'ng-book1/chapter2/demo180_list.html',
        controller: ListController
    }).when('/amail/view/:id', {
        templateUrl: 'ng-book1/chapter2/demo180_detail.html',
        controller: DetailController
    }).otherwise({redirectTo: '/amail'});
}
app.config(emailRouteConfig);

var messages=[{
 id:0,sender:'jean@154.com',subject:'Hi there,old friend',date:'Dec 7, 2014 12:32:00',recipients:['greg@143.com'],message:'Hey,How are you!'
},{
    id:1,sender:'jean1@154.com',subject:'Hi there,old friend1',date:'Dec 17, 2014 12:32:00',recipients:['greg@143.com'],message:'1Hey,How are you!'
},{
    id:2,sender:'jean2@154.com',subject:'Hi there,old friend2',date:'Dec 27, 2014 12:32:00',recipients:['greg@143.com'],message:'2Hey,How are you!'
},{
    id:3,sender:'jean3@154.com',subject:'Hi there,old friend3',date:'Dec 30, 2014 12:32:00',recipients:['greg@143.com'],message:'3Hey,How are you!'
}];

function ListController($scope) {
    $scope.messages = messages;
}

function DetailController($scope,$routeParams) {
    $scope.message = messages[$routeParams.id];
}


