/*Copyright (c) 2016-2017 cmt.mu All Rights Reserved.
 This software is the confidential and proprietary information of cmt.mu You shall not disclose such Confidential Information and shall use it only in accordance
 with the terms of the source code license agreement you entered into with cmt.mu*/
package com.mu.cmt.pfs.pfsdb.models.procedure;

/*This is a Studio Managed File. DO NOT EDIT THIS FILE. Your changes may be reverted by Studio.*/


import java.io.Serializable;
import java.util.List;
import java.util.Objects;

import com.wavemaker.runtime.data.annotations.ColumnAlias;

public class Or105wpk0yrnGetYrnsubqltyBResponse implements Serializable {


    @ColumnAlias("poutYrnsubqltyb")
    private List<Or105wpk0yrnGetYrnsubqltyBResponsePoutYrnsubqltyb> poutYrnsubqltyb;

    public List<Or105wpk0yrnGetYrnsubqltyBResponsePoutYrnsubqltyb> getPoutYrnsubqltyb() {
        return this.poutYrnsubqltyb;
    }

    public void setPoutYrnsubqltyb(List<Or105wpk0yrnGetYrnsubqltyBResponsePoutYrnsubqltyb> poutYrnsubqltyb) {
        this.poutYrnsubqltyb = poutYrnsubqltyb;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Or105wpk0yrnGetYrnsubqltyBResponse)) return false;
        final Or105wpk0yrnGetYrnsubqltyBResponse or105wpk0yrnGetYrnsubqltyBresponse = (Or105wpk0yrnGetYrnsubqltyBResponse) o;
        return Objects.equals(getPoutYrnsubqltyb(), or105wpk0yrnGetYrnsubqltyBresponse.getPoutYrnsubqltyb());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getPoutYrnsubqltyb());
    }
}