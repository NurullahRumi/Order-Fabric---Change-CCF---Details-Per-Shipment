/*Copyright (c) 2016-2017 cmt.mu All Rights Reserved.
 This software is the confidential and proprietary information of cmt.mu You shall not disclose such Confidential Information and shall use it only in accordance
 with the terms of the source code license agreement you entered into with cmt.mu*/
package com.mu.cmt.pfs.pfsdb.models.procedure;

/*This is a Studio Managed File. DO NOT EDIT THIS FILE. Your changes may be reverted by Studio.*/


import java.io.Serializable;
import java.util.List;
import java.util.Objects;

import com.wavemaker.runtime.data.annotations.ColumnAlias;

public class ProcOr105pk0CpyfabgetFabSeqLovResponse implements Serializable {


    @ColumnAlias("pOutListCpyFabLOV")
    private List<ProcOr105pk0CpyfabgetFabSeqLovResponsePoutListCpyFabLov> poutListCpyFabLov;

    public List<ProcOr105pk0CpyfabgetFabSeqLovResponsePoutListCpyFabLov> getPoutListCpyFabLov() {
        return this.poutListCpyFabLov;
    }

    public void setPoutListCpyFabLov(List<ProcOr105pk0CpyfabgetFabSeqLovResponsePoutListCpyFabLov> poutListCpyFabLov) {
        this.poutListCpyFabLov = poutListCpyFabLov;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof ProcOr105pk0CpyfabgetFabSeqLovResponse)) return false;
        final ProcOr105pk0CpyfabgetFabSeqLovResponse procOr105pk0cpyfabgetFabSeqLovResponse = (ProcOr105pk0CpyfabgetFabSeqLovResponse) o;
        return Objects.equals(getPoutListCpyFabLov(), procOr105pk0cpyfabgetFabSeqLovResponse.getPoutListCpyFabLov());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getPoutListCpyFabLov());
    }
}