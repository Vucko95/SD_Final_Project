package dogsurf.service;

import dogsurf.dto.CreateUserRequest;
import dogsurf.dto.RegisterRequest;
import dogsurf.mapper.UserMapper;
import dogsurf.model.User;
import dogsurf.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import dogsurf.dto.JwtResponse;
import dogsurf.dto.LoginRequest;
import dogsurf.security.JwtProvider;
import dogsurf.security.UserPrincipal;

@Service
@RequiredArgsConstructor
public class AuthenticationServiceImpl implements AuthenticationService {

    private final AuthenticationManager authenticationManager;
    private final JwtProvider jwtProvider;
    private final UserRepository userRepository;
    private final UserMapper userMapper;
    private final PasswordEncoder passwordEncoder;
    @Override
    public JwtResponse signIn(LoginRequest loginRequest) {
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(loginRequest.getUsername(), loginRequest.getPassword())
        );

        UserPrincipal userPrincipal = (UserPrincipal) authentication.getPrincipal();
        String jwt = jwtProvider.generateToken(userPrincipal);

        return JwtResponse.builder()
                .accessToken(jwt)
                .build();
    }


    @Override
    public JwtResponse register(CreateUserRequest userRequest) {
        User user = userMapper.toEntity(userRequest);
        String rawPassword = userRequest.getPassword();
        String encodedPassword = passwordEncoder.encode(rawPassword);
        user.setPassword(encodedPassword);
        User saved = userRepository.save(user);

        LoginRequest loginRequest = LoginRequest.builder()
                .username(userRequest.getUsername())
                .password(userRequest.getPassword())
                .build();
        return this.signIn(loginRequest);
    }
}