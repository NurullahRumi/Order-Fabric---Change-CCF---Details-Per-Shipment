/*Copyright (c) 2016-2017 cmt.mu All Rights Reserved.
 This software is the confidential and proprietary information of cmt.mu You shall not disclose such Confidential Information and shall use it only in accordance
 with the terms of the source code license agreement you entered into with cmt.mu*/
package com.mu.cmt.pfs.pfsdb.models.procedure;

/*This is a Studio Managed File. DO NOT EDIT THIS FILE. Your changes may be reverted by Studio.*/


import java.io.Serializable;
import java.util.List;
import java.util.Objects;

import com.wavemaker.runtime.data.annotations.ColumnAlias;

public class Or105wpk0qryOrt125Response implements Serializable {


    @ColumnAlias("poutYrnlist")
    private List<Or105wpk0qryOrt125ResponsePoutYrnlist> poutYrnlist;

    public List<Or105wpk0qryOrt125ResponsePoutYrnlist> getPoutYrnlist() {
        return this.poutYrnlist;
    }

    public void setPoutYrnlist(List<Or105wpk0qryOrt125ResponsePoutYrnlist> poutYrnlist) {
        this.poutYrnlist = poutYrnlist;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Or105wpk0qryOrt125Response)) return false;
        final Or105wpk0qryOrt125Response or105wpk0qryOrt125response = (Or105wpk0qryOrt125Response) o;
        return Objects.equals(getPoutYrnlist(), or105wpk0qryOrt125response.getPoutYrnlist());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getPoutYrnlist());
    }
}