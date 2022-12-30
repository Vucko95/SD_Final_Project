package dogsurf.security;

import dogsurf.model.User;

public interface JwtProvider {

    String generateAccessToken(User user);

    Long getExpiresInSeconds(String token);

}