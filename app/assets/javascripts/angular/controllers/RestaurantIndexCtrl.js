var app;

app.controller("RestaurantIndexCtrl", ['$scope', '$location', '$http', function ($scope, $location, $http){
  $scope.restaurants = [];
  $http.get('./restaurants.json')
    .success(function (data){
      $scope.restaurants = data;
    });
  $scope.viewRestaurant = function (id){
    $location.url("/restaurants/#{id}");
  };
}]);

