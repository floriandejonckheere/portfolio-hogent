/**
 * application.js
 *
 * */

var site = angular.module('site', [
  'ngRoute',
  'ngAnimate',
  'pascalprecht.translate'
]);

site.config(['$routeProvider', '$translateProvider', function($routeProvider, $translateProvider) {
  $routeProvider
    .when('/', {
      activeTab: 'cover',
      controller: 'mainController'
    })
    .when('/about', {
      templateUrl: 'templates/about.html',
      activeTab: 'about'
    })
    .when('/portfolio', {
      templateUrl: 'templates/portfolio.html',
      activeTab: 'portfolio'
    })
    .when('/i1talent', {
      templateUrl: 'templates/i1talent.html',
      activeTab: 'i1talent'
    })
    .when('/i2talent', {
      templateUrl: 'templates/i2talent.html',
      activeTab: 'i2talent'
    })
    .when('/links', {
      templateUrl: 'templates/links.html',
      activeTab: 'links'
    })
    .when('/contact', {
      templateUrl: 'templates/contact.html',
      activeTab: 'contact'
    })
    .otherwise({
      redirectTo: '/'
    });
  $translateProvider.translations('en', en);
  $translateProvider.translations('nl', nl);
  $translateProvider.translations('fr', fr);
  $translateProvider.preferredLanguage('en');
  $translateProvider.useSanitizeValueStrategy('escape');
}]);

site.controller('mainController', function($scope, $route, $translate) {
  $scope.$route = $route;

  $scope.$on('$routeChangeStart', function() {
    document.getElementById('menu-toggle').checked = false;
  });

  $scope.changeLanguage = function (key) {
    $translate.use(key);
  };
});

site.run(function($rootScope, $location, $anchorScroll) {
  //when the route is changed scroll to the proper element.
  $rootScope.$on('$routeChangeSuccess', function(newRoute, oldRoute) {
    if($location.hash()) $anchorScroll();
  });
});
