var app;

app.controller("RestaurantShowCtrl", ['$scope','$http', '$routeParams', function ($scope, $http, $routeParams){
  $http.get("./restaurants/#{$routeParams.id}.json")
    .success(function (data){
      $scope.restaurant = data;
    });
}]);

