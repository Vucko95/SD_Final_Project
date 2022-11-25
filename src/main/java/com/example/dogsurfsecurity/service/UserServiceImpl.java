package com.example.dogsurfsecurity.service;

import com.example.dogsurfsecurity.domain.Role;
import com.example.dogsurfsecurity.domain.User;
import com.example.dogsurfsecurity.repo.RoleRepo;
import com.example.dogsurfsecurity.repo.UserRepo;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

//Implementing Service
@Service @RequiredArgsConstructor @Transactional @Slf4j
//@Slf4j Logging
public class UserServiceImpl implements UserService {
//    Repositories
    private final UserRepo userRepo;
    private final RoleRepo roleRepo;
//Lombok will create constructor and pass all the arguments with @RequiredArgsConstructor

    @Override
    public User saveUser(User user) {
        return null;
    }

    @Override
    public Role saveRole(Role role) {
        return null;
    }

    @Override
    public void addRoleToUser(String username, String roleName) {

    }

    @Override
    public User getUser(String username) {
        return null;
    }

    @Override
    public List<User> getUsers() {
        return null;
    }
}
