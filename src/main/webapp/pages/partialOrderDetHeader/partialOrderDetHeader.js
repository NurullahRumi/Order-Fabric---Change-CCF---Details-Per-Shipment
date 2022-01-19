Application.$controller("partialOrderDetHeaderPageController", ["$scope", function($scope) {
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




    // avoid query all when page parameter is null because null value is being treated as wildcard '%'
    /*
    * This method is called before fetching the records.
    */
    $scope.lvOrderDetonBeforeListRecords = function(variable, dataFilter, options) {
        var data = variable._downgradeInputData(dataFilter);

        //Please make your changes to the existing old callbacks.
        var response = $scope.lvOrderDetonBeforeUpdate(variable, data, options);
        if (response === false) {
            return false;
        }
        return variable._upgradeInputData(response, data);
    };

    $scope.lvOrderDetonBeforeUpdate = function(variable, inputData) {
        if ($scope.pageParams.pOrdnum == undefined) {
            return false;
        }


        var m_ordnum = "XX";
        if (($scope.pageParams.pOrdnum !== undefined) & ($scope.pageParams.pOrdnum !== null) & ($scope.pageParams.pOrdnum !== "")) {
            m_ordnum = $scope.pageParams.pOrdnum.toUpperCase();
        }

        inputData.ordnum = {
            'value': m_ordnum,
            'filterCondition': 'EQUALS',
            'type': 'STRING'
        }

    };

}]);