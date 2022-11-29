package dogsurf.dto;

import dogsurf.model.Role;

public class UserResponse {
    private Long id;
    private String username;
    private String email;
    private String firstname;
    private String lastname;
    private String city;
    private String address;
    private Role role;
    private PropertyResponse property;
}
