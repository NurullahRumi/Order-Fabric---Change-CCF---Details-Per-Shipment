/*Copyright (c) 2016-2017 cmt.mu All Rights Reserved.
 This software is the confidential and proprietary information of cmt.mu You shall not disclose such Confidential Information and shall use it only in accordance
 with the terms of the source code license agreement you entered into with cmt.mu*/
package com.mu.cmt.pfs.pfsdb.models.procedure;

/*This is a Studio Managed File. DO NOT EDIT THIS FILE. Your changes may be reverted by Studio.*/


import java.io.Serializable;
import java.time.LocalDateTime;
import java.util.Objects;

import com.wavemaker.runtime.data.annotations.ColumnAlias;

public class Or207pk0getRefreldatesResponse implements Serializable {


    @ColumnAlias("pOutRelref")
    private String poutRelref;

    @ColumnAlias("pOutRelrefdat")
    private LocalDateTime poutRelrefdat;

    @ColumnAlias("pOutRelprc")
    private String poutRelprc;

    @ColumnAlias("pOutRelprcdat")
    private LocalDateTime poutRelprcdat;

    public String getPoutRelref() {
        return this.poutRelref;
    }

    public void setPoutRelref(String poutRelref) {
        this.poutRelref = poutRelref;
    }

    public LocalDateTime getPoutRelrefdat() {
        return this.poutRelrefdat;
    }

    public void setPoutRelrefdat(LocalDateTime poutRelrefdat) {
        this.poutRelrefdat = poutRelrefdat;
    }

    public String getPoutRelprc() {
        return this.poutRelprc;
    }

    public void setPoutRelprc(String poutRelprc) {
        this.poutRelprc = poutRelprc;
    }

    public LocalDateTime getPoutRelprcdat() {
        return this.poutRelprcdat;
    }

    public void setPoutRelprcdat(LocalDateTime poutRelprcdat) {
        this.poutRelprcdat = poutRelprcdat;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Or207pk0getRefreldatesResponse)) return false;
        final Or207pk0getRefreldatesResponse or207pk0getRefreldatesResponse = (Or207pk0getRefreldatesResponse) o;
        return Objects.equals(getPoutRelref(), or207pk0getRefreldatesResponse.getPoutRelref()) &&
                Objects.equals(getPoutRelrefdat(), or207pk0getRefreldatesResponse.getPoutRelrefdat()) &&
                Objects.equals(getPoutRelprc(), or207pk0getRefreldatesResponse.getPoutRelprc()) &&
                Objects.equals(getPoutRelprcdat(), or207pk0getRefreldatesResponse.getPoutRelprcdat());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getPoutRelref(),
                getPoutRelrefdat(),
                getPoutRelprc(),
                getPoutRelprcdat());
    }
}