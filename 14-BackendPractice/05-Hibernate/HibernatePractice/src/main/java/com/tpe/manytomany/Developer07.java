package com.tpe.manytomany;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "t_developer07")
public class Developer07 {

    @Id
    private Long id;

    @Column(length = 50, nullable = false)
    private String name;

    private String branch;

    @Column(unique = true)
    private String email;

    @ManyToMany(mappedBy = "developers")
    private Set<Project> projects=new HashSet<>();


    public Developer07() {
    }

    public Developer07(Long id, String name, String branch, String email) {
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

    public Set<Project> getProjects() {
        return projects;
    }

    public void setProjects(Set<Project> projects) {
        this.projects = projects;
    }

    @Override
    public String toString() {
        return "Developer07{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", branch='" + branch + '\'' +
                ", email='" + email + '\'' +
                '}';
    }
}
