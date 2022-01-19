Application.$controller("partOrdYarnPageController", ["$scope", 'TreeGridHelper', function($scope, TreeGridHelper) {
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

        // format of page parameter pParamlist  = ordnum;fabseq;prgid
        if ($scope.pageParams.pParamList !== undefined) {
            var params = $scope.pageParams.pParamList.split(';');


            //ensure ordnum, fabseq and progid have been duly passed before querying
            if (params.length >= 3) {
                $scope.Variables.statpOrdnum.dataSet.dataValue = params[0];
                $scope.Variables.statpFabseq.dataSet.dataValue = params[1];
                $scope.Variables.statPrgid.dataSet.dataValue = params[2];

                $scope.Variables.svOr105wpk0QryOrt125.setInput("pPrgid", params[2]);
                $scope.Variables.svOr105wpk0QryOrt125.setInput("pOrdnum", params[0]);
                $scope.Variables.svOr105wpk0QryOrt125.setInput("pFabseq", params[1]);
                $scope.Variables.svOr105wpk0QryOrt125.invoke();
            }
        }


    };


    // force focus on grid
    $scope.tableOnFocus = function(grid, row, col, orow, ocol, pagepos, rect, orect) {
        $scope.$apply();

        // console.log(orow);

        // mimics when-validate-record
        if (row !== orow) {
            //triggers upon first rendering of grid => when user has not changed row yet!
            //thus detect the "change row" only when orow (old row) is not null
            if (orow !== null) {

                $scope.Variables.statValRecordRowid.dataSet.dataValue = orow.id;

                // the actual edited row in the grid
                var m_currow = {
                    "ordnum": orow.ordnum,
                    "fabseq": orow.fabseq,
                    "yrnseq": orow.yrnseq,
                    "yrncnt": orow.yrncnt,
                    "yrncps": orow.yrncps,
                    "yrnqlty": orow.yrnqlty,
                    "yrnsubqltya": orow.yrnsubqltya,
                    "yrnsubqltyb": orow.yrnsubqltyb,
                    "yrnclr": orow.yrnclr,
                    "yrnori": orow.yrnori,
                    "oriclr": orow.oriclr,
                    "yrnffcod": orow.yrnffcod,
                    "numrows": orow.numrows,
                    "totrows": orow.totrows,
                    "tipping": orow.tipping,
                    "yrnends": orow.yrnends,
                    "yrnfrac": orow.yrnfrac,
                    "clrref": orow.clrref,
                    "preclrref": orow.preclrref,
                    "baseClrref": orow.baseClrref,
                    "baseYrncdes": orow.baseYrncdes,
                    "baseYrnclr": orow.baseYrnclr,
                    "inilabaddno": orow.inilabaddno,
                    "inilabapprvdate": $scope.FormatTgridDate(orow.inilabapprvdate),
                    "inilabdipno": orow.inilabdipno,
                    "inilabrevno": orow.inilabrevno,
                    "labapprvdate": $scope.FormatTgridDate(orow.labapprvdate),
                    "labapprvid": orow.labapprvid,
                    "labtoapp": orow.labtoapp,
                    "relatedLabdipLstdate": $scope.FormatTgridDate(orow.relatedLabdipLstdate),
                    "relatedLabdipLstid": orow.relatedLabdipLstid,
                    "relatedLabdipno": orow.relatedLabdipno,
                    "relatedLabdiprem": orow.relatedLabdiprem
                };


                $scope.Variables.statCurrentRow.dataSet.dataValue = m_currow;

                var datasetRow = $scope.Variables.svOr105wpk0QryOrt125.dataSet.poutYrnlist.filter(arr => arr.yrnseq == orow.yrnseq);
                var queriedRow = "";
                queriedRow = datasetRow[0].ordnum + datasetRow[0].fabseq + datasetRow[0].yrnseq +
                    datasetRow[0].yrncnt + datasetRow[0].yrncps + datasetRow[0].yrnqlty +
                    datasetRow[0].yrnsubqltya + datasetRow[0].yrnsubqltyb + datasetRow[0].yrnclr +
                    datasetRow[0].yrnori + datasetRow[0].oriclr + datasetRow[0].yrnffcod +
                    datasetRow[0].numrows + datasetRow[0].totrows + datasetRow[0].tipping +
                    datasetRow[0].yrnends + datasetRow[0].yrnfrac + datasetRow[0].clrref +
                    datasetRow[0].preclrref + datasetRow[0].baseClrref + datasetRow[0].baseYrncdes +
                    datasetRow[0].baseYrnclr + datasetRow[0].inilabaddno + $scope.FormatTgridDate(datasetRow[0].inilabapprvdate) +
                    datasetRow[0].inilabdipno + datasetRow[0].inilabrevno + $scope.FormatTgridDate(datasetRow[0].labapprvdate) +
                    datasetRow[0].labapprvid + datasetRow[0].labtoapp +
                    $scope.FormatTgridDate(datasetRow[0].relatedLabdipLstdate) +
                    datasetRow[0].relatedLabdipLstid + datasetRow[0].relatedLabdipno +
                    datasetRow[0].relatedLabdiprem;


                var editedrow = "";
                editedrow = m_currow.ordnum + m_currow.fabseq + m_currow.yrnseq +
                    m_currow.yrncnt + m_currow.yrncps + m_currow.yrnqlty +
                    m_currow.yrnsubqltya + m_currow.yrnsubqltyb + m_currow.yrnclr +
                    m_currow.yrnori + m_currow.oriclr + m_currow.yrnffcod +
                    m_currow.numrows + m_currow.totrows + m_currow.tipping +
                    m_currow.yrnends + m_currow.yrnfrac + m_currow.clrref +
                    m_currow.preclrref + m_currow.baseClrref + m_currow.baseYrncdes +
                    m_currow.baseYrnclr + m_currow.inilabaddno + m_currow.inilabapprvdate +
                    m_currow.inilabdipno + m_currow.inilabrevno + m_currow.labapprvdate +
                    m_currow.labapprvid + m_currow.labtoapp +
                    m_currow.relatedLabdipLstdate + m_currow.relatedLabdipLstid +
                    m_currow.relatedLabdipno + m_currow.relatedLabdiprem;


                //console.log(queriedRow);
                //console.log(editedrow);


                if (queriedRow !== editedrow) {

                    $scope.Variables.svValidateRecord.setInput("pPrgid", $scope.Variables.statPrgid.dataSet.dataValue);
                    $scope.Variables.svValidateRecord.setInput("pYrnrow", JSON.stringify($scope.Variables.statCurrentRow.dataSet.dataValue));
                    $scope.Variables.svValidateRecord.invoke();
                }

            }

        }



        if (col == "yrnsubqltya" && row.yrnsubqltyaeditacs == "Y") {
            // alert(grid.GetValue(row, "yrnsubqltya"));
        }

        // fetch LOVs if user has edit access
        // if column is a "select" widget, fetch LOVs on grid focus
        // if column is an "autocomplete", fetch Lovs on cellClick

        if (col == "yrncnt" && row.yrncnteditacs == "Y") {
            if ($scope.Variables.svGetYrncnt.dataSet.length == 0) {
                $scope.Variables.svGetYrncnt.invoke();
            }
        }

        if (col == "yrncps" && row.yrncpseditacs == "Y") {
            if ($scope.Variables.svGetYrncps.dataSet.length == 0) {
                $scope.Variables.svGetYrncps.invoke();
            }
        }

        if ( /*col == "yrnclr" &&*/ row.yrnclreditacs == "Y") {
            if ($scope.Variables.svGetYrnclr.dataSet.length == 0) {
                $scope.Variables.svGetYrnclr.invoke();
            }
        }

        if (col == "baseyrnclr" && row.baseyrnclreditacs == "Y") {
            if ($scope.Variables.svGetBaseYrnclr.dataSet.length == 0) {
                $scope.Variables.svGetBaseYrnclr.invoke();
            }
        }

        if (col == "yrnffcod") {
            debugger
            if (row.yrnffcodeditacs == "Y") {
                $scope.Variables.svGetYrnffcod.setInput("pOrdnum", row.ordnum);
                $scope.Variables.svGetYrnffcod.setInput("pFabseq", row.fabseq);
                $scope.Variables.svGetYrnffcod.setInput("pYrnseq", row.yrnseq);
                $scope.Variables.svGetYrnffcod.invoke();
            } else {
                if (!!$scope.Variables.svGetYrnffcod.dataSet && !!$scope.Variables.svGetYrnffcod.dataSet.poutYrnffcod && $scope.Variables.svGetYrnffcod.dataSet.poutYrnffcod.length > 0) {
                    $scope.Variables.svGetYrnffcod.dataSet = null;
                    $scope.setFFcodeLOV(null);
                }
            }
        }

        if ( /*col == "yrnqlty" &&*/ row.yrnqltyeditacs == "Y") {
            if ($scope.Variables.svGetYrnqlty.dataSet.length == 0) {
                $scope.Variables.svGetYrnqlty.invoke();
            }
        }

    };

    $scope.tableOnChange = function(grid, row, col, event) {
        if (col == "yrnqlty" && row.yrnqltyOrig !== row.yrnqlty) {
            // row.yrnsubqltya = "";
            // row.yrnsubqltyb = "";
            //console.log("on change yrnqlty.resetting subqltys");

            //set refresh cell to true (1)
            grid.SetValue(row, "yrnsubqltya", "", 1);
            grid.SetValue(row, "yrnsubqltyb", "", 1);

            $scope.Variables.svGetYrnsubqltya.setInput("pPrgid", $scope.Variables.statPrgid.dataSet.dataValue);
            $scope.Variables.svGetYrnsubqltya.setInput("pYrnqlty", row.yrnqlty);
            $scope.Variables.svGetYrnsubqltya.setInput("pSubqltytyp", "A");
            $scope.Variables.svGetYrnsubqltya.invoke();

            $scope.Variables.svGetSubqltytypb.setInput("pPrgid", $scope.Variables.statPrgid.dataSet.dataValue);
            $scope.Variables.svGetSubqltytypb.setInput("pYrnqlty", row.yrnqlty);
            $scope.Variables.svGetSubqltytypb.setInput("pSubqltytyp", "B");
            $scope.Variables.svGetSubqltytypb.invoke();


        }

        //on change of yrnclr, reset oriclr
        if (col == "yrnclr" && row.yrnclrOrig !== row.yrnclr) {
            grid.SetValue(row, "oriclr", "", 1);
        }


        //on change of yrnclr, fetch default base_yrnclr
        if (col == "yrnclr" && row.yrnclrOrig !== row.yrnclr && (row.baseYrnclr == undefined || row.baseYrnclr == null || row.baseYrnclr == "")) {
            $scope.Variables.svFuncGetDefaultBaseyrnclr.invoke();
        }


    }

    $scope.FormatTgridDate = function(pTgridDate) {

        if (pTgridDate == undefined) {
            return;
        }

        var m_dat;
        var m_mon;
        var m_day;
        var m_yr;
        var m_hr;
        var m_minutes;
        var m_newDate;

        m_dat = new Date(pTgridDate);
        m_mon = m_dat.getMonth() + 1;
        // m_mon = m_mon.toString().padStart(2, "0");  NOT WORKING ON OLD FIREFOX VERSION 45
        m_mon = ("00" + m_mon).slice(-2);
        m_day = m_dat.getDate();
        //m_day = m_day.toString().padStart(2, "0");
        m_day = ("00" + m_day).slice(-2);
        m_yr = m_dat.getFullYear();
        m_hr = m_dat.getHours().toString();
        //m_hr = m_hr.padStart(2, "0");
        m_hr = ("00" + m_hr).slice(-2);
        m_minutes = m_dat.getMinutes().toString();
        //m_minutes = m_minutes.padStart(2, "0");
        m_minutes = ("00" + m_minutes).slice(-2);
        m_newDate = m_day + '/' + m_mon + '/' + m_yr + ' ' + m_hr + ":" + m_minutes;

        return m_newDate;
    }



    $scope.ValidateRecord = function() {
        alert('Up/Down');
    }

    // construct the treegrid for ort125
    $scope.showGrid = function(pGridData) {
        var yarnLayout = {
            Cfg: {
                Code: "GTGEEBESVPPUPB",
                Dragging: 0,
                Selecting: 1,
                Editing: 1,
                Focused: "AR2", // focus on first datarow AR3,grid has 2 header rows
                MaxVScroll: 800,
                Paging: 2,
                AllPages: 0,
                PageLength: 15,
                StaticCursor: 1,
                Align: "Center",
                AlignHeader: "Center",
                WordWrap: 1, // to wrap text in cells
                DateStrings: 2 // format of date columns to be in yyyy-MM-dd HH:mm:ss,


            },
            Pager: {
                Visible: 0
            },

            Panel: {

                Visible: 0,
                Delete: 0,
                Add: 0
                //OnClickPanelDelete: $scope.deleteTGridRow(this.row, this.col)
            },

            LeftCols: [{
                    Name: "yrnseq",
                    Width: "50",
                    Align: "Center",
                    CanEdit: 0

                },

                {
                    Name: "yrncnt",
                    Type: "Text",
                    Align: "Left",
                    Suggest: "Defaults",
                    SuggestType: "Complete,Existing",
                    Tip: "Click and start to type to view the list of Yarn Counts",
                    Wrap: 1,
                    //Button: "Button",
                    //ButtonText: "Click",
                    //OnClickSideButton: "return ShowMenu(Grid,Row,Col)",
                    //Menu:"{Items:|1|6|9|65}",
                    CanEditFormula: "yrncnteditacs==='Y'?1:0"
                    //SuggestFormula: "yrncnteditacs==='Y'?'Defaults':''", /* this formula does not work */


                },
                {
                    Name: "yrncps",
                    Type: "Text",
                    Wrap: 1,
                    Align: "Left",
                    Suggest: "Defaults",
                    SuggestType: "Complete,Existing",
                    Tip: "Click and start to type to view the list of Yarn Composition",
                    CanEditFormula: "yrncpseditacs==='Y'?1:0"
                    /*
                    Button: "Button",
                    ButtonText: "  Click  ",
                    OnClickSideButton: $scope.ValidateRecord,
                    ButtonVisibleFormula: "yrnseq==1?1:0"*/

                },

                {
                    Name: "yrnclr",
                    Type: "Select",
                    Align: "Left",
                    //Button: "Defaults",
                    Wrap: 1,
                    WordWrap: 1,
                    CanEditFormula: "yrnclreditacs==='Y'?1:0",
                    ButtonFormula: "yrnclreditacs==='Y'?'Defaults':''"
                },

                {
                    Name: "oriclr",
                    Type: "Text",
                    Align: "Left",
                    Wrap: 1,
                    Suggest: "Defaults",
                    SuggestType: "Complete,Existing",
                    Tip: "Click and start to type to view the list of Colours",
                    CanEditFormula: "oriclreditacs==='Y'?1:0"
                },

                {
                    Name: "preclrref",
                    Align: "Left",
                    Wrap: 1,
                    CanEditFormula: "preclrrefeditacs==='Y'?1:0"

                },

                {
                    Name: "clrref",
                    Width: "80",
                    Align: "Left",
                    CanEditFormula: "clrrefeditacs==='Y'?1:0"

                },
                {
                    Name: "wclrrefshadedes",
                    Align: "Left",
                    CanEdit: 0

                },

                //-------columns not displayed in grid------------
                {
                    Name: "ordnum",
                    Width: "80",
                    Align: "Left",
                    Visible: 0
                },
                {
                    Name: "fabseq",
                    Width: "80",
                    Align: "Left",
                    Visible: 0
                },

                {
                    Name: "yrncnteditacs",
                    Align: "Left",
                    Visible: 0
                },

                {
                    Name: "yrncpseditacs",
                    Align: "Left",
                    Visible: 0
                },
                {
                    Name: "yrnqltyeditacs",
                    Align: "Left",
                    Visible: 0
                },
                {
                    Name: "yrnsubqltyaeditacs",
                    Align: "Left",
                    Visible: 0
                },
                {
                    Name: "yrnsubqltybeditacs",
                    Align: "Left",
                    Visible: 0
                },
                {
                    Name: "yrnclreditacs",
                    Align: "Left",
                    Visible: 0
                },
                {
                    Name: "yrnffcodeditacs",
                    Align: "Left",
                    Visible: 0
                },
                {
                    Name: "baseyrnclreditacs",
                    Align: "Left",
                    Visible: 0
                },

                {
                    Name: "yrnfraceditacs",
                    Align: "Left",
                    Visible: 0
                },
                {
                    Name: "clrrefeditacs",
                    Align: "Left",
                    Visible: 0
                },
                {
                    Name: "oriclreditacs",
                    Align: "Left",
                    Visible: 0
                },

                {
                    Name: "preclrrefeditacs",
                    Align: "Left",
                    Visible: 0
                },

                {
                    Name: "wyrncdeslov",
                    Align: "Left",
                    Visible: 0
                }



            ],
            Cols: [

                {
                    Name: "yrnqlty",
                    Type: "Select",
                    Wrap: 1,
                    Align: "Left",
                    CanEditFormula: "yrnqltyeditacs==='Y'?1:0",
                    ButtonFormula: "yrnqltyeditacs==='Y'?'Defaults':''"
                },

                {
                    Name: "yrnsubqltya",
                    Type: "Select",
                    Wrap: 1,
                    Align: "Left",
                    CanEditFormula: "yrnsubqltyaeditacs==='Y'?1:0",
                    ButtonFormula: "yrnsubqltyaeditacs==='Y'?'Defaults':''"
                    // Button: "Defaults",
                    //CanEdit: 1

                    //,EditMask: "^[A-Z]*$" // upper case only
                    //,ResultMask: "^[A-Z]*$"


                }, {
                    Name: "yrnsubqltyb",
                    Type: "Select",
                    Wrap: 1,
                    Align: "Left",
                    //CanEditFormula: "yrnqlty==='RING'?1:0",
                    //ButtonFormula: "yrnqlty==='RING'?'Defaults':'' "
                    //CanEdit: 1,
                    //Button: "Defaults",
                    CanEditFormula: "yrnsubqltybeditacs==='Y'?1:0",
                    ButtonFormula: "yrnsubqltybeditacs==='Y'?'Defaults':''"

                },

                {
                    Name: "yrnffcod",
                    Type: "Select",
                    Wrap: 1,
                    Align: "Left",
                    //CanEdit: 1,
                    //Button: "Defaults", 
                    CanEditFormula: "yrnffcodeditacs==='Y'?1:0",
                    ButtonFormula: "yrnffcodeditacs==='Y'?'Defaults':''"

                },

                /* {
                     Name: "wyrnffdesc",
                     Align: "Left",
                     CanEdit: 0
                 },*/
                {
                    Name: "yrnori",
                    Width: "90",
                    Align: "Left",
                    CanEdit: 0
                },
                {
                    Name: "baseYrnclr",
                    Type: "Select",
                    //Button: "Defaults",
                    Wrap: 1,
                    Align: "Left",
                    CanEditFormula: "baseyrnclreditacs==='Y'?1:0",
                    ButtonFormula: "baseyrnclreditacs==='Y'?'Defaults':''"
                },

                {
                    Name: "baseYrncdes",
                    Align: "Left",
                    Wrap: 1,
                    CanEdit: 0
                },

                {
                    Name: "baseClrref",
                    Align: "Left",
                    CanEdit: 0
                },


                {
                    Name: "yrnends",
                    Type: "Float",
                    Align: "Right",
                    CanEdit: 0
                    //, Format: ",.00"
                },

                {
                    Name: "tipping",
                    Align: "Right",
                    CanEdit: 0
                },

                {
                    Name: "numrows",
                    Type: "Float",
                    Align: "Right",
                    CanEdit: 0
                    //,Format: ",.00"
                },

                {
                    Name: "totrows",
                    Type: "Float",
                    Align: "Right",
                    CanEdit: 0
                    //,Format: ",.00"
                },

                {
                    Name: "yrnfrac",
                    //Type: "Float",
                    Align: "Right",
                    //CanEdit: 0
                    CanEditFormula: "yrnfraceditacs==='Y'?1:0"
                    //OnEdit: $scope.yrnfracOnChangeValidate(Value)
                    //OnEdit: " { OnChange: function(V) { alert('Value '+V+' in column '+this.Grid.FCol); this.Tag.focus(); } }",
                    //,Format: ",.0"

                },

                {
                    Name: "wreqlabdip",
                    //Width: "60",
                    Align: "Center",
                    CanEdit: 0
                },

                {
                    Name: "laptoapp",
                    //Width: "60",
                    Align: "Center",
                    CanEdit: 0
                },

                {
                    Name: "wapprvlabdip",
                    //Width: "60",
                    Align: "Center",
                    CanEdit: 0
                }




            ],

            Def: [{
                Name: "D",
                Calculated: 1,
                CalcOrder: "yrncntCanEdit,yrncpsCanEdit,yrnclrCanEdit,yrnclrButton,yrnqltyCanEdit,yrnqltyButton,yrnsubqltyaCanEdit,yrnsubqltyaButton,yrnsubqltybCanEdit,yrnsubqltybButton,yrnffcodCanEdit,yrnffcodButton,baseYrnclrCanEdit,baseYrnclrButton,yrnfracCanEdit,clrrefCanEdit,preclrrefCanEdit,oriclrCanEdit,yrncpsButtonVisible"

            }],

            //grouping of column headers
            Head: [{
                    Spanned: 1,
                    yrnseq: "",
                    yrnseqSpan: 5,
                    yrnseqCanEdit: 0,

                    preclrref: "Lab Reference",
                    preclrrefClass: "blue-l1 bold",
                    preclrrefSpan: 3,
                    //preclrrefClass: "bold",
                    preclrrefAlign: "Center",
                    preclrrefCanEdit: 0,

                    yrnqlty: "",
                    yrnqltyType: "Text",
                    yrnqltyButton: "", //since column is of type Select, set the button as null, so that dropdown does not appear in header
                    yrnqltySpan: 3,
                    yrnqltyCanEdit: 0,

                    yrnffcod: "Sp Fibre & Finish",
                    yrnffcodType: "Text",
                    yrnffcodButton: "",
                    //yrnffcodSpan: 2,
                    yrnffcodAlign: "Center",
                    yrnffcodClass: "blue-l1 bold",
                    yrnffcodCanEdit: 0,

                    baseYrnclr: "Base Yarn Construction",
                    baseYrnclrType: "Text",
                    baseYrnclrButton: "",
                    baseYrnclrSpan: 3,
                    baseYrnclrAlign: "Center",
                    baseYrnclrClass: "blue-l1 bold",
                    baseYrnclrCanEdit: 0,

                    yrnends: "",
                    yrnendsSpan: 8,
                    yrnendsCanEdit: 0

                },


                // columns prompts
                {

                    Spanned: 1,
                    id: "Header",

                    yrnseq: "Yrn\nSeq",
                    yrnseqAlign: "Center",

                    yrncnt: "Count",
                    yrncntAlign: "Center",

                    yrncps: "Composition",
                    yrncpsAlign: "Center",

                    yrnori: "Origin",
                    yrnoriAlign: "Center",

                    yrnclr: "Clr",
                    yrnclrAlign: "Center",

                    oriclr: "Colour",
                    oriclrAlign: "Center",

                    clrref: "Ref",
                    clrrefAlign: "Center",

                    wclrrefshadedes: "Shade",
                    wclrrefshadedesAlign: "Center",

                    yrnqlty: "Qlty",
                    yrnqltyAlign: "Center",

                    yrnsubqltya: "SubQlty A",
                    yrnsubqltyaAlign: "Center",

                    yrnsubqltyb: "SubQlty B",
                    yrnsubqltybAlign: "Center",

                    yrnffcod: "FF Code",
                    yrnffcodAlign: "Center",

                    // wyrnffdesc: "FF Desc",
                    //    wyrnffdescAlign: "Center",

                    baseYrnclr: "Clr Type",
                    baseYrnclrType: "Text",
                    baseYrnclrAlign: "Center",

                    baseYrncdes: "Shade",
                    baseYrncdesAlign: "Center",

                    baseClrref: "Code",
                    baseClrrefAlign: "Center",

                    yrnends: "Ends",
                    yrnendsAlign: "Center",

                    tipping: "Tip",
                    tippingAlign: "Center",

                    numrows: "Rows",
                    numrowsAlign: "Center",

                    totrows: "T.Rows",
                    totrowsAlign: "Center",

                    yrnfrac: "Fraction",
                    yrnfracAlign: "Center",

                    wreqlabdip: "Req\nLabdip",
                    wreqlabdipAlign: "Center",

                    laptoapp: "Lab\nto app",
                    laptoappAlign: "Center",

                    wapprvlabdip: "App",
                    wapprvlabdipAlign: "Center",

                    preclrref: "Prefix\nRef",
                    preclrrefAlign: "Center",

                }
            ],


            Toolbar: {
                Link: 0, // should specifically disable the link, otherwise by default it appears in the toolbar
                Visible: 1,
                Cells: "PAGER", //"Export,PAGER,SAVE"
                PAGERType: "Pager"
                /*    
                ValidateType: "Button",
                ValidateButton: "Button",
                ValidateOnClick: "Validate?Grid.ShowMessageTime('Everything is correct',1000):1",
                Validate: "Validate",
                ValidateTip: "Validates all ResultMasks in grid, usually used before upload"*/
            },

        };
        // end of var

        $scope.Variables.tgridYarn = TreeGridHelper('tgridYarn', {
            data: pGridData,
            layout: yarnLayout
        });

        Grids.OnFocus = $scope.tableOnFocus;
        Grids.OnChange = $scope.tableOnChange;

        // below fires when user does navigates up/down using keyboard
        // does not fire up when user changes row by clicking

        //Grids.OnDown = $scope.ValidateRecord;
        //Grids.OnUp = $scope.ValidateRecord;



    };

    //-------------------------------------------------------------------------------------------

    $scope.svOr105wpk0QryOrt125onSuccess = function(variable, data) {
        $scope.Variables.statTabOrt125.dataSet = data.poutYrnlist;
        $scope.showGrid(data.poutYrnlist);
    };

    //-----------------------------------------------------------------------------------------------------------------------
    $scope.svGetYrnffcodonSuccess = function(variable, data) {
        $scope.setFFcodeLOV(data);
    };

    $scope.setFFcodeLOV = function(data) {
        if (!data) {
            $scope.Variables.tgridYarn.Cols.yrnffcod.Defaults = null;
            $scope.Variables.tgridYarn.Cols.yrnffcod.Format = null;
            $scope.Variables.tgridYarn.Cols.yrnffcod.EditFormat = null;
            $scope.$apply();
        } else {
            $scope.Variables.tgridYarn.Cols.yrnffcod.Defaults = getDefaultsLOV(data.poutYrnffcod);
            $scope.Variables.tgridYarn.Cols.yrnffcod.Format = getFormatLOV(data.poutYrnffcod);
            $scope.Variables.tgridYarn.Cols.yrnffcod.EditFormat = getEditFormatLOV(data.poutYrnffcod);
            $scope.$apply();
        }

    }

    //--------------------------------------------------------------------------------------------------------------------------------------------------

    $scope.yrnfracOnChangeValidate = function() {
        if ($scope.Variables.tgridYarn !== undefined) {
            alert("on change yarn fraction");
            if (parseFloat($scope.Variables.tgridYarn.FRow.yrnfrac) < 0.00 || parseFloat($scope.Variables.tgridYarn.FRow.yrnfrac) > 100.00) {
                alert("yarn fraction cannot be " + $scope.Variables.tgridYarn.FRow.yrnfrac);
            }
        }
    }


    $scope.svGetYrnsubqltyaonSuccess = function(variable, data) {
        //  alert("subqlty A fetched");
        if (data !== undefined) {
            $scope.Variables.tgridYarn.Cols.yrnsubqltya.Defaults = getDefaultsLOV(data.poutYrnsubqlty);
            $scope.Variables.tgridYarn.Cols.yrnsubqltya.Format = getFormatLOV(data.poutYrnsubqlty);
            $scope.Variables.tgridYarn.Cols.yrnsubqltya.EditFormat = getEditFormatLOV(data.poutYrnsubqlty);
        }


    };


    $scope.svGetYrnqltyonSuccess = function(variable, data) {
        $scope.Variables.tgridYarn.Cols.yrnqlty.Defaults = getDefaultsLOV(data.poutYrnqlty);
        $scope.Variables.tgridYarn.Cols.yrnqlty.Format = getFormatLOV(data.poutYrnqlty);
        $scope.Variables.tgridYarn.Cols.yrnqlty.EditFormat = getEditFormatLOV(data.poutYrnqlty);

    };

    //----------------------------------------------------------------------------------------------------------------------------
    function getDefaultsLOV(data) {
        /* Defaults: Should be a string "|one|two|three" */
        var n = 0;
        var m_defaults = "";
        if (data.length > 0) {
            for (n = 0; n < data.length; n++) {
                m_defaults += '|' + data[n].itemcod;
            }
        }

        return m_defaults;
    };

    function getFormatLOV(data) {
        /* Format: Should be a string. "{'A1':'one','A2':'two','A3':'three'}"*/
        var c = 0;
        var m_format = "";

        if (data.length > 0) {
            for (c = 0; c < data.length; c++) {
                m_format += "'" + data[c].itemcod + "':'" + data[c].itemdes + "',";
            }
            m_format = "{" + m_format + "}";
        }
        return m_format;
    };

    function getEditFormatLOV(data) {
        /* EditFormat: Should be a string. "{'A1':'one','A2':'two','A3':'three'}"*/
        var i = 0;
        var m_editformat = "";

        if (data.length > 0) {
            for (i = 0; i < data.length; i++) {
                m_editformat += "'" + data[i].itemcod + "':'" + data[i].itemdes + "',";
            }
            m_editformat = "{" + m_editformat + "}";
        }
        return m_editformat;
    };


    //--------------------------------------------------------------------------------------------------------------------
    $scope.svGetYrnsubqltyaonBeforeUpdate = function(variable, inputData) {
        if ($scope.Variables.tgridYarn == undefined) {
            return false;
        }


        if (inputData.pYrnqlty == undefined) {
            return false;
        } else {
            if ($scope.Variables.tgridYarn.FRow.yrnsubqltyaeditacs == "N") {
                return false;
            } else {
                inputData.pYrnqlty = inputData.pYrnqlty.toUpperCase();
            }
        }

    };


    $scope.svGetYrncntonSuccess = function(variable, data) {
        $scope.Variables.tgridYarn.Cols.yrncnt.Suggest = getDefaultsLOV(data.poutYrncnt);
        $scope.Variables.tgridYarn.Cols.yrncnt.Format = getFormatLOV(data.poutYrncnt);
        $scope.Variables.tgridYarn.Cols.yrncnt.EditFormat = getEditFormatLOV(data.poutYrncnt);

    };


    $scope.svGetYrncpsonSuccess = function(variable, data) {
        $scope.Variables.tgridYarn.Cols.yrncps.Suggest = getDefaultsLOV(data.poutYrncps);
        $scope.Variables.tgridYarn.Cols.yrncps.Format = getFormatLOV(data.poutYrncps);
        $scope.Variables.tgridYarn.Cols.yrncps.EditFormat = getEditFormatLOV(data.poutYrncps);

    };


    $scope.svGetYrnclronSuccess = function(variable, data) {
        $scope.Variables.tgridYarn.Cols.yrnclr.Defaults = getDefaultsLOV(data.poutYrnclr);
        $scope.Variables.tgridYarn.Cols.yrnclr.Format = getFormatLOV(data.poutYrnclr);
        $scope.Variables.tgridYarn.Cols.yrnclr.EditFormat = getEditFormatLOV(data.poutYrnclr);

        $scope.Variables.tgridYarn.RefreshRow($scope.Variables.tgridYarn.FRow.id);
        $scope.$apply();

    };


    $scope.svGetYrncntonBeforeUpdate = function(variable, inputData) {
        if ($scope.Variables.tgridYarn == undefined) {
            return false;
        } else {
            if ($scope.Variables.tgridYarn.FRow.yrncnteditacs == "N") {
                return false;
            }
        }

    };


    $scope.svGetYrncpsonBeforeUpdate = function(variable, inputData) {
        if ($scope.Variables.tgridYarn == undefined) {
            return false;
        } else {
            if ($scope.Variables.tgridYarn.FRow.yrncpseditacs == "N") {
                return false;
            }
        }

    };


    $scope.svGetYrnclronBeforeUpdate = function(variable, inputData) {
        if ($scope.Variables.tgridYarn == undefined) {
            return false;
        } else {
            if ($scope.Variables.tgridYarn.FRow.yrnclreditacs == "N") {
                return false;
            }
        }
    };


    $scope.svGetBaseYrnclronBeforeUpdate = function(variable, inputData) {
        if ($scope.Variables.tgridYarn == undefined) {
            return false;
        } else {
            if ($scope.Variables.tgridYarn.FRow.baseyrnclreditacs == "N") {
                return false;
            }
        }
    };


    $scope.svGetYrnffcodonBeforeUpdate = function(variable, inputData) {
        //alert("Yrnff sv bef upd");

        if ($scope.Variables.tgridYarn == undefined) {
            return false;
        } else {
            if ($scope.Variables.tgridYarn.FRow.yrnffcodeditacs == "N") {
                return false;
            }
        }
    };


    $scope.svGetYrnqltyonBeforeUpdate = function(variable, inputData) {
        if ($scope.Variables.tgridYarn == undefined) {
            return false;
        } else {
            if ($scope.Variables.tgridYarn.FRow.yrnqltyeditacs == "N") {
                return false;
            }
        }
    };


    $scope.svGetOriclronBeforeUpdate = function(variable, inputData) {

        if (inputData.pYrnclr == undefined || inputData.pYrncnt == undefined || inputData.pYrncps == undefined) {
            return false;
        } else {
            if ($scope.Variables.tgridYarn.FRow.oriclreditacs == "N") {
                return false;
            } else {
                inputData.pYrnclr = inputData.pYrnclr.toUpperCase();
                inputData.pYrncnt = inputData.pYrncnt.toUpperCase();
                inputData.pYrncps = inputData.pYrncps.toUpperCase();
            }
        }


    };

    //-----------------------------------------------------------------------------------------------------------------------------------
    $scope.svGetOriclronSuccess = function(variable, data) {
        if (data !== undefined) {
            $scope.Variables.tgridYarn.Cols.oriclr.Suggest = getDefaultsLOV(data.poutOriclr);
            $scope.Variables.tgridYarn.Cols.oriclr.Format = getFormatLOV(data.poutOriclr);
            $scope.Variables.tgridYarn.Cols.oriclr.EditFormat = getEditFormatLOV(data.poutOriclr);
        }

    };

    //-----------------------------------------------------------------------------------------------------------------------
    $scope.svFuncGetDefaultBaseyrnclronSuccess = function(variable, data) {
        if (data !== undefined) {
            //$scope.Variables.tgridYarn.FRow.baseYrnclr = data.defaultbaseyrnclr;
            // setting value of FRow directly does not work!!       
            var grid = $scope.Variables.tgridYarn;
            var row = $scope.Variables.tgridYarn.FRow;
            grid.SetValue(row, "baseYrnclr", data.defaultbaseyrnclr, 1);
        }

    };


    $scope.svValidateRecordonError = function(variable, data) {

        // $scope.Variables.tgridYarn.grid.focus($scope.Variables.statValRecordRowid.dataSet.dataValue);

        //statValRecordRowid
        $scope. /*$parent.*/ Variables.notifMsg.setAlertType("error");
        $scope. /*$parent.*/ Variables.notifMsg.setMessage("Error: " + data);
        $scope. /*$parent.*/ Variables.notifMsg.notify();
    };

    $scope.svValidateRecordonSuccess = function(variable, data) {
        if (data !== undefined) {
            if (data.pWarnmsg !== undefined) {
                $scope.$parent.Variables.notifMsg.setAlertType("warning");
                $scope.$parent.Variables.notifMsg.setMessage("Warning: " + data);
                $scope.$parent.Variables.notifMsg.notify();
            }
        }
    };

    $scope.svGetSubqltytypbonBeforeUpdate = function(variable, inputData) {

        //console.log("$scope.Variables.tgridYarn.FRow.yrnsubqltybeditacs " + $scope.Variables.tgridYarn.FRow.yrnsubqltybeditacs);
        if ($scope.Variables.tgridYarn == undefined) {
            return false;
        }

        if (inputData.pYrnqlty == undefined) {
            return false;
        } else {
            if ($scope.Variables.tgridYarn.FRow.yrnsubqltybeditacs == "N") {
                return false;
            } else {
                inputData.pYrnqlty = inputData.pYrnqlty.toUpperCase();
            }
        }
    };


    $scope.svGetSubqltytypbonSuccess = function(variable, data) {

        if (data !== undefined) {
            //console.log("on success yrnsubqlty b");
            $scope.Variables.tgridYarn.Cols.yrnsubqltyb.Defaults = getDefaultsLOV(data.poutYrnsubqlty);
            $scope.Variables.tgridYarn.Cols.yrnsubqltyb.Format = getFormatLOV(data.poutYrnsubqlty);
            $scope.Variables.tgridYarn.Cols.yrnsubqltyb.EditFormat = getEditFormatLOV(data.poutYrnsubqlty);
        }

    };

}]);


Application.$controller("gridYarnController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;
    }
]);