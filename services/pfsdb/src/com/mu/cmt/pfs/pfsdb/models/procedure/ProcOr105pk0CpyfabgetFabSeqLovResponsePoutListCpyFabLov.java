/*Copyright (c) 2016-2017 cmt.mu All Rights Reserved.
 This software is the confidential and proprietary information of cmt.mu You shall not disclose such Confidential Information and shall use it only in accordance
 with the terms of the source code license agreement you entered into with cmt.mu*/
package com.mu.cmt.pfs.pfsdb.models.procedure;

/*This is a Studio Managed File. DO NOT EDIT THIS FILE. Your changes may be reverted by Studio.*/


import java.io.Serializable;
import java.util.List;
import java.util.Objects;

import com.wavemaker.runtime.data.annotations.ColumnAlias;

public class ProcOr105pk0CpyfabgetFabSeqLovResponsePoutListCpyFabLov implements Serializable {


    @ColumnAlias("FABSEQ")
    private Byte fabseq;

    @ColumnAlias("FABTYP")
    private String fabtyp;

    @ColumnAlias("FABIND")
    private String fabind;

    @ColumnAlias("FABSTS")
    private String fabsts;

    @ColumnAlias("CALSTN")
    private String calstn;

    @ColumnAlias("FABWID")
    private Float fabwid;

    @ColumnAlias("FABWGT")
    private Short fabwgt;

    @ColumnAlias("STRIPE")
    private String stripe;

    @ColumnAlias("AOP")
    private String aop;

    @ColumnAlias("PATCOD")
    private String patcod;

    public Byte getFabseq() {
        return this.fabseq;
    }

    public void setFabseq(Byte fabseq) {
        this.fabseq = fabseq;
    }

    public String getFabtyp() {
        return this.fabtyp;
    }

    public void setFabtyp(String fabtyp) {
        this.fabtyp = fabtyp;
    }

    public String getFabind() {
        return this.fabind;
    }

    public void setFabind(String fabind) {
        this.fabind = fabind;
    }

    public String getFabsts() {
        return this.fabsts;
    }

    public void setFabsts(String fabsts) {
        this.fabsts = fabsts;
    }

    public String getCalstn() {
        return this.calstn;
    }

    public void setCalstn(String calstn) {
        this.calstn = calstn;
    }

    public Float getFabwid() {
        return this.fabwid;
    }

    public void setFabwid(Float fabwid) {
        this.fabwid = fabwid;
    }

    public Short getFabwgt() {
        return this.fabwgt;
    }

    public void setFabwgt(Short fabwgt) {
        this.fabwgt = fabwgt;
    }

    public String getStripe() {
        return this.stripe;
    }

    public void setStripe(String stripe) {
        this.stripe = stripe;
    }

    public String getAop() {
        return this.aop;
    }

    public void setAop(String aop) {
        this.aop = aop;
    }

    public String getPatcod() {
        return this.patcod;
    }

    public void setPatcod(String patcod) {
        this.patcod = patcod;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof ProcOr105pk0CpyfabgetFabSeqLovResponsePoutListCpyFabLov)) return false;
        final ProcOr105pk0CpyfabgetFabSeqLovResponsePoutListCpyFabLov procOr105pk0cpyfabgetFabSeqLovResponsePoutListCpyFabLov = (ProcOr105pk0CpyfabgetFabSeqLovResponsePoutListCpyFabLov) o;
        return Objects.equals(getFabseq(), procOr105pk0cpyfabgetFabSeqLovResponsePoutListCpyFabLov.getFabseq()) &&
                Objects.equals(getFabtyp(), procOr105pk0cpyfabgetFabSeqLovResponsePoutListCpyFabLov.getFabtyp()) &&
                Objects.equals(getFabind(), procOr105pk0cpyfabgetFabSeqLovResponsePoutListCpyFabLov.getFabind()) &&
                Objects.equals(getFabsts(), procOr105pk0cpyfabgetFabSeqLovResponsePoutListCpyFabLov.getFabsts()) &&
                Objects.equals(getCalstn(), procOr105pk0cpyfabgetFabSeqLovResponsePoutListCpyFabLov.getCalstn()) &&
                Objects.equals(getFabwid(), procOr105pk0cpyfabgetFabSeqLovResponsePoutListCpyFabLov.getFabwid()) &&
                Objects.equals(getFabwgt(), procOr105pk0cpyfabgetFabSeqLovResponsePoutListCpyFabLov.getFabwgt()) &&
                Objects.equals(getStripe(), procOr105pk0cpyfabgetFabSeqLovResponsePoutListCpyFabLov.getStripe()) &&
                Objects.equals(getAop(), procOr105pk0cpyfabgetFabSeqLovResponsePoutListCpyFabLov.getAop()) &&
                Objects.equals(getPatcod(), procOr105pk0cpyfabgetFabSeqLovResponsePoutListCpyFabLov.getPatcod());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getFabseq(),
                getFabtyp(),
                getFabind(),
                getFabsts(),
                getCalstn(),
                getFabwid(),
                getFabwgt(),
                getStripe(),
                getAop(),
                getPatcod());
    }
}