package com.tpe.onetomany_bi;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
public class Company3 {
    @Id
    private Long id;

    @Column(unique = true)
    private String companyName;

    //company de çalışan dev leri görmek istiyorum


   // @OneToMany(mappedBy = "company", cascade = CascadeType.ALL)
    @OneToMany(mappedBy = "company", orphanRemoval = true)
    private Set<Developer06> dev=new HashSet<>();

    public Company3() {
    }

    public Company3(Long id, String companyName) {
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

    public Set<Developer06> getDev() {
        return dev;
    }

    public void setDev(Set<Developer06> dev) {
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
