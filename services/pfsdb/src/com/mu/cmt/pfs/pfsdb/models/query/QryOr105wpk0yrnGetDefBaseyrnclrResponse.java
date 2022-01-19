/*Copyright (c) 2016-2017 cmt.mu All Rights Reserved.
 This software is the confidential and proprietary information of cmt.mu You shall not disclose such Confidential Information and shall use it only in accordance
 with the terms of the source code license agreement you entered into with cmt.mu*/
package com.mu.cmt.pfs.pfsdb.models.query;

/*This is a Studio Managed File. DO NOT EDIT THIS FILE. Your changes may be reverted by Studio.*/


import java.io.Serializable;
import java.util.Objects;

import com.wavemaker.runtime.data.annotations.ColumnAlias;

public class QryOr105wpk0yrnGetDefBaseyrnclrResponse implements Serializable {


    @ColumnAlias("DEFAULTBASEYRNCLR")
    private String defaultbaseyrnclr;

    public String getDefaultbaseyrnclr() {
        return this.defaultbaseyrnclr;
    }

    public void setDefaultbaseyrnclr(String defaultbaseyrnclr) {
        this.defaultbaseyrnclr = defaultbaseyrnclr;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof QryOr105wpk0yrnGetDefBaseyrnclrResponse)) return false;
        final QryOr105wpk0yrnGetDefBaseyrnclrResponse qryOr105wpk0yrnGetDefBaseyrnclrResponse = (QryOr105wpk0yrnGetDefBaseyrnclrResponse) o;
        return Objects.equals(getDefaultbaseyrnclr(), qryOr105wpk0yrnGetDefBaseyrnclrResponse.getDefaultbaseyrnclr());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getDefaultbaseyrnclr());
    }
}