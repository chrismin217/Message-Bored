angular.module('myApp')
.controller('userController', ['$scope', 'UserService', function($scope, UserService) {
  
  console.log('userController has been called.');
  $scope.firstName = 'Chris';

  $scope.users = [];
  $scope.singleUser = 'Min';

  $scope.users = UserService.getUsers()
    .then(function(response) {
      $scope.users = response;
    });

}]);