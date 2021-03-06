/*Copyright (c) 2016-2017 cmt.mu All Rights Reserved.
 This software is the confidential and proprietary information of cmt.mu You shall not disclose such Confidential Information and shall use it only in accordance
 with the terms of the source code license agreement you entered into with cmt.mu*/
package com.mu.cmt.pfs.pfsdb.models.procedure;

/*This is a Studio Managed File. DO NOT EDIT THIS FILE. Your changes may be reverted by Studio.*/


import java.io.Serializable;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Objects;

import com.wavemaker.runtime.data.annotations.ColumnAlias;

public class Or207pk0getKdspriceChgHistoryResponsePoutOrt215hist implements Serializable {


    @ColumnAlias("ORDNUM")
    private String ordnum;

    @ColumnAlias("SHPNUM")
    private String shpnum;

    @ColumnAlias("SEQCOD")
    private String seqcod;

    @ColumnAlias("FIELDNAME")
    private String fieldname;

    @ColumnAlias("SZESEQ")
    private Byte szeseq;

    @ColumnAlias("SEQ")
    private Byte seq;

    @ColumnAlias("WPCKDES")
    private String wpckdes;

    @ColumnAlias("WSZEDES")
    private String wszedes;

    @ColumnAlias("REASON")
    private String reason;

    @ColumnAlias("REASONDES")
    private String reasondes;

    @ColumnAlias("OLDPRICE")
    private Double oldprice;

    @ColumnAlias("REVPRICE")
    private Double revprice;

    @ColumnAlias("MODBY")
    private String modby;

    @ColumnAlias("MODBYNAME")
    private String modbyname;

    @ColumnAlias("MODDATE")
    private LocalDateTime moddate;

    @ColumnAlias("REMARKS")
    private String remarks;

    @ColumnAlias("PRICECURR")
    private String pricecurr;

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

    public String getSeqcod() {
        return this.seqcod;
    }

    public void setSeqcod(String seqcod) {
        this.seqcod = seqcod;
    }

    public String getFieldname() {
        return this.fieldname;
    }

    public void setFieldname(String fieldname) {
        this.fieldname = fieldname;
    }

    public Byte getSzeseq() {
        return this.szeseq;
    }

    public void setSzeseq(Byte szeseq) {
        this.szeseq = szeseq;
    }

    public Byte getSeq() {
        return this.seq;
    }

    public void setSeq(Byte seq) {
        this.seq = seq;
    }

    public String getWpckdes() {
        return this.wpckdes;
    }

    public void setWpckdes(String wpckdes) {
        this.wpckdes = wpckdes;
    }

    public String getWszedes() {
        return this.wszedes;
    }

    public void setWszedes(String wszedes) {
        this.wszedes = wszedes;
    }

    public String getReason() {
        return this.reason;
    }

    public void setReason(String reason) {
        this.reason = reason;
    }

    public String getReasondes() {
        return this.reasondes;
    }

    public void setReasondes(String reasondes) {
        this.reasondes = reasondes;
    }

    public Double getOldprice() {
        return this.oldprice;
    }

    public void setOldprice(Double oldprice) {
        this.oldprice = oldprice;
    }

    public Double getRevprice() {
        return this.revprice;
    }

    public void setRevprice(Double revprice) {
        this.revprice = revprice;
    }

    public String getModby() {
        return this.modby;
    }

    public void setModby(String modby) {
        this.modby = modby;
    }

    public String getModbyname() {
        return this.modbyname;
    }

    public void setModbyname(String modbyname) {
        this.modbyname = modbyname;
    }

    public LocalDateTime getModdate() {
        return this.moddate;
    }

    public void setModdate(LocalDateTime moddate) {
        this.moddate = moddate;
    }

    public String getRemarks() {
        return this.remarks;
    }

    public void setRemarks(String remarks) {
        this.remarks = remarks;
    }

    public String getPricecurr() {
        return this.pricecurr;
    }

    public void setPricecurr(String pricecurr) {
        this.pricecurr = pricecurr;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Or207pk0getKdspriceChgHistoryResponsePoutOrt215hist)) return false;
        final Or207pk0getKdspriceChgHistoryResponsePoutOrt215hist or207pk0getKdspriceChgHistoryResponsePoutOrt215hist = (Or207pk0getKdspriceChgHistoryResponsePoutOrt215hist) o;
        return Objects.equals(getOrdnum(), or207pk0getKdspriceChgHistoryResponsePoutOrt215hist.getOrdnum()) &&
                Objects.equals(getShpnum(), or207pk0getKdspriceChgHistoryResponsePoutOrt215hist.getShpnum()) &&
                Objects.equals(getSeqcod(), or207pk0getKdspriceChgHistoryResponsePoutOrt215hist.getSeqcod()) &&
                Objects.equals(getFieldname(), or207pk0getKdspriceChgHistoryResponsePoutOrt215hist.getFieldname()) &&
                Objects.equals(getSzeseq(), or207pk0getKdspriceChgHistoryResponsePoutOrt215hist.getSzeseq()) &&
                Objects.equals(getSeq(), or207pk0getKdspriceChgHistoryResponsePoutOrt215hist.getSeq()) &&
                Objects.equals(getWpckdes(), or207pk0getKdspriceChgHistoryResponsePoutOrt215hist.getWpckdes()) &&
                Objects.equals(getWszedes(), or207pk0getKdspriceChgHistoryResponsePoutOrt215hist.getWszedes()) &&
                Objects.equals(getReason(), or207pk0getKdspriceChgHistoryResponsePoutOrt215hist.getReason()) &&
                Objects.equals(getReasondes(), or207pk0getKdspriceChgHistoryResponsePoutOrt215hist.getReasondes()) &&
                Objects.equals(getOldprice(), or207pk0getKdspriceChgHistoryResponsePoutOrt215hist.getOldprice()) &&
                Objects.equals(getRevprice(), or207pk0getKdspriceChgHistoryResponsePoutOrt215hist.getRevprice()) &&
                Objects.equals(getModby(), or207pk0getKdspriceChgHistoryResponsePoutOrt215hist.getModby()) &&
                Objects.equals(getModbyname(), or207pk0getKdspriceChgHistoryResponsePoutOrt215hist.getModbyname()) &&
                Objects.equals(getModdate(), or207pk0getKdspriceChgHistoryResponsePoutOrt215hist.getModdate()) &&
                Objects.equals(getRemarks(), or207pk0getKdspriceChgHistoryResponsePoutOrt215hist.getRemarks()) &&
                Objects.equals(getPricecurr(), or207pk0getKdspriceChgHistoryResponsePoutOrt215hist.getPricecurr());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getOrdnum(),
                getShpnum(),
                getSeqcod(),
                getFieldname(),
                getSzeseq(),
                getSeq(),
                getWpckdes(),
                getWszedes(),
                getReason(),
                getReasondes(),
                getOldprice(),
                getRevprice(),
                getModby(),
                getModbyname(),
                getModdate(),
                getRemarks(),
                getPricecurr());
    }
}