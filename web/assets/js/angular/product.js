

 /* Created by sumaia on 8/14/16.
 */
angular.module("productionPlanning", ["ngRoute", "ngResource"]).config(['$interpolateProvider', function($interpolateProvider){
    console.log("planning calling")
    $interpolateProvider.startSymbol('{[{').endSymbol('}]}');
}]).controller('product_controller',['$window', '$scope', '$http', function ($window, $scope, $http) {
    console.log($window.data);
    $scope.boms_combo = $window.data.boms;
    $scope.location_combo = $window.data.locations;
    $scope.productionPlanObject = $window.data.prodPlan; // production planning edit object

    $scope.selectedBom = [];  //initialize bom array which will be selected

    $scope.countExcipientPotency = 0; //initialize count number of excipient potency
    $scope.totalQuantity = 0;         //initialize totalQuantity
    $scope.totalPotencyQty = 0;       //initialize totalPotencyQty
    $scope.totalFinalQuantity = 0;    //initialize totalFinalQuantity

    $scope.back = true; //flag for total qunatity and final total quantity equal or not


    //initialize productionplanningBundle object
    $scope.productionplanningBundle =  {
        "productionPlanningNo" : null,
        "userBatchNo" : null,
        "location" : null,
        "bom" : null,
        "quantity" : null,
        "productionPlanningLines" : [],
        "prodPlanSubProducts" : [],
        "productionPlanningPackagingLines" : []
    }

    //method calls when page is viewed
    $scope.initCall = function()
    {

        //if for edit page of Production Planning
        if ( $scope.productionPlanObject.id) {

            $scope.productionPlanObject.bom_packaging_lines = [];

            console.log("if");

            $scope.selectedBom = $scope.productionPlanObject.bom;
            $scope.productionplanningBundle.productionPlanningLines = [];
            $scope.productionplanningBundle.prodPlanSubProducts = [];
            $scope.productionplanningBundle.productionPlanningPackagingLines = [];

            $scope.location_combo = [];  //initialize location combo array for master form
            for ( var m = 0; m < $window.data.locations.length ; m++ ) {
                $scope.location_combo.push({
                    'id':  $window.data.locations[m].id,
                    'name': $window.data.locations[m].location_name
                });
            }

            $scope.productionplanningBundle.id = $scope.productionPlanObject.id;  // assigning productionplanning object id
            $scope.productionplanningBundle.productionPlanningNo = $scope.productionPlanObject.production_planning_no; // assigning productionPlanningNo of productionplanning object
            $scope.productionplanningBundle.userBatchNo = $scope.productionPlanObject.user_batch_no;  // assigning userBatchNo of productionplanning object
            $scope.productionplanningBundle.quantity = $scope.productionPlanObject.quantity;  // assigning quantity of productionplanning object



            $scope.productionplanningBundle.bom = $scope.productionPlanObject.bom.id;  // assigning bom id of productionplanning object

            $scope.productionplanningBundle.location = $scope.productionPlanObject.location.id;   // assigning location id of productionplanning object

            $scope.prodPlan_bom = $scope.productionPlanObject.bom.main_end_product.product_code + '-' + $scope.productionPlanObject.bom.main_end_product.name + '-' + $scope.productionPlanObject.bom.main_end_product.packet_size + '-' + $scope.productionPlanObject.bom.main_end_product.unit.name;  // assigning bom name of productionplanning object


            $scope.boms_combo = [];  //initialize boms combo array for master form
            for ( var n = 0 ; n < $window.data.boms.length ; n++ ) {
                $scope.boms_combo.push({
                    'id': $window.data.boms[n].id,
                    'BOM': $window.data.boms[n].main_end_product.product_code + '-' + $window.data.boms[n].main_end_product.name + '-' + $window.data.boms[n].main_end_product.packet_size + '-' + $window.data.boms[n].main_end_product.unit.name,
                    'bom_lines': $window.data.boms[n].bom_lines,
                    'bom_sub_products': $window.data.boms[n].bom_sub_products
                });
            }
            console.log($scope.productionPlanObject);
            for (var i = 0 ; i < $scope.productionPlanObject.production_planning_lines.length ; i++) {

                $scope.productionplanningBundle.productionPlanningLines.push({

                    'bomLine' : $scope.productionPlanObject.bom.bom_lines[i].id,

                    "product" : $scope.productionPlanObject.bom.bom_lines[i].product.id,

                    'name' : $scope.productionPlanObject.production_planning_lines[i].product.product_code + '-' + $scope.productionPlanObject.production_planning_lines[i].product.name + '-' + $scope.productionPlanObject.production_planning_lines[i].product.packet_size + '-' + $scope.productionPlanObject.production_planning_lines[i].product.unit.name,

                    'quantity' : (($scope.productionPlanObject.bom.bom_lines[i].quantity * $scope.productionPlanObject.quantity) / $scope.productionPlanObject.bom.bom_lines[i].per_quantity),

                    'potency' : $scope.productionPlanObject.bom.bom_lines[i].potency_type == 2 ? 100 : '',

                    'potency_type': $scope.productionPlanObject.bom.bom_lines[i].potency_type,

                    'potencyQuantity' : $scope.productionPlanObject.bom.bom_lines[i].potency_quantity,

                    'finalQuantity' : $scope.productionPlanObject.production_planning_lines[i].final_quantity

                });
            }
                    // $scope.productionplanningBundle.productionPlanningLines.push({
                    //
                    //     'bomLine' : $scope.productionPlanObject.bom.bom_lines[i].id,
                    //
                    //     "product": $scope.productionPlanObject.bom.bom_lines[i].product.id,
                    //
                    //     'name' : $scope.productionPlanObject.production_planning_lines[i].product.product_code + '-' + $scope.productionPlanObject.production_planning_lines[i].product.name + '-' + $scope.productionPlanObject.production_planning_lines[i].product.packet_size + '-' + $scope.productionPlanObject.production_planning_lines[i].product.unit.unit_name,
                    //
                    //     'quantity' : (($scope.productionPlanObject.bom.bom_lines[i].quantity * $scope.productionPlanObject.quantity) / $scope.productionPlanObject.bom.bom_lines[i].per_quantity),
                    //
                    //     'potency' : $scope.productionPlanObject.bom.bom_lines[i].potency_type == 2 ? 100 : '',
                    //
                    //     'potency_type': $scope.productionPlanObject.bom.bom_lines[i].potency_type,
                    //
                    //     'potencyQuantity' : $scope.productionPlanObject.bom.bom_lines[i].potency_quantity,
                    //
                    //     'finalQuantity' : $scope.productionPlanObject.production_planning_lines[i].final_quantity
                    //
                    // });
                    //


            for (var i = 0 ; i < $scope.productionPlanObject.prod_plan_sub_products.length ; i++) {

                $scope.productionplanningBundle.prodPlanSubProducts.push({

                    'product' : $scope.productionPlanObject.prod_plan_sub_products[i].product.id,

                    'name' : $scope.productionPlanObject.prod_plan_sub_products[i].product.product_code + '-' + $scope.productionPlanObject.prod_plan_sub_products[i].product.name + '-' + $scope.productionPlanObject.prod_plan_sub_products[i].product.packet_size + '-' + $scope.productionPlanObject.prod_plan_sub_products[i].product.unit.name,

                    'quantity' : $scope.productionPlanObject.prod_plan_sub_products[i].quantity.toFixed(4),

                    'costPercentage' : $scope.productionPlanObject.prod_plan_sub_products[i].cost_percentage


                });
            }

            for(var i = 0 ; i < $scope.productionPlanObject.production_planning_packaging_lines.length ; i++)
            {
                console.log("pack");
                $scope.productionplanningBundle.productionPlanningPackagingLines.push({



                    'product' : $scope.productionPlanObject.production_planning_packaging_lines[i].product.id,

                    'name' : $scope.productionPlanObject.production_planning_packaging_lines[i].product.product_code + '-' + $scope.productionPlanObject.production_planning_packaging_lines[i].product.name + '-' + $scope.productionPlanObject.production_planning_packaging_lines[i].product.packet_size + '-' + $scope.productionPlanObject.production_planning_packaging_lines[i].product.unit.name,

                    'finishedProduct' : $scope.productionPlanObject.production_planning_packaging_lines[i].finished_product.id,

                    'finishedProductname' : $scope.productionPlanObject.production_planning_packaging_lines[i].finished_product.product_code + '-' + $scope.productionPlanObject.production_planning_packaging_lines[i].finished_product.name + '-' + $scope.productionPlanObject.production_planning_packaging_lines[i].finished_product.packet_size + '-' + $scope.productionPlanObject.production_planning_packaging_lines[i].finished_product.unit.name,

                    'quantity' : $scope.productionPlanObject.production_planning_packaging_lines[i].quantity.toFixed(4),

                    'perQuantity': $scope.productionPlanObject.production_planning_packaging_lines[i].per_quantity
                });

            }


            $scope.count_type = countPotencyType();

            totalQuantityCalculate(); //total quantity method is called
            totalFinalQuantityCalculate();  //total final quantity method is called
        }
        else {
            console.log("else");
            $scope.productionplanningBundle = {
                "productionPlanningNo" : null,
                "userBatchNo" : null,
                "location" : null,
                "bom" : null,
                "quantity" : null,
                "productionPlanningLines" : [],
                "prodPlanSubProducts" : [],
                "bomPackagingLines" : []
            }
        }

    }

    //method for selection of bom which will generate table of production planning line , sub product line and bom packaging lines
    $scope.generateTableRow = function(selected)
    {
        console.log(selected);
        $scope.countExcipientPotency = 0;
        $scope.totalQuantity = 0;
        $scope.totalPotencyQty = 0;
        $scope.totalFinalQuantity = 0;

        $scope.selectedBom = [];

        $scope.productionplanningBundle.productionPlanningLines = []; // initialize productionPlanningLines array of productionplanningBundle

        $scope.productionplanningBundle.prodPlanSubProducts = [];     // initialize prodPlanSubProducts array of productionplanningBundle

        $scope.productionplanningBundle.productionPlanningPackagingLines = [];  // initialize productionPlanningPackagingLines array of productionplanningBundle

        // console.log(selected);
        //for loop for boms combobox in master form
        for( var w = 0; w < $scope.boms_combo.length; w++ )
        {
            if ( selected == $scope.boms_combo[w].id  )
            {
                $scope.selectedBom = $scope.boms_combo[w]; // assign array if boms id matched
                console.log($scope.selectedBom) ;

                for(var i = 0 ; i < $scope.boms_combo[w].bom_lines.length ; i++)  // for loop for creating productionPlanningLines table
                {
                    $scope.boms_combo[w].bom_lines[i].product.packet_size = $scope.boms_combo[w].bom_lines[i].product.packet_size ? $scope.boms_combo[w].bom_lines[i].product.packet_size : 0 ;

                    $scope.productionplanningBundle.productionPlanningLines.push({

                        'bomLine': $scope.boms_combo[w].bom_lines[i].id,

                        'product' : $scope.boms_combo[w].bom_lines[i].product.id,

                        'name' : $scope.boms_combo[w].bom_lines[i].product.product_code + '-' + $scope.boms_combo[w].bom_lines[i].product.name + '-' + $scope.boms_combo[w].bom_lines[i].product.packet_size + '-' + $scope.boms_combo[w].bom_lines[i].product.unit.name,

                        'quantity' : $scope.boms_combo[w].bom_lines[i].quantity.toFixed(4),

                        // 'per_quantity': $scope.boms_combo[w].bom_lines[i].per_quantity,

                        'potency' : $scope.boms_combo[w].bom_lines[i].potency_type == 2 ? 100 : '',

                        'potency_type': $scope.boms_combo[w].bom_lines[i].potency_type,

                        'potencyQuantity' : $scope.boms_combo[w].bom_lines[i].potency_quantity ,

                        'finalQuantity' : $scope.boms_combo[w].bom_lines[i].quantity.toFixed(4)
                    })
                }
                for( var y = 0; y < $scope.boms_combo[w].bom_sub_products.length; y++ ) {  // for loop for creating prodPlanSubProducts table

                    $scope.productionplanningBundle.prodPlanSubProducts.push({

                        'product' : $scope.boms_combo[w].bom_sub_products[y].product.id ,

                        'name' :    $scope.boms_combo[w].bom_sub_products[y].product.product_code + '-' + $scope.boms_combo[w].bom_sub_products[y].product.name + '-'+ $scope.boms_combo[w].bom_sub_products[y].product.packet_size + '-' + $scope.boms_combo[w].bom_sub_products[y].product.unit.name ,

                        'quantity' : $scope.boms_combo[w].bom_sub_products[y].quantity.toFixed(4) ,

                        'costPercentage' : $scope.boms_combo[w].bom_sub_products[y].cost_percent
                    })
                }
                if($scope.boms_combo[w].bom_packaging_lines)
                {
                    for(var i = 0 ; i < $scope.boms_combo[w].bom_packaging_lines.length ; i++) // for loop for creating productionPlanningPackagingLines table
                    {
                        $scope.boms_combo[w].bom_packaging_lines[i].product.packet_size = $scope.boms_combo[w].bom_packaging_lines[i].product.packet_size ? $scope.boms_combo[w].bom_packaging_lines[i].product.packet_size : 0 ;
                        $scope.boms_combo[w].bom_packaging_lines[i].finished_product.packet_size = $scope.boms_combo[w].bom_packaging_lines[i].finished_product.packet_size ? $scope.boms_combo[w].bom_packaging_lines[i].finished_product.packet_size : 0 ;

                        $scope.productionplanningBundle.productionPlanningPackagingLines.push({

                            'product' : $scope.boms_combo[w].bom_packaging_lines[i].product.id,

                            'name' : $scope.boms_combo[w].bom_packaging_lines[i].product.product_code + '-' + $scope.boms_combo[w].bom_packaging_lines[i].product.name + '-' + $scope.boms_combo[w].bom_packaging_lines[i].product.packet_size + '-' + $scope.boms_combo[w].bom_packaging_lines[i].product.unit.name,

                            'finishedProduct' : $scope.boms_combo[w].bom_packaging_lines[i].finished_product.id,

                            'finishedProductname' : $scope.boms_combo[w].bom_packaging_lines[i].finished_product.product_code + '-' + $scope.boms_combo[w].bom_packaging_lines[i].finished_product.name + '-' + $scope.boms_combo[w].bom_packaging_lines[i].finished_product.packet_size + '-' + $scope.boms_combo[w].bom_packaging_lines[i].finished_product.unit.name,

                            'quantity' : $scope.boms_combo[w].bom_packaging_lines[i].quantity.toFixed(4),

                            'perQuantity': $scope.boms_combo[w].bom_packaging_lines[i].per_quantity

                            // 'finalQuantity' : $scope.boms_combo[w].bom_packaging_lines[i].quantity.toFixed(4)
                        })
                    }
                }


                // console.log($scope.productionplanningBundle.productionPlanningPackagingLines);
                $scope.count_type = countPotencyType(); // returns value of total excipient potency type

                totalQuantityCalculate();  //total quantity method is called
                totalFinalQuantityCalculate();  //total Final quantity method is called
            }
        }
    }

    // method for count total excipient potency type
    function countPotencyType () {

        for( var t = 0; t < $scope.selectedBom.bom_lines.length; t++ )
        {
            if( $scope.selectedBom.bom_lines[t].potency_type == 3 )
            {
                $scope.countExcipientPotency = $scope.countExcipientPotency + 1;
            }
        }
        return $scope.countExcipientPotency;
    }

    //if value is floating when calculating quantity and final quantity
    function floating(x)
    {
        if( x % 1 == 0)
        {
            return x;
        }
        else
        {
            x = x.toFixed(4);
            return x;
        }
    }

    //method is called when quantity changes
    $scope.quantityChange = function (oQuantity) {
        // console.log($scope.productionplanningBundle.bom);
        if ($scope.productionplanningBundle.bom != null) {
            //for loop for productionPlanningLines quantity calculation
            for (var m = 0; m < $scope.selectedBom.bom_lines.length; m++)

                if (oQuantity != null || oQuantity != undefined) {
                    for (var m = 0; m < $scope.selectedBom.bom_lines.length; m++) {

                        if ($scope.selectedBom.bom_lines[m].quantity != 1) {
                            $scope.productionplanningBundle.productionPlanningLines[m].quantity = ( $scope.selectedBom.bom_lines[m].quantity / $scope.selectedBom.bom_lines[m].per_quantity ) * oQuantity;
                            $scope.productionplanningBundle.productionPlanningLines[m].quantity = Math.ceil($scope.productionplanningBundle.productionPlanningLines[m].quantity);
                            $scope.productionplanningBundle.productionPlanningLines[m].quantity = floating($scope.productionplanningBundle.productionPlanningLines[m].quantity);

                        }
                        else {
                            $scope.productionplanningBundle.productionPlanningLines[m].quantity = ($scope.selectedBom.bom_lines[m].quantity / $scope.selectedBom.bom_lines[m].per_quantity ) * oQuantity;
                            $scope.productionplanningBundle.productionPlanningLines[m].quantity = floating($scope.productionplanningBundle.productionPlanningLines[m].quantity);
                        }

                    }

                    //for loop for prodPlanSubProducts quantity calculation
                    for (var n = 0; n < $scope.selectedBom.bom_sub_products.length; n++) {

                        if ($scope.selectedBom.bom_lines[m].quantity != 1) {
                            $scope.productionplanningBundle.productionPlanningLines[m].quantity = ( $scope.selectedBom.bom_lines[m].quantity / $scope.selectedBom.bom_lines[m].per_quantity ) * oQuantity;
                            $scope.productionplanningBundle.productionPlanningLines[m].quantity = Math.ceil($scope.productionplanningBundle.productionPlanningLines[m].quantity);
                            $scope.productionplanningBundle.productionPlanningLines[m].quantity = floating($scope.productionplanningBundle.productionPlanningLines[m].quantity);

                        }
                        else {
                            $scope.productionplanningBundle.productionPlanningLines[m].quantity = ($scope.selectedBom.bom_lines[m].quantity / $scope.selectedBom.bom_lines[m].per_quantity ) * oQuantity;
                            $scope.productionplanningBundle.productionPlanningLines[m].quantity = floating($scope.productionplanningBundle.productionPlanningLines[m].quantity);
                        }
                    }
                    for (var n = 0; n < $scope.selectedBom.bom_sub_products.length; n++) {

                        $scope.productionplanningBundle.prodPlanSubProducts[n].quantity = ($scope.selectedBom.bom_sub_products[n].quantity) * oQuantity;
                        $scope.productionplanningBundle.prodPlanSubProducts[n].quantity = $scope.productionplanningBundle.prodPlanSubProducts[n].quantity.toFixed(4);

                    }

                    //for loop for productionPlanningPackagingLines quantity calculation

                    if ($scope.selectedBom.bom_packaging_lines) {
                        for (var n = 0; n < $scope.selectedBom.bom_packaging_lines.length; n++) {
                            for (var t = 0; t < $scope.productionplanningBundle.productionPlanningPackagingLines.length; t++) {
                                // console.log($scope.productionplanningBundle.productionPlanningPackagingLines[t].finishedProduct)
                                if ($scope.productionplanningBundle.productionPlanningPackagingLines[t].finishedProduct == $scope.selectedBom.main_end_product.id) {
                                    console.log("if 1");
                                    $scope.productionplanningBundle.productionPlanningPackagingLines[t].quantity = ($scope.selectedBom.bom_packaging_lines[n].quantity / $scope.selectedBom.bom_packaging_lines[n].per_quantity ) * oQuantity;
                                    $scope.productionplanningBundle.productionPlanningPackagingLines[t].quantity = $scope.productionplanningBundle.productionPlanningPackagingLines[t].quantity.toFixed(4);
                                }
                                for (var p = 0; p < $scope.selectedBom.bom_sub_products.length; p++) {
                                    if ($scope.productionplanningBundle.productionPlanningPackagingLines[t].finishedProduct == $scope.selectedBom.bom_sub_products[p].product.id) {
                                        console.log("if 22");
                                        $scope.productionplanningBundle.productionPlanningPackagingLines[t].quantity = ($scope.selectedBom.bom_packaging_lines[n].quantity / $scope.selectedBom.bom_packaging_lines[n].per_quantity ) * $scope.selectedBom.bom_sub_products[p].quantity;
                                        $scope.productionplanningBundle.productionPlanningPackagingLines[t].quantity = $scope.productionplanningBundle.productionPlanningPackagingLines[t].quantity.toFixed(4);
                                    }
                                }

                                $scope.productionplanningBundle.prodPlanSubProducts[n].quantity = ($scope.selectedBom.bom_sub_products[n].quantity) * oQuantity;
                                $scope.productionplanningBundle.prodPlanSubProducts[n].quantity = $scope.productionplanningBundle.prodPlanSubProducts[n].quantity.toFixed(4);


                            }
                            for (var n = 0; n < $scope.selectedBom.bom_packaging_lines.length; n++) {
                                if ($scope.productionplanningBundle.productionPlanningPackagingLines[n].finishedProduct == $scope.selectedBom.main_end_product.id) {
                                    $scope.productionplanningBundle.productionPlanningPackagingLines[n].quantity = ($scope.selectedBom.bom_packaging_lines[n].quantity / $scope.selectedBom.bom_packaging_lines[n].per_quantity ) * oQuantity;
                                    $scope.productionplanningBundle.productionPlanningPackagingLines[n].quantity = $scope.productionplanningBundle.productionPlanningPackagingLines[n].quantity.toFixed(4);

                                }
                                for (var p = 0; p < $scope.selectedBom.bom_sub_products.length; p++) {
                                    if ($scope.productionplanningBundle.productionPlanningPackagingLines[n].finishedProduct == $scope.selectedBom.bom_sub_products[p].product.id) {
                                        $scope.productionplanningBundle.productionPlanningPackagingLines[n].quantity = ($scope.selectedBom.bom_packaging_lines[n].quantity / $scope.selectedBom.bom_packaging_lines[n].per_quantity ) * $scope.selectedBom.bom_sub_products[p].quantity;
                                        $scope.productionplanningBundle.productionPlanningPackagingLines[n].quantity = $scope.productionplanningBundle.productionPlanningPackagingLines[n].quantity.toFixed(4);
                                    }
                                }
                            }
                            totalQuantityCalculate();
                            $scope.potencyChange();
                        }


                        totalQuantityCalculate();  // method for total quantity calculation
                        $scope.potencyChange();  // method for potency change calculation

                    }
                    else {
                        $scope.show_error('error', 'Please Select BOM first');
                    }
                }
        }
    }
    //method is called when potency changes or quantity changes
    $scope.potencyChange = function(potency,id)
    {
        $scope.totalPotencyQty = 0;

        //for loop for productionPlanningLines final quantity calculation where potency_type 1

        for( var y = 0 ; y < $scope.selectedBom.bom_lines.length ; y++ )
        {
            if($scope.selectedBom.bom_lines[y].potency_type == 1)
            {
                $scope.productionplanningBundle.productionPlanningLines[y].finalQuantity = $scope.productionplanningBundle.productionPlanningLines[y].quantity;
            }
        }

        //for loop for productionPlanningLines final quantity calculation where potency_type 2

        for( var g = 0 ; g < $scope.selectedBom.bom_lines.length ; g++ ) {
            if ( $scope.selectedBom.bom_lines[g].potency_type == 2 ) {
                // console.log("potency_type= 2")
                $scope.productionplanningBundle.productionPlanningLines[g].finalQuantity = (($scope.productionplanningBundle.productionPlanningLines[g].quantity * 100) / $scope.productionplanningBundle.productionPlanningLines[g].potency);
                $scope.productionplanningBundle.productionPlanningLines[g].finalQuantity = $scope.productionplanningBundle.productionPlanningLines[g].finalQuantity.toFixed(4);

                $scope.productionplanningBundle.productionPlanningLines[g].potencyQuantity = ($scope.productionplanningBundle.productionPlanningLines[g].finalQuantity - $scope.productionplanningBundle.productionPlanningLines[g].quantity);
                $scope.productionplanningBundle.productionPlanningLines[g].potencyQuantity = $scope.productionplanningBundle.productionPlanningLines[g].potencyQuantity.toFixed(4);

                $scope.totalPotencyQty = $scope.totalPotencyQty + parseFloat($scope.productionplanningBundle.productionPlanningLines[g].potencyQuantity);
            }
        }

        //for loop for productionPlanningLines final quantity calculation where potency_type 3

        for( var k = 0 ; k < $scope.selectedBom.bom_lines.length ; k++ ) {
            if ( $scope.selectedBom.bom_lines[k].potency_type == 3 ) {

                if( $scope.count_type == 1 )
                {
                    if( $scope.totalPotencyQty < $scope.productionplanningBundle.productionPlanningLines[k].quantity )
                    {
                        $scope.productionplanningBundle.productionPlanningLines[k].finalQuantity = $scope.productionplanningBundle.productionPlanningLines[k].quantity - $scope.totalPotencyQty;
                        // $scope.final_quantity_field = true;
                    }
                }

                //case 2 when total potency type excipeint is more than 1 in rows final qunatity field must be editable for those
                if( $scope.count_type > 1 )
                {
                    // $scope.final_quantity_field = false;
                }
            }
        }
        totalFinalQuantityCalculate();  //method to calculate total final quantity
    }

    //method for total quantity calculation starts

    function totalQuantityCalculate() {
        $scope.totalQuantity = 0;

        for( var t = 0 ; t < $scope.productionplanningBundle.productionPlanningLines.length ; t++ )
        {
            $scope.totalQuantity = $scope.totalQuantity + parseFloat($scope.productionplanningBundle.productionPlanningLines[t].quantity);
        }
        check_if_equal();
    }
    //method for total quantity calculation ends


    //method for total final quantity calculation starts
    function totalFinalQuantityCalculate () {
        $scope.totalFinalQuantity = 0;
        for(var t = 0 ; t < $scope.productionplanningBundle.productionPlanningLines.length ; t++ )
        {
            $scope.totalFinalQuantity = $scope.totalFinalQuantity + parseFloat($scope.productionplanningBundle.productionPlanningLines[t].finalQuantity);

        }
        check_if_equal(); // method for check if quantity and final quantity equal or not
    }
    //method for total final quantity calculation ends

    //method is called when final quantity changes in column for potency type 3 is more than 1 column
    $scope.FinalQuantityChange = function()
    {
        totalFinalQuantityCalculate(); //method for total final quantity calculation
    }

    // method for check if total quantity and total final quantity equal or not

    function check_if_equal() {

        if( $scope.totalQuantity != $scope.totalFinalQuantity )
        {
            $scope.back = false; //flag false which make text color red if total quantity and total final quantity is not equal
        }
        else
            $scope.back = true;  //flag true which make text color black if total quantity and total final quantity is equal
    }

    //method for validation of master form

    function formValidity (data)
    {
        console.log("form");

        if(data.eit_bundle_manufacturebundle_productionplanning.productionPlanningNo != null && data.eit_bundle_manufacturebundle_productionplanning.userBatchNo != null && data.eit_bundle_manufacturebundle_productionplanning.location != null && data.eit_bundle_manufacturebundle_productionplanning.bom != null && data.eit_bundle_manufacturebundle_productionplanning.quantity != null)
        {

            return true;
        }
        else {
            return false;
        }
    }

    //new production planning function

    $scope.Production_planning_submit = function()
    {

        $('#productionplanningBundle_submit').text("....Saving");
        $('#productionplanningBundle_submit').attr("disabled",true);

        if( $scope.totalQuantity == $scope.totalFinalQuantity )

        {
            $scope.PlanningLines = []; //initialize for assigning for getting some specific value of production planning lines

            $scope.SubProducts = [];  //initialize for assigning for getting some specific value of SubProducts lines

            $scope.bomPackage = [];  //initialize for assigning for getting some specific value of bomPackage lines


            // loop for assigning for getting some specific value of production planning lines to planninglines array

            for( var i = 0 ; i < $scope.productionplanningBundle.productionPlanningLines.length ; i++ )
            {
                $scope.PlanningLines.push({

                    "bomLine" : $scope.productionplanningBundle.productionPlanningLines[i].bomLine,

                    "product" : $scope.productionplanningBundle.productionPlanningLines[i].product,

                    'quantity' : $scope.productionplanningBundle.productionPlanningLines[i].quantity,

                    'potency' : $scope.productionplanningBundle.productionPlanningLines[i].potency,

                    'potencyQuantity' : $scope.productionplanningBundle.productionPlanningLines[i].potencyQuantity,

                    'finalQuantity' : $scope.productionplanningBundle.productionPlanningLines[i].finalQuantity
                });
            }

            // loop for assigning for getting some specific value of prodPlanSubProducts lines to SubProducts array

            for ( var j = 0 ;j < $scope.productionplanningBundle.prodPlanSubProducts.length ; j++ )
            {
                $scope.SubProducts.push({

                    "product" : $scope.productionplanningBundle.prodPlanSubProducts[j].product,

                    'quantity': $scope.productionplanningBundle.prodPlanSubProducts[j].quantity,

                    'costPercentage' : $scope.productionplanningBundle.prodPlanSubProducts[j].costPercentage

                });
            }

            // loop for assigning for getting some specific value of productionPlanningPackagingLines to bomPackage array

            for ( var j = 0 ;j < $scope.productionplanningBundle.productionPlanningPackagingLines.length ; j++ )
            {
                $scope.bomPackage.push({

                    "product" : $scope.productionplanningBundle.productionPlanningPackagingLines[j].product,

                    'quantity': $scope.productionplanningBundle.productionPlanningPackagingLines[j].quantity,

                    'perQuantity' : $scope.productionplanningBundle.productionPlanningPackagingLines[j].perQuantity,

                    'finishedProduct' : $scope.productionplanningBundle.productionPlanningPackagingLines[j].finishedProduct
                });
            }

            console.log($scope.productionplanningBundle);

            var productionPlanningNew = {
                "eit_bundle_manufacturebundle_productionplanning" : {

                    "productionPlanningNo" : $scope.productionplanningBundle.productionPlanningNo,

                    "userBatchNo" : $scope.productionplanningBundle.userBatchNo,

                    "location" : parseInt($scope.productionplanningBundle.location),

                    "bom" : parseInt($scope.productionplanningBundle.bom),

                    "quantity" : $scope.productionplanningBundle.quantity,

                    "productionPlanningLines" : $scope.PlanningLines,

                    "prodPlanSubProducts" : $scope.SubProducts,

                    "productionPlanningPackagingLines" : $scope.bomPackage
                }
            }
            console.log(productionPlanningNew);

            var ob = {}; //initialize object
            ob.url = $window.form_submit_url; //assigning url where data will be submitted/posted
            ob.data = productionPlanningNew;
            var m = formValidity(ob.data);   //method for validation of master form

            if(m == true)
            {
                $http({
                    method: 'POST',
                    url: ob.url,
                    data: ob.data
            }).success(function (data) {
                console.log(data);
                if ( data.status == 1 )
                {
                    window.location.href = data.redirect ;
                }
                else
                {
                    var $m = $('#productionplanningBundle_submit');
                    $m.html('  <i class ="glyphicon glyphicon-floppy-disk"></i>Save');
                    $('#productionplanningBundle_submit').attr("disabled",false);
                    $scope.showError('error','Data is not saved');

                }
            }
            if(m == false)
            {
                $scope.showError('error','Please Fill the form carefully');
                var $m = $('#productionplanningBundle_submit');
                $m.html('  <i class ="glyphicon glyphicon-floppy-disk"></i>Save');
                $('#productionplanningBundle_submit').attr("disabled",false);
            }
        }
        else
        {
            var $m = $('#productionplanningBundle_submit');
            $m.html('  <i class ="glyphicon glyphicon-floppy-disk"></i>Save');
            $('#productionplanningBundle_submit').attr("disabled",false);
            $scope.showError('error','Total quantity and total final quantity must be equal');
        }
    }
    }

    //Error method
    $scope.showError = function(type, message)
    {
        if( type == 'success' )
        {
            $scope.errorFlag = false;
            $scope.message = message;
        } else if( type == 'error' )
        {
            $scope.errorFlag = true;
            $scope.message = message;
        }
    }
}]);

//method for edited data sumbit to server
// $scope.Production_planning_edit = function()
// {
//
//     $('#eit_bundle_manufacturebundle_productionplanning_edit').attr("disabled",true);
//     $('#eit_bundle_manufacturebundle_productionplanning_edit').html("..Updating",true);
//     if( $scope.totalQuantity == $scope.totalFinalQuantity )
//     {
//         $scope.PlanningLines = [];
//         $scope.SubProducts = [];
//         for( var i = 0 ; i < $scope.productionplanningBundle.productionPlanningLines.length ; i++ )
//         {
//             $scope.PlanningLines.push({
//
//                 'bomLine' : $scope.productionplanningBundle.productionPlanningLines[i].bomLine,
//
//                 'product' : $scope.productionplanningBundle.productionPlanningLines[i].product,
//
//                 'quantity': $scope.productionplanningBundle.productionPlanningLines[i].quantity,
//
//                 'potency': $scope.productionplanningBundle.productionPlanningLines[i].potency,
//
//                 'potencyQuantity': $scope.productionplanningBundle.productionPlanningLines[i].potencyQuantity,
//
//                 'finalQuantity': $scope.productionplanningBundle.productionPlanningLines[i].finalQuantity
//             });
//         }
//         for( var j = 0 ; j < $scope.productionplanningBundle.prodPlanSubProducts.length ; j++ )
//         {
//             $scope.SubProducts.push({
//
//                 "product" : $scope.productionplanningBundle.prodPlanSubProducts[j].product,
//
//                 'quantity' : $scope.productionplanningBundle.prodPlanSubProducts[j].quantity,
//
//                 'costPercentage' : $scope.productionplanningBundle.prodPlanSubProducts[j].costPercentage
//             });
//         }
//         var productionPlanningEdit = {"eit_bundle_manufacturebundle_productionplanning" : {
//             "productionPlanningNo" : $scope.productionPlanObject.production_planning_no,
//             "userBatchNo" : $scope.productionPlanObject.user_batch_no,
//             "location" : $scope.location_id,
//             "bom" : $scope.prodPlan_bom_id,
//             "quantity" : $scope.productionPlanObject.quantity,
//             "productionPlanningLines" : $scope.PlanningLines,
//             "prodPlanSubProducts" : $scope.SubProducts
//         }
//         }
//         console.log(productionPlanningEdit);
//         var ob = {};
//         ob.url = $window.form_submit_url;
//         ob.data = productionPlanningEdit;
//         $http({
//             method: 'POST',
//             url: ob.url,
//             data: ob.data
//         }).success(function (data) {
//             console.log(data.status);
//             if ( data.status == 1 ) {
//                 window.location.href = data.redirect;
//             } else {
//                 console.log("failed");
//                 var $m=$('#eit_bundle_manufacturebundle_productionplanning_edit');
//                 $m.html('<i class="glyphicon glyphicon-floppy-disk"></i>Edit');
//                 $('#eit_bundle_manufacturebundle_productionplanning_edit').attr("disabled",false);
//                 $scope.showError('error','Data is not updated');
//             }
//         });
//     }
//     else
//     {
//         var $m=$('#eit_bundle_manufacturebundle_productionplanning_edit');
//         $m.html('<i class = "glyphicon glyphicon-floppy-disk"></i>Edit');
//         $('#eit_bundle_manufacturebundle_productionplanning_edit').attr("disabled",false);
//         $scope.showError('error','Total quantity and total final quantity must be equal');
//     }
//
// }
