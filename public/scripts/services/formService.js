angular.module('myApp')
.service('FormService', ['$http', function($http) {

  var api = 'http://127.0.0.1:8080/api/users';
  this.registerNewUser = function(newUser) {
    return $http.post(api, newUser)
      .then(function(response) {
        return response;
      });
  };

  this.loginUser = function() {
    console.log('logging in');
  };

}]);