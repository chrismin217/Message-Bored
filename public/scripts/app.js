var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {

  $routeProvider
  .when('/', {
    template : '<h1>This is the main page.</h1>',
    controller : 'mainController'
  })
  .when('/login', {
    templateUrl : '/login.html',
    controller : 'mainController'
  })
  .when('/logout', {
    template : '<h1>This is the logout page.</h1>',
    controller : 'mainController'
  })
  .when('/register', {
    template : '<h1>This is the register page.</h1>',
    controller : 'mainController'
  })
  .when('/users', {
    template : '<h1>This is the users page.</h1>',
    controller : 'mainController'
  })
  .when('/latest', {
    template : '<h1>This is the latest posts page.</h1>',
    controller : 'mainController'
  })
  .otherwise({
    template : '<h1>Page Not Found.</h1>'
  });

  $locationProvider.html5Mode(true);
  
}]);

