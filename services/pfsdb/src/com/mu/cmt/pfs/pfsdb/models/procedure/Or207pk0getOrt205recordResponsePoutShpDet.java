/*Copyright (c) 2016-2017 cmt.mu All Rights Reserved.
 This software is the confidential and proprietary information of cmt.mu You shall not disclose such Confidential Information and shall use it only in accordance
 with the terms of the source code license agreement you entered into with cmt.mu*/
package com.mu.cmt.pfs.pfsdb.models.procedure;

/*This is a Studio Managed File. DO NOT EDIT THIS FILE. Your changes may be reverted by Studio.*/


import java.io.Serializable;
import java.util.List;
import java.util.Objects;

import com.wavemaker.runtime.data.annotations.ColumnAlias;

public class Or207pk0getOrt205recordResponsePoutShpDet implements Serializable {


    @ColumnAlias("ORDNUM")
    private String ordnum;

    @ColumnAlias("SHPNUM")
    private String shpnum;

    @ColumnAlias("CLIONUM")
    private String clionum;

    @ColumnAlias("DROPNO")
    private Short dropno;

    @ColumnAlias("CLIPCKTYP")
    private String clipcktyp;

    @ColumnAlias("SHPDST")
    private String shpdst;

    @ColumnAlias("QTYORD")
    private Integer qtyord;

    @ColumnAlias("SHPMOD")
    private String shpmod;

    @ColumnAlias("SHPMODDESC")
    private String shpmoddesc;

    @ColumnAlias("REM")
    private String rem;

    public String getOrdnum() {
        return this.ordnum;
    }

    public void setOrdnum(String ordnum) {
        this.ordnum = ordnum;
    }

    public String getShpnum() {
        return this.shpnum;
    }

    public void setShpnum(String shpnum) {
        this.shpnum = shpnum;
    }

    public String getClionum() {
        return this.clionum;
    }

    public void setClionum(String clionum) {
        this.clionum = clionum;
    }

    public Short getDropno() {
        return this.dropno;
    }

    public void setDropno(Short dropno) {
        this.dropno = dropno;
    }

    public String getClipcktyp() {
        return this.clipcktyp;
    }

    public void setClipcktyp(String clipcktyp) {
        this.clipcktyp = clipcktyp;
    }

    public String getShpdst() {
        return this.shpdst;
    }

    public void setShpdst(String shpdst) {
        this.shpdst = shpdst;
    }

    public Integer getQtyord() {
        return this.qtyord;
    }

    public void setQtyord(Integer qtyord) {
        this.qtyord = qtyord;
    }

    public String getShpmod() {
        return this.shpmod;
    }

    public void setShpmod(String shpmod) {
        this.shpmod = shpmod;
    }

    public String getShpmoddesc() {
        return this.shpmoddesc;
    }

    public void setShpmoddesc(String shpmoddesc) {
        this.shpmoddesc = shpmoddesc;
    }

    public String getRem() {
        return this.rem;
    }

    public void setRem(String rem) {
        this.rem = rem;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Or207pk0getOrt205recordResponsePoutShpDet)) return false;
        final Or207pk0getOrt205recordResponsePoutShpDet or207pk0getOrt205recordResponsePoutShpDet = (Or207pk0getOrt205recordResponsePoutShpDet) o;
        return Objects.equals(getOrdnum(), or207pk0getOrt205recordResponsePoutShpDet.getOrdnum()) &&
                Objects.equals(getShpnum(), or207pk0getOrt205recordResponsePoutShpDet.getShpnum()) &&
                Objects.equals(getClionum(), or207pk0getOrt205recordResponsePoutShpDet.getClionum()) &&
                Objects.equals(getDropno(), or207pk0getOrt205recordResponsePoutShpDet.getDropno()) &&
                Objects.equals(getClipcktyp(), or207pk0getOrt205recordResponsePoutShpDet.getClipcktyp()) &&
                Objects.equals(getShpdst(), or207pk0getOrt205recordResponsePoutShpDet.getShpdst()) &&
                Objects.equals(getQtyord(), or207pk0getOrt205recordResponsePoutShpDet.getQtyord()) &&
                Objects.equals(getShpmod(), or207pk0getOrt205recordResponsePoutShpDet.getShpmod()) &&
                Objects.equals(getShpmoddesc(), or207pk0getOrt205recordResponsePoutShpDet.getShpmoddesc()) &&
                Objects.equals(getRem(), or207pk0getOrt205recordResponsePoutShpDet.getRem());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getOrdnum(),
                getShpnum(),
                getClionum(),
                getDropno(),
                getClipcktyp(),
                getShpdst(),
                getQtyord(),
                getShpmod(),
                getShpmoddesc(),
                getRem());
    }
}