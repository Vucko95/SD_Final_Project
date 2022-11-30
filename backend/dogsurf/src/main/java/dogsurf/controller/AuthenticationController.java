package dogsurf.controller;


import dogsurf.dto.CreateUserRequest;
import dogsurf.dto.JwtResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import dogsurf.dto.LoginRequest;
import dogsurf.service.AuthenticationService;

import javax.validation.Valid;


@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class AuthenticationController {

    private final AuthenticationService authenticationService;

    @PostMapping("login")
    public ResponseEntity<?> login(@Valid @RequestBody LoginRequest user) {
        return new ResponseEntity<>(authenticationService.signIn(user), HttpStatus.OK);
    }

    @PostMapping("register")
    public JwtResponse register(@Valid @RequestBody CreateUserRequest user) {
        return authenticationService.register(user);
    }

}
