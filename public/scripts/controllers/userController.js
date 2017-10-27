angular.module('myApp')
.controller('userController', ['$scope', '$routeParams', 'UserService', function($scope, $routeParams, UserService) {
  
  console.log('userController has been called.');
  var userId = $routeParams.id;

  $scope.firstName = 'Chris';

  $scope.users = [];
  $scope.singleUser = 'Min';

  $scope.users = UserService.getUsers()
    .then(function(response) {
      $scope.users = response;
    });

  $scope.singleUser = UserService.getSingleUser(userId)
    .then(function(response) {
      $scope.singleUser = response;
    });

}]);