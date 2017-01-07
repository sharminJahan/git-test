/**
 * Created by sumaia on 10/9/16.
 */

var app_angu=angular.module("transactionCtrl", ["ngRoute","ngResource"])

    .config(['$interpolateProvider',function($interpolateProvider){
        // console.log("config calling")
        $interpolateProvider.startSymbol('{[{').endSymbol('}]}');
    }]).controller('accountsTransaction',['$window','$scope','$http',function($window,$scope,$http,boms) {



        $scope.transaction = {
            'date' : null,
            'voucherType' : null,
            'transactionLines' : []
        }


        //methods when new row is added in collectionLines
        $scope.addTransactionLines = function () {

            $scope.transaction.transactionLines.push({
                'ledgerAccount' : null,
                'debitAccount' : 0,
                'creditAccount' : 0,
                'particulars' : 0
            });
        }
        $scope.initCall = function() {
            $scope.errorFlag = false;
        }
    }]);