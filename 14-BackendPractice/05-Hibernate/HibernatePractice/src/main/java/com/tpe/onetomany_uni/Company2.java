package com.tpe.onetomany_uni;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
public class Company2 {
    @Id
    private Long id;

    @Column(unique = true)
    private String companyName;

    //company de çalışan dev leri görmek istiyorum


    @OneToMany
    @JoinColumn(name="company_id")  //dev table ında bir fk oluşturur
    //Joincolumn kullanmasaydık join table üretecekti
    private Set<Developer05> dev=new HashSet<>();

    public Company2() {
    }

    public Company2(Long id, String companyName) {
        this.id = id;
        this.companyName = companyName;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCompanyName() {
        return companyName;
    }

    public void setCompanyName(String companyName) {
        this.companyName = companyName;
    }

    public Set<Developer05> getDev() {
        return dev;
    }

    public void setDev(Set<Developer05> dev) {
        this.dev = dev;
    }

    @Override
    public String toString() {
        return "Company3{" +
                "id=" + id +
                ", companyName='" + companyName + '\'' +
                '}';
    }
}
