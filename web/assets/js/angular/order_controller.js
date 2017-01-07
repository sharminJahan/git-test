var app = angular.module("myApp", []).controller('MainController', ['$window','$scope', function($window, $scope) {
    $scope.title = $window.data;
    console.log($scope.title);
}]);