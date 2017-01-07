/**
 * Created by sumaia on 7/24/16.
 */

var app_angu = angular.module("productionPlanningReceive", ["ngRoute","ngResource","objectTable",'angularUtils.directives.dirPagination'])

    .config(['$interpolateProvider',function($interpolateProvider){

        $interpolateProvider.startSymbol('{[{').endSymbol('}]}');
    }])
    .controller('prod_plan_receive_edit',['$window','$scope','$http',function($window,$scope,$http,boms) {
        // console.log($window.productionPlanning);        //getting productionPlanning from backend
        // console.log($window.productionPlanningDetails); //getting productionPlanningDetails from backend

        $scope.details_table = $window.productionPlanningDetails.length > 0 ? $window.productionPlanningDetails : [] ;

        //initialization and assigning value starts
        $scope.productionPlanning = $window.productionPlanning;
        $scope.boms_combo = $window.boms;
        $scope.location_combo = $window.locations;
        $scope.formSubmitUrl = $window.form_submit_url;
        $scope.MainreceivedSoFar = 0;
        $scope.SubreceivedSoFar = 0;
        $scope.totalSubreceivedSoFar = 0;
        $scope.subProduct = [];

        $scope.revisionArr = [];

        $scope.MainLines = [];  //initialize array for assigning productionPlanning.mainEndProduct
        $scope.SubProductsLines = []; //initialize array for assigning productionPlanning.SubProduct
        $scope.textcolor = false ;
        //initialization and assigning value ends

        //creating revisionArr
        for(key in $scope.details_table)
        {
            if (!$scope.revisionArr.hasOwnProperty($scope.details_table[key].revision)) {
                $scope.revisionArr[$scope.details_table[key].revision] = [];
            }

            if (!$scope.revisionArr[$scope.details_table[key].revision].hasOwnProperty($scope.details_table[key].product_type)) {
                $scope.revisionArr[$scope.details_table[key].revision][$scope.details_table[key].product_type] = [];
            }

            $scope.revisionArr[$scope.details_table[key].revision][$scope.details_table[key].product_type].push($scope.details_table[key])
        }

        //creating DataArr from revisionArr

        $scope.DataArr = [];
        for(var key in $scope.revisionArr) {
            var value = $scope.revisionArr[key];

            $scope.DataArr.push({
                'name' : value
            })
        }

        //creating DataArr from revisionArr
        for(var p = 0 ; p < $scope.details_table.length ; p++)
        {
            if($scope.details_table[p].product_type == 1)
            {
                $scope.details_table[p].receive_quantity = (!$scope.details_table[p].receive_quantity )? 0 : $scope.details_table[p].receive_quantity
                $scope.MainreceivedSoFar = $scope.MainreceivedSoFar + $scope.details_table[p].receive_quantity ;
            }
            else if($scope.details_table[p].product_type == 2) {

                $scope.details_table[p].receive_quantity = (!$scope.details_table[p].receive_quantity ) ? 0 : $scope.details_table[p].receive_quantity
                $scope.subProduct.push({
                    "product": $scope.details_table[p].product.id,
                    "SubreceivedSoFar": $scope.SubreceivedSoFar + $scope.details_table[p].receive_quantity
                });
            }
        }

        // if array contains same product twice then add those SubreceivedSoFar in total and splice one of them

        function checkIfArrayIsUnique(myArray)
        {
            for (var i = 0; i < myArray.length; i++)
            {
                for (var j = 0; j < myArray.length; j++)
                {
                    if (i != j)
                    {
                        if (myArray[i].product == myArray[j].product)
                        {
                            myArray[i].SubreceivedSoFar = myArray[i].SubreceivedSoFar + myArray[j].SubreceivedSoFar;
                            myArray.splice(j, 1);
                            // console.log(myArray);
                        }
                    }
                }
            }
            return myArray;
        }

        // initially call when page is loaded
        $scope.init_receive_call = function () {

                if ( $scope.productionPlanning.id ) {

                    $scope.productionPlanning.mainEndProduct = [];  //initialize array for mainEndproduct of productionPlanning
                    $scope.productionPlanning.SubProducts = [];  //initialize array for SubProducts of productionPlanning

                    $scope.prodPlan_bom = $scope.productionPlanning.bom.main_end_product.product_code + '-' + $scope.productionPlanning.bom.main_end_product.name + '-' + $scope.productionPlanning.bom.main_end_product.packet_size + '-' + $scope.productionPlanning.bom.main_end_product.unit.unit_name;

                    //push into mainEndProduct array from productionPlanning object

                    for (var t = 0; t < 1; t++) {
                        $scope.productionPlanning.mainEndProduct.push({
                            "product" : $scope.productionPlanning.product.id,
                            "product_name" : $scope.productionPlanning.product.product_code + '-' + $scope.productionPlanning.product.name + '-' + $scope.productionPlanning.product.packet_size + '-' + $scope.productionPlanning.product.unit.unit_name,
                            'quantity' : $scope.productionPlanning.quantity,
                            'received_so_far' : $scope.MainreceivedSoFar,
                            'receive_quantity' : (!$scope.productionPlanning.receive_quantity) ? 0 : $scope.productionPlanning.receive_quantity
                        });
                    }

                    //if $scope.subproduct contains same product id or not
                    $scope.resultArr = checkIfArrayIsUnique($scope.subProduct);
                    if(!$scope.resultArr.length)
                        $scope.resultArr = $scope.subProduct; //if same product is not twice then resultArr would be empty from checkIfArrayIsUnique function
                    console.log($scope.resultArr);
                    //check if productionPlanning.prod_plan_sub_products array length is greater than 0
                    if ($scope.productionPlanning.prod_plan_sub_products.length > 0) {

                        for (var i = 0; i < $scope.productionPlanning.prod_plan_sub_products.length ; i++) {

                            //resultArr which stores if subproduct is already edited at least once then SubreceivedSoFar is calculated in total

                            if ($scope.resultArr.length > 0 )
                            {
                                if($scope.resultArr[i].product == $scope.productionPlanning.prod_plan_sub_products[i].product.id)
                                {
                                    $scope.productionPlanning.SubProducts.push({
                                        'sub_pro_id' : $scope.productionPlanning.prod_plan_sub_products[i].product.id,
                                        'product' : $scope.productionPlanning.prod_plan_sub_products[i].product.product_code + '-' + $scope.productionPlanning.prod_plan_sub_products[i].product.name + '-' + $scope.productionPlanning.prod_plan_sub_products[i].product.packet_size + '-' + $scope.productionPlanning.prod_plan_sub_products[i].product.unit.unit_name,
                                        'quantity' : $scope.productionPlanning.prod_plan_sub_products[i].quantity.toFixed(4),
                                        'received_so_far' : $scope.resultArr[i].SubreceivedSoFar,
                                        'receive_quantity' : (!$scope.productionPlanning.prod_plan_sub_products[i].receive_quantity) ? 0 : $scope.productionPlanning.prod_plan_sub_products[i].receive_quantity
                                    });
                                }

                                else if($scope.resultArr[i].product != $scope.productionPlanning.prod_plan_sub_products[i].product.id)
                                {
                                    //when no edit is done at least one sub product
                                    $scope.productionPlanning.SubProducts.push({
                                        'sub_pro_id' : $scope.productionPlanning.prod_plan_sub_products[i].product.id,
                                        'product' : $scope.productionPlanning.prod_plan_sub_products[i].product.product_code + '-' + $scope.productionPlanning.prod_plan_sub_products[i].product.name + '-' + $scope.productionPlanning.prod_plan_sub_products[i].product.packet_size + '-' + $scope.productionPlanning.prod_plan_sub_products[i].product.unit.unit_name,
                                        'quantity' : $scope.productionPlanning.prod_plan_sub_products[i].quantity.toFixed(4),
                                        'received_so_far' : 0,
                                        'receive_quantity' : (!$scope.productionPlanning.prod_plan_sub_products[i].receive_quantity) ? 0 : $scope.productionPlanning.prod_plan_sub_products[i].receive_quantity
                                    });

                                }
                            }

                            else if($scope.resultArr.length < 0){

                                //when no edit is done of production planning receive

                                $scope.productionPlanning.SubProducts.push({
                                    'sub_pro_id' : $scope.productionPlanning.prod_plan_sub_products[i].product.id,
                                    'product' : $scope.productionPlanning.prod_plan_sub_products[i].product.product_code + '-' + $scope.productionPlanning.prod_plan_sub_products[i].product.name + '-' + $scope.productionPlanning.prod_plan_sub_products[i].product.packet_size + '-' + $scope.productionPlanning.prod_plan_sub_products[i].product.unit.unit_name,
                                    'quantity' : $scope.productionPlanning.prod_plan_sub_products[i].quantity.toFixed(4),
                                    'received_so_far' : 0,
                                    'receive_quantity' : (!$scope.productionPlanning.prod_plan_sub_products[i].receive_quantity) ? 0 : $scope.productionPlanning.prod_plan_sub_products[i].receive_quantity
                                });
                            }
                        }
                    }
            }
        }

        //method check receive of MainEndProduct

        $scope.check_receiveOfMainEndProduct = function (index,ReceiveQty) {
            if(ReceiveQty == undefined)
            {
                $scope.textcolor = true ; // make font color red of receive of main end product
                $scope.showError('Error', 'Summation of received so far recieve quantity can not be greater than production quantity');

            }
            else {
                $scope.textcolor = false ;
            }
        }

        //method check receive Of SubProduct
        $scope.check_receiveOfSubProduct = function (index,ReceiveSubQty) {

            if(ReceiveSubQty == undefined)
            {
                $scope.textcolor = true ;  // make font color red of receive of Sub Product
                $scope.showError('Error', 'Summation of received so far recieve quantity can not be greater than production quantity');
            }
            else {
                $scope.textcolor = false ;
            }
        }

        //method to submit data
        $scope.production_planning_receive_edit = function () {

            $('#eit_bundle_inventorybundle_productionplanning_receive_edit').attr("disabled", true);
            $('#eit_bundle_inventorybundle_productionplanning_receive_edit').html("...Updating", true);

            if ($scope.check_if_equal() == true && $scope.textcolor == false) {

                $scope.MainLines = [];  //initialize array for assigning productionPlanning.mainEndProduct
                $scope.SubProductsLines = [];  //initialize array for assigning productionPlanning.mainEndProduct

                // assigning productionPlanning.mainEndProduct to MainLines
                for( var i = 0 ; i < $scope.productionPlanning.mainEndProduct.length ; i++ )
                {
                    $scope.MainLines.push({

                        "product" : $scope.productionPlanning.mainEndProduct[i].product,

                        'quantity' : $scope.productionPlanning.mainEndProduct[i].quantity,

                        'receive_quantity' : $scope.productionPlanning.mainEndProduct[i].receive_quantity

                    });
                }

                // assigning productionPlanning.SubProducts to SubProductsLines
                for ( var j = 0 ;j < $scope.productionPlanning.SubProducts.length ; j++ )
                {
                    $scope.SubProductsLines.push({

                        "product" : $scope.productionPlanning.SubProducts[j].sub_pro_id,

                        'quantity': $scope.productionPlanning.SubProducts[j].quantity,

                        'receive_quantity' : $scope.productionPlanning.SubProducts[j].receive_quantity
                    });
                }

                var eit_bundle_inventorybundle_productionplanning = {
                    "eit_bundle_inventorybundle_productionplanning" : {
                        "id" : $scope.productionPlanning.id,
                        "productionPlanningNo" : $scope.productionPlanning.production_planning_no,
                        "userBatchNo" : $scope.productionPlanning.user_batch_no,
                        "location" : $scope.productionPlanning.location.id,
                        "bom" : $scope.productionPlanning.bom.id,
                        "MainEndProduct" : $scope.MainLines,
                        "prodPlanSubProducts" : $scope.SubProductsLines
                    }
                }

                var ob = {};
                ob.url = $scope.formSubmitUrl;
                ob.data = eit_bundle_inventorybundle_productionplanning;
                $http({

                    method: 'POST',
                    url: ob.url,
                    data: ob.data

                }).success(function (data) {

                    if (data.status == 1) {
                        window.location.href = data.redirect;
                    }
                    else {
                        $scope.showError('Error', 'Data is not submitted');
                        $('#eit_bundle_inventorybundle_productionplanning_receive_edit').attr("disabled", false);
                        $('#eit_bundle_inventorybundle_productionplanning_receive_edit').text("Submit");
                        $('#prev').attr("disabled", false);
                    }
                });
            }
            else {
                $scope.showError('Error', 'Validation Error');
                $('#eit_bundle_inventorybundle_productionplanning_receive_edit').text("Edit");
                $('#eit_bundle_inventorybundle_productionplanning_receive_edit').attr("disabled", false);
                $('#prev').attr("disabled", false);
            }
        }

        //validity check equal
        $scope.check_if_equal = function () {

            for (var t = 0; t < $scope.productionPlanning.mainEndProduct.length; t++) {

                $scope.productionPlanning.total = $scope.productionPlanning.mainEndProduct[t].received_so_far + $scope.productionPlanning.mainEndProduct[t].receive_quantity;

                if ($scope.productionPlanning.mainEndProduct[t].quantity >= $scope.productionPlanning.total ) {
                    return true;
                }
                else {
                    return false;
                }
            }
        }

        //Error function
        $scope.showError = function (type, message) {
            if (type == 'success') {
                $scope.successFlag = true;
                $scope.message = message;

            } else if (type == 'error') {
                $scope.errorFlag = true;
                $scope.message = message;
            }
        }

    }])
    .controller('prod_plan_receiveList',['$window','$scope','$http',function($window,$scope,$http,boms) { // index.html controller or show list controller

        $scope.productionPlanningList = $window.productionPlanning;
        $scope.sortType     =  'production_planning_no';    // set default sort to production_planning_no
        $scope.sortReverse  = false;

    }])
    .controller('prod_plan_receiveShowDetails',['$window','$scope','$http',function($window,$scope,$http,boms) { // show Details controller

        $scope.revisionArr = [];
        $scope.details_table = $window.productionPlanningDetails.length > 0 ? $window.productionPlanningDetails : [] ;
        $scope.productionPlanning = $window.productionPlanning;
        console.log($scope.details_table);

        $scope.prodPlan_bom = $scope.productionPlanning.bom.main_end_product.product_code + '-' + $scope.productionPlanning.bom.main_end_product.name + '-' + $scope.productionPlanning.bom.main_end_product.packet_size + '-' + $scope.productionPlanning.bom.main_end_product.unit.unit_name;

        for(key in $scope.details_table)
        {
            //console.log($scope.details_table[key].revision)
            if (!$scope.revisionArr.hasOwnProperty($scope.details_table[key].revision)) {
                $scope.revisionArr[$scope.details_table[key].revision] = [];
            }

            if (!$scope.revisionArr[$scope.details_table[key].revision].hasOwnProperty($scope.details_table[key].product_type)) {
                $scope.revisionArr[$scope.details_table[key].revision][$scope.details_table[key].product_type] = [];
            }
            $scope.revisionArr[$scope.details_table[key].revision][$scope.details_table[key].product_type].push($scope.details_table[key])
        }
        console.log($scope.revisionArr);

        //array for DataArr
        $scope.DataArr = [];
        for(var key in $scope.revisionArr) {
            var value = $scope.revisionArr[key];
            $scope.DataArr.push({
                'name' : value
            })
        }

    }]).filter('emptyFilter', function() {  //filter using array to make it structured object

        return function(DataArr) {
            var filteredArray = [];
            angular.forEach(DataArr, function(item) {
                if (item) filteredArray.push(item);
            });
            // console.log(typeof (filteredArray));
            return filteredArray;
        };
    });


