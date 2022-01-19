/*Copyright (c) 2016-2017 cmt.mu All Rights Reserved.
 This software is the confidential and proprietary information of cmt.mu You shall not disclose such Confidential Information and shall use it only in accordance
 with the terms of the source code license agreement you entered into with cmt.mu*/
package com.mu.cmt.pfs.pfsdb.models.procedure;

/*This is a Studio Managed File. DO NOT EDIT THIS FILE. Your changes may be reverted by Studio.*/


import java.io.Serializable;
import java.util.List;
import java.util.Objects;

import com.wavemaker.runtime.data.annotations.ColumnAlias;

public class ProcOr105pk0CpyfabgetShadeOptionLovResponsePoutListSahdeOption implements Serializable {


    @ColumnAlias("SHADEOPT")
    private String shadeopt;

    @ColumnAlias("SHADEDESC")
    private String shadedesc;

    public String getShadeopt() {
        return this.shadeopt;
    }

    public void setShadeopt(String shadeopt) {
        this.shadeopt = shadeopt;
    }

    public String getShadedesc() {
        return this.shadedesc;
    }

    public void setShadedesc(String shadedesc) {
        this.shadedesc = shadedesc;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof ProcOr105pk0CpyfabgetShadeOptionLovResponsePoutListSahdeOption)) return false;
        final ProcOr105pk0CpyfabgetShadeOptionLovResponsePoutListSahdeOption procOr105pk0cpyfabgetShadeOptionLovResponsePoutListSahdeOption = (ProcOr105pk0CpyfabgetShadeOptionLovResponsePoutListSahdeOption) o;
        return Objects.equals(getShadeopt(), procOr105pk0cpyfabgetShadeOptionLovResponsePoutListSahdeOption.getShadeopt()) &&
                Objects.equals(getShadedesc(), procOr105pk0cpyfabgetShadeOptionLovResponsePoutListSahdeOption.getShadedesc());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getShadeopt(),
                getShadedesc());
    }
}