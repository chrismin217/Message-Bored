angular.module('myApp')
.service('UserService', ['$http', function($http) {

  var api = 'http://127.0.0.1:8080/api/users';
  this.getUsers = function() {
    return $http.get(api)
      .then(function(response) {
        console.log(response.data);
        return response.data;
      });
  };

}]);