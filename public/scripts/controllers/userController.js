angular.module('myApp')
.controller('userController', ['$scope', '$log', 'UserService', function($scope, $log, UserService) {

  $log.info('userController has been called.');
  $scope.users = [];
  $scope.userService = UserService;
  

}]);