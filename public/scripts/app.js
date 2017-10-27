var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {

  $routeProvider
  .when('/', {
    templateUrl : '/views/index.html',
    controller : 'mainController'
  })
  .when('/users', {
    templateUrl : '/views/users.html',
    controller : 'mainController'
  });

  $locationProvider.html5Mode(true);
  
}]);

