/*Copyright (c) 2016-2017 cmt.mu All Rights Reserved.
 This software is the confidential and proprietary information of cmt.mu You shall not disclose such Confidential Information and shall use it only in accordance
 with the terms of the source code license agreement you entered into with cmt.mu*/
package com.mu.cmt.pfs.pfsdb.models.procedure;

/*This is a Studio Managed File. DO NOT EDIT THIS FILE. Your changes may be reverted by Studio.*/


import java.io.Serializable;
import java.util.List;
import java.util.Objects;

import com.wavemaker.runtime.data.annotations.ColumnAlias;

public class ProcOr105pk0CpyfabgetCpyFabResponse implements Serializable {


    @ColumnAlias("pOutFaboriencolor")
    private String poutFaboriencolor;

    @ColumnAlias("pOutMrkertypColor")
    private String poutMrkertypColor;

    @ColumnAlias("pOutListCpyFab")
    private List<ProcOr105pk0CpyfabgetCpyFabResponsePoutListCpyFab> poutListCpyFab;

    public String getPoutFaboriencolor() {
        return this.poutFaboriencolor;
    }

    public void setPoutFaboriencolor(String poutFaboriencolor) {
        this.poutFaboriencolor = poutFaboriencolor;
    }

    public String getPoutMrkertypColor() {
        return this.poutMrkertypColor;
    }

    public void setPoutMrkertypColor(String poutMrkertypColor) {
        this.poutMrkertypColor = poutMrkertypColor;
    }

    public List<ProcOr105pk0CpyfabgetCpyFabResponsePoutListCpyFab> getPoutListCpyFab() {
        return this.poutListCpyFab;
    }

    public void setPoutListCpyFab(List<ProcOr105pk0CpyfabgetCpyFabResponsePoutListCpyFab> poutListCpyFab) {
        this.poutListCpyFab = poutListCpyFab;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof ProcOr105pk0CpyfabgetCpyFabResponse)) return false;
        final ProcOr105pk0CpyfabgetCpyFabResponse procOr105pk0cpyfabgetCpyFabResponse = (ProcOr105pk0CpyfabgetCpyFabResponse) o;
        return Objects.equals(getPoutFaboriencolor(), procOr105pk0cpyfabgetCpyFabResponse.getPoutFaboriencolor()) &&
                Objects.equals(getPoutMrkertypColor(), procOr105pk0cpyfabgetCpyFabResponse.getPoutMrkertypColor()) &&
                Objects.equals(getPoutListCpyFab(), procOr105pk0cpyfabgetCpyFabResponse.getPoutListCpyFab());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getPoutFaboriencolor(),
                getPoutMrkertypColor(),
                getPoutListCpyFab());
    }
}