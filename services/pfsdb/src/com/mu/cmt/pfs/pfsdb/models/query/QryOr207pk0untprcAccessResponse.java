/*Copyright (c) 2016-2017 cmt.mu All Rights Reserved.
 This software is the confidential and proprietary information of cmt.mu You shall not disclose such Confidential Information and shall use it only in accordance
 with the terms of the source code license agreement you entered into with cmt.mu*/
package com.mu.cmt.pfs.pfsdb.models.query;

/*This is a Studio Managed File. DO NOT EDIT THIS FILE. Your changes may be reverted by Studio.*/


import java.io.Serializable;
import java.util.Objects;

import com.wavemaker.runtime.data.annotations.ColumnAlias;

public class QryOr207pk0untprcAccessResponse implements Serializable {


    @ColumnAlias("UPDUNTPRCACS")
    private String upduntprcacs;

    public String getUpduntprcacs() {
        return this.upduntprcacs;
    }

    public void setUpduntprcacs(String upduntprcacs) {
        this.upduntprcacs = upduntprcacs;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof QryOr207pk0untprcAccessResponse)) return false;
        final QryOr207pk0untprcAccessResponse qryOr207pk0untprcAccessResponse = (QryOr207pk0untprcAccessResponse) o;
        return Objects.equals(getUpduntprcacs(), qryOr207pk0untprcAccessResponse.getUpduntprcacs());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getUpduntprcacs());
    }
}