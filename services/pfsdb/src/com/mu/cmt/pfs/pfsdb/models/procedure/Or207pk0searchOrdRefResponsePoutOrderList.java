/*Copyright (c) 2016-2017 cmt.mu All Rights Reserved.
 This software is the confidential and proprietary information of cmt.mu You shall not disclose such Confidential Information and shall use it only in accordance
 with the terms of the source code license agreement you entered into with cmt.mu*/
package com.mu.cmt.pfs.pfsdb.models.procedure;

/*This is a Studio Managed File. DO NOT EDIT THIS FILE. Your changes may be reverted by Studio.*/


import java.io.Serializable;
import java.util.List;
import java.util.Objects;

import com.wavemaker.runtime.data.annotations.ColumnAlias;

public class Or207pk0searchOrdRefResponsePoutOrderList implements Serializable {


    @ColumnAlias("ORDNUM")
    private String ordnum;

    @ColumnAlias("SSN")
    private String ssn;

    @ColumnAlias("CLICOD")
    private String clicod;

    @ColumnAlias("ORDCLIONUM")
    private String ordclionum;

    @ColumnAlias("SHPCLIONUM")
    private String shpclionum;

    @ColumnAlias("REF")
    private String ref;

    @ColumnAlias("REF2")
    private String ref2;

    @ColumnAlias("REF3")
    private String ref3;

    @ColumnAlias("REF4")
    private String ref4;

    @ColumnAlias("REF5")
    private String ref5;

    @ColumnAlias("REF6")
    private String ref6;

    @ColumnAlias("REF7")
    private String ref7;

    @ColumnAlias("REF8")
    private String ref8;

    public String getOrdnum() {
        return this.ordnum;
    }

    public void setOrdnum(String ordnum) {
        this.ordnum = ordnum;
    }

    public String getSsn() {
        return this.ssn;
    }

    public void setSsn(String ssn) {
        this.ssn = ssn;
    }

    public String getClicod() {
        return this.clicod;
    }

    public void setClicod(String clicod) {
        this.clicod = clicod;
    }

    public String getOrdclionum() {
        return this.ordclionum;
    }

    public void setOrdclionum(String ordclionum) {
        this.ordclionum = ordclionum;
    }

    public String getShpclionum() {
        return this.shpclionum;
    }

    public void setShpclionum(String shpclionum) {
        this.shpclionum = shpclionum;
    }

    public String getRef() {
        return this.ref;
    }

    public void setRef(String ref) {
        this.ref = ref;
    }

    public String getRef2() {
        return this.ref2;
    }

    public void setRef2(String ref2) {
        this.ref2 = ref2;
    }

    public String getRef3() {
        return this.ref3;
    }

    public void setRef3(String ref3) {
        this.ref3 = ref3;
    }

    public String getRef4() {
        return this.ref4;
    }

    public void setRef4(String ref4) {
        this.ref4 = ref4;
    }

    public String getRef5() {
        return this.ref5;
    }

    public void setRef5(String ref5) {
        this.ref5 = ref5;
    }

    public String getRef6() {
        return this.ref6;
    }

    public void setRef6(String ref6) {
        this.ref6 = ref6;
    }

    public String getRef7() {
        return this.ref7;
    }

    public void setRef7(String ref7) {
        this.ref7 = ref7;
    }

    public String getRef8() {
        return this.ref8;
    }

    public void setRef8(String ref8) {
        this.ref8 = ref8;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Or207pk0searchOrdRefResponsePoutOrderList)) return false;
        final Or207pk0searchOrdRefResponsePoutOrderList or207pk0searchOrdRefResponsePoutOrderList = (Or207pk0searchOrdRefResponsePoutOrderList) o;
        return Objects.equals(getOrdnum(), or207pk0searchOrdRefResponsePoutOrderList.getOrdnum()) &&
                Objects.equals(getSsn(), or207pk0searchOrdRefResponsePoutOrderList.getSsn()) &&
                Objects.equals(getClicod(), or207pk0searchOrdRefResponsePoutOrderList.getClicod()) &&
                Objects.equals(getOrdclionum(), or207pk0searchOrdRefResponsePoutOrderList.getOrdclionum()) &&
                Objects.equals(getShpclionum(), or207pk0searchOrdRefResponsePoutOrderList.getShpclionum()) &&
                Objects.equals(getRef(), or207pk0searchOrdRefResponsePoutOrderList.getRef()) &&
                Objects.equals(getRef2(), or207pk0searchOrdRefResponsePoutOrderList.getRef2()) &&
                Objects.equals(getRef3(), or207pk0searchOrdRefResponsePoutOrderList.getRef3()) &&
                Objects.equals(getRef4(), or207pk0searchOrdRefResponsePoutOrderList.getRef4()) &&
                Objects.equals(getRef5(), or207pk0searchOrdRefResponsePoutOrderList.getRef5()) &&
                Objects.equals(getRef6(), or207pk0searchOrdRefResponsePoutOrderList.getRef6()) &&
                Objects.equals(getRef7(), or207pk0searchOrdRefResponsePoutOrderList.getRef7()) &&
                Objects.equals(getRef8(), or207pk0searchOrdRefResponsePoutOrderList.getRef8());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getOrdnum(),
                getSsn(),
                getClicod(),
                getOrdclionum(),
                getShpclionum(),
                getRef(),
                getRef2(),
                getRef3(),
                getRef4(),
                getRef5(),
                getRef6(),
                getRef7(),
                getRef8());
    }
}