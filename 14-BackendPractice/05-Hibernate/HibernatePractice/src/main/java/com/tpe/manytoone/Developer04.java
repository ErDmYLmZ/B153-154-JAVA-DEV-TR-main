package com.tpe.manytoone;

import com.tpe.onetoone.Computer;

import javax.persistence.*;

@Entity
@Table(name = "t_developer04")
public class Developer04 {

    @Id
    private Long id;

    @Column(name = "dev_name", length = 50, nullable = false)
    private String name;

    private String branch;

    @Column(unique = true)
    private String email;

    //developerların çalıştığı company isimlerini tutmak istiyorum


    //developerın çalıştığı company i kaydetmek istiyorum
    //bir company de birden fazla developer çalışabilir
    //bir developer bir company de çalışır

    @ManyToOne
    private Company company;

    public Developer04() {
    }

    public Developer04(Long id, String name, String branch, String email, Company company) {
        this.id = id;
        this.name = name;
        this.branch = branch;
        this.email = email;
        this.company = company;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getBranch() {
        return branch;
    }

    public void setBranch(String branch) {
        this.branch = branch;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Company getCompany() {
        return company;
    }

    public void setCompany(Company company) {
        this.company = company;
    }

    @Override
    public String toString() {
        return "Developer06{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", branch='" + branch + '\'' +
                ", email='" + email + '\'' +
                ", company=" + company +
                '}';
    }
}
