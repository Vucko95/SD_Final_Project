package com.example.dogsurfsecurity.domain;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.ManyToAny;

import java.util.ArrayList;
import java.util.Collection;
@Entity @Data @NoArgsConstructor @AllArgsConstructor
//Creating Getters/Setters/Constructor using Lombok
public class User {
    @Id @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String name;
    private String username;
    private String password;
    @ManyToAny(fetch = FetchType.EAGER)
//    At the same time will load users and roles
    private Collection<Role> roles = new ArrayList<>();
}
