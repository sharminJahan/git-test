angular.module("pdf_generate", ["ngRoute", "ngResource","pdf","ui.tree","ui.bootstrap","ngSanitize"]).config(['$interpolateProvider', function($interpolateProvider){
    // console.log("pdf generate")
    $interpolateProvider.startSymbol('{[{').endSymbol('}]}');
}]).controller('pdf_controller',['$window', '$scope', '$http', function ($window, $scope, $http) {

    $scope.locationWiseItemLedger = $window.locationWiseItemLedger ;
    console.log($scope.count)
    $scope.styleForRow = function(){
            document.getElementsByTagName("table").pageBreakBefore='always';
    };
    $scope.openPdf = function() {
        var dd = {
            content: [
                 {
                     table: {
                         // headers are automatically repeated if the table spans over multiple pages
                         // you can declare how many rows should be treated as headers
                         headerRows: 1,
                         widths: [ '*', 'auto', 100, '*' ],

                         body: [
                             [ 'First', 'Second', 'Third', 'The last one' ],
                             [ 'Value 1', 'Value 2', 'Value 3', 'Value 4' ],
                             [ { text: 'Eggs are laid by female animals of many different species, including birds, reptiles, amphibians, mammals, and fish, and have been eaten by humans for thousands of years', bold: true , }, 'Val 2', 'Val 3', 'Val 4' ],
                             [ 'First', 'Second', 'Third', 'The last one' ],
                             [ 'Value 1', 'Value 2', 'Value 3', 'Value 4' ],
                             [ { text: 'Eggs are laid by female animals of many different species, including birds, reptiles, amphibians, mammals, and fish, and have been eaten by humans for thousands of years', bold: true }, 'Val 2', 'Val 3', 'Val 4' ],
                                 [ 'First', 'Second', 'Third', 'The last one' ],
                             [ 'Value 1', 'Value 2', 'Value 3', 'Value 4' ],
                             [ { text: 'Eggs are laid by female animals of many different species, including birds, reptiles, amphibians, mammals, and fish, and have been eaten by humans for thousands of years', bold: true }, 'Val 2', 'Val 3', 'Val 4' ],
                             [ 'First', 'Second', 'Third', 'The last one' ],
                             [ 'Value 1', 'Value 2', 'Value 3', 'Value 4' ],
                             [ { text: 'Eggs are laid by female animals of many different species, including birds, reptiles, amphibians, mammals, and fish, and have been eaten by humans for thousands of years', bold: true }, 'Val 2', 'Val 3', 'Val 4' ],
                             [ 'First', 'Second', 'Third', 'The last one' ],
                             [ 'Value 1', 'Value 2', 'Value 3', 'Value 4' ],
                             [ { text: 'Eggs are laid by female animals of many different species, including birds, reptiles, amphibians, mammals, and fish, and have been eaten by humans for thousands of years', bold: true }, 'Val 2', 'Val 3', 'Val 4' ],
                             [ 'First', 'Second', 'Third', 'The last one' ],

                             [ { text: 'Eggs are laid by female animals of many different species, including birds, reptiles, amphibians, mammals, and fish, and have been eaten by humans for thousands of years', bold: true,id: 'signature' }, 'Val 2', 'Val 3', 'Val 4' ],
                         ]
                     },
                     // id: 'signature'

                }],
            pageBreakBefore: function(currentNode, followingNodesOnPage, nodesOnNextPage, previousNodesOnPage) {
                //check if signature part is completely on the last page, add pagebreak if not
                if (currentNode.id === 'signature' && (currentNode.pageNumbers.length != 1 || currentNode.pageNumbers[0] != currentNode.pages)) {
                    return true;
                }
                //check if last paragraph is entirely on a single page, add pagebreak if not
                else if (currentNode.id === 'closingParagraph' && currentNode.pageNumbers.length != 1) {
                    return true;
                }
                return false;
            }
        }
        pdfMake.createPdf(dd).download('optionalName.pdf');
    };

}]);

