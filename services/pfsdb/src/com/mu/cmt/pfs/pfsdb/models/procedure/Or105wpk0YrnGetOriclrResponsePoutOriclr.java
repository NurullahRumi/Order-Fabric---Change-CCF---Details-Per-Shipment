/*Copyright (c) 2016-2017 cmt.mu All Rights Reserved.
 This software is the confidential and proprietary information of cmt.mu You shall not disclose such Confidential Information and shall use it only in accordance
 with the terms of the source code license agreement you entered into with cmt.mu*/
package com.mu.cmt.pfs.pfsdb.models.procedure;

/*This is a Studio Managed File. DO NOT EDIT THIS FILE. Your changes may be reverted by Studio.*/


import java.io.Serializable;
import java.util.List;
import java.util.Objects;

import com.wavemaker.runtime.data.annotations.ColumnAlias;

public class Or105wpk0YrnGetOriclrResponsePoutOriclr implements Serializable {


    @ColumnAlias("ITEMCOD")
    private String itemcod;

    @ColumnAlias("ITEMDES")
    private String itemdes;

    public String getItemcod() {
        return this.itemcod;
    }

    public void setItemcod(String itemcod) {
        this.itemcod = itemcod;
    }

    public String getItemdes() {
        return this.itemdes;
    }

    public void setItemdes(String itemdes) {
        this.itemdes = itemdes;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Or105wpk0YrnGetOriclrResponsePoutOriclr)) return false;
        final Or105wpk0YrnGetOriclrResponsePoutOriclr or105wpk0yrnGetOriclrResponsePoutOriclr = (Or105wpk0YrnGetOriclrResponsePoutOriclr) o;
        return Objects.equals(getItemcod(), or105wpk0yrnGetOriclrResponsePoutOriclr.getItemcod()) &&
                Objects.equals(getItemdes(), or105wpk0yrnGetOriclrResponsePoutOriclr.getItemdes());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getItemcod(),
                getItemdes());
    }
}