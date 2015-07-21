var app = angular.module('restauranteur', []);

app.config(['$routeProvider', function ($routeProvider){
  $routeProvider.
    otherwise({
      templateUrl: '../templates/home.html',
      controller: 'HomeCtrl'
    });
}]);