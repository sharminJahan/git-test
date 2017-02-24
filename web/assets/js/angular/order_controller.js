var app = angular.module("myApp", []).config(['$interpolateProvider', function($interpolateProvider){
    console.log("config calling")
    $interpolateProvider.startSymbol('{[{').endSymbol('}]}');
}])
    .controller('MainController', ['$window','$scope', function($window, $scope) {
    $scope.title = $window.data;
    console.log($scope.title)
    //$scope.apps =[
    //    {
    //        img: '../img/'
    //    },
    //    {}
    //];
}]);