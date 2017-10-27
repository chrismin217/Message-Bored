var myApp = angular.module("myApp", ['ngRoute']);

myApp.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {

  $routeProvider
  .when('/', {
    templateUrl : '/views/home.html', //careful, url index.html infLoop
  })
  .when('/users', {
    templateUrl : '/views/users.html',
    controller : 'userController'
  })
  .otherwise({
    template : '<h1>Trebek</h1>'
  });

  $locationProvider.html5Mode(true);
  
}]);

