package dogsurf.dto;

import lombok.Data;

@Data
public class CreateUserRequest {
    private String username;
    private String email;
    private String firstname;
    private String lastname;
    private String city;
    private String address;
}
