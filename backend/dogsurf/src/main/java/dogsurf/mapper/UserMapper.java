package dogsurf.mapper;

import dogsurf.dto.CreateUserRequest;
import dogsurf.dto.UserResponse;
import dogsurf.model.User;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(uses = PropertyMapper.class)
public interface UserMapper {

    UserResponse toDto(User entity);

    @Mapping(target = "role", constant = "USER")
    User toEntity(CreateUserRequest userRequest);


}
