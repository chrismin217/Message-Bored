angular.module('myApp')
.service('FormService', ['$http', function($http) {

  var api = 'http://127.0.0.1:8080/api/users';
  this.registerNewUser = function() {
    console.log('register');
  };
  this.loginUser = function() {
    console.log('logging in');
  };

}]);