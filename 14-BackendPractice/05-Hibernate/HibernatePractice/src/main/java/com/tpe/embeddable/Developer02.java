package com.tpe.embeddable;


import javax.persistence.*;

@Entity
@Table(name="t_developer02")
public class Developer02 {
    @Id
    private int id;

    @Column(name = "dev_name", length = 50, nullable = false)
    private String name;

    private String branch;

    @Column(unique = true)
    private String email;

    @Embedded
    private Education education;

    public Developer02() {
    }

    public Developer02(int id, String name, String branch, String email, Education education) {
        this.id = id;
        this.name = name;
        this.branch = branch;
        this.email = email;
        this.education = education;
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

    public Education getEducation() {
        return education;
    }

    public void setEducation(Education education) {
        this.education = education;
    }

    @Override
    public String toString() {
        return "Developer02{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", branch='" + branch + '\'' +
                ", email='" + email + '\'' +
                ", education=" + education +
                '}';
    }
}
