Application.$controller("partialCopyFabPageController", ["$scope", function($scope) {
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
        $scope.Variables.statPrgid.dataSet.dataValue = $scope.$parent.Variables.statPrgid.dataSet.dataValue;

        $scope.Variables.statPrgName.dataSet.dataValue = $scope.$parent.Variables.statPrgName.dataSet.dataValue;

        $scope.Widgets.containerHideFaceSide.show = false;
    };

    $scope.txtTypeCCFChange = function($event, $isolateScope, newVal, oldVal) {
        $scope.Widgets.txtTypeCCF.datavalue = newVal.toUpperCase();
    };

    $scope.txtTypeOrderNoChange = function($event, $isolateScope, newVal, oldVal) {
        $scope.Widgets.txtTypeOrderNo.datavalue = newVal.toUpperCase();
    };

    $scope.txtTypeFabSeqClick = function($event, $isolateScope) {
        $scope.Widgets.dialogListFab.open();
    };

    $scope.txtTypeFabSeqChange = function($event, $isolateScope, newVal, oldVal) {
        if ($scope.Widgets.txtTypeFabSeq.datavalue === null || $scope.Widgets.txtTypeFabSeq.datavalue === "" || $scope.Widgets.txtTypeFabSeq.datavalue === undefined) {
            $scope.Variables.notifMsg.operation = "alert";
            $scope.Variables.notifMsg.setAlertType("error");
            $scope.Variables.notifMsg.setMessage("Unable to copy - Fabric cannot be null !!");
            $scope.Variables.notifMsg.notify();
            return false;
        }
    };

    $scope.radiosetSourceTypeChange = function($event, $isolateScope, newVal, oldVal) {
        if ($scope.Widgets.radiosetSourceType.datavalue == 'CCF') {
            $scope.Widgets.txtTypeOrderNo.datavalue = null;
            $scope.Widgets.txtTypeFabSeq.datavalue = null;
        } else {
            $scope.Widgets.txtTypeCCF.datavalue = null;
        }
    };

    $scope.btnCopyFabClick = function($event, $isolateScope) {
        var m_txtorderno = $scope.Widgets.formCopyFabric.formWidgets.txtSrcOrderNo.caption;
        var m_txtfabseq = $scope.Widgets.formCopyFabric.formWidgets.txtSrcFabSeq.caption;
        var m_txtfacesideR = $scope.Widgets.formCopyFabric.formWidgets.chkRightSide.datavalue;
        var m_txtfacesideW = $scope.Widgets.formCopyFabric.formWidgets.chkWrongSide.datavalue;

        if (m_txtorderno === null || m_txtorderno === undefined || m_txtorderno === "" || m_txtfabseq === null || m_txtfabseq === undefined || m_txtfabseq === "") {
            $scope.Variables.notifMsg.operation = "alert";
            $scope.Variables.notifMsg.setAlertType("error");
            $scope.Variables.notifMsg.setMessage("Please re-query. ");
            $scope.Variables.notifMsg.notify();
            return false;
        }
        if (!(m_txtfacesideR === 'Y' || m_txtfacesideW === 'Y')) {
            $scope.Variables.notifMsg.operation = "alert";
            $scope.Variables.notifMsg.setAlertType("error");
            $scope.Variables.notifMsg.setMessage("Please choose a Face Side. ");
            $scope.Variables.notifMsg.notify();
            return false;
        } else {
            $scope.Variables.svOR105PK0_CPYFABInsCpyFab.setInput("pPrgId", $scope.Variables.statPrgid.dataSet.dataValue);
            $scope.Variables.svOR105PK0_CPYFABInsCpyFab.setInput("pDestordnum", $scope.pageParams.pDestOrdnum);
            $scope.Variables.svOR105PK0_CPYFABInsCpyFab.setInput("pSrcOrdnum", m_txtorderno);
            $scope.Variables.svOR105PK0_CPYFABInsCpyFab.setInput("pSrcFabseq", m_txtfabseq);
            $scope.Variables.svOR105PK0_CPYFABInsCpyFab.setInput("pChkFablibMat", $scope.Widgets.gridFabCpy.selecteditem.chkFablibMat);
            $scope.Variables.svOR105PK0_CPYFABInsCpyFab.setInput("pChkOrdfab", $scope.Widgets.gridFabCpy.selecteditem.chkOrdfab);
            $scope.Variables.svOR105PK0_CPYFABInsCpyFab.setInput("pExpFaborienReq", $scope.Widgets.gridFabCpy.selecteditem.expFaborienReq);
            $scope.Variables.svOR105PK0_CPYFABInsCpyFab.setInput("pExpFaborien", $scope.Widgets.formCopyFabric.formWidgets.selectExpFabOrien.datavalue);
            $scope.Variables.svOR105PK0_CPYFABInsCpyFab.setInput("pExpFaborienCondmsg", $scope.Widgets.gridFabCpy.selecteditem.expFaborienCondmsg);
            $scope.Variables.svOR105PK0_CPYFABInsCpyFab.setInput("pExpMarkertypReq", $scope.Widgets.gridFabCpy.selecteditem.expMarkertypReq);
            $scope.Variables.svOR105PK0_CPYFABInsCpyFab.setInput("pExpMarkertyp", $scope.Widgets.formCopyFabric.formWidgets.selectExpMarkerTyp.datavalue);
            $scope.Variables.svOR105PK0_CPYFABInsCpyFab.setInput("pExpMarkertypCondmsg", $scope.Widgets.gridFabCpy.selecteditem.expMarkertypCondmsg);
            $scope.Variables.svOR105PK0_CPYFABInsCpyFab.setInput("pSrcintrefno", $scope.Widgets.formCopyFabric.formWidgets.txtIntrefno.caption);
            $scope.Variables.svOR105PK0_CPYFABInsCpyFab.setInput("pSrcintrefnoVer", $scope.Widgets.gridFabCpy.selecteditem.intrefnoVer);
            $scope.Variables.svOR105PK0_CPYFABInsCpyFab.setInput("pSrcshadeopt", $scope.Widgets.formCopyFabric.formWidgets.selectShadeOpt.datavalue);
            $scope.Variables.svOR105PK0_CPYFABInsCpyFab.setInput("pFaceside", $scope.Widgets.formCopyFabric.formWidgets.txtFaceSide.caption);
            $scope.Variables.svOR105PK0_CPYFABInsCpyFab.invoke();
        }
    };

    $scope.svOR105PK0_CPYFABInsCpyFabonSuccess = function(variable, data) {
        $scope.Widgets.formCopyFabric.reset();
        $scope.Widgets.formCopyFabric.formWidgets.selectShadeOpt.datavalue = null;
        close();
        $scope.Variables.notifMsg.operation = "alert";
        $scope.Variables.notifMsg.setAlertType("success");
        $scope.Variables.notifMsg.setMessage("Updated...");
        $scope.Variables.notifMsg.notify();
    };

    $scope.svOR105PK0_CPYFABInsCpyFabonError = function(variable, data) {
        $scope.Variables.notifMsg.operation = "alert";
        $scope.Variables.notifMsg.setAlertType("error");
        $scope.Variables.notifMsg.setMessage(data);
        $scope.Variables.notifMsg.notify();
    };

    $scope.btnExitClick = function($event, $isolateScope) {
        open(location, '_self').close();
    };

    $scope.svOR105PK0_CPYFABGetFabSeqLOVonBeforeUpdate = function(variable, inputData) {
        if ((inputData.pOrdnum == undefined)) {
            return false;
        }
    };

    $scope.svOR105PK0_CPYFABGetCpyFabonBeforeUpdate = function(variable, inputData) {
        if ((inputData.pOrdnum == undefined || inputData.pFabSeq == undefined)) {
            return false;
        }
    };

    $scope.svOR105PK0_CPYFABGetShadeOptionLOVonBeforeUpdate = function(variable, inputData) {
        if ((inputData.pIntreftno == undefined)) {
            return false;
        }
    };

    $scope.chkRightSideClick = function($event, $isolateScope) {
        if ($scope.Widgets.chkRightSide.datavalue == 'Y') {
            $scope.Widgets.txtFaceSide.caption = 'R';
            $scope.Widgets.chkWrongSide.datavalue = 'N';
        } else
        if ($scope.Widgets.chkRightSide.datavalue == 'N') {
            // $scope.Widgets.chkRightSide.datavalue = 'N'
            $scope.Widgets.chkWrongSide.datavalue = 'Y';
            $scope.Widgets.txtFaceSide.caption = 'W';
        }
    };

    $scope.chkWrongSideClick = function($event, $isolateScope) {
        if ($scope.Widgets.chkWrongSide.datavalue == 'Y') {
            $scope.Widgets.txtFaceSide.caption = 'W';
            $scope.Widgets.chkRightSide.datavalue = 'N';
        } else {
            $scope.Widgets.chkRightSide.datavalue = 'Y';
            $scope.Widgets.txtFaceSide.caption = 'R';
        }
    };

    $scope.svOR105PK0_CPYFABGetFabDetailsonBeforeUpdate = function(variable, inputData) {
        if ((!inputData.pOrdnum || !inputData.pFabSeq) && (!inputData.pCCF)) {
            return false;
        }
    };
}]);
Application.$controller("dialogListFabController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;

        $scope.gridListFabLOVSelect = function($event, $isolateScope, $rowData) {
            $scope.Variables.svOR105PK0_CPYFABGetCpyFab.invoke();
            $scope.Widgets.txtTypeFabSeq.datavalue = $scope.Widgets.gridListFabLOV.selecteditem.fabseq;
            $scope.Widgets.dialogListFab.close();
        };
    }
]);

Application.$controller("gridListFabLOVController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;
    }
]);



Application.$controller("gridFabDetailsController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;
    }
]);

Application.$controller("gridFabCpyController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;
    }
]);