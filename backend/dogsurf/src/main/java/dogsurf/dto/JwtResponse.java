package dogsurf.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import dogsurf.security.SecurityUtils;


@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class JwtResponse {
    @Builder.Default
    private String tokenType = SecurityUtils.AUTH_TOKEN_HEADER;
    private String accessToken;
    private Long expiresIn;
    private String refreshToken;
    private Long refreshExpiresIn;
    @JsonProperty("user")
    private UserResponse userResponse;


}
