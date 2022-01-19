Application.$controller("YarnChangeCcfPageController", ["$scope", function($scope) {
    "use strict";
    /*Comments to be updated here 
    v1.01 ys08 15/04/2017 template created
    V1.02 CN04 27/04/2017 add security and app roles.

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
        //Below should be defined in the variable definition itself in the datavalue section
        //statAppid(id of the whole app)
        //statAppname(General name for the application)
        //statPrgid(Page id)
        //statPrgname(Page name)


        // cn04 get app roles for the loggedInUser
        //console.log("User Approles= " + $scope.Variables.loggedInUser.getData().roles);

        if ($scope.pageParams.pParamlist !== undefined) {
            var params = $scope.pageParams.pParamlist.split(';');


            //ensure ordnum, fabseq and progid have been duly passed before querying
            if (params.length >= 2) {
                $scope.Widgets.txtOrdnum.datavalue = params[0];
                $scope.Widgets.txtFabseq.datavalue = params[1];
                $scope.Widgets.txtOrdnum.disabled = true;
                $scope.Widgets.txtFabseq.disabled = true;

                /*$scope.Variables.svOr105wpk0QryOrt125.setInput("pPrgid", params[2]);
                $scope.Variables.svOr105wpk0QryOrt125.setInput("pOrdnum", params[0]);
                $scope.Variables.svOr105wpk0QryOrt125.setInput("pFabseq", params[1]);
                $scope.Variables.svOr105wpk0QryOrt125.invoke();*/
            }
        }

    };




    $scope.button1Click = function($event, $isolateScope) {
        if ($scope.Widgets.txtOrdnum.datavalue == undefined || $scope.Widgets.txtFabseq.datavalue == undefined) {
            $scope.Variables.notifMsg.setAlertType("error");
            $scope.Variables.notifMsg.setMessage("Error: Qqury an Order Fabric first");
            $scope.Variables.notifMsg.notify();
            return false;
        }


        //        debugger;
        var changes = JSON.parse($scope.Widgets.panelYrn.Variables.tgridYarn.GetChanges()).Changes;
        var m_yrnpropval_list = "";
        //m_yrnpropval_list = {yrnseq:propertyName=propertyValue;propertyName2=propertyValue2;propertyName3=properValue3;}{yrnseq2:propertyName=propertyValue;propertyName3=propertyValue3;} 
        //{1:YRNSUBQLTYA=COVER;YRNQLTY=FANCY;YRNCLR=RB;YRNFFCOD=FF00125;}{4:YRNSUBQLTYA=;YRNQLTY=SIRO;YRNCNT=40 DTEX/F1;YRNCPS=95CO5CV;YRNCLR=RD;}

        //m_yrnsubqltya_chglist = {YRNSUBQLTYA:1=val1,2=val2}
        var m_yrnsubqltya_chglist = "";
        var m_yrnsubqltyb_chglist = "";
        var m_yrnqlty_chglist = "";

        var m_yrncnt_chglist = "";
        var m_yrncps_chglist = "";
        var m_yrnclr_chglist = "";
        var m_yrnffcod_chglist = "";
        var m_baseyrnclr_chglist = "";
        var m_yrnfrac_chglist = "";



        var curyrnseq;
        var m_row = "";
        var m_chglist = "";

        //$scope.Widgets.panelYrn.Variables.tgridYarn.GetChanges();

        var i = 0;
        if (changes.length == 0) {
            $scope.Variables.notifMsg.setAlertType("error");
            $scope.Variables.notifMsg.setMessage("Error: There are no changes to save");
            $scope.Variables.notifMsg.notify();
            return false;

        } else {
            for (i = 0; i < changes.length; i++) {

                m_yrnsubqltya_chglist = "";
                m_yrnsubqltyb_chglist = "";
                m_yrnqlty_chglist = "";
                m_yrncnt_chglist = "";
                m_yrncps_chglist = "";
                m_yrnclr_chglist = "";
                m_yrnffcod_chglist = "";
                m_baseyrnclr_chglist = "";
                m_yrnfrac_chglist = "";

                curyrnseq = "";
                m_row = "";
                m_chglist = "";

                curyrnseq = $scope.Widgets.panelYrn.Variables.tgridYarn.Rows[changes[i].id].yrnseq;

                if (curyrnseq == undefined) {
                    $scope.Variables.notifMsg.setAlertType("error");
                    $scope.Variables.notifMsg.setMessage("Error: Yarn seq is undefined. Close and restart over");
                    $scope.Variables.notifMsg.notify();
                    return false;
                }


                m_row = "{" + curyrnseq + ":";


                //yrnsubqltya
                if (changes[i].yrnsubqltya !== undefined) {
                    m_chglist = "YRNSUBQLTYA=" + changes[i].yrnsubqltya + ";";
                }

                //yrnsubqltyb
                if (changes[i].yrnsubqltyb !== undefined) {
                    if (m_chglist.length == 0) {
                        m_chglist = "YRNSUBQLTYB=" + changes[i].yrnsubqltyb + ";";
                    } else {
                        m_chglist = m_chglist + "YRNSUBQLTYB=" + changes[i].yrnsubqltyb + ";";
                    }
                }

                //yrnqlty
                if (changes[i].yrnqlty !== undefined) {
                    if (m_chglist.length == 0) {
                        m_chglist = "YRNQLTY=" + changes[i].yrnqlty + ";";
                    } else {
                        m_chglist = m_chglist + "YRNQLTY=" + changes[i].yrnqlty + ";";
                    }
                }


                //yrncnt
                if (changes[i].yrncnt !== undefined) {
                    if (m_chglist.length == 0) {
                        m_chglist = "YRNCNT=" + changes[i].yrncnt + ";";
                    } else {
                        m_chglist = m_chglist + "YRNCNT=" + changes[i].yrncnt + ";";
                    }
                }

                //yrncps
                if (changes[i].yrncps !== undefined) {
                    if (m_chglist.length == 0) {
                        m_chglist = "YRNCPS=" + changes[i].yrncps + ";";
                    } else {
                        m_chglist = m_chglist + "YRNCPS=" + changes[i].yrncps + ";";
                    }
                }

                //yrnclr
                if (changes[i].yrnclr !== undefined) {
                    if (m_chglist.length == 0) {
                        m_chglist = "YRNCLR=" + changes[i].yrnclr + ";";
                    } else {
                        m_chglist = m_chglist + "YRNCLR=" + changes[i].yrnclr + ";";
                    }
                }

                //yrnffcod
                if (changes[i].yrnffcod !== undefined) {
                    if (m_chglist.length == 0) {
                        m_chglist = "YRNFFCOD=" + changes[i].yrnffcod + ";";
                    } else {
                        m_chglist = m_chglist + "YRNFFCOD=" + changes[i].yrnffcod + ";";
                    }


                }

                //base_yrnclr
                if (changes[i].baseYrnclr !== undefined) {
                    if (m_chglist.length == 0) {
                        m_chglist = "BASEYRNCLR=" + changes[i].baseYrnclr + ";";
                    } else {
                        m_chglist = m_chglist + "BASEYRNCLR=" + changes[i].baseYrnclr + ";";
                    }

                }

                //yrnfrac
                if (changes[i].yrnfrac !== undefined) {
                    if (m_chglist.length == 0) {
                        m_chglist = "YRNFRAC=" + changes[i].yrnfrac + ";";
                    } else {
                        m_chglist = m_chglist + "YRNFRAC=" + changes[i].yrnfrac + ";";
                    }

                }

                m_row = m_row + m_chglist + "}";

                if (m_yrnpropval_list.length == 0) {
                    m_yrnpropval_list = m_row;
                } else {
                    m_yrnpropval_list = m_yrnpropval_list + m_row;
                }
            }

            $scope.Variables.svUpdCCF.setInput("pPrgid", $scope.Variables.statPrgid.dataSet.dataValue);
            $scope.Variables.svUpdCCF.setInput("pOrdnum", $scope.Widgets.txtOrdnum.datavalue);
            $scope.Variables.svUpdCCF.setInput("pFabseq", $scope.Widgets.txtFabseq.datavalue);
            $scope.Variables.svUpdCCF.setInput("pYrnpropvalList", m_yrnpropval_list.toUpperCase());
            $scope.Variables.svUpdCCF.invoke();

        }

    };


    $scope.svGetCCFFabDetonBeforeUpdate = function(variable, inputData) {
        if (inputData.pOrdnum == undefined || inputData.pFabseq == undefined) {
            return false;
        }


    };


    $scope.txtOrdnumChange = function($event, $isolateScope, newVal, oldVal) {
        $scope.Widgets.txtOrdnum.datavalue = newVal.toUpperCase();
    };


    $scope.svUpdCCFonSuccess = function(variable, data) {
        if (data !== undefined) {
            if (data.poutMsg !== null) {
                $scope.Variables.notifMsg.setAlertType("warning");
                $scope.Variables.notifMsg.setMessage("CCF has been updated.  Warning: " + data.poutMsg);
            } else {
                $scope.Variables.notifMsg.setAlertType("success");
                $scope.Variables.notifMsg.setMessage("CCF has been successfully saved");
            }

            $scope.Variables.notifMsg.notify();
        }

    };



    $scope.svUpdCCFonError = function(variable, data) {

        $scope.Variables.notifMsg.setAlertType("error");
        $scope.Variables.notifMsg.setMessage(data);
        $scope.Variables.notifMsg.notify();
    };

}]);

Application.$controller("iframedialog1Controller", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;
    }
]);