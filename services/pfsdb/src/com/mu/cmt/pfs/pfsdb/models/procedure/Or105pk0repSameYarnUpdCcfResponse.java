/*Copyright (c) 2016-2017 cmt.mu All Rights Reserved.
 This software is the confidential and proprietary information of cmt.mu You shall not disclose such Confidential Information and shall use it only in accordance
 with the terms of the source code license agreement you entered into with cmt.mu*/
package com.mu.cmt.pfs.pfsdb.models.procedure;

/*This is a Studio Managed File. DO NOT EDIT THIS FILE. Your changes may be reverted by Studio.*/


import java.io.Serializable;
import java.util.Objects;

import com.wavemaker.runtime.data.annotations.ColumnAlias;

public class Or105pk0repSameYarnUpdCcfResponse implements Serializable {


    @ColumnAlias("poutMsg")
    private String poutMsg;

    public String getPoutMsg() {
        return this.poutMsg;
    }

    public void setPoutMsg(String poutMsg) {
        this.poutMsg = poutMsg;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Or105pk0repSameYarnUpdCcfResponse)) return false;
        final Or105pk0repSameYarnUpdCcfResponse or105pk0repSameYarnUpdCcfResponse = (Or105pk0repSameYarnUpdCcfResponse) o;
        return Objects.equals(getPoutMsg(), or105pk0repSameYarnUpdCcfResponse.getPoutMsg());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getPoutMsg());
    }
}