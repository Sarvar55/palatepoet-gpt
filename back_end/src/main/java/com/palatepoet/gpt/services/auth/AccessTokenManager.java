package com.palatepoet.gpt.services.auth;

import com.palatepoet.gpt.constants.TokenConstants;
import com.palatepoet.gpt.models.mybatis.user.User;
import com.palatepoet.gpt.models.properties.security.SecurityProperties;
import com.palatepoet.gpt.services.EmailGetter;
import com.palatepoet.gpt.services.base.TokenGenerator;
import com.palatepoet.gpt.services.base.TokenReader;
import com.palatepoet.gpt.utils.PublicPrivateKeyUtils;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.Date;

@Service
@Slf4j
@RequiredArgsConstructor
public class AccessTokenManager implements TokenGenerator<User>,
        TokenReader<Claims>, EmailGetter {

    private final SecurityProperties securityProperties;

    @Override
    public String generate(User obj) {
        Claims claims = Jwts.claims();
        claims.put(TokenConstants.EMAIL, obj.getEmail());
        Date now = new Date();
        Date exp = new Date(now.getTime() + securityProperties.getJwt().getAccessTokenValidityTime());
        return Jwts.builder()
                .setIssuedAt(now)
                .setExpiration(exp)
                .addClaims(claims)
                .setSubject(obj.getUsername())
                .signWith(PublicPrivateKeyUtils.getPrivateKey(), SignatureAlgorithm.RS256)
                .compact();
    }

    @Override
    public Claims read(String token) {
        return Jwts.parserBuilder()
                .setSigningKey(PublicPrivateKeyUtils.getPublicKey())
                .build().parseClaimsJws(token).getBody();
    }

    @Override
    public String getEmail(String token) {
        return read(token).get(TokenConstants.EMAIL, String.class);
    }
}
