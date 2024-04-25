package com.tpe.onetomany_bi;

import javax.persistence.*;

@Entity
@Table(name = "t_developer06")
public class Developer06 {

    @Id
    private Long id;

    @Column(length = 50, nullable = false)
    private String name;

    private String branch;

    @Column(unique = true)
    private String email;

    //dev lerden company bilgisine ulaşmak istiyorum
    //many developer one company de çalışır
    @ManyToOne
    @JoinColumn(name="c_id")
    private Company3 company;


    public Developer06() {
    }

    public Developer06(Long id, String name, String branch, String email) {
        this.id = id;
        this.name = name;
        this.branch = branch;
        this.email = email;

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

    public Company3 getCompany() {
        return company;
    }

    public void setCompany(Company3 company) {
        this.company = company;
    }

    @Override
    public String toString() {
        return "Developer06{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", branch='" + branch + '\'' +
                ", email='" + email + '\'' +
                '}';
    }
}
