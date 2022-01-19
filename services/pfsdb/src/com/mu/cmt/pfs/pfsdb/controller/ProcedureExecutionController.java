/*Copyright (c) 2016-2017 cmt.mu All Rights Reserved.
 This software is the confidential and proprietary information of cmt.mu You shall not disclose such Confidential Information and shall use it only in accordance
 with the terms of the source code license agreement you entered into with cmt.mu*/
package com.mu.cmt.pfs.pfsdb.controller;

/*This is a Studio Managed File. DO NOT EDIT THIS FILE. Your changes may be reverted by Studio.*/

import java.io.InputStream;

import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.wavemaker.runtime.file.model.Downloadable;
import com.wavemaker.runtime.util.WMMultipartUtils;
import com.wavemaker.tools.api.core.annotations.WMAccessVisibility;
import com.wavemaker.tools.api.core.models.AccessSpecifier;
import com.wordnik.swagger.annotations.Api;
import com.wordnik.swagger.annotations.ApiOperation;

import com.mu.cmt.pfs.pfsdb.service.PfsdbProcedureExecutorService;
import com.mu.cmt.pfs.pfsdb.models.procedure.*;

@RestController(value = "Pfsdb.ProcedureExecutionController")
@RequestMapping("/pfsdb/procedureExecutor")
@Api(value = "ProcedureExecutionController", description = "controller class for procedure execution")
public class ProcedureExecutionController {

    private static final Logger LOGGER = LoggerFactory.getLogger(ProcedureExecutionController.class);

    @Autowired
    private PfsdbProcedureExecutorService procedureService;

    @RequestMapping(value = "/procedure/execute/or207pk0ReleaseKDSPrice", method = RequestMethod.GET)
    @WMAccessVisibility(value = AccessSpecifier.APP_ONLY)
    @ApiOperation(value = "release KDS price")
    public Void executeOr207pk0ReleaseKDSPrice(@RequestParam(value = "pOrdnum", required = false) String pordnum, @RequestParam(value = "pUsrid", required = false) String pusrid, @RequestParam(value = "pPrgid", required = false) String pprgid, @RequestParam(value = "pUserAppRoleList", required = false) String puserAppRoleList, HttpServletRequest _request) {
        LOGGER.debug("Executing named procedure: or207pk0ReleaseKDSPrice");
        Void _result = procedureService.executeOr207pk0ReleaseKDSPrice(pordnum, pusrid, pprgid, puserAppRoleList);
        LOGGER.debug("got the result for named procedure: or207pk0ReleaseKDSPrice, result:{}", _result);
        return _result;
    }

    @RequestMapping(value = "/procedure/execute/or207pk0SearchOrdRef", method = RequestMethod.GET)
    @WMAccessVisibility(value = AccessSpecifier.APP_ONLY)
    @ApiOperation(value = "search orders with given references")
    public Or207pk0searchOrdRefResponse executeOr207pk0SearchOrdRef(@RequestParam(value = "pClicod", required = false) String pclicod, @RequestParam(value = "pSsn", required = false) String pssn, @RequestParam(value = "pClionum", required = false) String pclionum, @RequestParam(value = "pRef", required = false) String pref, @RequestParam(value = "pRef2", required = false) String pref2, @RequestParam(value = "pRef3", required = false) String pref3, @RequestParam(value = "pRef4", required = false) String pref4, @RequestParam(value = "pRef5", required = false) String pref5, @RequestParam(value = "pRef6", required = false) String pref6, @RequestParam(value = "pRef7", required = false) String pref7, @RequestParam(value = "pRef8", required = false) String pref8, @RequestParam(value = "pUsrid", required = false) String pusrid, @RequestParam(value = "pPrgname", required = false) String pprgname, HttpServletRequest _request) {
        LOGGER.debug("Executing named procedure: or207pk0SearchOrdRef");
        Or207pk0searchOrdRefResponse _result = procedureService.executeOr207pk0SearchOrdRef(pclicod, pssn, pclionum, pref, pref2, pref3, pref4, pref5, pref6, pref7, pref8, pusrid, pprgname);
        LOGGER.debug("got the result for named procedure: or207pk0SearchOrdRef, result:{}", _result);
        return _result;
    }

    @RequestMapping(value = "/procedure/execute/or105wpk0yrn_getYrnclr", method = RequestMethod.GET)
    @WMAccessVisibility(value = AccessSpecifier.APP_ONLY)
    @ApiOperation(value = "get yarn clr")
    public Or105wpk0yrnGetYrnclrResponse executeOr105wpk0yrn_getYrnclr(@RequestParam(value = "pPrgid", required = false) String pprgid, @RequestParam(value = "pBaseyrnUseind", required = false) String pbaseyrnUseind, HttpServletRequest _request) {
        LOGGER.debug("Executing named procedure: or105wpk0yrn_getYrnclr");
        Or105wpk0yrnGetYrnclrResponse _result = procedureService.executeOr105wpk0yrn_getYrnclr(pprgid, pbaseyrnUseind);
        LOGGER.debug("got the result for named procedure: or105wpk0yrn_getYrnclr, result:{}", _result);
        return _result;
    }

    @RequestMapping(value = "/procedure/execute/or207pk0FetchPackSze", method = RequestMethod.GET)
    @WMAccessVisibility(value = AccessSpecifier.APP_ONLY)
    @ApiOperation(value = "fetch packs and sizes")
    public Void executeOr207pk0FetchPackSze(@RequestParam(value = "pOrdnum", required = false) String pordnum, @RequestParam(value = "pPricecat", required = false) String ppricecat, HttpServletRequest _request) {
        LOGGER.debug("Executing named procedure: or207pk0FetchPackSze");
        Void _result = procedureService.executeOr207pk0FetchPackSze(pordnum, ppricecat);
        LOGGER.debug("got the result for named procedure: or207pk0FetchPackSze, result:{}", _result);
        return _result;
    }

    @RequestMapping(value = "/procedure/execute/or207pk0GetOrt205Record", method = RequestMethod.GET)
    @WMAccessVisibility(value = AccessSpecifier.APP_ONLY)
    @ApiOperation(value = "get rows from ort205")
    public Or207pk0getOrt205recordResponse executeOr207pk0GetOrt205Record(@RequestParam(value = "pOrdnum", required = false) String pordnum, HttpServletRequest _request) {
        LOGGER.debug("Executing named procedure: or207pk0GetOrt205Record");
        Or207pk0getOrt205recordResponse _result = procedureService.executeOr207pk0GetOrt205Record(pordnum);
        LOGGER.debug("got the result for named procedure: or207pk0GetOrt205Record, result:{}", _result);
        return _result;
    }

    @RequestMapping(value = "/procedure/execute/or105wpk0yrn_getyrncps", method = RequestMethod.GET)
    @WMAccessVisibility(value = AccessSpecifier.APP_ONLY)
    @ApiOperation(value = "get Yarn Cps")
    public Or105wpk0yrnGetyrncpsResponse executeOr105wpk0yrn_getyrncps(@RequestParam(value = "pPrgid", required = false) String pprgid, HttpServletRequest _request) {
        LOGGER.debug("Executing named procedure: or105wpk0yrn_getyrncps");
        Or105wpk0yrnGetyrncpsResponse _result = procedureService.executeOr105wpk0yrn_getyrncps(pprgid);
        LOGGER.debug("got the result for named procedure: or105wpk0yrn_getyrncps, result:{}", _result);
        return _result;
    }

    @RequestMapping(value = "/procedure/execute/or207pk0ReleaseRef", method = RequestMethod.GET)
    @WMAccessVisibility(value = AccessSpecifier.APP_ONLY)
    @ApiOperation(value = "release references")
    public Void executeOr207pk0ReleaseRef(@RequestParam(value = "pOrdnum", required = false) String pordnum, @RequestParam(value = "pUsrid", required = false) String pusrid, @RequestParam(value = "pPrgid", required = false) String pprgid, HttpServletRequest _request) {
        LOGGER.debug("Executing named procedure: or207pk0ReleaseRef");
        Void _result = procedureService.executeOr207pk0ReleaseRef(pordnum, pusrid, pprgid);
        LOGGER.debug("got the result for named procedure: or207pk0ReleaseRef, result:{}", _result);
        return _result;
    }

    @RequestMapping(value = "/procedure/execute/or105wpk0yrn_getyrncnt", method = RequestMethod.GET)
    @WMAccessVisibility(value = AccessSpecifier.APP_ONLY)
    @ApiOperation(value = "get yarn count")
    public Or105wpk0yrnGetyrncntResponse executeOr105wpk0yrn_getyrncnt(@RequestParam(value = "pPrgid", required = false) String pprgid, HttpServletRequest _request) {
        LOGGER.debug("Executing named procedure: or105wpk0yrn_getyrncnt");
        Or105wpk0yrnGetyrncntResponse _result = procedureService.executeOr105wpk0yrn_getyrncnt(pprgid);
        LOGGER.debug("got the result for named procedure: or105wpk0yrn_getyrncnt, result:{}", _result);
        return _result;
    }

    @RequestMapping(value = "/procedure/execute/or207pk0CopyRef", method = RequestMethod.GET)
    @WMAccessVisibility(value = AccessSpecifier.APP_ONLY)
    @ApiOperation(value = "copy retail price and refs from one order to another")
    public Void executeOr207pk0CopyRef(@RequestParam(value = "pSrcOrdnum", required = false) String psrcOrdnum, @RequestParam(value = "pDestOrdnum", required = false) String pdestOrdnum, @RequestParam(value = "pSrcShpnum", required = false) String psrcShpnum, @RequestParam(value = "pDestShpnum", required = false) String pdestShpnum, @RequestParam(value = "pCopyFliprcInd", required = false) String pcopyFliprcInd, @RequestParam(value = "pCopyRetPrcInd", required = false) String pcopyRetPrcInd, @RequestParam(value = "pCopyrefInd", required = false) String pcopyrefInd, @RequestParam(value = "pCopyref2Ind", required = false) String pcopyref2ind, @RequestParam(value = "pCopyref3Ind", required = false) String pcopyref3ind, @RequestParam(value = "pCopyref4Ind", required = false) String pcopyref4ind, @RequestParam(value = "pCopyref5Ind", required = false) String pcopyref5ind, @RequestParam(value = "pCopyref6Ind", required = false) String pcopyref6ind, @RequestParam(value = "pCopyref7Ind", required = false) String pcopyref7ind, @RequestParam(value = "pCopyref8Ind", required = false) String pcopyref8ind, @RequestParam(value = "pUsrid", required = false) String pusrid, @RequestParam(value = "pPrgname", required = false) String pprgname, HttpServletRequest _request) {
        LOGGER.debug("Executing named procedure: or207pk0CopyRef");
        Void _result = procedureService.executeOr207pk0CopyRef(psrcOrdnum, pdestOrdnum, psrcShpnum, pdestShpnum, pcopyFliprcInd, pcopyRetPrcInd, pcopyrefInd, pcopyref2ind, pcopyref3ind, pcopyref4ind, pcopyref5ind, pcopyref6ind, pcopyref7ind, pcopyref8ind, pusrid, pprgname);
        LOGGER.debug("got the result for named procedure: or207pk0CopyRef, result:{}", _result);
        return _result;
    }

    @RequestMapping(value = "/procedure/execute/or207pk0GetOrt209Record", method = RequestMethod.GET)
    @WMAccessVisibility(value = AccessSpecifier.APP_ONLY)
    @ApiOperation(value = "get records from ort209 for an order, shpnum")
    public Or207pk0getOrt209recordResponse executeOr207pk0GetOrt209Record(@RequestParam(value = "pOrdnum", required = false) String pordnum, @RequestParam(value = "pShpnum", required = false) String pshpnum, HttpServletRequest _request) {
        LOGGER.debug("Executing named procedure: or207pk0GetOrt209Record");
        Or207pk0getOrt209recordResponse _result = procedureService.executeOr207pk0GetOrt209Record(pordnum, pshpnum);
        LOGGER.debug("got the result for named procedure: or207pk0GetOrt209Record, result:{}", _result);
        return _result;
    }

    @RequestMapping(value = "/procedure/execute/or105wpk0yrn_getYrnffcod", method = RequestMethod.GET)
    @WMAccessVisibility(value = AccessSpecifier.APP_ONLY)
    @ApiOperation(value = "get Yarn FFcode")
    public Or105wpk0yrnGetYrnffcodResponse executeOr105wpk0yrn_getYrnffcod(@RequestParam(value = "pPrgid", required = false) String pprgid, @RequestParam(value = "pOrdnum", required = false) String pordnum, @RequestParam(value = "pFabseq", required = false) Integer pfabseq, @RequestParam(value = "pYrnseq", required = false) Integer pyrnseq, HttpServletRequest _request) {
        LOGGER.debug("Executing named procedure: or105wpk0yrn_getYrnffcod");
        Or105wpk0yrnGetYrnffcodResponse _result = procedureService.executeOr105wpk0yrn_getYrnffcod(pprgid, pordnum, pfabseq, pyrnseq);
        LOGGER.debug("got the result for named procedure: or105wpk0yrn_getYrnffcod, result:{}", _result);
        return _result;
    }

    @RequestMapping(value = "/procedure/execute/or105wpk0Yrn_getYrnsubqltyB", method = RequestMethod.GET)
    @WMAccessVisibility(value = AccessSpecifier.APP_ONLY)
    @ApiOperation(value = "get yrnsubqlty B")
    public Or105wpk0yrnGetYrnsubqltyBResponse executeOr105wpk0Yrn_getYrnsubqltyB(@RequestParam(value = "pPrgid", required = false) String pprgid, @RequestParam(value = "pYrnqlty", required = false) String pyrnqlty, HttpServletRequest _request) {
        LOGGER.debug("Executing named procedure: or105wpk0Yrn_getYrnsubqltyB");
        Or105wpk0yrnGetYrnsubqltyBResponse _result = procedureService.executeOr105wpk0Yrn_getYrnsubqltyB(pprgid, pyrnqlty);
        LOGGER.debug("got the result for named procedure: or105wpk0Yrn_getYrnsubqltyB, result:{}", _result);
        return _result;
    }

    @RequestMapping(value = "/procedure/execute/or105wpk0yrn_getYrnsubqlty", method = RequestMethod.GET)
    @WMAccessVisibility(value = AccessSpecifier.APP_ONLY)
    @ApiOperation(value = "get list of yarn subquality")
    public Or105wpk0yrnGetYrnsubqltyResponse executeOr105wpk0yrn_getYrnsubqlty(@RequestParam(value = "pPrgid", required = false) String pprgid, @RequestParam(value = "pYrnqlty", required = false) String pyrnqlty, @RequestParam(value = "pSubqltytyp", required = false) String psubqltytyp, HttpServletRequest _request) {
        LOGGER.debug("Executing named procedure: or105wpk0yrn_getYrnsubqlty");
        Or105wpk0yrnGetYrnsubqltyResponse _result = procedureService.executeOr105wpk0yrn_getYrnsubqlty(pprgid, pyrnqlty, psubqltytyp);
        LOGGER.debug("got the result for named procedure: or105wpk0yrn_getYrnsubqlty, result:{}", _result);
        return _result;
    }

    @RequestMapping(value = "/procedure/execute/ProcOR105PK0_CPYFABGetFabBlob", method = RequestMethod.GET, produces = "application/octet-stream")
    @WMAccessVisibility(value = AccessSpecifier.APP_ONLY)
    @ApiOperation(value = "To get fabric picture")
    public Downloadable executeProcOR105PK0_CPYFABGetFabBlob(@RequestParam(value = "pPrgId", required = false) String pprgId, @RequestParam(value = "pLibRefNo", required = false) String plibRefNo, @RequestParam(value = "pFaceSide", required = false) String pfaceSide, @RequestParam(value="downloadAsAttachment", defaultValue = "false") boolean downloadAsAttachment, HttpServletRequest _request) {
        LOGGER.debug("Executing named procedure: ProcOR105PK0_CPYFABGetFabBlob");
        InputStream _result = procedureService.executeProcOR105PK0_CPYFABGetFabBlob(pprgId, plibRefNo, pfaceSide);
        LOGGER.debug("got the result for named procedure: ProcOR105PK0_CPYFABGetFabBlob, result:{}", _result);
        return WMMultipartUtils.buildDownloadResponse(_request, _result, downloadAsAttachment);
    }

    @RequestMapping(value = "/procedure/execute/or207pk0FetchExtranetDetails", method = RequestMethod.GET)
    @WMAccessVisibility(value = AccessSpecifier.APP_ONLY)
    @ApiOperation(value = "fetch details from Extranet for Arcadia clients")
    public Or207pk0fetchExtranetDetailsResponse executeOr207pk0FetchExtranetDetails(@RequestParam(value = "pOrdnum", required = false) String pordnum, @RequestParam(value = "pFromShpnum", required = false) String pfromShpnum, @RequestParam(value = "pToShpnum", required = false) String ptoShpnum, @RequestParam(value = "pFetchUnitprcInd", required = false) String pfetchUnitprcInd, @RequestParam(value = "pFetchRetPrcInd", required = false) String pfetchRetPrcInd, @RequestParam(value = "pFetchBarcodeInd", required = false) String pfetchBarcodeInd, @RequestParam(value = "pFetchRatioPackInd", required = false) String pfetchRatioPackInd, @RequestParam(value = "pFetchStyleInd", required = false) String pfetchStyleInd, @RequestParam(value = "pUsrid", required = false) String pusrid, @RequestParam(value = "pPrgname", required = false) String pprgname, @RequestParam(value = "pUserAppRoleList", required = false) String puserAppRoleList, HttpServletRequest _request) {
        LOGGER.debug("Executing named procedure: or207pk0FetchExtranetDetails");
        Or207pk0fetchExtranetDetailsResponse _result = procedureService.executeOr207pk0FetchExtranetDetails(pordnum, pfromShpnum, ptoShpnum, pfetchUnitprcInd, pfetchRetPrcInd, pfetchBarcodeInd, pfetchRatioPackInd, pfetchStyleInd, pusrid, pprgname, puserAppRoleList);
        LOGGER.debug("got the result for named procedure: or207pk0FetchExtranetDetails, result:{}", _result);
        return _result;
    }

    @RequestMapping(value = "/procedure/execute/CreateProcOR105PK0_CPYFABInsCpyFab", method = RequestMethod.POST)
    @WMAccessVisibility(value = AccessSpecifier.APP_ONLY)
    @ApiOperation(value = "To insert and copy fabric")
    public CreateProcOr105pk0CpyfabinsCpyFabResponse executeCreateProcOR105PK0_CPYFABInsCpyFab(@Valid @RequestBody CreateProcOr105pk0CpyfabinsCpyFabRequest createProcOr105pk0cpyfabinsCpyFabRequest, HttpServletRequest _request) {
        LOGGER.debug("Executing named procedure: CreateProcOR105PK0_CPYFABInsCpyFab");
        CreateProcOr105pk0CpyfabinsCpyFabResponse _result = procedureService.executeCreateProcOR105PK0_CPYFABInsCpyFab(createProcOr105pk0cpyfabinsCpyFabRequest);
        LOGGER.debug("got the result for named procedure: CreateProcOR105PK0_CPYFABInsCpyFab, result:{}", _result);
        return _result;
    }

    @RequestMapping(value = "/procedure/execute/ProcOR105PK0_CPYFABGetMarkertypeLOV", method = RequestMethod.GET)
    @WMAccessVisibility(value = AccessSpecifier.APP_ONLY)
    @ApiOperation(value = "To fetch Marker Type LOV")
    public ProcOr105pk0CpyfabgetMarkertypeLovResponse executeProcOR105PK0_CPYFABGetMarkertypeLOV(@RequestParam(value = "pPrgId", required = false) String pprgId, HttpServletRequest _request) {
        LOGGER.debug("Executing named procedure: ProcOR105PK0_CPYFABGetMarkertypeLOV");
        ProcOr105pk0CpyfabgetMarkertypeLovResponse _result = procedureService.executeProcOR105PK0_CPYFABGetMarkertypeLOV(pprgId);
        LOGGER.debug("got the result for named procedure: ProcOR105PK0_CPYFABGetMarkertypeLOV, result:{}", _result);
        return _result;
    }

    @RequestMapping(value = "/procedure/execute/or105wpk0_yrnValRecordORT125", method = RequestMethod.GET)
    @WMAccessVisibility(value = AccessSpecifier.APP_ONLY)
    @ApiOperation(value = "validate record ort125")
    public Or105wpk0YrnValRecordOrt125Response executeOr105wpk0_yrnValRecordORT125(@RequestParam(value = "pPrgid", required = false) String pprgid, @RequestParam(value = "pYrnrow", required = false) String pyrnrow, HttpServletRequest _request) {
        LOGGER.debug("Executing named procedure: or105wpk0_yrnValRecordORT125");
        Or105wpk0YrnValRecordOrt125Response _result = procedureService.executeOr105wpk0_yrnValRecordORT125(pprgid, pyrnrow);
        LOGGER.debug("got the result for named procedure: or105wpk0_yrnValRecordORT125, result:{}", _result);
        return _result;
    }

    @RequestMapping(value = "/procedure/execute/or207pk0GetKDSPriceChgHistory", method = RequestMethod.GET)
    @WMAccessVisibility(value = AccessSpecifier.APP_ONLY)
    @ApiOperation(value = "get KDS price change history")
    public Or207pk0getKdspriceChgHistoryResponse executeOr207pk0GetKDSPriceChgHistory(@RequestParam(value = "pOrdnum", required = false) String pordnum, @RequestParam(value = "pShpnum", required = false) String pshpnum, HttpServletRequest _request) {
        LOGGER.debug("Executing named procedure: or207pk0GetKDSPriceChgHistory");
        Or207pk0getKdspriceChgHistoryResponse _result = procedureService.executeOr207pk0GetKDSPriceChgHistory(pordnum, pshpnum);
        LOGGER.debug("got the result for named procedure: or207pk0GetKDSPriceChgHistory, result:{}", _result);
        return _result;
    }

    @RequestMapping(value = "/procedure/execute/or207pk0GetRefreldates", method = RequestMethod.GET)
    @WMAccessVisibility(value = AccessSpecifier.APP_ONLY)
    @ApiOperation(value = "get ref and price release dates")
    public Or207pk0getRefreldatesResponse executeOr207pk0GetRefreldates(@RequestParam(value = "pOrdnum", required = false) String pordnum, HttpServletRequest _request) {
        LOGGER.debug("Executing named procedure: or207pk0GetRefreldates");
        Or207pk0getRefreldatesResponse _result = procedureService.executeOr207pk0GetRefreldates(pordnum);
        LOGGER.debug("got the result for named procedure: or207pk0GetRefreldates, result:{}", _result);
        return _result;
    }

    @RequestMapping(value = "/procedure/execute/or105pk0RepSameYarn_UpdCCF", method = RequestMethod.GET)
    @WMAccessVisibility(value = AccessSpecifier.APP_ONLY)
    @ApiOperation(value = "update CCF")
    public Or105pk0repSameYarnUpdCcfResponse executeOr105pk0RepSameYarn_UpdCCF(@RequestParam(value = "pPrgid", required = false) String pprgid, @RequestParam(value = "pOrdnum", required = false) String pordnum, @RequestParam(value = "pFabseq", required = false) String pfabseq, @RequestParam(value = "pYrnpropvalList", required = false) String pyrnpropvalList, HttpServletRequest _request) {
        LOGGER.debug("Executing named procedure: or105pk0RepSameYarn_UpdCCF");
        Or105pk0repSameYarnUpdCcfResponse _result = procedureService.executeOr105pk0RepSameYarn_UpdCCF(pprgid, pordnum, pfabseq, pyrnpropvalList);
        LOGGER.debug("got the result for named procedure: or105pk0RepSameYarn_UpdCCF, result:{}", _result);
        return _result;
    }

    @RequestMapping(value = "/procedure/execute/or207pk0UpdPriceOrt207", method = RequestMethod.GET)
    @WMAccessVisibility(value = AccessSpecifier.APP_ONLY)
    @ApiOperation(value = "post upd price ort207")
    public Void executeOr207pk0UpdPriceOrt207(@RequestParam(value = "pOrdnum", required = false) String pordnum, @RequestParam(value = "pPricecat", required = false) String ppricecat, @RequestParam(value = "pSeqcod", required = false) String pseqcod, @RequestParam(value = "pSzeseq", required = false) Integer pszeseq, @RequestParam(value = "pClionum", required = false) String pclionum, @RequestParam(value = "pUnitprcAir", required = false) Double punitprcAir, @RequestParam(value = "pUnitprcSea", required = false) Double punitprcSea, @RequestParam(value = "pFliprcAir", required = false) Double pfliprcAir, @RequestParam(value = "pFliprcSea", required = false) Double pfliprcSea, @RequestParam(value = "pRetprc", required = false) String pretprc, @RequestParam(value = "pRetprcb", required = false) String pretprcb, @RequestParam(value = "pRetprcc", required = false) String pretprcc, @RequestParam(value = "pRetprcd", required = false) String pretprcd, @RequestParam(value = "pUsrid", required = false) String pusrid, @RequestParam(value = "pProgid", required = false) String pprogid, @RequestParam(value = "pChangereason", required = false) String pchangereason, @RequestParam(value = "pUserRemarks", required = false) String puserRemarks, @RequestParam(value = "pUpdAllSzeInd", required = false) String pupdAllSzeInd, @RequestParam(value = "pUpdAllPackInd", required = false) String pupdAllPackInd, @RequestParam(value = "pUpdAllClionumInd", required = false) String pupdAllClionumInd, HttpServletRequest _request) {
        LOGGER.debug("Executing named procedure: or207pk0UpdPriceOrt207");
        Void _result = procedureService.executeOr207pk0UpdPriceOrt207(pordnum, ppricecat, pseqcod, pszeseq, pclionum, punitprcAir, punitprcSea, pfliprcAir, pfliprcSea, pretprc, pretprcb, pretprcc, pretprcd, pusrid, pprogid, pchangereason, puserRemarks, pupdAllSzeInd, pupdAllPackInd, pupdAllClionumInd);
        LOGGER.debug("got the result for named procedure: or207pk0UpdPriceOrt207, result:{}", _result);
        return _result;
    }

    @RequestMapping(value = "/procedure/execute/ProcOR105PK0_CPYFABGetCpyFab", method = RequestMethod.GET)
    @WMAccessVisibility(value = AccessSpecifier.APP_ONLY)
    @ApiOperation(value = "To fetch data to be copied from source")
    public ProcOr105pk0CpyfabgetCpyFabResponse executeProcOR105PK0_CPYFABGetCpyFab(@RequestParam(value = "pPrgId", required = false) String pprgId, @RequestParam(value = "pOrdnum", required = false) String pordnum, @RequestParam(value = "pFabSeq", required = false) Integer pfabSeq, @RequestParam(value = "pDestOrdnum", required = false) String pdestOrdnum, HttpServletRequest _request) {
        LOGGER.debug("Executing named procedure: ProcOR105PK0_CPYFABGetCpyFab");
        ProcOr105pk0CpyfabgetCpyFabResponse _result = procedureService.executeProcOR105PK0_CPYFABGetCpyFab(pprgId, pordnum, pfabSeq, pdestOrdnum);
        LOGGER.debug("got the result for named procedure: ProcOR105PK0_CPYFABGetCpyFab, result:{}", _result);
        return _result;
    }

    @RequestMapping(value = "/procedure/execute/ProcOR105PK0_CPYFABGetFabSeqLOV", method = RequestMethod.GET)
    @WMAccessVisibility(value = AccessSpecifier.APP_ONLY)
    @ApiOperation(value = "To get fabric seq LOV from ort120")
    public ProcOr105pk0CpyfabgetFabSeqLovResponse executeProcOR105PK0_CPYFABGetFabSeqLOV(@RequestParam(value = "pPrgId", required = false) String pprgId, @RequestParam(value = "pOrdnum", required = false) String pordnum, HttpServletRequest _request) {
        LOGGER.debug("Executing named procedure: ProcOR105PK0_CPYFABGetFabSeqLOV");
        ProcOr105pk0CpyfabgetFabSeqLovResponse _result = procedureService.executeProcOR105PK0_CPYFABGetFabSeqLOV(pprgId, pordnum);
        LOGGER.debug("got the result for named procedure: ProcOR105PK0_CPYFABGetFabSeqLOV, result:{}", _result);
        return _result;
    }

    @RequestMapping(value = "/procedure/execute/or105wpk0yrn_getYrnqlty", method = RequestMethod.GET)
    @WMAccessVisibility(value = AccessSpecifier.APP_ONLY)
    @ApiOperation(value = "get yarn quality")
    public Or105wpk0yrnGetYrnqltyResponse executeOr105wpk0yrn_getYrnqlty(@RequestParam(value = "pPrgid", required = false) String pprgid, HttpServletRequest _request) {
        LOGGER.debug("Executing named procedure: or105wpk0yrn_getYrnqlty");
        Or105wpk0yrnGetYrnqltyResponse _result = procedureService.executeOr105wpk0yrn_getYrnqlty(pprgid);
        LOGGER.debug("got the result for named procedure: or105wpk0yrn_getYrnqlty, result:{}", _result);
        return _result;
    }

    @RequestMapping(value = "/procedure/execute/ProcOR105PK0_CPYFABGetFaborienLOV", method = RequestMethod.GET)
    @WMAccessVisibility(value = AccessSpecifier.APP_ONLY)
    @ApiOperation(value = "To fetch Fabric orientation LOV")
    public ProcOr105pk0CpyfabgetFaborienLovResponse executeProcOR105PK0_CPYFABGetFaborienLOV(@RequestParam(value = "pPrgId", required = false) String pprgId, HttpServletRequest _request) {
        LOGGER.debug("Executing named procedure: ProcOR105PK0_CPYFABGetFaborienLOV");
        ProcOr105pk0CpyfabgetFaborienLovResponse _result = procedureService.executeProcOR105PK0_CPYFABGetFaborienLOV(pprgId);
        LOGGER.debug("got the result for named procedure: ProcOR105PK0_CPYFABGetFaborienLOV, result:{}", _result);
        return _result;
    }

    @RequestMapping(value = "/procedure/execute/or105wpk0_yrn_getOriclr", method = RequestMethod.GET)
    @WMAccessVisibility(value = AccessSpecifier.APP_ONLY)
    @ApiOperation(value = "get oriclr")
    public Or105wpk0YrnGetOriclrResponse executeOr105wpk0_yrn_getOriclr(@RequestParam(value = "pPrgid", required = false) String pprgid, @RequestParam(value = "pYrnclr", required = false) String pyrnclr, @RequestParam(value = "pYrncnt", required = false) String pyrncnt, @RequestParam(value = "pYrncps", required = false) String pyrncps, HttpServletRequest _request) {
        LOGGER.debug("Executing named procedure: or105wpk0_yrn_getOriclr");
        Or105wpk0YrnGetOriclrResponse _result = procedureService.executeOr105wpk0_yrn_getOriclr(pprgid, pyrnclr, pyrncnt, pyrncps);
        LOGGER.debug("got the result for named procedure: or105wpk0_yrn_getOriclr, result:{}", _result);
        return _result;
    }

    @RequestMapping(value = "/procedure/execute/or105wpk0QryOrt125", method = RequestMethod.GET)
    @WMAccessVisibility(value = AccessSpecifier.APP_ONLY)
    @ApiOperation(value = "query ort125")
    public Or105wpk0qryOrt125Response executeOr105wpk0QryOrt125(@RequestParam(value = "pPrgid", required = false) String pprgid, @RequestParam(value = "pOrdnum", required = false) String pordnum, @RequestParam(value = "pFabseq", required = false) Integer pfabseq, HttpServletRequest _request) {
        LOGGER.debug("Executing named procedure: or105wpk0QryOrt125");
        Or105wpk0qryOrt125Response _result = procedureService.executeOr105wpk0QryOrt125(pprgid, pordnum, pfabseq);
        LOGGER.debug("got the result for named procedure: or105wpk0QryOrt125, result:{}", _result);
        return _result;
    }

    @RequestMapping(value = "/procedure/execute/ProcOR105PK0_CPYFABGetFabDetails", method = RequestMethod.GET)
    @WMAccessVisibility(value = AccessSpecifier.APP_ONLY)
    @ApiOperation(value = "To fetch orderno, fabseq and ccf")
    public ProcOr105pk0CpyfabgetFabDetailsResponse executeProcOR105PK0_CPYFABGetFabDetails(@RequestParam(value = "pPrgId", required = false) String pprgId, @RequestParam(value = "pOrdnum", required = false) String pordnum, @RequestParam(value = "pFabSeq", required = false) Integer pfabSeq, @RequestParam(value = "pCCF", required = false) String pccf, @RequestParam(value = "pOption", required = false) String poption, HttpServletRequest _request) {
        LOGGER.debug("Executing named procedure: ProcOR105PK0_CPYFABGetFabDetails");
        ProcOr105pk0CpyfabgetFabDetailsResponse _result = procedureService.executeProcOR105PK0_CPYFABGetFabDetails(pprgId, pordnum, pfabSeq, pccf, poption);
        LOGGER.debug("got the result for named procedure: ProcOR105PK0_CPYFABGetFabDetails, result:{}", _result);
        return _result;
    }

    @RequestMapping(value = "/procedure/execute/or207pk0GetChgReason", method = RequestMethod.GET)
    @WMAccessVisibility(value = AccessSpecifier.APP_ONLY)
    @ApiOperation(value = "get list of price change reasons")
    public Or207pk0getChgReasonResponse executeOr207pk0GetChgReason(@RequestParam(value = "pChangeCategory", required = false) String pchangeCategory, HttpServletRequest _request) {
        LOGGER.debug("Executing named procedure: or207pk0GetChgReason");
        Or207pk0getChgReasonResponse _result = procedureService.executeOr207pk0GetChgReason(pchangeCategory);
        LOGGER.debug("got the result for named procedure: or207pk0GetChgReason, result:{}", _result);
        return _result;
    }

    @RequestMapping(value = "/procedure/execute/or207pk0GetCmtPriceChgHistory", method = RequestMethod.GET)
    @WMAccessVisibility(value = AccessSpecifier.APP_ONLY)
    @ApiOperation(value = "get CMT price change audit")
    public Or207pk0getCmtPriceChgHistoryResponse executeOr207pk0GetCmtPriceChgHistory(@RequestParam(value = "pOrdnum", required = false) String pordnum, HttpServletRequest _request) {
        LOGGER.debug("Executing named procedure: or207pk0GetCmtPriceChgHistory");
        Or207pk0getCmtPriceChgHistoryResponse _result = procedureService.executeOr207pk0GetCmtPriceChgHistory(pordnum);
        LOGGER.debug("got the result for named procedure: or207pk0GetCmtPriceChgHistory, result:{}", _result);
        return _result;
    }

    @RequestMapping(value = "/procedure/execute/ProcOR105PK0_CPYFABGetShadeOptionLOV", method = RequestMethod.GET)
    @WMAccessVisibility(value = AccessSpecifier.APP_ONLY)
    @ApiOperation(value = "To fetch shade option List of value")
    public ProcOr105pk0CpyfabgetShadeOptionLovResponse executeProcOR105PK0_CPYFABGetShadeOptionLOV(@RequestParam(value = "pPrgId", required = false) String pprgId, @RequestParam(value = "pIntreftno", required = false) String pintreftno, HttpServletRequest _request) {
        LOGGER.debug("Executing named procedure: ProcOR105PK0_CPYFABGetShadeOptionLOV");
        ProcOr105pk0CpyfabgetShadeOptionLovResponse _result = procedureService.executeProcOR105PK0_CPYFABGetShadeOptionLOV(pprgId, pintreftno);
        LOGGER.debug("got the result for named procedure: ProcOR105PK0_CPYFABGetShadeOptionLOV, result:{}", _result);
        return _result;
    }

    @RequestMapping(value = "/procedure/execute/or207pk0PrePostUpdOrt209", method = RequestMethod.GET)
    @WMAccessVisibility(value = AccessSpecifier.APP_ONLY)
    @ApiOperation(value = "pre/on/post updates ort209")
    public Void executeOr207pk0PrePostUpdOrt209(@RequestParam(value = "pOrdnum", required = false) String pordnum, @RequestParam(value = "pSeqcod", required = false) String pseqcod, @RequestParam(value = "pSzeseq", required = false) Integer pszeseq, @RequestParam(value = "pShpnum", required = false) String pshpnum, @RequestParam(value = "pFieldToUpdate", required = false) String pfieldToUpdate, @RequestParam(value = "pKDSUnitprc", required = false) Double pkdsunitprc, @RequestParam(value = "pFliprc", required = false) Double pfliprc, @RequestParam(value = "pKdsRetprc", required = false) Double pkdsRetprc, @RequestParam(value = "pKdsRetprcb", required = false) Double pkdsRetprcb, @RequestParam(value = "pKdsRetprcc", required = false) Double pkdsRetprcc, @RequestParam(value = "pKdsRetprcd", required = false) Double pkdsRetprcd, @RequestParam(value = "pUsrid", required = false) String pusrid, @RequestParam(value = "pPrgid", required = false) String pprgid, @RequestParam(value = "pChangereason", required = false) String pchangereason, @RequestParam(value = "pUserRemarks", required = false) String puserRemarks, @RequestParam(value = "pRef", required = false) String pref, @RequestParam(value = "pRef2", required = false) String pref2, @RequestParam(value = "pRef3", required = false) String pref3, @RequestParam(value = "pRef4", required = false) String pref4, @RequestParam(value = "pRef5", required = false) String pref5, @RequestParam(value = "pRef6", required = false) String pref6, @RequestParam(value = "pRef7", required = false) String pref7, @RequestParam(value = "pRef8", required = false) String pref8, @RequestParam(value = "pUpdAllSzeInd", required = false) String pupdAllSzeInd, @RequestParam(value = "pUpdAllPackInd", required = false) String pupdAllPackInd, @RequestParam(value = "pUpdAllShpNumInd", required = false) String pupdAllShpNumInd, @RequestParam(value = "pUserAppRoleList", required = false) String puserAppRoleList, HttpServletRequest _request) {
        LOGGER.debug("Executing named procedure: or207pk0PrePostUpdOrt209");
        Void _result = procedureService.executeOr207pk0PrePostUpdOrt209(pordnum, pseqcod, pszeseq, pshpnum, pfieldToUpdate, pkdsunitprc, pfliprc, pkdsRetprc, pkdsRetprcb, pkdsRetprcc, pkdsRetprcd, pusrid, pprgid, pchangereason, puserRemarks, pref, pref2, pref3, pref4, pref5, pref6, pref7, pref8, pupdAllSzeInd, pupdAllPackInd, pupdAllShpNumInd, puserAppRoleList);
        LOGGER.debug("got the result for named procedure: or207pk0PrePostUpdOrt209, result:{}", _result);
        return _result;
    }

}