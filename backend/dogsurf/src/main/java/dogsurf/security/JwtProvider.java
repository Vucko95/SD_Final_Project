package dogsurf.security;
import org.springframework.security.core.Authentication;
import javax.servlet.http.HttpServletRequest;
public interface JwtProvider {
//    String generateToken(UserPrincipal auth);
    String generateAccessToken(UserPrincipal auth);

    Long getExpiresInSeconds(String token);
    Authentication getAuthentication(HttpServletRequest request);

    boolean isTokenValid(HttpServletRequest request);

    String generateRefreshToken(UserPrincipal auth);
}
