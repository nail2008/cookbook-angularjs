console.log("myApp loaded");

var app = angular.module('myApp', ['ui.router', 'mh.mobile.selectLink']);

app.run(['$rootScope', '$state', '$stateParams', function ($rootScope,   $state,   $stateParams) {

  // It's very handy to add references to $state and $stateParams to the $rootScope
  // so that you can access them from any scope within your applications.For example,
  // <li ng-class="{ active: $state.includes('contacts.list') }"> will set the <li>
  // to active whenever 'contacts.list' or one of its decendents is active.
  $rootScope.$stateParams = $stateParams;

}]);

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/state1");
  //
  // Now set up the states
  $stateProvider
  .state('state1', {
    url: "/state1",
    views: {
      'content': {
          templateUrl: 'state1.html'
      }
    }
  })
  .state('state2', {
    url: "/state2",
    views: {
      'content': {
          templateUrl: 'state2.html'
      }
    }
  });
}]);

app.controller("MainController", ['$rootScope', '$scope', function($rootScope, $scope) {
  // if state changes then change the selected link item.
  // necessary if page gets reloaded.
  $scope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
    if (toState.name == "state2") {
      $scope.myselect.selected = 8;
    }
  });
  

  var msoptions = [
    {
      id: 4,
      name: "Ergebnisse", 
      href: "state1"
    },
    {
      id: 8,
      name: "Tabelle", 
      href: "state2"
    },
    {
      id: 9,
      name: "Scorer", 
      href: "link2.html"
    },
    {
      id: 11,
      name: "Tipps", 
      href: "link2.html"
    }
  ];

  var msoptions2 = [
    {
      id: 4,
      name: "Link1", 
      href: "state1"
    },
    {
      id: 8,
      name: "Link2", 
      href: "state2"
    },
    {
      id: 9,
      name: "Scorer", 
      href: "link2.html"
    },
    {
      id: 11,
      name: "Tipps", 
      href: "link2.html"
    }
  ];

  $scope.myselect = {
    hashmap: { "4": 0, "8": 1, "9": 2, "11": 3 },
    msoptions: msoptions,
    selected: 4
  };

  $scope.myselect2 = {
    hashmap: { "4": 0, "8": 1, "9": 2, "11": 3 },
    msoptions: msoptions2,
    selected: 9
  };
}]);
