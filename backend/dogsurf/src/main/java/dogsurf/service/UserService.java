package dogsurf.service;

import dogsurf.dto.CreateUserRequest;
import dogsurf.dto.UpdateUserRequest;
import dogsurf.dto.UserResponse;
import dogsurf.mapper.UserMapper;
import dogsurf.model.User;
import dogsurf.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.persistence.EntityNotFoundException;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;
    private final UserMapper userMapper;

    public List<UserResponse> getAllUsers(){
        return userRepository
                .findAll()
                .stream()
                .map(userMapper::toDto)
                .collect(Collectors.toList());
    }

    public UserResponse getUserById(Long id) {
        return userRepository.findById(id)
                .map(userMapper::toDto)
                .orElseThrow(() -> new EntityNotFoundException("User not found"));
    }
    public UserResponse createNewUser(CreateUserRequest userRequest) {
        User user = userMapper.toEntity(userRequest);
        User saved = userRepository.save(user);
        return userMapper.toDto(saved);
    }

    public UserResponse updateUser(Long userId, UpdateUserRequest userRequest) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new EntityNotFoundException("User not found"));
        user.setCity(userRequest.getCity());
        user.setAddress(userRequest.getAddress());
        user.setEmail(userRequest.getEmail());
        user.setUsername(userRequest.getUsername());
        user.setFirstname(userRequest.getFirstname());
        user.setLastname(userRequest.getLastname());

        User updated = userRepository.save(user);
        return userMapper.toDto(updated);
    }






}