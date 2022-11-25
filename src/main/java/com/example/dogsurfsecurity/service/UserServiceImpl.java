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
        log.info("Saving an User  {} ", user.getName());
        return userRepo.save(user);
    }

    @Override
    public Role saveRole(Role role) {
        log.info("Saving an Role");
        return roleRepo.save(role);
    }

    @Override
    public void addRoleToUser(String username, String roleName) {
        log.info("Adding a Role {} to user {}" , roleName, username);
        User user = userRepo.findByUsername(username);
        Role role = roleRepo.findByName(roleName);
//        ADDING ROLE TO THE USER and saving in DB
        user.getRoles().add(role);

    }

    @Override
    public User getUser(String username) {
        log.info("Getting user  {}" , username);
        return userRepo.findByUsername(username);
    }

    @Override
    public List<User> getUsers() {
        log.info("All users"  );
        return userRepo.findAll();
    }
}
