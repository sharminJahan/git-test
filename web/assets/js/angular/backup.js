// $scope.quantityValidation(function (value) {
//
//     if( value == 'error' )
//     {
//         $scope.show_error('error','quantity can not be zero');
//
//     } else if( value == 'ok' ){
//
//
//     }
//
// })
// if( $scope.order.order_lines.product != null )
// {
//     $scope.error_flag = false;
// }
// else
// {
//     var $m=$('#eit_bundle_salebundle_productionplanning_order');
//     $m.html('<span class="fa fa-arrow-right"></span>Submit');
//     $('#eit_bundle_salebundle_productionplanning_order').attr("disabled",false);
//     $scope.show_error('error', 'Product lines can not be empty');
// }


$scope.productSelectValidity(oProduct.product,function (value) {
    console.log(value)
    if(value == "true")
    {
        $scope.show_error('error','Sorry, you can not choose same product twice');
    }
    else if(value = "false")
    {
        console.log("value")
        $scope.getProductRate(index,oProduct.product)
    }
});

$scope.productSelectValidity = function (oproductid,callback) {
    if( oproductid )
    {
        console.log("if");
        for( var m = 0 ; m < $scope.order.order_lines.length ; m++)
        {
            console.log( $scope.order.order_lines[m].product );
            if($scope.order.order_lines[m].product == oproductid)
            {
                console.log(m);
                $scope.show_error('error','Sorry, you can not choose same product twice');
                $scope.show = 'error';
                callback($scope.show) ;
            }
            // else if($scope.order.order_lines[m].product == null )
            // {
            //     $scope.show_error('error','Product lines can not be empty');
            //     $scope.show = 'error';
            //     return $scope.show;
            //
            // }
            else {
                $scope.show = 'ok';
                callback($scope.show) ;
            }
        }
    }
    else  {
        console.log("else");
        for( var m = 0 ; m < $scope.order.order_lines.length ; m++)
        {
            if($scope.order.order_lines[m].product == null)
            {
                $scope.show_error('error','Product lines can not be empty');
                $scope.show = 'error';
                callback($scope.show) ;
            }
            else if($scope.order.order_lines[m].quantity == 0 )
            {
                $scope.show_error('error','Quantity can not be Zero');
                $scope.show = 'error';
                callback($scope.show) ;
            }
            else {
                $scope.show = 'ok';
                callback($scope.show) ;
            }
        }
    }
}
' + $window.data.saleDiscounts[j].customer ? $window.data.saleDiscounts[j].customer.id : null + ' :
{

}
// 'invoiceType' :
// {
//     'id' : $window.data.saleDiscounts[j].invoice_type.id,
//     'customer' : {
//         'id' : $window.data.saleDiscounts[j].customer ? $window.data.saleDiscounts[j].customer.id : null,
//         'product' : {
//             'id' : $window.data.saleDiscounts[j].product ? $window.data.saleDiscounts[j].product.id : null
//         }
//     }
// }
// for( var j = 0 ; j< $scope.saleDiscount.length ; j++ ){
//
//     $scope.order.saleDiscount.push({
//         'invoiceType' : $scope.saleDiscount[j].invoice_type.id,
//         'customer' : $scope.saleDiscount[j].customer.id,
//         'product' : $scope.saleDiscount[j].product.id
//
//     });
// }

// $scope.saleDiscount.push({
//     '" + '$window.data.saleDiscounts[j].invoice_type.id '"+'  : 0
//
// });
$scope.saleDiscount.push({
    `"" + $window.data.saleDiscounts[j].invoice_type.id + ""` : 'y'
});

for($window.data.saleDiscounts[j].invoice_type.id in $scope.saleDiscount) {

    $scope.h = $scope.saleDiscount [$window.data.saleDiscounts[j].invoice_type.id] ;
    console.log($scope.h)

}

// for( var k = 0 ; k< $scope.saleDiscount.length ; k++ ){
//     $scope.order.saleDiscount.push({
//         'invoiceType' : $scope.saleDiscount[k].invoice_type.id,
//         'customer' : $scope.saleDiscount[k].customer.id,
//         'product' : $scope.saleDiscount[k].product.id
//
//     });
// }

for( var j = 0 ; j < $window.data.saleDiscounts.length ; j++ )
{

    console.log($window.data.saleDiscounts[j].invoice_type.id)
    foreach( $window.data.saleDiscounts[j].invoice_type.id as $key ){
    $scope.saleDiscount[$window.data.saleDiscounts[j].invoice_type.id]
    // $scope.saleDiscount->{$key} = 1;
}

    console.log($scope.saleDiscount[i][$window.data.saleDiscounts[i].id])
    console.log("hello");
    i++;
    // console.log($scope.saleDiscount[$window.data.saleDiscounts[j].invoice_type.id]);

    console.log($scope.saleDiscount);
}

// $scope.obj['invoiceId']['customerid'] = $window.data.saleDiscounts[i].invoice_type.id;
// $scope.obj.invoiceType = $window.data.saleDiscounts[i].invoice_type.id;
// var f = $window.data.saleDiscounts[i].invoice_type.id;
// var p = $window.data.saleDiscounts[i].customer.id;
// var g = $window.data.saleDiscounts[i].product.id;
// // myObj[f] = p;
// myObj = { f : {p : g}};
// console.log(myObj);








$scope.obj = {};
var myObj = {};




var jsonStr = '{"'+$window.data.saleDiscounts[i].invoice_type.id+'": {"'+ $window.data.saleDiscounts[i].customer.id +'" : {'+$window.data.saleDiscounts[i].product.id+'}}}';
console.log(jsonStr);

// for( var i = 0; i < $window.data.saleDiscounts.length ; i++)
// {
//     var jsonStr = {};
//     console.log("i val "+i);
//     // console.log($window.data.saleDiscounts[i].customer ? $window.data.saleDiscounts[i].customer.id : 0);
//     // console.log($window.data.saleDiscounts[i].product ? $window.data.saleDiscounts[i].product.id : 0);
//     var a = $window.data.saleDiscounts[i].customer ? $window.data.saleDiscounts[i].customer.id : 0;
//     var b = $window.data.saleDiscounts[i].product ? $window.data.saleDiscounts[i].product.id : 0;
//     console.log(a);
//     console.log(b);
//     // $window.data.saleDiscounts[i].customer.id = a;
//     // $window.data.saleDiscounts[i].product.id = b;
//     // console.log($window.data.saleDiscounts[i].customer.id);
//     // console.log($window.data.saleDiscounts[i].product.id);
//     // jsonStr = '{'+$window.data.saleDiscounts[i].invoice_type.id+': {'+ $window.data.saleDiscounts[i].customer.id +' : '+ $window.data.saleDiscounts[i].product.id +'}}';
//     // console.log(jsonStr);
//     // $scope.saleDiscount.push(jsonStr);
// }

for( var p = 0 ; p < $scope.saleDiscounts.length ; p++ )
{
    console.log("sale")
    if($scope.saleDiscounts[p].customer && $scope.saleDiscount[p].product)
    {
        return $scope.saleDiscount[p].discount_percent;
    }
    if($scope.saleDiscount[p].customer)
    {
        break;
    }
    if($scope.saleDiscount[p].product)
    {
        break;
    }
}

for(item in object){
    if(object.hasOwnProperty(item)){
        next= object[item];
        if(typeof next== 'object' && next!= null){
            collection[index++]= item +
                ':{ '+ lookdeep(next).join(', ')+'}';
        }
        else collection[index++]= [item+':'+String(next)];
    }
}
return collection;





function loopThrough(obj){
    for(var key in obj){
        // skip loop if the property is from prototype
        if(!obj.hasOwnProperty(key)) continue;

        if(typeof obj[key] !== 'object'){
            //your code
            console.log(key+" = "+obj[key]);
        } else {
            loopThrough(obj[key]);
        }
    }
}



// call when product is selected
function checkDuplicacyFromProduct (oProduct, index) {
    for(var t= 0 ; t < $scope.order.order_lines.length; t++) {
        console.log($scope.order.order_lines[t].product);

        if (oProduct.product == $scope.order.order_lines[t].product && t != index) {
            console.log("duplicacy")
            $scope.order.order_lines[index].rate = 0;
            // $scope.show_error('error','Same products can not be selected in multi order line');
            return true;
        }
    }

    return false;
}

