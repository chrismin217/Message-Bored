var myApp = angular.module("myApp", ['ngRoute']);

myApp.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {

  $routeProvider
  .when('/', {
    templateUrl : '/views/home.html'
  })
  .when('/login', {
    templateUrl : '/views/login.html',
    controller : 'formController'
  })
  .when('/register', {
    templateUrl : '/views/register.html',
    controller : 'formController'
  })
  .when('/users', {
    templateUrl : '/views/users.html',
    controller : 'userController'
  })
  .when('/users/:id', {
    templateUrl : '/views/user_single.html',
    controller : 'userController'
  })
  .otherwise({
    template : '<h1>Suck It Trebek</h1>'
  });

  $locationProvider.html5Mode(true);
  
}]);

