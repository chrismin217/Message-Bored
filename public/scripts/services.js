angular.module('myApp')
.service('UserService', ['$http', '$log', function($http, $log) {

  this.getUsers = function() {
    $http.get('/api/users')
      .then(response => {
        $log.info(response);
      });
  };

}]);