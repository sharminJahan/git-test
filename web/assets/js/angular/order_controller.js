var app = angular.module("myApp", []).controller('MainController', ['$scope', function($scope) {
    $scope.title = 'Top Sellers in Books';
    console.log($scope.title);
}]);