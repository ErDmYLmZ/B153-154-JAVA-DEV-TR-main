package com.tpe.onetoone;

import javax.persistence.*;

@Entity
@Table(name="t_developer03")
public class Developer03 {

    @Id
    private Long id;

    @Column(name = "dev_name", length = 50, nullable = false)
    private String name;

    private String branch;

    @Column(unique = true)
    private String email;

    //her dev e bir computer
    //hangi dev e hangi computer verildiğini tutmak istiyorum


    @OneToOne
    @JoinColumn(name="c_id") //sütuna isim vermezsek computer_id
    private Computer computer;

    public Developer03() {
    }

    public Developer03(Long id, String name, String branch, String email) {
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

    public Computer getComputer() {
        return computer;
    }

    public void setComputer(Computer computer) {
        this.computer = computer;
    }

    @Override
    public String toString() {
        return "Developer03{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", branch='" + branch + '\'' +
                ", email='" + email + '\'' +
                '}';
    }
}
