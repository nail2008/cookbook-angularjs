"use strict";
/**
 * 微信机组通
 * Created by Neil on 2015-4-13.
 */
var app = angular.module('JZT', [
    'ngRoute',
    'ngMessages',
    'ngSanitize', 'ui.select',
    'mobile-angular-ui',
    'mobile-angular-ui.gestures'
]);

// 
// You can configure ngRoute as always, but to take advantage of SharedState location
// feature (i.e. close sidebar on backbutton) you should setup 'reloadOnSearch: false' 
// in order to avoid unwanted routing.
// 
app.config(function ($routeProvider) {
    $routeProvider.when('/', {templateUrl: 'home.html', reloadOnSearch: false});
    $routeProvider.when('/scroll', {templateUrl: 'scroll.html', reloadOnSearch: false});
    $routeProvider.when('/overlay', {templateUrl: 'overlay.html', reloadOnSearch: false});
    $routeProvider.when('/forms', {templateUrl: 'forms.html', reloadOnSearch: false});
    $routeProvider.when('/drag', {templateUrl: 'drag.html', reloadOnSearch: false});

});

//
// `$drag` example: drag to dismiss
//
app.directive('dragToDismiss', function ($drag, $parse, $timeout) {
    return {
        restrict: 'A',
        compile: function (elem, attrs) {
            var dismissFn = $parse(attrs.dragToDismiss);
            return function (scope, elem, attrs) {
                var dismiss = false;

                $drag.bind(elem, {
                    constraint: {
                        minX: 0,
                        minY: 0,
                        maxY: 0
                    },
                    move: function (c) {
                        if (c.left >= c.width / 4) {
                            dismiss = true;
                            elem.addClass('dismiss');
                        } else {
                            dismiss = false;
                            elem.removeClass('dismiss');
                        }
                    },
                    cancel: function () {
                        elem.removeClass('dismiss');
                    },
                    end: function (c, undo, reset) {
                        if (dismiss) {
                            elem.addClass('dismitted');
                            $timeout(function () {
                                scope.$apply(function () {
                                    dismissFn(scope);
                                });
                            }, 400);
                        } else {
                            reset();
                        }
                    }
                });
            };
        }
    };
});



//
// For this trivial demo we have just a unique MainController 
// for everything
//
app.controller('MainController', function ($rootScope, $scope) {

    // User agent displayed in home page
    $scope.userAgent = navigator.userAgent;

    // Needed for the loading screen
    $rootScope.$on('$routeChangeStart', function () {
        $rootScope.loading = true;
    });

    $rootScope.$on('$routeChangeSuccess', function () {
        $rootScope.loading = false;
    });

    // Fake text i used here and there.
    $scope.lorem = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel explicabo, aliquid eaque soluta nihil eligendi adipisci error, illum corrupti nam fuga omnis quod quaerat mollitia expedita impedit dolores ipsam. Obcaecati.';

    //
    // 'Scroll' screen
    //
    var scrollItems = [];

    for (var i = 1; i <= 100; i++) {
        scrollItems.push('Item ' + i);
    }

    $scope.scrollItems = scrollItems;

    $scope.bottomReached = function () {
        alert('Congrats you scrolled to the end of the list!');
    }

    //
    // Right Sidebar
    //
    $scope.chatUsers = [
        {name: 'Carlos  Flowers', online: true},
        {name: 'Byron Taylor', online: true},
        {name: 'Jana  Terry', online: true},
        {name: 'Darryl  Stone', online: true},
        {name: 'Fannie  Carlson', online: true},
        {name: 'Holly Nguyen', online: true},
        {name: 'Bill  Chavez', online: true},
        {name: 'Veronica  Maxwell', online: true},
        {name: 'Jessica Webster', online: true},
        {name: 'Jackie  Barton', online: true},
        {name: 'Crystal Drake', online: false},
        {name: 'Milton  Dean', online: false},
        {name: 'Joann Johnston', online: false},
        {name: 'Cora  Vaughn', online: false},
        {name: 'Nina  Briggs', online: false},
        {name: 'Casey Turner', online: false},
        {name: 'Jimmie  Wilson', online: false},
        {name: 'Nathaniel Steele', online: false},
        {name: 'Aubrey  Cole', online: false},
        {name: 'Donnie  Summers', online: false},
        {name: 'Kate  Myers', online: false},
        {name: 'Priscilla Hawkins', online: false},
        {name: 'Joe Barker', online: false},
        {name: 'Lee Norman', online: false},
        {name: 'Ebony Rice', online: false}
    ];

    //
    // 'Forms' screen
    //
    $scope.consData = {};
    $scope.consData.text1 = 'text123456';

    $scope.consData.remember = true;
    $scope.consData.email = 'me@example.com';

    $scope.commit = function () {
        alert('You submitted the login form');
    };

    $scope.person = {};
    $scope.people = [
        { name: 'Adam',      email: 'adam@email.com',      age: 12, country: 'United States' },
        { name: 'Amalie',    email: 'amalie@email.com',    age: 12, country: 'Argentina' },
        { name: 'Estefanía', email: 'estefania@email.com', age: 21, country: 'Argentina' },
        { name: 'Adrian',    email: 'adrian@email.com',    age: 21, country: 'Ecuador' },
        { name: 'Wladimir',  email: 'wladimir@email.com',  age: 30, country: 'Ecuador' },
        { name: 'Samantha',  email: 'samantha@email.com',  age: 30, country: 'United States' },
        { name: 'Nicole',    email: 'nicole@email.com',    age: 43, country: 'Colombia' },
        { name: 'Natasha',   email: 'natasha@email.com',   age: 54, country: 'Ecuador' },
        { name: 'Michael',   email: 'michael@email.com',   age: 15, country: 'Colombia' },
        { name: 'Nicolás',   email: 'nicolas@email.com',    age: 43, country: 'Colombia' }
    ];

    $scope.availableColors = ['Red','Green','Blue','Yellow','Magenta','Maroon','Umbra','Turquoise'];

    $scope.consData.colors = ['Blue','Red'];

    //TODO 带查询的选择框
    $scope.querySelect = [];

    $scope.showSelectView = function () {
        alert('iamclick');
    };


    //
    // 'Drag' screen
    //
    $scope.notices = [];

    for (var j = 0; j < 10; j++) {
        $scope.notices.push({icon: 'envelope', message: 'Notice ' + (j + 1)});
    }

    $scope.deleteNotice = function (notice) {
        var index = $scope.notices.indexOf(notice);
        if (index > -1) {
            $scope.notices.splice(index, 1);
        }
    };
});

