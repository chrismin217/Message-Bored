From StackOverflow..

I have just found out what was causing the infinite loop when ng-view is present in the html (index.html in my case which is the initial html loaded at the start).

Ok, the problem was after all very simple one. I had this route provider setting in my app.js

  angular.module('myapp',['ngRoute'])
    .config(function($routeProvider) {
      $routeProvider
      .when('/', {
          templateUrl:'/index.html',
          controller:'MyAppCtrl'
      })

Since the initial html loaded is index.html, and the url at that point is '/', and the routeProvider invokes the code at when '/'. Yes, it loads index.html again, and again and again and again... till it dies. The solution is not to set index.html as the templateUrl for the '/' route. The html (template) should not include <div ng-view></div>.

