/**
 * Created by sumaia on 8/14/16.
 */
angular.module("collectionPlanning", ["ngRoute", "ngResource"]).config(['$interpolateProvider', function($interpolateProvider){
    console.log("config calling")
    $interpolateProvider.startSymbol('{[{').endSymbol('}]}');
}]).controller('collectionController',['$window', '$scope','$filter', '$http', function ($window, $scope, $filter,$http) {

    console.log($window.data);

    var collectionData = {};
    // var all customers
    $scope.customers = $window.data.customers;
    var collectionTypesObject = $window.collectionTypes;
    console.log(collectionTypesObject);

    console.log("$window.collectionTypes");
    console.log($window.collectionTypes);


    var uInvoice = _.uniq($window.data.invoices, function(p){ return p.invoice_no; });// duplicacy remove from array according to id
    $window.data.invoices = uInvoice;
    //array for collectionTypes
    $scope.collectionTypes = [];
    for(var key in collectionTypesObject) {
        var value = collectionTypesObject[key];
        $scope.collectionTypes.push({
            'id' : key * 1  ,
            'name' : value
        })
    }
    console.log($scope.collectionTypes );
    $scope.collectionFromController = $window.data.collection; // assigning object in collection edit page


    $scope.saleDiscounts = $window.data.saleDiscounts;
    console.log("$window.data.collection");

    console.log($scope.collectionFromController);

    $scope.invoices = [];
    $scope.step = 1; // for next step in form

    $scope.customerDetails = [];



    // Initialize the collection object
    $scope.collection = {
        'customer' : null,
        'collectionNo' : null,
        'mrNo' : null,
        'collectionType' : null,
        'totalCollectionAmount' : 0,
        'collectionDate' : null,
        'collectionLines' : [],

        'totalCollectionAmount' : 0,
        'totalCollectedAmount' : 0,
        'totalCashDiscount' : 0,
        'totlaNetCollection' : 0,
        'totalCollectionPending' : 0
    }


    //methods when new row is added in collectionLines
    $scope.addCollectionLine = function () {

        $scope.collection.collectionLines.push({

            'order' : null,
            'invoiceAmount' : 0,
            'collectionAmount' : 0,
            'collectedAmount' : 0,
            // 'grossTotal' : 0,
            'discountPercent' : 0,
            'discount' : 0,
            'cashDiscount' : 0,
            'netCollection' : 0,
            'collectionPending' : 0
        });
    }

    //method call when page is loaded
    $scope.init = function() {
        $scope.errorFlag = false;

        // Updating our scope order object using the order object we get from controller

        if ($scope.collectionFromController.collection_lines.length > 0) {
            // collection object from controller has some data, so it's edit page

            //assigning value in collection edit page
            $scope.collection.customer = $scope.collectionFromController.customer.id;
            $scope.collection.collectionNo = $scope.collectionFromController.collection_no;
            $scope.collection.mrNo = $scope.collectionFromController.mr_no;
            $scope.collection.collectionType = $scope.collectionFromController.collection_type;
            $scope.collection.totalCollectionAmount = $scope.collectionFromController.total_collection_amount;
            var stringDate = new Date($scope.collectionFromController.collection_date);
            $scope.collection.collectionDate = stringDate;

            //loop for combobox of customer
            $scope.customer_combo = [];
            for( var j = 0 ; j < $scope.customers.length ; j++)
            {
                $scope.customer_combo.push({
                    'id':  $scope.customers[j].id,
                    'name': $scope.customers[j].first_name + ' ' +$scope.customers[j].last_name
                });
            }
            //loop for combobox of invoices
            $scope.invoices = [];
            for(var i = 0; i < $window.data.invoices.length ; i++ )
            {
                if( $window.data.invoices[i].customer.id == $scope.collection.customer )
                {
                    $scope.invoices.push({

                        'company' : $window.data.invoices[i].company,
                        'created_by' : $window.data.invoices[i].created_by,
                        'customer' : $window.data.invoices[i].customer,
                        'name': $window.data.invoices[i].invoice_no + '-' + $window.data.invoices[i].invoice_date.split('T'),

                        'invoice_date' : $window.data.invoices[i].invoice_date,
                        'invoice_ledgers' : $window.data.invoices[i].invoice_ledgers,
                        'invoice_no' : $window.data.invoices[i].invoice_no,
                        'invoice_type' : $window.data.invoices[i].invoice_type,
                        'location' : $window.data.invoices[i].location,
                        'market_organogram' : $window.data.invoices[i].market_organogram,
                        'net_sale' : $window.data.invoices[i].net_sale,
                        'order_lines' : $window.data.invoices[i].order_lines,
                        'status' : $window.data.invoices[i].status,
                        'total_discount' : $window.data.invoices[i].total_discount,
                        'total_sale' : $window.data.invoices[i].total_sale

                    });
                }

            }

            //assigning value of collection lines row from collectionFromController object
            for (var i = 0; i < $scope.collectionFromController.collection_lines.length; i++) {
                $scope.collection.collectionLines.push({

                    'order' : $scope.collectionFromController.collection_lines[i].order.id,
                    'invoiceAmount' : $scope.collectionFromController.collection_lines[i].invoice_amount,
                    'collectionAmount' : $scope.collectionFromController.collection_lines[i].collection_amount,
                    'collectedAmount' : $scope.collectionFromController.collection_lines[i].collected_amount,
                    // 'grossTotal' : 0,
                    'discountPercent' : $scope.collectionFromController.collection_lines[i].discount_percent,
                    'discount' : $scope.collectionFromController.collection_lines[i].discount,
                    'cashDiscount' : $scope.collectionFromController.collection_lines[i].cash_discount,
                    'netCollection' : $scope.collectionFromController.collection_lines[i].net_collection,
                    'collectionPending' : $scope.collectionFromController.collection_lines[i].collection_pending
                });
            }

            // details row
            for (var a = 0; a < $window.data.customers.length ; a++)
            {
                if ($scope.collection.customer == $window.data.customers[a].id) {
                    $scope.customerDetails = $window.data.customers[a];
                }
            }
            for (var m = 0; m < $scope.collectionTypes.length; m++) {
                if ($scope.collectionTypes[m].id == $scope.collection.collectionType) {
                    $scope.seletcedcollectTypes = $scope.collectionTypes[m].name;
                }
            }

            if($scope.collection.collectionDate != null)
            {
                var month = $scope.collection.collectionDate.getMonth() + 1;
                $scope.seletcedDate = $scope.collection.collectionDate.getDate() + '/' + month + '/' + $scope.collection.collectionDate.getFullYear() ;
            }
            // $scope.collection.cashDiscount = $scope.collectionFromController.total_cash_discount;
            calculateTotalRowValue(); //method is called for calculation total row value

        } else {
            // initialize for new collection
            $scope.collection = {

                'customer' : null,
                'collectionNo' : null,
                'mrNo' : null,
                'collectionType' : null,

                'collectionDate' : null,
                'collectionLines' : [],

                'totalCollectionAmount' : 0,
                'totalCollectedAmount' : 0,
                'totalCashDiscount' : 0,
                'totlaNetCollection' : 0,
                'totalCollectionPending' : 0
            }
        }
    }

    //on selection customer this method is called
    $scope.customerSelection = function (oCustomer) {

        $scope.invoices = [];
        for(var i = 0; i < $window.data.invoices.length ; i++ )
        {
            if( $window.data.invoices[i].customer.id == oCustomer )
            {
                $scope.invoices.push({

                    'company' : $window.data.invoices[i].company,
                    'created_by' : $window.data.invoices[i].created_by,
                    'customer' : $window.data.invoices[i].customer,

                    'invoice_date' : $window.data.invoices[i].invoice_date,
                    'invoice_ledgers' : $window.data.invoices[i].invoice_ledgers,
                    'invoice_no' : $window.data.invoices[i].invoice_no,
                    'invoice_type' : $window.data.invoices[i].invoice_type,
                    'location' : $window.data.invoices[i].location,
                    'market_organogram' : $window.data.invoices[i].market_organogram,
                    'net_sale' : $window.data.invoices[i].net_sale,
                    'order_lines' : $window.data.invoices[i].order_lines,
                    'status' : $window.data.invoices[i].status,
                    'total_discount' : $window.data.invoices[i].total_discount,
                    'total_sale' : $window.data.invoices[i].total_sale

                });
            }
        }
    }

    //method is called when collectionType is selected
    $scope.collectionTypeShow = function (oCollectionType) {
        if(/\S/.test(oCollectionType)) {
            for (var m = 0; m < $scope.collectionTypes.length; m++) {
                if ($scope.collectionTypes[m].id == oCollectionType) {
                    $scope.seletcedcollectTypes = $scope.collectionTypes[m].name;
                }
            }
        }
        else {
            $scope.seletcedcollectTypes = 'Collection Types is not selected';
        }
    }

    //method when invoice is chosen
    $scope.getInvoiceDetails = function (index,oOrder) {
        if(/\S/.test(oOrder) && oOrder != null )
        {

            $scope.errorFlag = checkDuplicateInvoice(oOrder, index);

            if($scope.errorFlag == false )
            {
                getInvoiceAmount(index,oOrder) ;
            }
            else if($scope.errorFlag == true)
            {
                $scope.showError('error','Sorry, you can not choose same invoice twice');
                $scope.collection.collectionLines[index].invoiceAmount = 0;
                $scope.collection.collectionLines[index].collectionAmount = 0;
                $scope.collection.collectionLines[index].collectedAmount = 0;
                $scope.collection.collectionLines[index].discountPercent = 0;
                $scope.collectedAmountchanges(index,0);
            }
        }
        else if(oOrder == null)
        {
            $scope.collection.collectionLines[index].invoiceAmount = 0;
            $scope.collection.collectionLines[index].collectionAmount = 0;
            $scope.collection.collectionLines[index].collectedAmount = 0;
            $scope.collection.collectionLines[index].discountPercent = 0;
            $scope.collectedAmountchanges(index,0);
            $scope.showError('error','Choose a Invoice');
        }
    }

    //method when invoice is selected to get invoice amount
    function getInvoiceAmount (index ,oOrder )
    {
        for( var i = 0; i < $scope.invoices.length ; i++ )
        {
            if( oOrder == $scope.invoices[i].invoice_no)
            {
                $scope.collection.invoice_typ = $scope.invoices[i].invoice_type.id;
                $scope.collection.credit = $scope.invoices[i].invoice_type.credit_days;
                $scope.collection.collectionLines[index].order = $scope.invoices[i].invoice_no;
                $scope.collection.collectionLines[index].invoiceAmount = $scope.invoices[i].total_sale;
                $scope.collection.collectionLines[index].collectionAmount = 600;
                // $scope.collection.collectionLines[index].discountPercent = 7;
                // console.log("$scope.collection.collectionLines[index].order" );
                // console.log($scope.collection.collectionLines[index].order );
                // console.log("$scope.collection.customer" );
                // console.log($scope.collection.customer );
                // console.log("index "+index );

                var discount_percent = getSaleDiscount(index,$scope.collection.customer,$scope.collection.collectionLines[index].order);
                $scope.collection.collectionLines[index].discountPercent = discount_percent * 1;
            }
        }
        calculateTotalRowValue();
    }

    // check if same invoice is selected twice or not
    function checkDuplicateInvoice (oOrder, index) {
        for(var t= 0 ; t < $scope.collection.collectionLines.length; t++) {
            console.log($scope.collection.collectionLines[t].order);
            if (oOrder == $scope.collection.collectionLines[t].order && t != index) {
                // console.log("true");
                return true;
            }
        }
        return false;
    }
    // Method for sale Discount
    function getSaleDiscount(invoice,customer,product) {
        var result = due_date($scope.collection.collectionDate , $scope.collection.credit);
        console.log(result);

        if($scope.saleDiscounts[1])
        {
            if($scope.saleDiscounts[1][customer])
            {
                if($scope.saleDiscounts[1][customer][product])
                {
                    if(result == true)
                        return $scope.saleDiscounts[1][customer][product].discount_percent;
                }
                if($scope.saleDiscounts[1][customer][0])
                {
                    if(result == true)
                        return $scope.saleDiscounts[1][customer][0].discount_percent;;
                }
            }

            if($scope.saleDiscounts[1][0])
            {
                if($scope.saleDiscounts[1][0][product])
                {
                    if(result == true)
                        return $scope.saleDiscounts[1][0][product].discount_percent;
                }
                if($scope.saleDiscounts[1][0][0])
                {
                    if(result == true)
                        return $scope.saleDiscounts[1][0][0].discount_percent;
                }
            }
            // return 0;
            $scope.showError('error', 'Credit days are overed');
        }
    }
    function due_date (invoiceDate,creditDays)
    {
        var dateIn = new Date(invoiceDate);

        dateIn.setDate(dateIn.getDate() + creditDays);

        var TodayDate = new Date();
        if(TodayDate <= dateIn )
        {
            return true;
        }
        else {
            return false;
        }

    }

    //method when collection amount changes
    $scope.collectedAmountchanges = function (index,oCollamount) {

        if(oCollamount == undefined)
        {
            $scope.showError('error','Sorry, Collected Amount can not be greater than collectionAmount or less than 0');
        }
        else {
            $scope.errorFlag = false;
            netCollectionCalculate(index);
            collectionPendingCalculate(index);
        }
    }

    //method for netCollection calculation
    function netCollectionCalculate (index)
    {
        $scope.collection.collectionLines[index].discount = (( $scope.collection.collectionLines[index].discountPercent / 100 ) * $scope.collection.collectionLines[index].collectedAmount ).toFixed(2);
        $scope.collection.collectionLines[index].discount = $scope.collection.collectionLines[index].discount * 1;

        $scope.collection.collectionLines[index].netCollection = $scope.collection.collectionLines[index].collectedAmount - $scope.collection.collectionLines[index].discount - $scope.collection.collectionLines[index].cashDiscount ;

    }

    //method for collection pending calculation
    function collectionPendingCalculate(index) {
        $scope.collection.collectionLines[index].collectionPending = $scope.collection.collectionLines[index].collectionAmount - $scope.collection.collectionLines[index].collectedAmount ;
        calculateTotalRowValue();
    }

    //method for total row value calculation
    function calculateTotalRowValue() {

        $scope.collection.totalCollectionAmount = 0;
        $scope.collection.totalCollectedAmount = 0;

        $scope.collection.totalCashDiscount = 0;
        $scope.collection.totalNetCollection = 0;
        $scope.collection.totalCollectionPending = 0;


        for( var i = 0; i < $scope.collection.collectionLines.length; i++ )
        {
            $scope.collection.totalCollectionAmount = $scope.collection.totalCollectionAmount + parseFloat($scope.collection.collectionLines[i].collectionAmount);
            $scope.collection.totalCollectionAmount = ($scope.collection.totalCollectionAmount.toFixed(2)) * 1;

            $scope.collection.totalCollectedAmount =  $scope.collection.totalCollectedAmount + parseFloat($scope.collection.collectionLines[i].collectedAmount ) ;
            $scope.collection.totalCollectedAmount = ($scope.collection.totalCollectedAmount.toFixed(2)) * 1;

            $scope.collection.totalCashDiscount = $scope.collection.totalCashDiscount + parseFloat($scope.collection.collectionLines[i].cashDiscount) ;
            $scope.collection.totalCashDiscount = ($scope.collection.totalCashDiscount.toFixed(2)) * 1;

            $scope.collection.totalNetCollection =  $scope.collection.totalNetCollection + parseFloat($scope.collection.collectionLines[i].netCollection) ;
            $scope.collection.totalNetCollection = ($scope.collection.totalNetCollection.toFixed(2)) * 1;


            $scope.collection.totalCollectionPending =  $scope.collection.totalCollectionPending + parseFloat($scope.collection.collectionLines[i].collectionPending) ;
            $scope.collection.totalCollectionPending = ($scope.collection.totalCollectionPending.toFixed(2)) * 1;
        }
    }


    // call for next step
    $scope.nextStep = function() {

        if( $scope.collection.customer != undefined &&  $scope.collection.collectionDate != undefined )
        {
            $scope.customerDetails = [];
            $scope.errorFlag = false;
            $scope.step = 2;

            for (var a = 0; a < $window.data.customers.length ; a++)
            {
                if ($scope.collection.customer == $window.data.customers[a].id) {
                    $scope.customerDetails = $window.data.customers[a];
                }
            }
            for (var m = 0; m < $scope.collectionTypes.length; m++) {
                if ($scope.collectionTypes[m].id == $scope.collection.collectionType) {
                    $scope.seletcedcollectTypes = $scope.collectionTypes[m].name;
                }
            }
            if($scope.collection.collectionDate != null)
            {
                var month = $scope.collection.collectionDate.getMonth() + 1;
                $scope.seletcedDate = $scope.collection.collectionDate.getDate() + '/' + month + '/' + $scope.collection.collectionDate.getFullYear() ;
            }
        } else {
            $scope.showError('error', 'Customer & Collection Date must be selected');
        }
    }

    // call for prevStep
    $scope.prevStep = function () {
        $scope.init();
        $scope.collection.collectionLines = [];
        $scope.step = 1;
    }

    //methods for validity check of form
    function checkValidity() {
        if($scope.collection.customer != null && $scope.collection.collectionType != null)
        {
            for (var m = 0; m < $scope.collection.collectionLines.length; m++) {

                if ($scope.collection.collectionLines.length > 0) {

                    if ($scope.collection.collectionLines[m].order != null) {

                        var check = checkDuplicateInvoice($scope.collection.collectionLines[m].order, m);


                        if (check == false) //no duplicate
                        {
                            if ($scope.collection.collectionLines[m].collectedAmount <= 0 || $scope.collection.collectionLines[m].collectedAmount == null) {
                                $scope.showError('error', 'Collected Amount can not be zero or less than zero ');
                                return false;
                            }
                            if ($scope.collection.collectionLines[m].collectedAmount != 0) {
                                return true;
                            }
                        }
                        return false;
                    }

                    else {
                        if ($scope.collection.collectionLines[m].order == null) {
                            $scope.showError('error', 'Collection Lines invoice must be selected');
                            return false;
                        }
                        if ($scope.collection.collectionLines[m].collectedAmount != 0) {
                            return true;
                        }
                        if ($scope.collection.collectionLines[m].collectedAmount <= 0 || $scope.collection.collectionLines[m].collectedAmount == null) {

                            $scope.showError('error', 'Collected Amount can not be zero or less than zero');
                            return false;
                        }

                    }
                }
            }
        }
    }

    //methods for collection form submit
    $scope.submitCollection = function () {

        $('#eit_bundle_salebundle_productionplanning_collection').text("....Saving");
        $('#eit_bundle_salebundle_productionplanning_collection').attr("disabled",true);
        $('#prev').attr("disabled",true);

        var submitCheck = checkValidity();   // method for check validation
        console.log(submitCheck);
        var filterdatetime = $filter('datetime')( $scope.collection.collectionDate );
        console.log(filterdatetime);// method for filtering date

        if (submitCheck == true) {

            $scope.errorFlag = false;

            var collectionData = {
                "collectionData": {
                    "customer" : parseInt($scope.collection.customer),
                    "collectionNo" : $scope.collection.collectionNo,
                    "mrNo" : $scope.collection.mrNo,
                    
                    "collectionType" : parseInt($scope.collection.collectionType),
                    // "totalCollectionAmount" : $scope.collection.totalCollectionAmount,
                    "collectionDate" : filterdatetime,
                    "collectionLines" : $scope.collection.collectionLines,

                    "totalCollectionAmount" : $scope.collection.totalCollectionAmount,
                    // "totalCollectedAmount" : $scope.collection.totalCollectedAmount,
                    "totalCashDiscount" : $scope.collection.totalCashDiscount,
                    "totalNetCollection" : $scope.collection.totalNetCollection
                }
            }
            var ob = {};
            // console.log($window.submitUrl);
            ob.url = $window.submitUrl;
            ob.data = collectionData;
            // console.log(ob.data);
            $http({

                method: 'POST',
                url: ob.url,
                data: ob.data

            }).success(function (data) {
                // console.log(data);
                if (data.status == 1) {
                    // console.log("success");
                    window.location.href = data.redirect;
                }
                else {
                    $scope.showError('Error', 'Data is not submitted');
                    $('#eit_bundle_salebundle_productionplanning_collection').attr("disabled", false);
                    $('#eit_bundle_salebundle_productionplanning_collection').text("Submit");
                    $('#prev').attr("disabled",false);
                }
            });
        }else {
            $scope.showError('Error','Validation Error');
            $('#eit_bundle_salebundle_productionplanning_collection').text("Submit");
            $('#eit_bundle_salebundle_productionplanning_collection').attr("disabled",false);
            $('#prev').attr("disabled",false);
        }
    }

    //Error function
    $scope.showError = function(type, message)
    {
        if( type == 'success' )
        {
            $scope.successFlag = true;
            $scope.message = message;

        } else if( type == 'error' )
        {
            $scope.errorFlag = true;
            $scope.message = message;
        }
    }

    //method when action button is clicked to delete
    $scope.remove = function(index)
    {
        var deleteCollectionLines = $window.confirm('Are you absolutely sure you want to delete?');
        if (deleteCollectionLines) {
            if (index > -1) {
                $scope.collection.collectionLines.splice(index, 1);
                $scope.yes = true;
                $scope.showError('success','CollectionLine is deleted successfully');
                calculateTotalRowValue();
                // break;
            }
        }
    }
}]).filter('datetime', function($filter)
{
    return function(input)
    {
        if(input == null){ return ""; }

        var _date = $filter('date')(new Date(input), 'yyyy-MM-dd HH:mm:ss');
        // console.log(_date);
        return _date.toUpperCase();

    };
});

//for pagination of collection index
//.controller('collectionList',['$window','$scope','$http',function($window,$scope,$http) { // index.html controller or show list controller
// console.log("list");
//
// $scope.allCollection = $window.collectionList;
// console.log($scope.allCollection);
//
// var collectionTypesObject = $window.collectionTypes;
//
// //array for collectionTypes
// $scope.collectionTypes = [];
// for(var key in collectionTypesObject) {
//     var value = collectionTypesObject[key];
//     $scope.collectionTypes.push({
//         'id' : key * 1  ,
//         'name' : value
//     })
// }
// for(var t = 0 ;t < $scope.allCollection.length ; t++)
// {
//     inArray($scope.allCollection[t].collection_type, $scope.collectionTypes,function (name) {
//
//         $scope.allCollection[t].collection_type_name = name;
//         // console.log($scope.allCollection[t].collection_type_name);
//     });
// }
//
// function inArray(value,arrayofTypes,callback) {
//
//     for(var  i = 0;i < arrayofTypes.length;i++)
//     {
//         if(arrayofTypes[i].id === value )
//         {
//             callback (arrayofTypes[i].name);
//         }
//     }
//     // return false;
// }
// $scope.sortType     =  'collection_no';// set default sort to collection_no
// $scope.sortReverse  = false;
//
// $scope.remove = function(index)
// {
//     console.log(index);
//     var deleteCollection = $window.confirm('Are you absolutely sure you want to delete?');
//     if (deleteCollection) {
//         for(var i = 0; i < $scope.allCollection.length; i++) {
//             if($scope.allCollection[i].id == index) {
//                 $scope.allCollection.splice(i, 1);
//                 $scope.yes = true;
//                 $scope.showError('success','Collection is deleted successfully');
//                 // break;
//             }
//         }
//     }
// }
// //Error function
// $scope.showError = function(type, message)
// {
//     if( type == 'success' )
//     {
//         $scope.successFlag = true;
//         $scope.message = message;
//
//     } else if( type == 'error' )
//     {
//         $scope.errorFlag = true;
//         $scope.message = message;
//     }
// }
//
//
// }])
