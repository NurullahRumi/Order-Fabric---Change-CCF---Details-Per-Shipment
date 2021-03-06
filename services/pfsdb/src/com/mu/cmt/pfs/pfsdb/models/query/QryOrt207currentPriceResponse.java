/*Copyright (c) 2016-2017 cmt.mu All Rights Reserved.
 This software is the confidential and proprietary information of cmt.mu You shall not disclose such Confidential Information and shall use it only in accordance
 with the terms of the source code license agreement you entered into with cmt.mu*/
package com.mu.cmt.pfs.pfsdb.models.query;

/*This is a Studio Managed File. DO NOT EDIT THIS FILE. Your changes may be reverted by Studio.*/


import java.io.Serializable;
import java.util.Objects;

import com.wavemaker.runtime.data.annotations.ColumnAlias;

public class QryOrt207currentPriceResponse implements Serializable {


    @ColumnAlias("ORDNUM")
    private String ordnum;

    @ColumnAlias("PRICECAT")
    private String pricecat;

    @ColumnAlias("SEQCOD")
    private String seqcod;

    @ColumnAlias("CLIONUM")
    private String clionum;

    @ColumnAlias("SZESEQ")
    private Byte szeseq;

    @ColumnAlias("UNTPRC_AIR")
    private Double untprcAir;

    @ColumnAlias("UNTPRC_SEA")
    private Double untprcSea;

    @ColumnAlias("DISCOUNTPRC_AIR")
    private Double discountprcAir;

    @ColumnAlias("DISCOUNTPRC_SEA")
    private Double discountprcSea;

    @ColumnAlias("DISCOUNTCODE")
    private String discountcode;

    @ColumnAlias("FLIPRC_AIR")
    private Double fliprcAir;

    @ColumnAlias("FLIPRC_SEA")
    private Double fliprcSea;

    @ColumnAlias("RETPRC")
    private Double retprc;

    @ColumnAlias("RETPRCB")
    private Double retprcb;

    @ColumnAlias("RETPRCC")
    private Double retprcc;

    @ColumnAlias("RETPRCD")
    private Double retprcd;

    @ColumnAlias("SZEDES")
    private String szedes;

    @ColumnAlias("PCKDES")
    private String pckdes;

    public String getOrdnum() {
        return this.ordnum;
    }

    public void setOrdnum(String ordnum) {
        this.ordnum = ordnum;
    }

    public String getPricecat() {
        return this.pricecat;
    }

    public void setPricecat(String pricecat) {
        this.pricecat = pricecat;
    }

    public String getSeqcod() {
        return this.seqcod;
    }

    public void setSeqcod(String seqcod) {
        this.seqcod = seqcod;
    }

    public String getClionum() {
        return this.clionum;
    }

    public void setClionum(String clionum) {
        this.clionum = clionum;
    }

    public Byte getSzeseq() {
        return this.szeseq;
    }

    public void setSzeseq(Byte szeseq) {
        this.szeseq = szeseq;
    }

    public Double getUntprcAir() {
        return this.untprcAir;
    }

    public void setUntprcAir(Double untprcAir) {
        this.untprcAir = untprcAir;
    }

    public Double getUntprcSea() {
        return this.untprcSea;
    }

    public void setUntprcSea(Double untprcSea) {
        this.untprcSea = untprcSea;
    }

    public Double getDiscountprcAir() {
        return this.discountprcAir;
    }

    public void setDiscountprcAir(Double discountprcAir) {
        this.discountprcAir = discountprcAir;
    }

    public Double getDiscountprcSea() {
        return this.discountprcSea;
    }

    public void setDiscountprcSea(Double discountprcSea) {
        this.discountprcSea = discountprcSea;
    }

    public String getDiscountcode() {
        return this.discountcode;
    }

    public void setDiscountcode(String discountcode) {
        this.discountcode = discountcode;
    }

    public Double getFliprcAir() {
        return this.fliprcAir;
    }

    public void setFliprcAir(Double fliprcAir) {
        this.fliprcAir = fliprcAir;
    }

    public Double getFliprcSea() {
        return this.fliprcSea;
    }

    public void setFliprcSea(Double fliprcSea) {
        this.fliprcSea = fliprcSea;
    }

    public Double getRetprc() {
        return this.retprc;
    }

    public void setRetprc(Double retprc) {
        this.retprc = retprc;
    }

    public Double getRetprcb() {
        return this.retprcb;
    }

    public void setRetprcb(Double retprcb) {
        this.retprcb = retprcb;
    }

    public Double getRetprcc() {
        return this.retprcc;
    }

    public void setRetprcc(Double retprcc) {
        this.retprcc = retprcc;
    }

    public Double getRetprcd() {
        return this.retprcd;
    }

    public void setRetprcd(Double retprcd) {
        this.retprcd = retprcd;
    }

    public String getSzedes() {
        return this.szedes;
    }

    public void setSzedes(String szedes) {
        this.szedes = szedes;
    }

    public String getPckdes() {
        return this.pckdes;
    }

    public void setPckdes(String pckdes) {
        this.pckdes = pckdes;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof QryOrt207currentPriceResponse)) return false;
        final QryOrt207currentPriceResponse qryOrt207currentPriceResponse = (QryOrt207currentPriceResponse) o;
        return Objects.equals(getOrdnum(), qryOrt207currentPriceResponse.getOrdnum()) &&
                Objects.equals(getPricecat(), qryOrt207currentPriceResponse.getPricecat()) &&
                Objects.equals(getSeqcod(), qryOrt207currentPriceResponse.getSeqcod()) &&
                Objects.equals(getClionum(), qryOrt207currentPriceResponse.getClionum()) &&
                Objects.equals(getSzeseq(), qryOrt207currentPriceResponse.getSzeseq()) &&
                Objects.equals(getUntprcAir(), qryOrt207currentPriceResponse.getUntprcAir()) &&
                Objects.equals(getUntprcSea(), qryOrt207currentPriceResponse.getUntprcSea()) &&
                Objects.equals(getDiscountprcAir(), qryOrt207currentPriceResponse.getDiscountprcAir()) &&
                Objects.equals(getDiscountprcSea(), qryOrt207currentPriceResponse.getDiscountprcSea()) &&
                Objects.equals(getDiscountcode(), qryOrt207currentPriceResponse.getDiscountcode()) &&
                Objects.equals(getFliprcAir(), qryOrt207currentPriceResponse.getFliprcAir()) &&
                Objects.equals(getFliprcSea(), qryOrt207currentPriceResponse.getFliprcSea()) &&
                Objects.equals(getRetprc(), qryOrt207currentPriceResponse.getRetprc()) &&
                Objects.equals(getRetprcb(), qryOrt207currentPriceResponse.getRetprcb()) &&
                Objects.equals(getRetprcc(), qryOrt207currentPriceResponse.getRetprcc()) &&
                Objects.equals(getRetprcd(), qryOrt207currentPriceResponse.getRetprcd()) &&
                Objects.equals(getSzedes(), qryOrt207currentPriceResponse.getSzedes()) &&
                Objects.equals(getPckdes(), qryOrt207currentPriceResponse.getPckdes());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getOrdnum(),
                getPricecat(),
                getSeqcod(),
                getClionum(),
                getSzeseq(),
                getUntprcAir(),
                getUntprcSea(),
                getDiscountprcAir(),
                getDiscountprcSea(),
                getDiscountcode(),
                getFliprcAir(),
                getFliprcSea(),
                getRetprc(),
                getRetprcb(),
                getRetprcc(),
                getRetprcd(),
                getSzedes(),
                getPckdes());
    }
}