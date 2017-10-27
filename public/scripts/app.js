var myApp = angular.module("myApp", ['ngRoute']);

myApp.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {

  $routeProvider
  .when('/', {
    template : '<h1>Index</h1>', //careful, index.html infLoop
    
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

