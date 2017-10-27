angular.module('myApp')
.controller('mainController', ['$scope', '$log', 'UserService', function($scope, $log, UserService) {

  $scope.firstName = 'Chris';
  //if I do a $log.info here, I get an infinite loop when I click users
  
}]);