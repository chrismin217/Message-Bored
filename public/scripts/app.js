var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function ($routeProvider) {

  $routeProvider
  .when('/', {
    templateUrl : 'index.html',
    controller : 'mainController'
  })
  .when('/users', {
    templateUrl : 'users.html',
    controller : 'mainController'
  })
  .when('/topics', {
    templateUrl : 'topics.html',
    controller : 'mainController'
  })
  .when('/messages', {
    templateUrl : 'messages.html',
    controller : 'mainController'
  });
  
});

myApp.controller('myController', ['$scope', function($scope) {
  
}]);

