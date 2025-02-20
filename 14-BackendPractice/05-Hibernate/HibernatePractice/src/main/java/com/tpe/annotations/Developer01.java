package com.tpe.annotations;

import javax.persistence.*;

@Entity  //databese de tabloya karşılık gelir
@Table(name = "t_developer01")
public class Developer01 {
    @Id
    private int id;

    @Column(name = "dev_name", length = 50, nullable = false)
    private String name;

   // @Transient
    private String branch;

    @Column(unique = true)
    private String email;

    public Developer01() {
    }

    public Developer01(int id, String name, String branch, String email) {
        this.id = id;
        this.name = name;
        this.branch = branch;
        this.email = email;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getBranch() {
        return branch;
    }

    public void setBranch(String branch) {
        this.branch = branch;
    }

    @Override
    public String toString() {
        return "Developer01{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", branch='" + branch + '\'' +
                ", email='" + email + '\'' +
                '}';
    }
}
