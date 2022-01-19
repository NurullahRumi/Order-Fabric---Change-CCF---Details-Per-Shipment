Application.$controller("partialCmtPriceHistPageController", ["$scope", function($scope) {
    "use strict";

    /* perform any action on widgets/variables within this block */
    $scope.onPageReady = function() {
        /*
         * variables can be accessed through '$scope.Variables' property here
         * e.g. to get dataSet in a staticVariable named 'loggedInUser' use following script
         * $scope.Variables.loggedInUser.getData()
         *
         * widgets can be accessed through '$scope.Widgets' property here
         * e.g. to get value of text widget named 'username' use following script
         * '$scope.Widgets.username.datavalue'
         */
    };




    $scope.rdoViewPriceTypeChange = function($event, $isolateScope, newVal, oldVal) {
        //  console.log(newVal);
    };


    $scope.svGetCMTPriceChgHistonBeforeUpdate = function(variable, inputData) {

        if (inputData.pOrdnum == undefined) {
            return false;
        }

    };

}]);




Application.$controller("grid2Controller", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;
    }
]);