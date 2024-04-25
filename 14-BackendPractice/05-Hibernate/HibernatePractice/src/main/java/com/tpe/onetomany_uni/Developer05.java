package com.tpe.onetomany_uni;

import javax.persistence.*;

@Entity
@Table(name = "t_developer05")
public class Developer05 {

    @Id
    private Long id;

    @Column(length = 50, nullable = false)
    private String name;

    private String branch;

    @Column(unique = true)
    private String email;


    public Developer05() {
    }

    public Developer05(Long id, String name, String branch, String email) {
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
