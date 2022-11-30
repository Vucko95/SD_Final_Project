package dogsurf.service;

import dogsurf.dto.CreateUserRequest;
import dogsurf.dto.JwtResponse;
import dogsurf.dto.LoginRequest;

public interface AuthenticationService {
    JwtResponse signIn(LoginRequest loginRequest);
    JwtResponse register(CreateUserRequest userRequest);
}
