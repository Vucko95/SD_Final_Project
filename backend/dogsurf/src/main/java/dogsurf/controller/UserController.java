package dogsurf.controller;


import dogsurf.dto.CreateUserRequest;
import dogsurf.dto.UpdateUserRequest;
import dogsurf.dto.UserResponse;
import dogsurf.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/v1/users")
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;

    @GetMapping
    public List<UserResponse> getAllUsers(){ return userService.getAllUsers();
    }

    @GetMapping("{id}")
    public UserResponse getUserById(@PathVariable Long id) {
        return userService.getUserById(id);
    }

    @PostMapping
    public UserResponse createUser(@RequestBody CreateUserRequest user){
        return userService.createNewUser(user);
    }

    @PutMapping("{id}")
    public UserResponse updateUser(@PathVariable Long id, @RequestBody UpdateUserRequest user) {
        return userService.updateUser(id, user);
    }






}
