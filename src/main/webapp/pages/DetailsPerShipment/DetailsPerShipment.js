Application.$controller("DetailsPerShipmentPageController", ["$scope", function($scope) {
    "use strict";

    /************************************************************************************************************************
        program modifications 
        
        v1.00 cn04 17/08/2017 migration of Details per Shp, input internal prices
        v1.01 cn04 16.11.2017 rename internal price to approved price. hide internal retail price
        v1.02 cn04 22/12/2017 call oracle form from wmaker - pass parameters in stored proc i/o concatenate in wmaker
        v1.03 cn04 26/01/2018 change page navigator for grids. display sizedes in dialog "update price/clirefs"
        v1.04 cn04 08/02/2018 goto current page i/o first page in gridOrt209 when user updates a row in ort209
        v1.05 cn04 23.02.2018 approved price discount - TRB (binding for pChangeReason and pUserRemarks interchanged)
    ************************************************************************************************************************/

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

        // console.log("User Approles= " + $scope.Variables.loggedInUser.getData().roles);


    };

    //opens dialog to edit ort209 row
    $scope.openPopupEditOrt209 = function(pOrdnum, pShpnum, pSeqcod, pSzeseq) {
        $scope.Variables.svOrt209QryCurrentPrice.invoke({
                "inputFields": {
                    "pOrdnum": pOrdnum,
                    "pShpnum": pShpnum,
                    "pSeqcod": pSeqcod,
                    "pSzeseq": pSzeseq
                }
            },
            function(data) {},
            function(error) {
                // Error Callback
                //  console.log(error);
                $scope.Variables.notifMsg.setAlertType("error");
                $scope.Variables.notifMsg.setMessage("Error: " + error);
                $scope.Variables.notifMsg.notify();
            });

        $scope.Widgets.dialogKdsUpdPriceRef.open();
    };
    //-------------------------------------------------------------------------------------------------------------------------------------------
    // called when editing KDS prices/refs. function notifies error messages to user, and updates global error counter variable
    $scope.notifyErrormsg = function(pErrmsg) {
        $scope.Variables.notifMsg.setAlertType("error");
        $scope.Variables.notifMsg.setMessage("Error: " + pErrmsg);
        $scope.Variables.notifMsg.notify();

    };

    //-------------------------------------------------------------------------------------------------------------------------------------------
    // Order number filter 
    $scope.txtOrdnumChange = function($event, $isolateScope, newVal, oldVal) {
        // console.log("on change ordnum");
        if (newVal !== undefined & newVal !== "" & newVal !== null) {

            $scope.Widgets.txtOrdnum.datavalue = newVal.toUpperCase();
            if (($scope.Variables.loggedInUser.getData().roles.indexOf("DETSHP_UPD_FLIPRICE") > 0) ||
                ($scope.Variables.loggedInUser.getData().roles.indexOf("UPD_RETAILPRICE") > 0) ||
                ($scope.Variables.loggedInUser.getData().roles.indexOf("DETSHP_UPD_UNITPRICE") > 0) ||
                ($scope.Variables.loggedInUser.getData().roles.indexOf("UPD_RETPRC_SPECIAL_CLIENT") > 0) ||
                ($scope.Variables.loggedInUser.getData().roles.indexOf("UPD_INTERNALPRICE") > 0)
            ) {

                //console.log("Proceed to insert rows in ort207");

                $scope.Variables.svOr207pk0FetchPackSze.setInput("pOrdnum", $scope.Widgets.txtOrdnum.datavalue);
                $scope.Variables.svOr207pk0FetchPackSze.setInput("pPricecat", "CMT");
                $scope.Variables.svOr207pk0FetchPackSze.invoke();


                /*$scope.Variables.svOr207pk0FetchPackSze.invoke({
                        "inputFields": {
                            "pOrdnum": $scope.Widgets.txtOrdnum.datavalue,
                            "pPricecat": "CMT"

                        }
                    },
                    function(data) {},
                    function(error) {
                        // Error Callback
                        //  console.log(error);
                        $scope.Variables.notifMsg.setAlertType("error");
                        $scope.Variables.notifMsg.setMessage("Error: " + error);
                        $scope.Variables.notifMsg.notify();
                    }
                );*/
            }
        }

    };

    //--------------------------------------------------------------------------------------------------------------------------------
    // after price successfully updated and audited
    $scope.svOr207pk0UpdprcOrt207onSuccess = function(variable, data) {
        $scope.Widgets.gridOrt209.refreshData();
        $scope.Widgets.dialogUpdPrice.close();
        $scope.Variables.notifMsg.setAlertType("success");
        $scope.Variables.notifMsg.setMessage("Approved price successfully updated");
        $scope.Variables.notifMsg.notify();

    };


    //------------------------------------------------------------------------------------------------------------------------------------------------
    // before query live variable - grid price
    /* NOT USED
    $scope.lvOrt207PriceUpdonBeforeUpdate = function(variable, inputData) {
        var m_ordnum = "XX";

        if (
            //($scope.Widgets.txtOrdnum.datavalue !== undefined) & ($scope.Widgets.txtOrdnum.datavalue !== null) & ($scope.Widgets.txtOrdnum.datavalue !== "")
            ($scope.Widgets.panelOr100Header.Widgets.lblOrdnum.caption !== undefined) & ($scope.Widgets.panelOr100Header.Widgets.lblOrdnum.caption !== null) & ($scope.Widgets.panelOr100Header.Widgets.lblOrdnum.caption !== "")
        ) {
            m_ordnum = $scope.Widgets.panelOr100Header.Widgets.lblOrdnum.caption; //$scope.Widgets.txtOrdnum.datavalue;

        }

        inputData.ordnum = {
            'value': m_ordnum,
            'filterCondition': 'EQUALS',
            'type': 'STRING'
        }
        inputData.pricecat = {
            'value': "CMT",
            'filterCondition': 'EQUALS',
            'type': 'STRING'
        }

    };*/
    //-----------------------------------------------------------------------------------------------------------------------------------

    $scope.svOrt207QryCurrentPriceonSuccess = function(variable, data) {

        // console.log(data.content);
        if (data.content[0] == undefined) {
            $scope.Variables.notifMsg.setAlertType("error");
            $scope.Variables.notifMsg.setMessage("Client Order Number has not been defined for this Order. Cannot proceed.");
            $scope.Variables.notifMsg.notify();
            return false;
        }

        if ((($scope.Variables.statChgReasonCategory.dataSet.dataValue == "UNITPRICE") &
                (data.content[0].untprcAir == null || data.content[0].untprcAir == undefined || data.content[0].untprcAir == 0) &
                (data.content[0].untprcSea == null || data.content[0].untprcSea == undefined || data.content[0].untprcSea == 0)) ||

            (($scope.Variables.statChgReasonCategory.dataSet.dataValue == "RETAILPRICE") &
                (data.content[0].retprc == null || data.content[0].retprc == undefined || data.content[0].retprc == 0) &
                (data.content[0].retprcb == null || data.content[0].retprcb == undefined || data.content[0].retprcb == 0) &
                (data.content[0].retprcc == null || data.content[0].retprcc == undefined || data.content[0].retprcc == 0) &
                (data.content[0].retprcd == null || data.content[0].retprcd == undefined || data.content[0].retprcd == 0)
            )) {
            $scope.Widgets.frmDialogUpdPrc.formWidgets.pUserRemarks.datavalue = "Initial Price";
            $scope.Widgets.frmDialogUpdPrc.formWidgets.pChangereason.show = false;
        }

        $scope.Widgets.dialogUpdPrice.open();
    };




    //----------------------------------------------------------------------------------------------------------------------------------------
    // button Release Ref: release references
    $scope.btnRelrefClick = function($event, $isolateScope) {
        if (($scope.Widgets.panelOr100Header.Widgets.lblOrdnum.caption !== undefined) & ($scope.Widgets.panelOr100Header.Widgets.lblOrdnum.caption !== "") & ($scope.Widgets.panelOr100Header.Widgets.lblOrdnum.caption !== null)) {
            $scope.Variables.svOr207pk0ReleaseRef.invoke();
        }
    };

    // on success of release references
    $scope.svOr207pk0ReleaseRefonSuccess = function(variable, data) {
        // requery updated value
        $scope.Variables.notifMsg.setAlertType("success");
        $scope.Variables.notifMsg.setMessage("References have been released successfully");
        $scope.Variables.notifMsg.notify();
        $scope.Variables.svOr207pk0GetRefPricereldat.invoke();

    };

    //---------------------------------------------------------------------------------------------------------------------------------------------
    // button Release price
    $scope.btnRelKdsPrcClick = function($event, $isolateScope) {
        if (($scope.Widgets.panelOr100Header.Widgets.lblOrdnum.caption !== undefined) & ($scope.Widgets.panelOr100Header.Widgets.lblOrdnum.caption !== "") & ($scope.Widgets.panelOr100Header.Widgets.lblOrdnum.caption !== null)) {
            $scope.Variables.svOr207pk0ReleaseKDSPrice.invoke();
        }
    };

    //---------------------------------------------------------------------------------------------------------------------------------------
    // after successfully editing KDS price or refs
    $scope.svOr207pk0PrePostUpdOrt209onSuccess = function(variable, data) {
        //alert($scope.Widgets.gridOrt209.dataNavigator.dn.currentPage);
        // var curPage = $scope.Widgets.gridOrt209.dataNavigator.dn.currentPage;

        $scope.Widgets.gridOrt209.refreshData();
        $scope.Widgets.dialogKdsUpdPriceRef.close();
        //    $scope.Widgets.gridOrt209.dataNavigator.dn.currentPage = curPage;
        //   $scope.Widgets.gridOrt209.dataNavigator.goToPage();


        if ($scope.Variables.statKDSFieldToUpdate.dataSet.dataValue !== "DETSHP_CLIREF") {
            $scope.Variables.notifMsg.setAlertType("success");
            $scope.Variables.notifMsg.setMessage("Successfully updated");
            $scope.Variables.notifMsg.notify();
        }
    };


    //-----------------------------------------------------------------------------------------------------------------------------------------
    // On error Fetch Extranet Details
    $scope.svOr207pk0FetchExtranetDetonError = function(variable, data) {
        //console.log("errr0r   " + data);
        $scope.Variables.notifMsg.setAlertType("error");
        $scope.Variables.notifMsg.setMessage("Error: " + data);
        $scope.Variables.notifMsg.notify();
    };
    //-----------------------------------------------------------------------------------------------------------------------------------------
    // on Sucess of Fetch Extranet Details
    $scope.svOr207pk0FetchExtranetDetonSuccess = function(variable, data) {

        if (data !== undefined) {
            if ((data.poutWarningMsg !== undefined) && (data.poutWarningMsg !== "") && (data.poutWarningMsg !== null)) {
                $scope.Variables.notifMsg.setAlertType("success");
                $scope.Variables.notifMsg.setMessage(data.poutWarningMsg);
                $scope.Variables.notifMsg.notify();
            }
        }
        $scope.Widgets.gridOrt209.refreshData();

    };
    //-----------------------------------------------------------------------------------------------------------------------------------------
    // click on button fetch extranet details
    $scope.btnFetchExtranetClick = function($event, $isolateScope) {
        $scope.Variables.svQryShpnumLov.invoke();
        $scope.Widgets.dialogFetchExtranetDet.open();
    };
    //-----------------------------------------------------------------------------------------------------------------------------------------------
    // On Error of Copy references
    $scope.svOr207pk0CopyRefonError = function(variable, data) {
        $scope.Variables.notifMsg.setAlertType("error");
        $scope.Variables.notifMsg.setMessage("Error: " + data);
        $scope.Variables.notifMsg.notify();
    };

    //----------------------------------------------------------------------------------------------------------------
    //open AL160OC0 Upcharge screen
    $scope.btnViewUpchargeClick = function($event, $isolateScope) {

        if (($scope.Widgets.panelOr100Header.Widgets.lblOrdnum.caption == undefined) || ($scope.Widgets.panelOr100Header.Widgets.lblOrdnum.caption == "")) {
            $scope.Variables.notifMsg.setAlertType("error");
            $scope.Variables.notifMsg.setMessage("Error: Search an Order Number first");
            $scope.Variables.notifMsg.notify();
        } else {
            //console.log($scope.Variables.svGetUpchargePrgUrl.dataSet);
            //here dataSet.content[0].progurl does not exist, because in the PFSDB query section, package sy9200pk0 has been set to return single record
            //window.open($scope.Variables.svGetUpchargePrgUrl.dataSet.progurl + "p_tordnum=" + $scope.Widgets.panelOr100Header.Widgets.lblOrdnum.caption);

            $scope.Variables.svGetUpchargePrgUrl.invoke();
            // on success of svGetUpchargePrgUrl open new window

            //window.open($scope.Variables.svGetUpchargePrgUrl.dataSet.progurl);
        }
    };


    $scope.svOr207pk0ReleaseKDSPriceonSuccess = function(variable, data) {
        // requery updated value
        //console.log(data);
        $scope.Variables.notifMsg.setAlertType("success");
        $scope.Variables.notifMsg.setMessage("Price have been released successfully");
        $scope.Variables.notifMsg.notify();
        $scope.Variables.svOr207pk0GetRefPricereldat.invoke();
    };

    //-------------------------------------------------------------------------------------------------------------------------------------
    // on sucess of getting Upcharge screen URL

    $scope.svGetUpchargePrgUrlonSuccess = function(variable, data) {
        //console.log(data);
        //window.open($scope.Variables.svGetUpchargePrgUrl.dataSet.progurl);
        if (data.progurl !== undefined && data.progurl !== "" && data.progurl != null) {
            window.open(data.progurl, "_blank");
        }

    };


    $scope.svOr207pk0ReleaseKDSPriceonError = function(variable, data) {

        $scope.Variables.notifMsg.setAlertType("error");
        $scope.Variables.notifMsg.setMessage("Error: " + data);
        $scope.Variables.notifMsg.notify();
    };


    $scope.svOr207pk0ReleaseRefonError = function(variable, data) {
        $scope.Variables.notifMsg.setAlertType("error");
        $scope.Variables.notifMsg.setMessage("Error: " + data);
        $scope.Variables.notifMsg.notify();
    };

    //------------------------------------------------------------------------------
    // on pagination change of gridOrt209
    $scope.gridOrt209Setrecord = function($event, $data) {
        $scope.Variables.statGridOrt209CurPageNum.dataSet.dataValue = $scope.Widgets.gridOrt209.dataNavigator.dn.currentPage;
    };

    // on data rendering  of gridOrt209
    $scope.gridOrt209Datarender = function($isolateScope, $data) {
        if (!($scope.Widgets.gridOrt209.dataNavigator.pageCount === 0 || $scope.Variables.statGridOrt209CurPageNum.dataSet.dataValue > $scope.Widgets.gridOrt209.dataNavigator.pageCount)) {

            if (!($scope.Variables.statGridOrt209CurPageNum.dataSet.dataValue === 1)) {

                $scope.Widgets.gridOrt209.dataNavigator.dn.currentPage = $scope.Variables.statGridOrt209CurPageNum.dataSet.dataValue;

                $scope.Widgets.gridOrt209.dataNavigator.goToPage();

            } else {
                $scope.Variables.statGridOrt209CurPageNum.dataSet.dataValue = 1;

            }
        }


    };

    //------------------------------------------------------------------------------------------------------------------------------------------
    //clear detail grid when master grid returns no rows
    $scope.svOr207pk0GetOrt205onSuccess = function(variable, data) {
        if (data.poutShpDet == undefined || (data.poutShpDet !== undefined && data.poutShpDet.length == 0)) {
            $scope.Variables.svOr207pk0GetOrt209.dataSet = null;
        }
    };
    //--------------------------------------------------------------------------------------------------
    $scope.svQryOr207pk0UpdUnitpriceAccessonBeforeUpdate = function(variable, inputData) {
        if (inputData.pOrdnum == undefined) {
            return false;
        }
    };

    //---------------------------------------------------------------------------------------------------------------
    $scope.svOr207pk0FetchPackSzeonError = function(variable, data) {
        if (data !== undefined) {
            $scope.Variables.notifMsg.setAlertType("error");
            $scope.Variables.notifMsg.setMessage("Error: " + data);
            $scope.Variables.notifMsg.notify();
            return false;
        }
    };

}]);
//----------------------------------------------------------------------------------------------------------------------------------------
/*Application.$controller("gridPriceUpdController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;
       

    }
]);*/


//----------------------------------------------------------------------------------------------------------------------------------------
Application.$controller("dialogUpdPriceController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;
        //----------------------------------------------------------------------------------------------------------
        // on change of unit price air
        $scope.pUnitprcAirChange = function($event, $isolateScope, newVal, oldVal) {
            if (newVal <= 0 & $scope.Widgets.frmDialogUpdPrc.formWidgets.pChangereason.datavalue !== '09') {
                $scope.Variables.notifMsg.setAlertType("error");
                $scope.Variables.notifMsg.setMessage("Unit price Air cannot be less than 0");
                $scope.Variables.notifMsg.notify();
                return false;
            }

        };
        //----------------------------------------------------------------------------------------------------------
        // on change of unit price sea
        $scope.pUnitprcSeaChange = function($event, $isolateScope, newVal, oldVal) {
            if (newVal <= 0 & $scope.Widgets.frmDialogUpdPrc.formWidgets.pChangereason.datavalue !== '09') {
                $scope.Variables.notifMsg.setAlertType("error");
                $scope.Variables.notifMsg.setMessage("Unit price Sea cannot be less than 0");
                $scope.Variables.notifMsg.notify();
                return false;
            }
        };

        //----------------------------------------------------------------------------------------------------------
        //on change of FLI price Air
        $scope.pFliprcAirChange = function($event, $isolateScope, newVal, oldVal) {
            if (newVal <= 0) {
                $scope.Variables.notifMsg.setAlertType("error");
                $scope.Variables.notifMsg.setMessage("FLI price Air cannot be less than 0");
                $scope.Variables.notifMsg.notify();
                return false;
            }
        };
        //--------------------------------------------------------------------------------------------------------------
        //on change of FLI sea price
        $scope.pFliprcSeaChange = function($event, $isolateScope, newVal, oldVal) {

            if (newVal <= 0) {
                $scope.Variables.notifMsg.setAlertType("error");
                $scope.Variables.notifMsg.setMessage("FLI price Sea cannot be less than 0");
                $scope.Variables.notifMsg.notify();
                return false;
            }
        };

        // on change of retail price
        $scope.pRetprcChange = function($event, $isolateScope, newVal, oldVal) {
            if (newVal <= 0 & $scope.Widgets.frmDialogUpdPrc.formWidgets.pChangereason.datavalue !== '15') {
                $scope.Variables.notifMsg.setAlertType("error");
                $scope.Variables.notifMsg.setMessage("Retail price cannot be less than 0");
                $scope.Variables.notifMsg.notify();
                return false;
            }
        };

        // on change of retprcb
        $scope.pRetprcbChange = function($event, $isolateScope, newVal, oldVal) {
            if (newVal <= 0 & $scope.Widgets.frmDialogUpdPrc.formWidgets.pChangereason.datavalue !== '15') {
                $scope.Variables.notifMsg.setAlertType("error");
                $scope.Variables.notifMsg.setMessage("Retail price 2 cannot be less than 0");
                $scope.Variables.notifMsg.notify();
                return false;
            }
        };

        // on change of retprcc
        $scope.pRetprccChange = function($event, $isolateScope, newVal, oldVal) {
            if (newVal <= 0 & $scope.Widgets.frmDialogUpdPrc.formWidgets.pChangereason.datavalue !== '15') {
                $scope.Variables.notifMsg.setAlertType("error");
                $scope.Variables.notifMsg.setMessage("Retail price 3 cannot be less than 0");
                $scope.Variables.notifMsg.notify();
                return false;
            }
        };

        // on change of retprcd
        $scope.pRetprcdChange = function($event, $isolateScope, newVal, oldVal) {
            if (newVal <= 0 & $scope.Widgets.frmDialogUpdPrc.formWidgets.pChangereason.datavalue !== '15') {
                $scope.Variables.notifMsg.setAlertType("error");
                $scope.Variables.notifMsg.setMessage("Retail price 4 cannot be less than 0");
                $scope.Variables.notifMsg.notify();
                return false;
            }
        };

        //---------------------------------------------------------------------------------------------------------------------------------------------
        // before submit form - update internal CMT prices
        $scope.frmDialogUpdPrcBeforesubmit = function($event, $isolateScope, $data) {

            var oldIntUntprcAir = $scope.Variables.svOrt207QryCurrentPrice.dataSet.content[0].untprcAir;
            var oldIntUntprcSea = $scope.Variables.svOrt207QryCurrentPrice.dataSet.content[0].untprcSea;


            var newIntUntprcAir = $scope.Widgets.frmDialogUpdPrc.formWidgets.pUnitprcAir.datavalue;
            var newIntUntprcSea = $scope.Widgets.frmDialogUpdPrc.formWidgets.pUnitprcSea.datavalue;

            var newIntFliprcAir = $scope.Widgets.frmDialogUpdPrc.formWidgets.pFliprcAir.datavalue;
            var newIntFliprcSea = $scope.Widgets.frmDialogUpdPrc.formWidgets.pFliprcSea.datavalue;

            var newIntRetprc = $scope.Widgets.frmDialogUpdPrc.formWidgets.pRetprc.datavalue;
            var newIntRetprcb = $scope.Widgets.frmDialogUpdPrc.formWidgets.pRetprcb.datavalue;
            var newIntRetprcc = $scope.Widgets.frmDialogUpdPrc.formWidgets.pRetprcc.datavalue;
            var newIntRetprcd = $scope.Widgets.frmDialogUpdPrc.formWidgets.pRetprcd.datavalue;

            if ($scope.Variables.statChgReasonCategory.dataSet.dataValue == "INTERNAL_UNITPRICE") {
                if (newIntUntprcAir <= 0 & $scope.Widgets.frmDialogUpdPrc.formWidgets.pChangereason.datavalue !== '09') {
                    $scope.Variables.notifMsg.setAlertType("error");
                    $scope.Variables.notifMsg.setMessage("Unit price Air cannot be less than 0");
                    $scope.Variables.notifMsg.notify();
                    return false;
                }

                if (newIntUntprcSea <= 0 & $scope.Widgets.frmDialogUpdPrc.formWidgets.pChangereason.datavalue !== '09') {
                    $scope.Variables.notifMsg.setAlertType("error");
                    $scope.Variables.notifMsg.setMessage("Unit price Sea cannot be less than 0");
                    $scope.Variables.notifMsg.notify();
                    return false;
                }

                if ((oldIntUntprcAir == newIntUntprcAir) & (oldIntUntprcSea == newIntUntprcSea)) {
                    $scope.Variables.notifMsg.setAlertType("error");
                    $scope.Variables.notifMsg.setMessage("Unit price has not been changed. There is nothing to save");
                    $scope.Variables.notifMsg.notify();
                    return false;
                }

            }

            if ($scope.Variables.statChgReasonCategory.dataSet.dataValue == "INTERNAL_FLIPRICE") {
                if (newIntFliprcAir <= 0) {
                    $scope.Variables.notifMsg.setAlertType("error");
                    $scope.Variables.notifMsg.setMessage("FLI price Air cannot be less than 0");
                    $scope.Variables.notifMsg.notify();
                    return false;
                }

                if (newIntFliprcSea <= 0) {
                    $scope.Variables.notifMsg.setAlertType("error");
                    $scope.Variables.notifMsg.setMessage("FLI price Sea cannot be less than 0");
                    $scope.Variables.notifMsg.notify();
                    return false;
                }
            }

            if ($scope.Variables.statChgReasonCategory.dataSet.dataValue == "INTERNAL_RETAILPRICE") {
                if (newIntRetprc <= 0) {
                    $scope.Variables.notifMsg.setAlertType("error");
                    $scope.Variables.notifMsg.setMessage("Retail price cannot be less than 0");
                    $scope.Variables.notifMsg.notify();
                    return false;
                }

                if (newIntRetprcb <= 0) {
                    $scope.Variables.notifMsg.setAlertType("error");
                    $scope.Variables.notifMsg.setMessage("Retail price 2 cannot be less than 0");
                    $scope.Variables.notifMsg.notify();
                    return false;
                }

                if (newIntRetprcc <= 0) {
                    $scope.Variables.notifMsg.setAlertType("error");
                    $scope.Variables.notifMsg.setMessage("Retail price 3 cannot be less than 0");
                    $scope.Variables.notifMsg.notify();
                    return false;
                }

                if (newIntRetprcd <= 0) {
                    $scope.Variables.notifMsg.setAlertType("error");
                    $scope.Variables.notifMsg.setMessage("Retail price 4 cannot be less than 0");
                    $scope.Variables.notifMsg.notify();
                    return false;
                }
            }

        };

    }
]);

Application.$controller("dialogHistInternalPriceController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;
    }
]);

Application.$controller("gridOrt205Controller", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;
    }
]);
//------------------------------------------------------------------------------------------------------------------------------------------------------
Application.$controller("gridOrt209Controller", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;


        //------------------------------------------------------------------------------------------------------------------------------------------------------
        // update KDS unit price
        $scope.editUntprcAction = function(selectedItemData) {
            if ($scope.Variables.statUpdUntprcAccess.dataSet.dataValue == "N") {
                $scope.Variables.notifMsg.setAlertType("error");
                $scope.Variables.notifMsg.setMessage("Error: " + "You do not have rights to update unit price");
                $scope.Variables.notifMsg.notify();
            } else {
                $scope.Variables.statChgReasonCategory.dataSet.dataValue = "KDS_UNITPRICE";
                $scope.Variables.statKDSFieldToUpdate.dataSet.dataValue = "KDS_UNITPRICE";
                // $scope.Variables.svOr207pk0GetPriceChgReason.invoke();


                $scope.Variables.svOr207pk0GetPriceChgReason.invoke({
                    "inputFields": {
                        "pChangeCategory": "KDS_UNITPRICE"
                    }
                });

                /*$scope.Widgets.dialogKdsUpdPriceRef.title*/
                $scope.Variables.statDialogEditPriceTitle.dataSet.dataValue = "Update Client Unit Price";
                $scope.$parent.openPopupEditOrt209(this.rowData.ordnum, this.rowData.shpnum, this.rowData.seqcod, this.rowData.szeseq);
            }


        };
        //-----------------------------------------------------------------------------------------------------------------------------------------------------
        // update KDS FLI price, retail prices, client refs
        $scope.editFliprcAction = function(selectedItemData) {
            $scope.Variables.statChgReasonCategory.dataSet.dataValue = "KDS_FLIPRICE";

            $scope.Variables.statKDSFieldToUpdate.dataSet.dataValue = "KDS_FLIPRICE";

            $scope.Variables.svOr207pk0GetPriceChgReason.invoke({
                "inputFields": {
                    "pChangeCategory": "KDS_FLIPRICE"
                }
            });

            /* $scope.Widgets.dialogKdsUpdPriceRef.title*/
            $scope.Variables.statDialogEditPriceTitle.dataSet.dataValue = "Update FLI Price charged to client";
            $scope.$parent.openPopupEditOrt209(this.rowData.ordnum, this.rowData.shpnum, this.rowData.seqcod, this.rowData.szeseq);
        };

        //----------------------------------------------------------------------------------------------------------------------------------------------------------
        // update KDS retail prices
        $scope.editRetailprcAction = function(selectedItemData) {
            $scope.Variables.statChgReasonCategory.dataSet.dataValue = "KDS_RETAILPRICE";
            $scope.Variables.statKDSFieldToUpdate.dataSet.dataValue = "KDS_RETAILPRICE";
            //$scope.Variables.svOr207pk0GetPriceChgReason.invoke();

            $scope.Variables.svOr207pk0GetPriceChgReason.invoke({
                "inputFields": {
                    "pChangeCategory": "KDS_RETAILPRICE"
                }
            });
            /*$scope.Widgets.dialogKdsUpdPriceRef.title*/
            $scope.Variables.statDialogEditPriceTitle.dataSet.dataValue = "Update Client Retail Price";
            $scope.$parent.openPopupEditOrt209(this.rowData.ordnum, this.rowData.shpnum, this.rowData.seqcod, this.rowData.szeseq);
        };
        //----------------------------------------------------------------------------------------------------------------------------------------------------------
        // update KDS det ship client refs

        $scope.editClirefsAction = function(selectedItemData) {
            $scope.Variables.statChgReasonCategory.dataSet.dataValue = "DETSHP_CLIREF";
            $scope.Variables.statKDSFieldToUpdate.dataSet.dataValue = "DETSHP_CLIREF";
            /*$scope.Widgets.dialogKdsUpdPriceRef.title*/
            $scope.Variables.statDialogEditPriceTitle.dataSet.dataValue = "Update Client References";
            $scope.$parent.openPopupEditOrt209(this.rowData.ordnum, this.rowData.shpnum, this.rowData.seqcod, this.rowData.szeseq);
        };
        //----------------------------------------------------------------------------------------------------------------------------------------------------------
        // update CMT Internal unit price        
        $scope.editIntUntprcAction = function(selectedItemData) {
            $scope.Variables.statChgReasonCategory.dataSet.dataValue = "INTERNAL_UNITPRICE";

            $scope.Variables.svOr207pk0GetPriceChgReason.invoke({
                "inputFields": {
                    "pChangeCategory": "INTERNAL_UNITPRICE"
                }
            });

            $scope.Variables.svOrt207QryCurrentPrice.invoke({
                    "inputFields": {
                        "pOrdnum": this.rowData.ordnum,
                        "pPricecat": 'CMT',
                        "pSeqcod": this.rowData.seqcod,
                        "pClionum": this.rowData.wclionum,
                        "pSzeseq": this.rowData.szeseq
                    }
                },
                function(data) {},
                function(error) {
                    $scope.Variables.notifMsg.setAlertType("error");
                    $scope.Variables.notifMsg.setMessage("Error: " + error);
                    $scope.Variables.notifMsg.notify();
                });

            //dialog will be opened on success of svOrt207QryCurrentPrice

            //DialogService.showDialog('dialogUpdPrice');

        };

        //-------------------------------------------------------------------------------------------------------------------------------------------------------
        // update CMT retail price
        $scope.editIntretailprcAction = function(selectedItemData) {
            $scope.Variables.statChgReasonCategory.dataSet.dataValue = "INTERNAL_RETAILPRICE";

            $scope.Variables.svOr207pk0GetPriceChgReason.invoke({
                "inputFields": {
                    "pChangeCategory": "INTERNAL_RETAILPRICE"
                }
            });

            $scope.Variables.svOrt207QryCurrentPrice.invoke({
                    "inputFields": {
                        "pOrdnum": this.rowData.ordnum,
                        "pPricecat": 'CMT',
                        "pSeqcod": this.rowData.seqcod,
                        "pClionum": this.rowData.wclionum,
                        "pSzeseq": this.rowData.szeseq
                    }
                },
                function(data) {},
                function(error) {
                    $scope.Variables.notifMsg.setAlertType("error");
                    $scope.Variables.notifMsg.setMessage("Error: " + error);
                    $scope.Variables.notifMsg.notify();
                });
            $scope.Widgets.dialogUpdPrice.open();
        };

        //--------------------------------------------------------------------------------------------------------------
        //update CMT FLI price
        $scope.editIntFliprcAction = function(selectedItemData) {
            $scope.Variables.statChgReasonCategory.dataSet.dataValue = "INTERNAL_FLIPRICE";

            $scope.Variables.svOr207pk0GetPriceChgReason.invoke({
                "inputFields": {
                    "pChangeCategory": "INTERNAL_FLIPRICE"
                }
            });


            $scope.Variables.svOrt207QryCurrentPrice.invoke({
                    "inputFields": {
                        "pOrdnum": this.rowData.ordnum,
                        "pPricecat": 'CMT',
                        "pSeqcod": this.rowData.seqcod,
                        "pClionum": this.rowData.wclionum,
                        "pSzeseq": this.rowData.szeseq
                    }
                },
                function(data) {},
                function(error) {
                    $scope.Variables.notifMsg.setAlertType("error");
                    $scope.Variables.notifMsg.setMessage("Error: " + error);
                    $scope.Variables.notifMsg.notify();
                });
            $scope.Widgets.dialogUpdPrice.open();
        };
        //--------------------------------------------------------------------------------------------------------------------------
    }
]);

Application.$controller("dialogHistKDSPriceController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;
    }
]);

Application.$controller("dialogUpdKDSPriceController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;
    }
]);

Application.$controller("pagedialog3Controller", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;
    }
]);

Application.$controller("pagedialog4Controller", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;
    }
]);

Application.$controller("dialogKdsUpdPriceRefController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;
        //--------------------------------------------------------------------------------------------------------------------------------------------------------------
        // on change of KDS unit price
        $scope.pUnitprcChange = function($event, $isolateScope, newVal, oldVal) {

            if ($scope.Widgets.formEditKDSPriceRef.formWidgets.txtCcyrat.datavalue == 0) {
                $scope.$parent.notifyErrormsg("Currency Rate not entered in Payment terms for the Order. Please update");
            } else if (newVal <= 0 & $scope.Widgets.formEditKDSPriceRef.formWidgets.pChangereason.datavalue !== '09') {
                $scope.$parent.notifyErrormsg("Unit price cannot be less than 0");
            }

        };
        //------------------------------------------------------------------------------------------------------------------------------------------------------
        //on change of KDS FLI price
        $scope.pFliprcChange = function($event, $isolateScope, newVal, oldVal) {
            if ($scope.Widgets.formEditKDSPriceRef.formWidgets.txtCcyrat.datavalue == 0) {
                $scope.$parent.notifyErrormsg("Currency Rate not entered in Payment terms for the Order. Please update");
            } else if (newVal <= 0) {
                $scope.$parent.notifyErrormsg("FLI price cannot be less than 0");
            }

        };
        //-----------------------------------------------------------------------------------------------------------------------
        // on change of retail price  retprc  
        $scope.pKdsRetprcChange = function($event, $isolateScope, newVal, oldVal) {
            if (($scope.Widgets.panelOr100Header.Widgets.lblCcyret.caption == undefined) || ($scope.Widgets.panelOr100Header.Widgets.lblCcyret.caption == "")) {

                $scope.$parent.notifyErrormsg("Currency for Retail price not entered in Payment terms for the Order. Please update");
            } else if (newVal <= 0 & $scope.Widgets.formEditKDSPriceRef.formWidgets.pChangereason.datavalue !== '15') {
                $scope.$parent.notifyErrormsg("Retail price cannot be less than 0");
            }

        };
        //--------------------------------------------------------------------------------------------------------------------------
        // on change of 2nd retail price retprcb
        $scope.pKdsRetprcbChange = function($event, $isolateScope, newVal, oldVal) {

            if (($scope.Widgets.panelOr100Header.Widgets.lblCcyretb.caption == undefined) || ($scope.Widgets.panelOr100Header.Widgets.lblCcyretb.caption == "")) {
                $scope.$parent.notifyErrormsg("Currency for 2nd Retail price not entered in Payment terms for the Order. Please update");
            } else if (newVal <= 0 & $scope.Widgets.formEditKDSPriceRef.formWidgets.pChangereason.datavalue !== '15') {
                $scope.$parent.notifyErrormsg("Retail price 2 cannot be less than 0");
            }

        };

        //--------------------------------------------------------------------------------------------------------------------------------    
        //on change of 3rd retail price retprcc
        $scope.pKdsRetprccChange = function($event, $isolateScope, newVal, oldVal) {
            if (($scope.Widgets.panelOr100Header.Widgets.lblCcyretc.caption == undefined) || ($scope.Widgets.panelOr100Header.Widgets.lblCcyretc.caption == "")) {
                $scope.$parent.notifyErrormsg("Currency for 3rd Retail price not entered in Payment terms for the Order. Please update");
            } else if (newVal <= 0 & $scope.Widgets.formEditKDSPriceRef.formWidgets.pChangereason.datavalue !== '15') {
                $scope.$parent.notifyErrormsg("Retail price 3 cannot be less than 0");
            }

        };
        //-------------------------------------------------------------------------------------------------------------------------------------------------        
        //on change of 4th retail price retprcd
        $scope.pKdsRetprcdChange = function($event, $isolateScope, newVal, oldVal) {
            if (($scope.Widgets.panelOr100Header.Widgets.lblCcyretd.caption == undefined) || ($scope.Widgets.panelOr100Header.Widgets.lblCcyretd.caption == "")) {
                $scope.$parent.notifyErrormsg("Currency for 4th Retail price not entered in Payment terms for the Order. Please update");
            } else if (newVal <= 0 & $scope.Widgets.formEditKDSPriceRef.formWidgets.pChangereason.datavalue !== '15') {
                $scope.$parent.notifyErrormsg("Retail price 4 cannot be less than 0");
            }

        };

        //---------------------------------------------------------------------------------------------------------------------------------------
        //on change of ort209 ref
        $scope.pRefChange = function($event, $isolateScope, newVal, oldVal) {
            $scope.Widgets.formEditKDSPriceRef.formWidgets.pRef.datavalue = newVal.toUpperCase();
        };

        //-------------------------------------------------------------------------------------
        //on change of ort209 ref2
        $scope.pRef2Change = function($event, $isolateScope, newVal, oldVal) {
            $scope.Widgets.formEditKDSPriceRef.formWidgets.pRef2.datavalue = newVal.toUpperCase();
        };
        //-------------------------------------------------------------------------------------
        //on change of ort209 ref3

        $scope.pRef3Change = function($event, $isolateScope, newVal, oldVal) {
            $scope.Widgets.formEditKDSPriceRef.formWidgets.pRef3.datavalue = newVal.toUpperCase();
        };

        //-------------------------------------------------------------------------------------
        //on change of ort209 ref4
        $scope.pRef4Change = function($event, $isolateScope, newVal, oldVal) {
            $scope.Widgets.formEditKDSPriceRef.formWidgets.pRef4.datavalue = newVal.toUpperCase();
        };

        //-------------------------------------------------------------------------------------
        //on change of ort209 ref5
        $scope.pRef5Change = function($event, $isolateScope, newVal, oldVal) {
            $scope.Widgets.formEditKDSPriceRef.formWidgets.pRef5.datavalue = newVal.toUpperCase();
        };

        //-------------------------------------------------------------------------------------
        //on change of ort209 ref6
        $scope.pRef6Change = function($event, $isolateScope, newVal, oldVal) {
            $scope.Widgets.formEditKDSPriceRef.formWidgets.pRef6.datavalue = newVal.toUpperCase();
        };

        //-------------------------------------------------------------------------------------
        //on change of ort209 ref7
        $scope.pRef7Change = function($event, $isolateScope, newVal, oldVal) {
            $scope.Widgets.formEditKDSPriceRef.formWidgets.pRef7.datavalue = newVal.toUpperCase();
        };

        //-------------------------------------------------------------------------------------
        //on change of ort209 ref8
        $scope.pRef8Change = function($event, $isolateScope, newVal, oldVal) {
            $scope.Widgets.formEditKDSPriceRef.formWidgets.pRef8.datavalue = newVal.toUpperCase();
        };

        //----------------------------------------------------------------------------------------------------------------------------------------------------------

        // before submit form dialog Update KDS price and refs
        $scope.formEditKDSPriceRefBeforesubmit = function($event, $isolateScope, $data) {

            if (($scope.Variables.statKDSFieldToUpdate.dataSet.dataValue == undefined) || ($scope.Variables.statKDSFieldToUpdate.dataSet.dataValue == null)) {
                $scope.$parent.notifyErrormsg("Field to update is blank");
                return false;
            }

            if (($scope.Variables.statChgReasonCategory.dataSet.dataValue == undefined) || ($scope.Variables.statChgReasonCategory.dataSet.dataValue == null)) {
                $scope.$parent.notifyErrormsg("Field to update is blank");
                return false;
            }


            var oldUntprc = $scope.Variables.svOrt209QryCurrentPrice.dataSet.content[0].untprc;
            var newUntprc = $scope.Widgets.formEditKDSPriceRef.formWidgets.pKDSUnitprc.datavalue;

            var oldFliprc = $scope.Variables.svOrt209QryCurrentPrice.dataSet.content[0].fliprc;
            var newFliprc = $scope.Widgets.formEditKDSPriceRef.formWidgets.pFliprc.datavalue;

            var oldretprc = $scope.Variables.svOrt209QryCurrentPrice.dataSet.content[0].retprc;
            var newretprc = $scope.Widgets.formEditKDSPriceRef.formWidgets.pKdsRetprc.datavalue;

            var oldretprcb = $scope.Variables.svOrt209QryCurrentPrice.dataSet.content[0].retprcb;
            var newretprcb = $scope.Widgets.formEditKDSPriceRef.formWidgets.pKdsRetprcb.datavalue;

            var oldretprcc = $scope.Variables.svOrt209QryCurrentPrice.dataSet.content[0].retprcc;
            var newretprcc = $scope.Widgets.formEditKDSPriceRef.formWidgets.pKdsRetprcc.datavalue;

            var oldretprcd = $scope.Variables.svOrt209QryCurrentPrice.dataSet.content[0].retprcd;
            var newretprcd = $scope.Widgets.formEditKDSPriceRef.formWidgets.pKdsRetprcd.datavalue;

            if (oldretprc == null || oldretprc == null) {
                oldretprc = 0;
            }

            if (newretprc == null || newretprc == null) {
                newretprc = 0;
            }


            if (oldretprcb == null || oldretprcb == null) {
                oldretprcb = 0;
            }

            if (newretprcb == null || newretprcb == null) {
                newretprcb = 0;
            }

            if (oldretprcc == null || oldretprcc == null) {
                oldretprcc = 0;
            }

            if (newretprcc == null || newretprcc == null) {
                newretprcc = 0;
            }


            if (oldretprcd == null || oldretprcd == null) {
                oldretprcd = 0;
            }

            if (newretprcd == null || newretprcd == null) {
                newretprcd = 0;
            }

            if ($scope.Variables.statKDSFieldToUpdate.dataSet.dataValue == "KDS_UNITPRICE") {
                if (newUntprc <= 0 & $scope.Widgets.formEditKDSPriceRef.formWidgets.pChangereason.datavalue !== '09') {
                    $scope.$parent.notifyErrormsg("Unit price cannot be less than 0");
                    return false;
                }
                if (oldUntprc == newUntprc) {
                    $scope.$parent.notifyErrormsg("Unit price has not been changed. There is nothing to save.");
                    return false;
                }
            }


            if ($scope.Variables.statKDSFieldToUpdate.dataSet.dataValue == "KDS_FLIPRICE") {
                if (newFliprc <= 0) {
                    $scope.$parent.notifyErrormsg("FLI price cannot be less than 0");
                    return false;
                }
                if (oldFliprc == newFliprc) {
                    $scope.$parent.notifyErrormsg("FLI price has not been changed. There is nothing to save.");
                    return false;
                }

            }


            if (((oldUntprc !== newUntprc) & ($scope.Variables.statKDSFieldToUpdate.dataSet.dataValue == "KDS_UNITPRICE")) ||
                ((oldFliprc !== newFliprc) & ($scope.Variables.statKDSFieldToUpdate.dataSet.dataValue == "KDS_FLIPRICE"))
            ) {
                if ($scope.Widgets.formEditKDSPriceRef.formWidgets.txtCcyrat.datavalue == 0) {
                    $scope.$parent.notifyErrormsg("Currency Rate not entered in Payment terms for the Order. Please update");
                    return false;
                }
            }

            if ((oldUntprc !== newUntprc) & ($scope.Variables.statKDSFieldToUpdate.dataSet.dataValue == "KDS_UNITPRICE")) {
                if (oldUntprc > 0) {
                    if (($scope.Widgets.formEditKDSPriceRef.formWidgets.pChangereason.datavalue == undefined) || ($scope.Widgets.formEditKDSPriceRef.formWidgets.pChangereason.datavalue == null)) {
                        $scope.$parent.notifyErrormsg("Reason for change in unit price should be entered");
                        return false;
                    }
                }
            }


            if ((oldretprc !== newretprc) & ($scope.Variables.statKDSFieldToUpdate.dataSet.dataValue == "KDS_RETAILPRICE")) {

                if (($scope.Widgets.panelOr100Header.Widgets.lblCcyret.caption == undefined) || ($scope.Widgets.panelOr100Header.Widgets.lblCcyret.caption == "")) {
                    $scope.$parent.notifyErrormsg("Currency for Retail price not entered in Payment terms for the Order. Please update that first");
                    return false;
                }

                if (newretprc <= 0 & $scope.Widgets.formEditKDSPriceRef.formWidgets.pChangereason.datavalue !== '15') {
                    $scope.$parent.notifyErrormsg("Retail price cannot be less than 0");
                    return false;
                }
                if (oldretprc > 0) {
                    if (($scope.Widgets.formEditKDSPriceRef.formWidgets.pChangereason.datavalue == undefined) || ($scope.Widgets.formEditKDSPriceRef.formWidgets.pChangereason.datavalue == null)) {
                        $scope.$parent.notifyErrormsg("Reason for change in retail price should be entered");
                        return false;
                    }
                }


            }


            if ((oldretprcb !== newretprcb) & ($scope.Variables.statKDSFieldToUpdate.dataSet.dataValue == "KDS_RETAILPRICE")) {

                if (($scope.Widgets.panelOr100Header.Widgets.lblCcyretb.caption == undefined) || ($scope.Widgets.panelOr100Header.Widgets.lblCcyretb.caption == "")) {
                    $scope.$parent.notifyErrormsg("Currency for 2nd Retail price not entered in Payment terms for the Order. Please update that first");
                    return false;
                }
                if (newretprcb <= 0 & $scope.Widgets.formEditKDSPriceRef.formWidgets.pChangereason.datavalue !== '15') {
                    $scope.$parent.notifyErrormsg("Retail price 2 cannot be less than 0");
                    return false;
                }
                if (oldretprcb > 0) {
                    if (($scope.Widgets.formEditKDSPriceRef.formWidgets.pChangereason.datavalue == undefined) || ($scope.Widgets.formEditKDSPriceRef.formWidgets.pChangereason.datavalue == null)) {
                        $scope.$parent.notifyErrormsg("Reason for change should be entered");
                        return false;
                    }
                }

            }


            if ((oldretprcc !== newretprcc) & ($scope.Variables.statKDSFieldToUpdate.dataSet.dataValue == "KDS_RETAILPRICE")) {

                if (($scope.Widgets.panelOr100Header.Widgets.lblCcyretc.caption == undefined) || ($scope.Widgets.panelOr100Header.Widgets.lblCcyretc.caption == "")) {
                    $scope.$parent.notifyErrormsg("Currency for 3rd Retail price not entered in Payment terms for the Order. Please update that first");
                    return false;
                }

                if (newretprcc <= 0 & $scope.Widgets.formEditKDSPriceRef.formWidgets.pChangereason.datavalue !== '15') {
                    $scope.$parent.notifyErrormsg("Retail price 3 cannot be less than 0");
                    return false;
                }
                if (oldretprcc > 0) {
                    if (($scope.Widgets.formEditKDSPriceRef.formWidgets.pChangereason.datavalue == undefined) || ($scope.Widgets.formEditKDSPriceRef.formWidgets.pChangereason.datavalue == null)) {
                        $scope.$parent.notifyErrormsg("Reason for change should be entered");
                        return false;
                    }
                }
            }


            if ((oldretprcd !== newretprcd) & ($scope.Variables.statKDSFieldToUpdate.dataSet.dataValue == "KDS_RETAILPRICE")) {

                if (($scope.Widgets.panelOr100Header.Widgets.lblCcyretd.caption == undefined) || ($scope.Widgets.panelOr100Header.Widgets.lblCcyretd.caption == "")) {
                    $scope.$parent.notifyErrormsg("Currency for 4th Retail price not entered in Payment terms for the Order. Please update that first");
                    return false;
                }
                if (newretprcd <= 0 & $scope.Widgets.formEditKDSPriceRef.formWidgets.pChangereason.datavalue !== '15') {
                    $scope.$parent.notifyErrormsg("Retail price 4 cannot be less than 0");
                    return false;
                }
                if (oldretprcd > 0) {
                    if (($scope.Widgets.formEditKDSPriceRef.formWidgets.pChangereason.datavalue == undefined) || ($scope.Widgets.formEditKDSPriceRef.formWidgets.pChangereason.datavalue == null)) {
                        $scope.$parent.notifyErrormsg("Reason for change should be entered");
                        return false;
                    }
                }
            }

        };

    }
]);

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// dialog  Fetch Extranet Details
Application.$controller("dialogFetchExtranetDetController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;

        $scope.formFetchExtranetBeforesubmit = function($event, $isolateScope, $data) {

            //console.log(data);
            //console.log($data);

            // cannot use  $data here , because form does not use formData.

            if ((($scope.Widgets.formFetchExtranet.formWidgets.pFetchUnitprcInd.datavalue == undefined) || ($scope.Widgets.formFetchExtranet.formWidgets.pFetchUnitprcInd.datavalue == 'N')) & (($scope.Widgets.formFetchExtranet.formWidgets.pFetchRetPrcInd.datavalue == undefined) || ($scope.Widgets.formFetchExtranet.formWidgets.pFetchRetPrcInd.datavalue == 'N')) & (($scope.Widgets.formFetchExtranet.formWidgets.pFetchBarcodeInd.datavalue == undefined) || ($scope.Widgets.formFetchExtranet.formWidgets.pFetchBarcodeInd.datavalue == 'N')) & (($scope.Widgets.formFetchExtranet.formWidgets.pFetchStyleInd.datavalue == undefined) || ($scope.Widgets.formFetchExtranet.formWidgets.pFetchStyleInd.datavalue == 'N')) & (($scope.Widgets.formFetchExtranet.formWidgets.pFetchRatioPackInd.datavalue == undefined) || ($scope.Widgets.formFetchExtranet.formWidgets.pFetchRatioPackInd.datavalue == 'N')))

            {
                $scope.Variables.notifMsg.setAlertType("error");
                $scope.Variables.notifMsg.setMessage("Error: " + "You should tick at least one option before you fetch");
                $scope.Variables.notifMsg.notify();
                return false;
            }


            if (($scope.Widgets.formFetchExtranet.formWidgets.pToShpnum.datavalue == undefined) || ($scope.Widgets.formFetchExtranet.formWidgets.pFromShpnum.datavalue == undefined) ||
                ($scope.Widgets.formFetchExtranet.formWidgets.pToShpnum.datavalue <= 0) || ($scope.Widgets.formFetchExtranet.formWidgets.pFromShpnum.datavalue <= 0)
            ) {
                $scope.Variables.notifMsg.setAlertType("error");
                $scope.Variables.notifMsg.setMessage("Error: " + "From/To Shipment should be entered before you fetch");
                $scope.Variables.notifMsg.notify();
                return false;
            }

            if ((($scope.Widgets.formFetchExtranet.formWidgets.pToShpnum.datavalue == "%") & ($scope.Widgets.formFetchExtranet.formWidgets.pFromShpnum.datavalue !== "%")) ||
                (($scope.Widgets.formFetchExtranet.formWidgets.pToShpnum.datavalue !== "%") & ($scope.Widgets.formFetchExtranet.formWidgets.pFromShpnum.datavalue == "%"))
            ) {
                $scope.Variables.notifMsg.setAlertType("error");
                $scope.Variables.notifMsg.setMessage("Error: " + "From and To Shipment should both be %");
                $scope.Variables.notifMsg.notify();
                return false;
            }

            if ($scope.Widgets.formFetchExtranet.formWidgets.pToShpnum.datavalue < $scope.Widgets.formFetchExtranet.formWidgets.pFromShpnum.datavalue) {
                $scope.Variables.notifMsg.setAlertType("error");
                $scope.Variables.notifMsg.setMessage("Error: " + "To Shipment cannot be less than From Shipment");
                $scope.Variables.notifMsg.notify();
                return false;
            }

        };

        //---------------------------------------------------------------------------------------------------
        //when select From Shpnum on dialog FetchExtranet Details
        $scope.pFromShpnumChange = function($event, $isolateScope, newVal, oldVal) {
            if (newVal == "%") {
                $scope.Widgets.formFetchExtranet.formWidgets.pToShpnum.datavalue = "%";
                $scope.Widgets.formFetchExtranet.formWidgets.pToShpnum.disabled = true;
            } else if ((newVal !== "%") & ($scope.Widgets.formFetchExtranet.formWidgets.pToShpnum.datavalue == "%")) {
                $scope.Widgets.formFetchExtranet.formWidgets.pToShpnum.disabled = false;
                $scope.Widgets.formFetchExtranet.formWidgets.pToShpnum.datavalue = newVal;
            } else if ((newVal !== "%") & ($scope.Widgets.formFetchExtranet.formWidgets.pToShpnum.datavalue !== "%")) {
                //from shpnum > to shpnum
                if (newVal > $scope.Widgets.formFetchExtranet.formWidgets.pToShpnum.datavalue) {
                    $scope.Widgets.formFetchExtranet.formWidgets.pToShpnum.datavalue = undefined;
                }
            }

        };

        //------------------------------------------------------------------------------------------------------------
        //when change To Shpnum on dialog Fetch Extranet Details
        $scope.pToShpnumChange = function($event, $isolateScope, newVal, oldVal) {
            if ((newVal == "%") & ($scope.Widgets.formFetchExtranet.formWidgets.pFromShpnum.datavalue !== "%")) {
                $scope.Widgets.formFetchExtranet.formWidgets.pFromShpnum.datavalue = "%";

            } else if ((newVal !== "%") & ($scope.Widgets.formFetchExtranet.formWidgets.pFromShpnum.datavalue == "%")) {
                $scope.Widgets.formFetchExtranet.formWidgets.pFromShpnum.datavalue = newVal;
            } else if ((newVal !== "%") & ($scope.Widgets.formFetchExtranet.formWidgets.pFromShpnum.datavalue !== "%")) {
                if (newval < $scope.Widgets.formFetchExtranet.formWidgets.pFromShpnum.datavalue) {
                    $scope.Widgets.formFetchExtranet.formWidgets.pFromShpnum.datavalue = undefined;
                    $scope.Widgets.formFetchExtranet.formWidgets.pToShpnum.datavalue = undefined;

                    $scope.Variables.notifMsg.setAlertType("error");
                    $scope.Variables.notifMsg.setMessage("Error: " + "To Shipment cannot be less than From shipment");
                    $scope.Variables.notifMsg.notify();
                    return false;
                }
            }

        };

        // after form successfully submitted.    
        $scope.formFetchExtranetSuccess = function($event, $isolateScope, $data) {
            $scope.Widgets.dialogFetchExtranetDet.close();
        };

    }
]);
//--------------------------------------------------------------------------------------------------------------------------------------
// dialog Copy references
Application.$controller("dialogCopyRefController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;
        //-----------------------------------------------------------------------------------------------------------------------------
        // on chnage of source shipment
        $scope.pSrcOrdnumChange = function($event, $isolateScope, newVal, oldVal) {
            //console.log($scope.Widgets.formCopyRef.formWidgets.pCopyrefInd.caption);
            $scope.Widgets.formCopyRef.formWidgets.pSrcOrdnum.datavalue = newVal.toUpperCase();

        };
        //----------------------------------------------------------------------------------------------------------
        // after form successfully submitted
        $scope.formCopyRefSuccess = function($event, $isolateScope, $data) {
            $scope.Widgets.dialogCopyRef.close();
        };

        //-----------------------------------------------------------------------------------------------------------------
        // validations before submit form copy refs

        $scope.formCopyRefBeforesubmit = function($event, $isolateScope, $data) {
            if (($scope.Widgets.formCopyRef.formWidgets.pSrcOrdnum.datavalue == undefined) || ($scope.Widgets.formCopyRef.formWidgets.pSrcOrdnum.datavalue == "%") ||
                ($scope.Widgets.formCopyRef.formWidgets.pSrcOrdnum.datavalue == "")) {
                $scope.Variables.notifMsg.setAlertType("error");
                $scope.Variables.notifMsg.setMessage("Error: " + "Source Order is required");
                $scope.Variables.notifMsg.notify();
                return false;
            }

            if (($scope.Widgets.formCopyRef.formWidgets.pSrcShpnum.datavalue == undefined) || ($scope.Widgets.formCopyRef.formWidgets.pSrcShpnum.datavalue == "%") ||
                ($scope.Widgets.formCopyRef.formWidgets.pSrcShpnum.datavalue == "")) {
                $scope.Variables.notifMsg.setAlertType("error");
                $scope.Variables.notifMsg.setMessage("Error: " + "Source Shipment is required");
                $scope.Variables.notifMsg.notify();
                return false;
            }

            if (($scope.Widgets.formCopyRef.formWidgets.pDestShpnum.datavalue == undefined) || ($scope.Widgets.formCopyRef.formWidgets.pDestShpnum.datavalue == "%") ||
                ($scope.Widgets.formCopyRef.formWidgets.pDestShpnum.datavalue == "")) {
                $scope.Variables.notifMsg.setAlertType("error");
                $scope.Variables.notifMsg.setMessage("Error: " + "Destination Shipment is required");
                $scope.Variables.notifMsg.notify();
                return false;
            }


            if (($scope.Widgets.formCopyRef.formWidgets.pDestShpnum.datavalue == $scope.Widgets.formCopyRef.formWidgets.pSrcShpnum.datavalue) &
                ($scope.Widgets.formCopyRef.formWidgets.pSrcOrdnum.datavalue == $scope.Widgets.formCopyRef.formWidgets.pDestOrdnum.datavalue)) {
                $scope.Variables.notifMsg.setAlertType("error");
                $scope.Variables.notifMsg.setMessage("Error: " + "Source and Destination shipments cannot be same");
                $scope.Variables.notifMsg.notify();
                return false;
            }


            if ((($scope.Widgets.formCopyRef.formWidgets.pCopyFliprcInd.datavalue == undefined) || ($scope.Widgets.formCopyRef.formWidgets.pCopyFliprcInd.datavalue == 'N')) &
                (($scope.Widgets.formCopyRef.formWidgets.pCopyRetPrcInd.datavalue == undefined) || ($scope.Widgets.formCopyRef.formWidgets.pCopyRetPrcInd.datavalue == 'N')) &
                (($scope.Widgets.formCopyRef.formWidgets.pCopyrefInd.datavalue == undefined) || ($scope.Widgets.formCopyRef.formWidgets.pCopyrefInd.datavalue == 'N')) &
                (($scope.Widgets.formCopyRef.formWidgets.pCopyref2Ind.datavalue == undefined) || ($scope.Widgets.formCopyRef.formWidgets.pCopyref2Ind.datavalue == 'N')) &
                (($scope.Widgets.formCopyRef.formWidgets.pCopyref3Ind.datavalue == undefined) || ($scope.Widgets.formCopyRef.formWidgets.pCopyref3Ind.datavalue == 'N')) &

                (($scope.Widgets.formCopyRef.formWidgets.pCopyref4Ind.datavalue == undefined) || ($scope.Widgets.formCopyRef.formWidgets.pCopyref4Ind.datavalue == 'N')) &
                (($scope.Widgets.formCopyRef.formWidgets.pCopyref5Ind.datavalue == undefined) || ($scope.Widgets.formCopyRef.formWidgets.pCopyref5Ind.datavalue == 'N')) &
                (($scope.Widgets.formCopyRef.formWidgets.pCopyref6Ind.datavalue == undefined) || ($scope.Widgets.formCopyRef.formWidgets.pCopyref6Ind.datavalue == 'N')) &
                (($scope.Widgets.formCopyRef.formWidgets.pCopyref7Ind.datavalue == undefined) || ($scope.Widgets.formCopyRef.formWidgets.pCopyref7Ind.datavalue == 'N')) &
                (($scope.Widgets.formCopyRef.formWidgets.pCopyref8Ind.datavalue == undefined) || ($scope.Widgets.formCopyRef.formWidgets.pCopyref8Ind.datavalue == 'N'))
            )

            {
                $scope.Variables.notifMsg.setAlertType("error");
                $scope.Variables.notifMsg.setMessage("Error: " + "You should tick at least one option before you copy");
                $scope.Variables.notifMsg.notify();
                return false;
            }


        };

    }
]);

Application.$controller("dialogSearchOrdRefController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;
        //----------------------------------------------------------------------------------------
        // on change of client code
        $scope.pClicodChange = function($event, $isolateScope, newVal, oldVal) {

            $scope.Widgets.formSearchOrdref.formWidgets.pClicod.datavalue = newVal.toUpperCase();
            if (newVal.indexOf("%") == 0) {
                $scope.Variables.svQryRft102DetShpRefColname.invoke();
            }

        };

        //---------------------------------------------------------------------------------------
        //on change of ssn
        $scope.pSsnChange = function($event, $isolateScope, newVal, oldVal) {
            $scope.Widgets.formSearchOrdref.formWidgets.pSsn.datavalue = newVal.toUpperCase();
        };
        //---------------------------------------------------------------------------------------------
        // on change of clionum -- dialogSearchOrdRef
        $scope.pClionumChange = function($event, $isolateScope, newVal, oldVal) {
            $scope.Widgets.formSearchOrdref.formWidgets.pClionum.datavalue = newVal.toUpperCase();
        };

        //---------------------------------------------------------------------------------------------------
        // before submit form -- validate entries
        $scope.formSearchOrdrefBeforesubmit = function($event, $isolateScope, $data) {
            if (($scope.Widgets.formSearchOrdref.formWidgets.pClicod.datavalue == undefined) || ($scope.Widgets.formSearchOrdref.formWidgets.pClicod.datavalue == "") || ($scope.Widgets.formSearchOrdref.formWidgets.pClicod.datavalue == null)) {
                $scope.Variables.notifMsg.setAlertType("error");
                $scope.Variables.notifMsg.setMessage("Error: " + "Client code should be entered");
                $scope.Variables.notifMsg.notify();
                return false;
            }

            var val = $scope.Widgets.formSearchOrdref.formWidgets.pClicod.datavalue.replace("%", "");
            if (val.length == 0) {
                $scope.Variables.notifMsg.setAlertType("error");
                $scope.Variables.notifMsg.setMessage("Error: " + "Client code should be entered");
                $scope.Variables.notifMsg.notify();
                return false;
            }

        };

    }
]);

Application.$controller("gridMatchingOrdListController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;
    }
]);