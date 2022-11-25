package com.example.dogsurfsecurity.service;

import com.example.dogsurfsecurity.domain.Role;
import com.example.dogsurfsecurity.domain.User;

import java.util.List;
// Defining Service

public interface UserService {
//    This 2 Methods will create user and Role in a DB
    User saveUser(User user);
    Role saveRole(Role role);
//    THis will not allow duplicate usernames
    void addRoleToUser(String username, String roleName);
//    Fetching user from DB
    User getUser(String username);
//    Return all users in DB
//    ### TO DO FOR WEBAPP ADMIN ONLY  LIST ALL THE USERS
    List<User>getUsers();
}
//This Service will be Injected in our controller