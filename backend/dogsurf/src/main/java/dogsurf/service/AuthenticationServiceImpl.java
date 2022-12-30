package dogsurf.service;

import dogsurf.dto.CreateUserRequest;
import dogsurf.dto.JwtResponse;
import dogsurf.dto.LoginRequest;
import dogsurf.dto.UserResponse;
import dogsurf.mapper.UserMapper;
import dogsurf.model.User;
import dogsurf.repository.UserRepository;
import dogsurf.security.JwtProvider;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.persistence.EntityNotFoundException;
import java.util.Objects;

@Service
@RequiredArgsConstructor
public class AuthenticationServiceImpl implements AuthenticationService {

    private final JwtProvider jwtProvider;
    private final UserRepository userRepository;
    private final UserMapper userMapper;

    @Override
    public JwtResponse signIn(LoginRequest loginRequest) {

        User user = userRepository
                .findOneByUsername(loginRequest.getUsername())
                .orElseThrow(() -> new EntityNotFoundException("Username or password incorrect"));

        if (!Objects.equals(loginRequest.getPassword(), user.getPassword())) {
            throw new EntityNotFoundException("Username or password incorrect");
        }

        String jwt = jwtProvider.generateAccessToken(user);

        UserResponse userResponse = userMapper.toDto(user);
        return JwtResponse.builder()
                .accessToken(jwt)
                .expiresIn(jwtProvider.getExpiresInSeconds(jwt))
                .userResponse(userResponse)
                .build();
    }


    @Override
    public JwtResponse register(CreateUserRequest userRequest) {
        User user = userMapper.toEntity(userRequest);
        String rawPassword = userRequest.getPassword();
        user.setPassword(rawPassword);
        User saved = userRepository.save(user);

        LoginRequest loginRequest = LoginRequest.builder()
                .username(userRequest.getUsername())
                .password(userRequest.getPassword())
                .build();
        return this.signIn(loginRequest);
    }
}