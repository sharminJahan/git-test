/**
 * Created by sumaia on 8/4/16.
 */
/**
 * Created by sumaia on 6/28/16.
 */

var app_angu = angular.module("productionPlanning", ["ngRoute","ngResource"])

    .config(['$interpolateProvider',function($interpolateProvider){
        console.log("config calling")
        $interpolateProvider.startSymbol('{[{').endSymbol('}]}');
    }])
    .controller('pro_plan_ctrl',['$window','$location','$scope','$http',function($window,$location,$scope,$http,boms){
        // $scope.base_url = '/app_dev.php';

        $scope.combo_bom = $window.boms;
        $scope.locations = $window.locations;

        $scope.eit_bundle_manufacturebundle_productionplanning = {};

        //declare of all variables
        $scope.textcolor = true;

        $scope.count_excipient_potency = 0;
        $scope.totalQuantity = 0;
        $scope.array_bom = [];
        $scope.productionPlanningLines = [];
        $scope.prodPlanSubProducts = [];

        $scope.counter = 0;
        $scope.totalFinalQuantity = 0;
        $scope.totalPotencyQty = 0;

        $scope.PlanningLines = [];
        $scope.SubProducts = [];

        // $scope.productionPlanning = {
        //     "productionPlanningNo" : null,
        //     "userBatchNo" : null,
        //     "location" : null,
        //     "bom" : null,
        //     "quantity" : 0,
        //     "productionPlanningLines" : [],
        //     "prodPlanSubProducts" : []
        // }

        //selected bom will create table row of Production Planning Line and Production Planning Sub Product
        $scope.generate_table_row = function (selected) {

            //when bom selected generate production planning lines
            console.log(selected);
            $scope.bom_id = selected; //selected bom id
            $scope.count_excipient_potency = 0;
            $scope.totalQuantity = 0;

            $scope.productionPlanningLines = [];
            $scope.prodPlanSubProducts = [];

            for( var w = 0; w < $window.boms.length; w++ )
            {
                if ( $window.boms[w].id == selected )
                {
                    $scope.array_bom = $window.boms[w];

                    for( var y = 0; y < $window.boms[w].bom_sub_products.length; y++ ) {

                        //array of  Production Planning Sub Product
                        $scope.prodPlanSubProducts.push({

                            'sub_pro_id' : $window.boms[w].bom_sub_products[y].product.id ,
                            'product_name' : $window.boms[w].bom_sub_products[y].product.product_code + '-' + $window.boms[w].bom_sub_products[y].product.name + '-'+ $window.boms[w].bom_sub_products[y].product.packet_size + '-' + $window.boms[w].bom_sub_products[y].product.unit.name ,
                            'quantity' : $window.boms[w].bom_sub_products[y].quantity.toFixed(4) ,
                            'cost_percent' : $window.boms[w].bom_sub_products[y].cost_percent
                        })
                    }
                    var i=0;

                    while( $scope.productionPlanningLines.length != $window.boms[w].bom_lines.length ) {

                        $window.boms[w].bom_lines[i].product.packet_size = $window.boms[w].bom_lines[i].product.packet_size ? $window.boms[w].bom_lines[i].product.packet_size : 0;

                        $scope.productionPlanningLines.push({
                            'bomLine': $window.boms[w].bom_lines[i].id,
                            'product': $window.boms[w].bom_lines[i].product.id,
                            'product_name': $window.boms[w].bom_lines[i].product.product_code + '-' + $window.boms[w].bom_lines[i].product.name + '-' + $window.boms[w].bom_lines[i].product.packet_size + '-' + $window.boms[w].bom_lines[i].product.unit.name,
                            'quantity': $window.boms[w].bom_lines[i].quantity.toFixed(4),
                            'per_quantity': $window.boms[w].bom_lines[i].per_quantity,
                            'potency': $window.boms[w].bom_lines[i].potency_type == 2 ? 100 : '',
                            'potency_type': $window.boms[w].bom_lines[i].potency_type,
                            'potencyQuantity': $window.boms[w].bom_lines[i].product.potency_quantity,
                            'finalQuantity': $window.boms[w].bom_lines[i].quantity.toFixed(4)
                        });

                        i++;
                    }
                }
            }

            $scope.counter = $scope.count();

            totalQuantityCalculation();

            totalFinalQuantityCalculation();
        }

        //method is called when quantity changes
        $scope.quantity_change = function (a) {

            if( a != null || a != undefined )
            {
                for( var m = 0; m < $scope.array_bom.bom_lines.length ; m++ )
                {
                    if( a != 0 ) {
                        if( $scope.array_bom.bom_lines[m].quantity != 1 )
                        {
                            $scope.productionPlanningLines[m].quantity = ( $scope.array_bom.bom_lines[m].quantity / $scope.array_bom.bom_lines[m].per_quantity ) * a;
                            $scope.productionPlanningLines[m].quantity = Math.ceil($scope.productionPlanningLines[m].quantity);
                            $scope.productionPlanningLines[m].quantity = floating( $scope.productionPlanningLines[m].quantity);

                        }
                        else {
                            $scope.productionPlanningLines[m].quantity = ($scope.array_bom.bom_lines[m].quantity / $scope.array_bom.bom_lines[m].per_quantity ) * a;
                            $scope.productionPlanningLines[m].quantity = floating($scope.productionPlanningLines[m].quantity);
                        }
                    }
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
                }
                for( var n = 0; n < $scope.array_bom.bom_sub_products.length; n++ )
                {
                    if( a != 0)
                    {
                        $scope.prodPlanSubProducts[n].quantity = ($scope.array_bom.bom_sub_products[n].quantity) * a;
                        $scope.prodPlanSubProducts[n].quantity = $scope.prodPlanSubProducts[n].quantity.toFixed(4);
                    }
                }
                totalQuantityCalculation();
                $scope.potency_call();
            }
        }

        //count exciepient potency type in a table

        $scope.count = function () {

            for( var t = 0; t < $scope.productionPlanningLines.length ; t++ )
            {
                if( $scope.productionPlanningLines[ t ].potency_type == 3 )
                {
                    $scope.count_excipient_potency = $scope.count_excipient_potency + 1;
                }
            }
            return $scope.count_excipient_potency;
        }

        //method is called when total quantity changes
        function totalQuantityCalculation() {
            $scope.totalQuantity = 0;
            for( var t = 0 ; t < $scope.productionPlanningLines.length ; t++ )
            {
                $scope.totalQuantity = $scope.totalQuantity + parseFloat($scope.productionPlanningLines[t].quantity);
            }

            check_if_equal();
        }

        //method is called when final quantity changes in column for potency type 3 is more than 1 column
        $scope.FinalQuantityChange = function()
        {
            totalFinalQuantityCalculation();
        }

        //method is called when final quantity changes
        function totalFinalQuantityCalculation () {

            $scope.totalFinalQuantity = 0;
            for( var t = 0 ; t < $scope.productionPlanningLines.length ; t++ )
            {
                $scope.totalFinalQuantity = $scope.totalFinalQuantity + parseFloat($scope.productionPlanningLines[t].finalQuantity);

            }
            check_if_equal();
        }

        // if total quantity and total final quantity are equal or not
        function check_if_equal () {

            if( $scope.totalQuantity != $scope.totalFinalQuantity )
            {
                $scope.textcolor = false;
            }
            else
                $scope.textcolor = true;
        }

        // if potency changes
        $scope.potency_call = function( potency, id )
        {
            $scope.totalPotencyQty = 0;
            for( var y = 0; y < $scope.productionPlanningLines.length ; y++ )
            {
                if( $scope.productionPlanningLines[y].potency_type == 1 )
                {
                    $scope.productionPlanningLines[y].finalQuantity = $scope.productionPlanningLines[y].quantity;
                }
            }
            for( var g = 0 ; g < $scope.productionPlanningLines.length ; g++ ) {

                if ($scope.productionPlanningLines[g].potency_type == 2) {
                    $scope.productionPlanningLines[g].finalQuantity = (($scope.productionPlanningLines[g].quantity * 100) / $scope.productionPlanningLines[g].potency);

                    $scope.productionPlanningLines[g].finalQuantity = $scope.productionPlanningLines[g].finalQuantity.toFixed(4);

                    $scope.productionPlanningLines[g].potencyQuantity = ($scope.productionPlanningLines[g].finalQuantity - $scope.productionPlanningLines[g].quantity);

                    $scope.productionPlanningLines[g].potencyQuantity = $scope.productionPlanningLines[g].potencyQuantity.toFixed(4);

                    $scope.totalPotencyQty = $scope.totalPotencyQty + parseFloat($scope.productionPlanningLines[g].potencyQuantity);
                }
            }
            for( var k = 0 ; k < $scope.productionPlanningLines.length; k++ ) {

                if ( $scope.productionPlanningLines[k].potency_type == 3 ) {
                    if( $scope.counter == 1 )
                    {
                        if( $scope.totalPotencyQty < $scope.productionPlanningLines[k].quantity )
                        {
                            $scope.productionPlanningLines[k].finalQuantity = $scope.productionPlanningLines[k].quantity - $scope.totalPotencyQty;

                            // $scope.final_quantity_field = true;
                        }
                        if( $scope.totalPotencyQty > $scope.productionPlanningLines[k].quantity )
                        {
                            $scope.productionPlanningLines[k].finalQuantity = $scope.productionPlanningLines[k].quantity;
                        }
                    }
                    //case 2 when total potency type excipeint is more than 1 in rows final qunatity field must be editable for those
                    if( $scope.counter > 1 )
                    {
                        // $scope.final_quantity_field = false;
                    }
                }
            }
            totalFinalQuantityCalculation();
        }

        //new procduction planning function
        $scope.Production_planning_create = function()
        {
            $('#eit_bundle_manufacturebundle_productionplanning_submit').text("....Saving");
            $('#eit_bundle_manufacturebundle_productionplanning_submit').attr("disabled",true);

            if( $scope.totalQuantity == $scope.totalFinalQuantity )
            {
                $scope.PlanningLines = [];
                $scope.SubProducts = [];
                for( var i = 0 ; i < $scope.productionPlanningLines.length ; i++ )
                {
                    $scope.PlanningLines.push({
                        "bomLine" : $scope.productionPlanningLines[i].bomLine,

                        "product" : $scope.productionPlanningLines[i].product,

                        'quantity' : $scope.productionPlanningLines[i].quantity,

                        'potency' : $scope.productionPlanningLines[i].potency,

                        'potencyQuantity' : $scope.productionPlanningLines[i].potencyQuantity,

                        'finalQuantity' : $scope.productionPlanningLines[i].finalQuantity
                    });
                }
                for ( var j = 0 ;j < $scope.prodPlanSubProducts.length ; j++ )
                {
                    $scope.SubProducts.push({
                        "product" : $scope.prodPlanSubProducts[j].sub_pro_id,

                        'quantity': $scope.prodPlanSubProducts[j].quantity,

                        'costPercentage' : $scope.prodPlanSubProducts[j].cost_percent
                    });
                }
                var eit_bundle_manufacturebundle_productionplanning = {"eit_bundle_manufacturebundle_productionplanning" : {

                    "productionPlanningNo" : $scope.eit_bundle_manufacturebundle_productionplanning.productionPlanningNo,

                    "userBatchNo" : $scope.eit_bundle_manufacturebundle_productionplanning.userBatchNo,

                    "location" : parseInt($scope.eit_bundle_manufacturebundle_productionplanning.location),

                    "bom" : parseInt($scope.eit_bundle_manufacturebundle_productionplanning.bom),

                    "quantity" : $scope.eit_bundle_manufacturebundle_productionplanning.quantity,

                    "productionPlanningLines" : $scope.PlanningLines,

                    "prodPlanSubProducts" : $scope.SubProducts
                }
                }
                console.log(eit_bundle_manufacturebundle_productionplanning);
                var ob = {};
                ob.url = $window.form_submit_url;
                ob.data = eit_bundle_manufacturebundle_productionplanning;
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
                        var $m=$('#eit_bundle_manufacturebundle_productionplanning_submit');
                        $m.html('  <i class="glyphicon glyphicon-floppy-disk"></i>Save');
                        $('#eit_bundle_manufacturebundle_productionplanning_submit').attr("disabled",false);
                        $scope.show_error('error','Data is not saved');

                    }
                });
            }
            else
            {
                var $m=$('#eit_bundle_manufacturebundle_productionplanning_submit');
                $m.html('  <i class="glyphicon glyphicon-floppy-disk"></i>Save');
                $('#eit_bundle_manufacturebundle_productionplanning_submit').attr("disabled",false);
                $scope.show_error('error','Total quantity and total final quantity must be equal');
            }
        }
        $scope.show_error = function(type, message)
        {
            if( type == 'success' )
            {
                $scope.error_flag = false;
                $scope.message = message;
            } else if( type == 'error' )
            {
                $scope.error_flag = true;
                $scope.message = message;
            }
        }
    }])
    .controller('pro_plan_edit',['$window','$location','$scope','$http',function($window,$location,$scope,$http,boms){
        $scope.base_url = '/app_dev.php';
        $scope.data_b = $window.boms;

        $scope.textcolor = 1;//flag for total quantity & total final quantity call
        $scope.eit_bundle_manufacturebundle_productionplanning = {};

        $scope.locations = $window.locations;
        $scope.prodPlan_ob = $window.prodPlan;
        console.log($scope.prodPlan_ob);

        $scope.productionPlanningLines = [];
        $scope.prodPlanSubProducts = [];

        $scope.array_bom = [];

        $scope.newly_selected_bom = []; //array for new selected bom
        $scope.boms_combo = [];
        $scope.locations_combo = [];

        $scope.totalFinalQuantity = 0;

        // variable for count excipient potency type
        $scope.counter = 0;
        $scope.count_excipient_potency = 0;

        $scope.PlanningLines = [];
        $scope.SubProducts = [];

        //initial call when page is loaded
        $scope.init_call = function() {

            $scope.array_bom = $scope.prodPlan_ob.bom; // it works when new bom is not selected but quantity changes
            $scope.productionPlanningLines = [];
            $scope.prodPlanSubProducts = [];

            if( $scope.prodPlan_ob.production_planning_lines.length > 0 ) {
                for ( var k = 0; k < $scope.prodPlan_ob.bom.bom_lines.length ; k++ ) {
                    $scope.productionPlanningLines.push({
                        // 'id': k + 1,
                        'bomLine' : $scope.prodPlan_ob.bom.bom_lines[k].id,
                        "product": $scope.prodPlan_ob.bom.bom_lines[k].product.id,
                        'product_name': $scope.prodPlan_ob.production_planning_lines[k].product.product_code + '-' + $scope.prodPlan_ob.production_planning_lines[k].product.name + '-' + $scope.prodPlan_ob.production_planning_lines[k].product.packet_size + '-' + $scope.prodPlan_ob.production_planning_lines[k].product.unit.name,
                        'quantity': (($scope.prodPlan_ob.bom.bom_lines[k].quantity * $scope.prodPlan_ob.quantity) / $scope.prodPlan_ob.bom.bom_lines[k].per_quantity),
                        'per_quantity': $scope.prodPlan_ob.bom.bom_lines[k].per_quantity,
                        'potency': $scope.prodPlan_ob.bom.bom_lines[k].potency_type == 2 ? 100 : '',
                        'potency_type': $scope.prodPlan_ob.bom.bom_lines[k].potency_type,
                        'potencyQuantity': $scope.prodPlan_ob.bom.bom_lines[k].potency_quantity,
                        'finalQuantity': $scope.prodPlan_ob.production_planning_lines[k].final_quantity
                    });
                }
            }

            for( var p = 0 ; p < $scope.prodPlan_ob.prod_plan_sub_products.length ; p++ )
            {
                //sub product table array
                $scope.prodPlanSubProducts.push({
                    // "id":p+1,
                    'product': $scope.prodPlan_ob.prod_plan_sub_products[p].product.id ,
                    'product_name': $scope.prodPlan_ob.prod_plan_sub_products[p].product.product_code + '-' + $scope.prodPlan_ob.prod_plan_sub_products[p].product.name + '-' + $scope.prodPlan_ob.prod_plan_sub_products[p].product.packet_size + '-' + $scope.prodPlan_ob.prod_plan_sub_products[p].product.unit.name,
                    'quantity':$scope.prodPlan_ob.prod_plan_sub_products[p].quantity.toFixed(4),
                    'cost_percent': $scope.prodPlan_ob.prod_plan_sub_products[p].cost_percentage
                });
            }

            //array for location select combobox
            $scope.locations_combo = [];
            for ( var m = 0; m < $scope.locations.length ; m++ ) {
                $scope.locations_combo.push({
                    'id':  $scope.locations[m].id,
                    'name': $scope.locations[m].location_name
                });
            }

            $scope.prodPlan_bom_id = $scope.prodPlan_ob.bom.id;
            $scope.location_id = $scope.prodPlan_ob.location.id;
            $scope.prodPlan_bom = $scope.prodPlan_ob.bom.main_end_product.product_code + '-' + $scope.prodPlan_ob.bom.main_end_product.name + '-' + $scope.prodPlan_ob.bom.main_end_product.packet_size + '-' + $scope.prodPlan_ob.bom.main_end_product.unit.name;

            //array of boms select combobox
            $scope.boms_combo = [];
            for ( var n = 0 ; n < $window.boms.length ; n++ ) {
                $scope.boms_combo.push({
                    'id': $window.boms[n].id,
                    'BOM': $window.boms[n].main_end_product.product_code + '-' + $window.boms[n].main_end_product.name + '-' + $window.boms[n].main_end_product.packet_size + '-' + $window.boms[n].main_end_product.unit.name,
                    'bom_lines': $window.boms[n].bom_lines,
                    'bom_sub_products': $window.boms[n].bom_sub_products
                });
            }

            totalQuantityCalculation();
            totalFinalQuantityCalculation();
        }

        //create generate table when bom selected
        $scope.generate_table_row = function (selected) {
            // console.log(selected);
            $scope.count_excipient_potency = 0;
            $scope.productionPlanningLines = [];
            $scope.prodPlanSubProducts = [];

            for( var e = 0 ; e < $window.boms.length ; e++ ) {
                if( selected == $window.boms[e].id )
                {
                    console.log($window.boms[e]);
                    $scope.array_bom = $window.boms[e];
                    $scope.newly_selected_bom = [];
                    $scope.newly_selected_bom = $window.boms[e];

                    for(var y=0;y<$window.boms[e].bom_sub_products.length;y++) {

                        $scope.prodPlanSubProducts.push({

                            'product': $window.boms[e].bom_sub_products[y].product.id,

                            'product_name': $window.boms[e].bom_sub_products[y].product.product_code + '-' + $window.boms[e].bom_sub_products[y].product.name + '-' + $window.boms[e].bom_sub_products[y].product.packet_size + '-' + $window.boms[e].bom_sub_products[y].product.unit.name,

                            'quantity': $window.boms[e].bom_sub_products[y].quantity.toFixed(4),

                            'cost_percent': $window.boms[e].bom_sub_products[y].cost_percent
                        });
                    }
                    var i = 0;
                    while( $scope.productionPlanningLines.length != $window.boms[e].bom_lines.length ) {

                        $window.boms[e].bom_lines[i].product.packet_size = $window.boms[e].bom_lines[i].product.packet_size ? $window.boms[e].bom_lines[i].product.packet_size : 0 ;

                        $scope.productionPlanningLines.push({
                            'bomLine' : $window.boms[e].bom_lines[i].id,

                            'product': $window.boms[e].bom_lines[i].product.id,

                            'product_name': $window.boms[e].bom_lines[i].product.product_code + '-' + $window.boms[e].bom_lines[i].product.name + '-' + $window.boms[e].bom_lines[i].product.packet_size + '-' + $window.boms[e].bom_lines[i].product.unit.name,

                            'quantity': (($window.boms[e].bom_lines[i].quantity * $scope.prodPlan_ob.quantity) / ($window.boms[e].bom_lines[i].per_quantity)),

                            'per_quantity': $window.boms[e].bom_lines[i].per_quantity,

                            'potency': $window.boms[e].bom_lines[i].potency_type == 2?100:'',

                            'potency_type': $window.boms[e].bom_lines[i].potency_type,

                            'potencyQuantity': $window.boms[e].bom_lines[i].potency_quantity,

                            'finalQuantity': $window.boms[e].bom_lines[i].quantity
                        });
                        i++;
                    }
                }
            }
            $scope.counter = $scope.count();
            totalQuantityCalculation();
            totalFinalQuantityCalculation();
        }

        // count excipient potency type
        $scope.count = function () {
            for( var t = 0 ; t < $scope.productionPlanningLines.length ; t++ )
            {
                if($scope.productionPlanningLines[t].potency_type == 3)
                {
                    $scope.count_excipient_potency = $scope.count_excipient_potency + 1;
                }
            }
            return $scope.count_excipient_potency;
        }

        // if final quantity and total final quantity is equal or not
        function check_if_equal () {
            if($scope.totalQuantity != $scope.totalFinalQuantity)
            {
                $scope.textcolor = 0;
            }
            else
            {
                $scope.textcolor = 1;
            }
        }

        // calculation of total quantity
        function totalQuantityCalculation () {
            $scope.totalQuantity = 0;
            for( var t = 0 ; t < $scope.productionPlanningLines.length ; t++ )
            {
                $scope.totalQuantity = $scope.totalQuantity + parseFloat($scope.productionPlanningLines[t].quantity);

            }
            check_if_equal();
        }

        //method is called when final quantity changes in column for potency type 3 is more than 1 column

        $scope.FinalQuantityChange = function()
        {
            totalFinalQuantityCalculation();
        }

        // calculation of total final quantity
        function totalFinalQuantityCalculation() {
            $scope.totalFinalQuantity = 0;
            for( var t = 0 ; t < $scope.productionPlanningLines.length ; t++ )
            {
                $scope.totalFinalQuantity = $scope.totalFinalQuantity + parseFloat($scope.productionPlanningLines[t].finalQuantity);
            }
            check_if_equal();
        }

        //method is called when quantity changes
        $scope.quantity_change = function (a) {

            if( a != null || a != undefined )
            {
                for( var m = 0 ; m < $scope.array_bom.bom_lines.length ; m++ )
                {
                    if( a != 0 ) {
                        if( $scope.array_bom.bom_lines[m].quantity != 1 )
                        {
                            $scope.productionPlanningLines[m].quantity = ($scope.array_bom.bom_lines[m].quantity / $scope.array_bom.bom_lines[m].per_quantity ) * a;
                            $scope.productionPlanningLines[m].quantity = Math.ceil($scope.productionPlanningLines[m].quantity);
                            $scope.productionPlanningLines[m].quantity = floating( $scope.productionPlanningLines[m].quantity);

                        }
                        else {
                            $scope.productionPlanningLines[m].quantity = ($scope.array_bom.bom_lines[m].quantity / $scope.array_bom.bom_lines[m].per_quantity ) * a;
                            $scope.productionPlanningLines[m].quantity = floating($scope.productionPlanningLines[m].quantity);
                        }

                    }
                    function floating(x)
                    {
                        if( x%1 == 0 )
                        {
                            return x;
                        }
                        else
                        {
                            x = x.toFixed(4);
                            return x;
                        }
                    }
                }
                for( var n = 0 ; n < $scope.array_bom.bom_sub_products.length ; n++ )
                {
                    if( a != 0 )
                    {
                        $scope.prodPlanSubProducts[n].quantity = ($scope.array_bom.bom_sub_products[n].quantity) * a;
                        $scope.prodPlanSubProducts[n].quantity = $scope.prodPlanSubProducts[n].quantity.toFixed(4);
                    }
                }
                totalQuantityCalculation();
                $scope.potency_call();
            }
        }

        //method is called when potency changes
        $scope.potency_call = function(potency,id)
        {
            $scope.totalPotencyQty = 0;
            for( var y = 0 ; y < $scope.productionPlanningLines.length ; y++ )
            {
                if($scope.productionPlanningLines[y].potency_type == 1)
                {
                    $scope.productionPlanningLines[y].finalQuantity = $scope.productionPlanningLines[y].quantity;
                }
            }
            for( var g = 0 ; g < $scope.productionPlanningLines.length ; g++ ) {
                if ( $scope.productionPlanningLines[g].potency_type == 2 ) {
                    // console.log("potency_type= 2")
                    $scope.productionPlanningLines[g].finalQuantity = (($scope.productionPlanningLines[g].quantity * 100) / $scope.productionPlanningLines[g].potency);
                    $scope.productionPlanningLines[g].finalQuantity = $scope.productionPlanningLines[g].finalQuantity.toFixed(4);
                    $scope.productionPlanningLines[g].potencyQuantity = ($scope.productionPlanningLines[g].finalQuantity - $scope.productionPlanningLines[g].quantity);
                    $scope.productionPlanningLines[g].potencyQuantity = $scope.productionPlanningLines[g].potencyQuantity.toFixed(4);
                    $scope.totalPotencyQty = $scope.totalPotencyQty + parseFloat($scope.productionPlanningLines[g].potencyQuantity);
                }
            }
            for( var k = 0 ; k < $scope.productionPlanningLines.length ; k++ ) {
                if ( $scope.productionPlanningLines[k].potency_type == 3 ) {

                    if( $scope.counter == 1 )
                    {
                        if( $scope.totalPotencyQty < $scope.productionPlanningLines[k].quantity )
                        {
                            $scope.productionPlanningLines[k].finalQuantity = $scope.productionPlanningLines[k].quantity - $scope.totalPotencyQty;
                            // $scope.final_quantity_field = true;
                        }
                    }
                    //case 2 when total potency type excipeint is more than 1 in rows final qunatity field must be editable for those
                    if( $scope.counter > 1 )
                    {
                        // $scope.final_quantity_field = false;
                    }
                }
            }
            totalFinalQuantityCalculation();
        }

        //method for edited data sumbit to server
        $scope.Production_planning_edit = function()
        {
            console.log($scope.location_id);
            console.log($scope.prodPlan_bom_id);
            $('#eit_bundle_manufacturebundle_productionplanning_edit').attr("disabled",true);
            $('#eit_bundle_manufacturebundle_productionplanning_edit').html("..Updating",true);
            if( $scope.totalQuantity == $scope.totalFinalQuantity )
            {
                $scope.PlanningLines = [];
                $scope.SubProducts = [];
                for( var i = 0 ; i < $scope.productionPlanningLines.length ; i++ )
                {
                    $scope.PlanningLines.push({
                        // 'id': $scope.productionPlanningLines[i].id,
                        'bomLine' : $scope.productionPlanningLines[i].bomLine,
                        'product' : $scope.productionPlanningLines[i].product,
                        'quantity': $scope.productionPlanningLines[i].quantity,
                        'potency': $scope.productionPlanningLines[i].potency,
                        'potencyQuantity': $scope.productionPlanningLines[i].potencyQuantity,
                        'finalQuantity': $scope.productionPlanningLines[i].finalQuantity
                    });
                }
                for( var j = 0 ; j < $scope.prodPlanSubProducts.length ; j++ )
                {
                    $scope.SubProducts.push({
                        // 'id': $scope.prodPlanSubProducts[j].id,
                        "product" : $scope.prodPlanSubProducts[j].product,
                        'quantity' : $scope.prodPlanSubProducts[j].quantity,
                        'costPercentage' : $scope.prodPlanSubProducts[j].cost_percent
                    });
                }
                var eit_bundle_manufacturebundle_productionplanning = {"eit_bundle_manufacturebundle_productionplanning" : {
                    "productionPlanningNo" : $scope.prodPlan_ob.production_planning_no,
                    "userBatchNo" :$scope.prodPlan_ob.user_batch_no,
                    "location" : $scope.location_id,
                    "bom" : $scope.prodPlan_bom_id,
                    "quantity" : $scope.prodPlan_ob.quantity,
                    "productionPlanningLines" : $scope.PlanningLines,
                    "prodPlanSubProducts" : $scope.SubProducts
                }
                }
                console.log(eit_bundle_manufacturebundle_productionplanning)
                var ob = {};
                ob.url = $window.form_submit_url;
                ob.data = eit_bundle_manufacturebundle_productionplanning;
                $http({
                    method: 'POST',
                    url: ob.url,
                    data: ob.data
                }).success(function (data) {
                    console.log(data.status);
                    if ( data.status == 1 ) {
                        console.log("success");
                        window.location.href = data.redirect;
                    } else {
                        console.log("failed");
                        var $m=$('#eit_bundle_manufacturebundle_productionplanning_edit');
                        $m.html('<i class="glyphicon glyphicon-floppy-disk"></i>Edit');
                        $('#eit_bundle_manufacturebundle_productionplanning_edit').attr("disabled",false);
                        $scope.show_error('error','Data is not updated');
                    }
                });
            }
            else
            {
                var $m=$('#eit_bundle_manufacturebundle_productionplanning_edit');
                $m.html('<i class = "glyphicon glyphicon-floppy-disk"></i>Edit');
                $('#eit_bundle_manufacturebundle_productionplanning_edit').attr("disabled",false);
                $scope.show_error('error','Total quantity and total final quantity must be equal');
            }

        }
        $scope.show_error = function(type, message)
        {
            if( type == 'success' )
            {
                $scope.error_flag = false;
                $scope.message = message;
            } else if( type == 'error' )
            {
                $scope.error_flag = true;
                $scope.message = message;
            }
        }
    }]);


