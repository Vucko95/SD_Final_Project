package dogsurf.security;


import dogsurf.model.User;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import java.nio.charset.StandardCharsets;
import java.security.Key;
import java.util.Date;

@Component
public class JwtProviderImpl implements JwtProvider {

    @Value("${app.jwt.secret}")
    private String jwtSecret;
    @Value("${app.jwt.expiration-in-ms:86_400_000}")
    private Long jwtExpirationInMs;

    @Override
    public String generateAccessToken(User user) {
        String authorities = "ROLE_" + user.getRole();

        Key key = Keys.hmacShaKeyFor(jwtSecret.getBytes(StandardCharsets.UTF_8));

        return Jwts.builder()
                .setSubject(user.getUsername())
                .claim("roles", authorities)
                .claim("userId", user.getId())
                .setIssuedAt(new Date())
                .setExpiration(new Date(System.currentTimeMillis() + jwtExpirationInMs))
                .signWith(key, SignatureAlgorithm.HS512)
                .compact();
    }

    @Override
    public Long getExpiresInSeconds(String token) {
        Claims claims = extractClaims(token);
        long expTime = claims.getExpiration().getTime();
        long currentTime = new Date().getTime();
        return Math.round(1.0 * (expTime - currentTime) / 1000);
    }

    private Claims extractClaims(String token) {
        if (token == null) {
            return null;
        }
        Key key = Keys.hmacShaKeyFor(jwtSecret.getBytes(StandardCharsets.UTF_8));

        return Jwts.parserBuilder()
                .setSigningKey(key)
                .build()
                .parseClaimsJws(token)
                .getBody();
    }
}