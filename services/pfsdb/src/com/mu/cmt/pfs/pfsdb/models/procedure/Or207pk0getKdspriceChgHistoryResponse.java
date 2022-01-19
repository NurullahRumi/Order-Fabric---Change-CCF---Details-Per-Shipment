/*Copyright (c) 2016-2017 cmt.mu All Rights Reserved.
 This software is the confidential and proprietary information of cmt.mu You shall not disclose such Confidential Information and shall use it only in accordance
 with the terms of the source code license agreement you entered into with cmt.mu*/
package com.mu.cmt.pfs.pfsdb.models.procedure;

/*This is a Studio Managed File. DO NOT EDIT THIS FILE. Your changes may be reverted by Studio.*/


import java.io.Serializable;
import java.util.List;
import java.util.Objects;

import com.wavemaker.runtime.data.annotations.ColumnAlias;

public class Or207pk0getKdspriceChgHistoryResponse implements Serializable {


    @ColumnAlias("pOutOrt215Hist")
    private List<Or207pk0getKdspriceChgHistoryResponsePoutOrt215hist> poutOrt215hist;

    public List<Or207pk0getKdspriceChgHistoryResponsePoutOrt215hist> getPoutOrt215hist() {
        return this.poutOrt215hist;
    }

    public void setPoutOrt215hist(List<Or207pk0getKdspriceChgHistoryResponsePoutOrt215hist> poutOrt215hist) {
        this.poutOrt215hist = poutOrt215hist;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Or207pk0getKdspriceChgHistoryResponse)) return false;
        final Or207pk0getKdspriceChgHistoryResponse or207pk0getKdspriceChgHistoryResponse = (Or207pk0getKdspriceChgHistoryResponse) o;
        return Objects.equals(getPoutOrt215hist(), or207pk0getKdspriceChgHistoryResponse.getPoutOrt215hist());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getPoutOrt215hist());
    }
}