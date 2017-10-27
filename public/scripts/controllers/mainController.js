angular.module('myApp')
.controller('mainController', ['$scope', '$log', 'UserService', function($scope, $log, UserService) {

  $scope.userService = UserService;
  $log.info($scope.userService);
  
  $scope.users = [];

  $scope.getUsers = function(e) {
    $scope.users = UserService.getUsers();
  };
  
}]);