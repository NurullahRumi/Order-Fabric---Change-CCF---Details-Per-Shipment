/*Copyright (c) 2016-2017 cmt.mu All Rights Reserved.
 This software is the confidential and proprietary information of cmt.mu You shall not disclose such Confidential Information and shall use it only in accordance
 with the terms of the source code license agreement you entered into with cmt.mu*/
package com.mu.cmt.pfs.pfsdb.models.query;

/*This is a Studio Managed File. DO NOT EDIT THIS FILE. Your changes may be reverted by Studio.*/


import java.io.Serializable;
import java.math.BigDecimal;
import java.util.Objects;

import com.wavemaker.runtime.data.annotations.ColumnAlias;

public class QryOrt209currentPriceResponse implements Serializable {


    @ColumnAlias("ORDNUM")
    private String ordnum;

    @ColumnAlias("SHPNUM")
    private String shpnum;

    @ColumnAlias("SEQCOD")
    private String seqcod;

    @ColumnAlias("SZESEQ")
    private Byte szeseq;

    @ColumnAlias("UNTPRC")
    private Double untprc;

    @ColumnAlias("DISCOUNTPRC")
    private Double discountprc;

    @ColumnAlias("DISCOUNTCODE")
    private String discountcode;

    @ColumnAlias("FLIPRC")
    private Double fliprc;

    @ColumnAlias("RETPRC")
    private Double retprc;

    @ColumnAlias("RETPRCB")
    private Double retprcb;

    @ColumnAlias("RETPRCC")
    private Double retprcc;

    @ColumnAlias("RETPRCD")
    private Double retprcd;

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

    @ColumnAlias("CCYRAT")
    private BigDecimal ccyrat;

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

    public Byte getSzeseq() {
        return this.szeseq;
    }

    public void setSzeseq(Byte szeseq) {
        this.szeseq = szeseq;
    }

    public Double getUntprc() {
        return this.untprc;
    }

    public void setUntprc(Double untprc) {
        this.untprc = untprc;
    }

    public Double getDiscountprc() {
        return this.discountprc;
    }

    public void setDiscountprc(Double discountprc) {
        this.discountprc = discountprc;
    }

    public String getDiscountcode() {
        return this.discountcode;
    }

    public void setDiscountcode(String discountcode) {
        this.discountcode = discountcode;
    }

    public Double getFliprc() {
        return this.fliprc;
    }

    public void setFliprc(Double fliprc) {
        this.fliprc = fliprc;
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

    public BigDecimal getCcyrat() {
        return this.ccyrat;
    }

    public void setCcyrat(BigDecimal ccyrat) {
        this.ccyrat = ccyrat;
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
        if (!(o instanceof QryOrt209currentPriceResponse)) return false;
        final QryOrt209currentPriceResponse qryOrt209currentPriceResponse = (QryOrt209currentPriceResponse) o;
        return Objects.equals(getOrdnum(), qryOrt209currentPriceResponse.getOrdnum()) &&
                Objects.equals(getShpnum(), qryOrt209currentPriceResponse.getShpnum()) &&
                Objects.equals(getSeqcod(), qryOrt209currentPriceResponse.getSeqcod()) &&
                Objects.equals(getSzeseq(), qryOrt209currentPriceResponse.getSzeseq()) &&
                Objects.equals(getUntprc(), qryOrt209currentPriceResponse.getUntprc()) &&
                Objects.equals(getDiscountprc(), qryOrt209currentPriceResponse.getDiscountprc()) &&
                Objects.equals(getDiscountcode(), qryOrt209currentPriceResponse.getDiscountcode()) &&
                Objects.equals(getFliprc(), qryOrt209currentPriceResponse.getFliprc()) &&
                Objects.equals(getRetprc(), qryOrt209currentPriceResponse.getRetprc()) &&
                Objects.equals(getRetprcb(), qryOrt209currentPriceResponse.getRetprcb()) &&
                Objects.equals(getRetprcc(), qryOrt209currentPriceResponse.getRetprcc()) &&
                Objects.equals(getRetprcd(), qryOrt209currentPriceResponse.getRetprcd()) &&
                Objects.equals(getRef(), qryOrt209currentPriceResponse.getRef()) &&
                Objects.equals(getRef2(), qryOrt209currentPriceResponse.getRef2()) &&
                Objects.equals(getRef3(), qryOrt209currentPriceResponse.getRef3()) &&
                Objects.equals(getRef4(), qryOrt209currentPriceResponse.getRef4()) &&
                Objects.equals(getRef5(), qryOrt209currentPriceResponse.getRef5()) &&
                Objects.equals(getRef6(), qryOrt209currentPriceResponse.getRef6()) &&
                Objects.equals(getRef7(), qryOrt209currentPriceResponse.getRef7()) &&
                Objects.equals(getRef8(), qryOrt209currentPriceResponse.getRef8()) &&
                Objects.equals(getCcyrat(), qryOrt209currentPriceResponse.getCcyrat()) &&
                Objects.equals(getSzedes(), qryOrt209currentPriceResponse.getSzedes()) &&
                Objects.equals(getPckdes(), qryOrt209currentPriceResponse.getPckdes());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getOrdnum(),
                getShpnum(),
                getSeqcod(),
                getSzeseq(),
                getUntprc(),
                getDiscountprc(),
                getDiscountcode(),
                getFliprc(),
                getRetprc(),
                getRetprcb(),
                getRetprcc(),
                getRetprcd(),
                getRef(),
                getRef2(),
                getRef3(),
                getRef4(),
                getRef5(),
                getRef6(),
                getRef7(),
                getRef8(),
                getCcyrat(),
                getSzedes(),
                getPckdes());
    }
}