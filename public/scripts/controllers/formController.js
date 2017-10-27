angular.module('myApp')
.controller('formController', ['$scope', '$routeParams', 'FormService', function($scope, $routeParams, FormService) {

  console.log('formController has been called.');
  $scope.firstName = 'Virgie';
  

}]);