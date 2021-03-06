/*Copyright (c) 2016-2017 cmt.mu All Rights Reserved.
 This software is the confidential and proprietary information of cmt.mu You shall not disclose such Confidential Information and shall use it only in accordance
 with the terms of the source code license agreement you entered into with cmt.mu*/
package com.mu.cmt.pfs.pfsdb.controller;

/*This is a Studio Managed File. DO NOT EDIT THIS FILE. Your changes may be reverted by Studio.*/

import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.wavemaker.commons.wrapper.StringWrapper;
import com.wavemaker.runtime.data.export.DataExportOptions;
import com.wavemaker.runtime.data.export.ExportType;
import com.wavemaker.runtime.data.expression.QueryFilter;
import com.wavemaker.runtime.data.model.AggregationInfo;
import com.wavemaker.runtime.file.manager.ExportedFileManager;
import com.wavemaker.runtime.file.model.Downloadable;
import com.wavemaker.tools.api.core.annotations.WMAccessVisibility;
import com.wavemaker.tools.api.core.models.AccessSpecifier;
import com.wordnik.swagger.annotations.Api;
import com.wordnik.swagger.annotations.ApiOperation;
import com.wordnik.swagger.annotations.ApiParam;

import com.mu.cmt.pfs.pfsdb.VOr1000OrmnMaster;
import com.mu.cmt.pfs.pfsdb.service.VOr1000OrmnMasterService;


/**
 * Controller object for domain model class VOr1000OrmnMaster.
 * @see VOr1000OrmnMaster
 */
@RestController("pfsdb.VOr1000OrmnMasterController")
@Api(value = "VOr1000OrmnMasterController", description = "Exposes APIs to work with VOr1000OrmnMaster resource.")
@RequestMapping("/pfsdb/VOr1000OrmnMaster")
public class VOr1000OrmnMasterController {

    private static final Logger LOGGER = LoggerFactory.getLogger(VOr1000OrmnMasterController.class);

    @Autowired
	@Qualifier("pfsdb.VOr1000OrmnMasterService")
	private VOr1000OrmnMasterService vOr1000OrmnMasterService;

	@Autowired
	private ExportedFileManager exportedFileManager;

	@ApiOperation(value = "Creates a new VOr1000OrmnMaster instance.")
    @RequestMapping(method = RequestMethod.POST)
    @WMAccessVisibility(value = AccessSpecifier.APP_ONLY)
    public VOr1000OrmnMaster createVOr1000OrmnMaster(@RequestBody VOr1000OrmnMaster vor1000ormnMaster) {
		LOGGER.debug("Create VOr1000OrmnMaster with information: {}" , vor1000ormnMaster);

		vor1000ormnMaster = vOr1000OrmnMasterService.create(vor1000ormnMaster);
		LOGGER.debug("Created VOr1000OrmnMaster with information: {}" , vor1000ormnMaster);

	    return vor1000ormnMaster;
	}

    @ApiOperation(value = "Returns the VOr1000OrmnMaster instance associated with the given id.")
    @RequestMapping(value = "/{id:.+}", method = RequestMethod.GET)
    @WMAccessVisibility(value = AccessSpecifier.APP_ONLY)
    public VOr1000OrmnMaster getVOr1000OrmnMaster(@PathVariable("id") String id) {
        LOGGER.debug("Getting VOr1000OrmnMaster with id: {}" , id);

        VOr1000OrmnMaster foundVOr1000OrmnMaster = vOr1000OrmnMasterService.getById(id);
        LOGGER.debug("VOr1000OrmnMaster details with id: {}" , foundVOr1000OrmnMaster);

        return foundVOr1000OrmnMaster;
    }

    @ApiOperation(value = "Updates the VOr1000OrmnMaster instance associated with the given id.")
    @RequestMapping(value = "/{id:.+}", method = RequestMethod.PUT)
    @WMAccessVisibility(value = AccessSpecifier.APP_ONLY)
    public VOr1000OrmnMaster editVOr1000OrmnMaster(@PathVariable("id") String id, @RequestBody VOr1000OrmnMaster vor1000ormnMaster) {
        LOGGER.debug("Editing VOr1000OrmnMaster with id: {}" , vor1000ormnMaster.getOrdnum());

        vor1000ormnMaster.setOrdnum(id);
        vor1000ormnMaster = vOr1000OrmnMasterService.update(vor1000ormnMaster);
        LOGGER.debug("VOr1000OrmnMaster details with id: {}" , vor1000ormnMaster);

        return vor1000ormnMaster;
    }

    @ApiOperation(value = "Deletes the VOr1000OrmnMaster instance associated with the given id.")
    @RequestMapping(value = "/{id:.+}", method = RequestMethod.DELETE)
    @WMAccessVisibility(value = AccessSpecifier.APP_ONLY)
    public boolean deleteVOr1000OrmnMaster(@PathVariable("id") String id) {
        LOGGER.debug("Deleting VOr1000OrmnMaster with id: {}" , id);

        VOr1000OrmnMaster deletedVOr1000OrmnMaster = vOr1000OrmnMasterService.delete(id);

        return deletedVOr1000OrmnMaster != null;
    }

    /**
     * @deprecated Use {@link #findVOr1000OrmnMasters(String, Pageable)} instead.
     */
    @Deprecated
    @ApiOperation(value = "Returns the list of VOr1000OrmnMaster instances matching the search criteria.")
    @RequestMapping(value = "/search", method = RequestMethod.POST)
    @WMAccessVisibility(value = AccessSpecifier.APP_ONLY)
    public Page<VOr1000OrmnMaster> searchVOr1000OrmnMastersByQueryFilters( Pageable pageable, @RequestBody QueryFilter[] queryFilters) {
        LOGGER.debug("Rendering VOr1000OrmnMasters list by query filter:{}", (Object) queryFilters);
        return vOr1000OrmnMasterService.findAll(queryFilters, pageable);
    }

    @ApiOperation(value = "Returns the paginated list of VOr1000OrmnMaster instances matching the optional query (q) request param. If there is no query provided, it returns all the instances. Pagination & Sorting parameters such as page& size, sort can be sent as request parameters. The sort value should be a comma separated list of field names & optional sort order to sort the data on. eg: field1 asc, field2 desc etc ")
    @RequestMapping(method = RequestMethod.GET)
    @WMAccessVisibility(value = AccessSpecifier.APP_ONLY)
    public Page<VOr1000OrmnMaster> findVOr1000OrmnMasters(@ApiParam("conditions to filter the results") @RequestParam(value = "q", required = false) String query, Pageable pageable) {
        LOGGER.debug("Rendering VOr1000OrmnMasters list by filter:", query);
        return vOr1000OrmnMasterService.findAll(query, pageable);
    }

    @ApiOperation(value = "Returns the paginated list of VOr1000OrmnMaster instances matching the optional query (q) request param. This API should be used only if the query string is too big to fit in GET request with request param. The request has to made in application/x-www-form-urlencoded format.")
    @RequestMapping(value="/filter", method = RequestMethod.POST, consumes= "application/x-www-form-urlencoded")
    @WMAccessVisibility(value = AccessSpecifier.APP_ONLY)
    public Page<VOr1000OrmnMaster> filterVOr1000OrmnMasters(@ApiParam("conditions to filter the results") @RequestParam(value = "q", required = false) String query, Pageable pageable) {
        LOGGER.debug("Rendering VOr1000OrmnMasters list by filter", query);
        return vOr1000OrmnMasterService.findAll(query, pageable);
    }

    @ApiOperation(value = "Returns downloadable file for the data matching the optional query (q) request param. If query string is too big to fit in GET request's query param, use POST method with application/x-www-form-urlencoded format.")
    @RequestMapping(value = "/export/{exportType}", method = {RequestMethod.GET,  RequestMethod.POST}, produces = "application/octet-stream")
    @WMAccessVisibility(value = AccessSpecifier.APP_ONLY)
    public Downloadable exportVOr1000OrmnMasters(@PathVariable("exportType") ExportType exportType, @ApiParam("conditions to filter the results") @RequestParam(value = "q", required = false) String query, Pageable pageable) {
         return vOr1000OrmnMasterService.export(exportType, query, pageable);
    }

    @ApiOperation(value = "Returns a URL to download a file for the data matching the optional query (q) request param and the required fields provided in the Export Options.") 
    @RequestMapping(value = "/export", method = {RequestMethod.POST}, consumes = "application/json")
    @WMAccessVisibility(value = AccessSpecifier.APP_ONLY)
    public StringWrapper exportVOr1000OrmnMastersAndGetURL(@RequestBody DataExportOptions exportOptions, Pageable pageable) {
        String exportedFileName = exportOptions.getFileName();
        if(exportedFileName == null || exportedFileName.isEmpty()) {
            exportedFileName = VOr1000OrmnMaster.class.getSimpleName();
        }
        exportedFileName += exportOptions.getExportType().getExtension();
        String exportedUrl = exportedFileManager.registerAndGetURL(exportedFileName, outputStream -> vOr1000OrmnMasterService.export(exportOptions, pageable, outputStream));
        return new StringWrapper(exportedUrl);
    }

	@ApiOperation(value = "Returns the total count of VOr1000OrmnMaster instances matching the optional query (q) request param. If query string is too big to fit in GET request's query param, use POST method with application/x-www-form-urlencoded format.")
	@RequestMapping(value = "/count", method = {RequestMethod.GET, RequestMethod.POST})
    @WMAccessVisibility(value = AccessSpecifier.APP_ONLY)
	public Long countVOr1000OrmnMasters( @ApiParam("conditions to filter the results") @RequestParam(value = "q", required = false) String query) {
		LOGGER.debug("counting VOr1000OrmnMasters");
		return vOr1000OrmnMasterService.count(query);
	}

    @ApiOperation(value = "Returns aggregated result with given aggregation info")
	@RequestMapping(value = "/aggregations", method = RequestMethod.POST)
    @WMAccessVisibility(value = AccessSpecifier.APP_ONLY)
	public Page<Map<String, Object>> getVOr1000OrmnMasterAggregatedValues(@RequestBody AggregationInfo aggregationInfo, Pageable pageable) {
        LOGGER.debug("Fetching aggregated results for {}", aggregationInfo);
        return vOr1000OrmnMasterService.getAggregatedValues(aggregationInfo, pageable);
    }


    /**
	 * This setter method should only be used by unit tests
	 *
	 * @param service VOr1000OrmnMasterService instance
	 */
	protected void setVOr1000OrmnMasterService(VOr1000OrmnMasterService service) {
		this.vOr1000OrmnMasterService = service;
	}

}