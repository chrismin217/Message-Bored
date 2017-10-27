angular.module('myApp')
.controller('formController', ['$scope', '$routeParams', 'FormService', function($scope, $routeParams, FormService) {

  console.log('formController has been called.');

  $scope.username = '';
  $scope.password = '';

  $scope.registerUser = function() {
    var newUser = {
      name : $scope.username, 
      password : $scope.password
    };
    FormService.registerNewUser(newUser)
      .then(function(response) {
        return;     
      });
  };

  $scope.loginUser = function() {
    console.log('Logging in with user : ' + $scope.username);
  };
  
                       
}]);