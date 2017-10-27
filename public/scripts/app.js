var myApp = angular.module("myApp", ['ngRoute']);

myApp.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {

  $routeProvider
  .when('/', {
    template : '<h1>Test</h1>',  //this is what leads to infinite loop
    controller : 'mainController' //be sure it is not /index.html
  })
  .when('/users', {
    template : '<h1>Users</h1>', //this is also infinite looping
    controller : 'mainController'
  })
  .otherwise({
    template : '<h1>Trebek</h1>'
  });

  $locationProvider.html5Mode(true);
  
}]);

