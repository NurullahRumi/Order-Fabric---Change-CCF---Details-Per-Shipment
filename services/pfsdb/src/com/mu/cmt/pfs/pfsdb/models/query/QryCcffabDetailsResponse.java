/*Copyright (c) 2016-2017 cmt.mu All Rights Reserved.
 This software is the confidential and proprietary information of cmt.mu You shall not disclose such Confidential Information and shall use it only in accordance
 with the terms of the source code license agreement you entered into with cmt.mu*/
package com.mu.cmt.pfs.pfsdb.models.query;

/*This is a Studio Managed File. DO NOT EDIT THIS FILE. Your changes may be reverted by Studio.*/


import java.io.Serializable;
import java.util.Objects;

import com.wavemaker.runtime.data.annotations.ColumnAlias;

public class QryCcffabDetailsResponse implements Serializable {


    @ColumnAlias("FABDET")
    private String fabdet;

    @ColumnAlias("FABFINISHDET")
    private String fabfinishdet;

    public String getFabdet() {
        return this.fabdet;
    }

    public void setFabdet(String fabdet) {
        this.fabdet = fabdet;
    }

    public String getFabfinishdet() {
        return this.fabfinishdet;
    }

    public void setFabfinishdet(String fabfinishdet) {
        this.fabfinishdet = fabfinishdet;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof QryCcffabDetailsResponse)) return false;
        final QryCcffabDetailsResponse qryCcffabDetailsResponse = (QryCcffabDetailsResponse) o;
        return Objects.equals(getFabdet(), qryCcffabDetailsResponse.getFabdet()) &&
                Objects.equals(getFabfinishdet(), qryCcffabDetailsResponse.getFabfinishdet());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getFabdet(),
                getFabfinishdet());
    }
}