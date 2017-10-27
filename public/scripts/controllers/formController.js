angular.module('myApp')
.controller('formController', ['$scope', '$routeParams', 'FormService', function($scope, $routeParams, FormService) {

  console.log('formController has been called.');
  $scope.firstName = 'Virgie';
  $scope.username = '';
  $scope.password = '';

  $scope.registerUser = function() {
    FormService.registerNewUser()
      .then(function(response) {
        console.log(response);
      });
  };
  

}]);