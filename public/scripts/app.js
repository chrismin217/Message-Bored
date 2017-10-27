var myApp = angular.module("myApp", ['ngRoute']);

myApp.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {

  $routeProvider
  .when('/', {
    templateUrl : '/views/home.html'
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
    template : '<h1>Trebek</h1>'
  });

  $locationProvider.html5Mode(true);
  
}]);

