package com.palatepoet.gpt.services.auth;

import com.palatepoet.gpt.constants.TokenConstants;
import com.palatepoet.gpt.exceptions.BaseException;
import com.palatepoet.gpt.models.dto.RefreshTokenDto;
import com.palatepoet.gpt.models.mybatis.user.User;
import com.palatepoet.gpt.models.properties.security.SecurityProperties;
import com.palatepoet.gpt.services.EmailGetter;
import com.palatepoet.gpt.services.base.TokenGenerator;
import com.palatepoet.gpt.services.base.TokenReader;
import com.palatepoet.gpt.utils.PublicPrivateKeyUtils;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

import org.springframework.stereotype.Service;

import java.util.Date;

@Service
@Slf4j
@RequiredArgsConstructor
public class RefreshTokenManager implements TokenGenerator<RefreshTokenDto>,
        TokenReader<Claims>, EmailGetter {

    private final SecurityProperties securityProperties;

    @Override
    public String generate(RefreshTokenDto obj) {

        Claims claims = Jwts.claims();
        User user = obj.getUser();
        claims.put(TokenConstants.EMAIL, user.getEmail());
        claims.put("type", TokenConstants.REFRESH_TOKEN);

        Date now = new Date();
        Date exp = new Date(now.getTime() + securityProperties.getJwt().getRefreshTokenValidityTime(obj.isRememberMe()));

        return Jwts.builder()
                .setSubject(user.getUsername())
                .setExpiration(exp)
                .setIssuedAt(now)
                .addClaims(claims)
                .signWith(PublicPrivateKeyUtils.getPrivateKey(), SignatureAlgorithm.RS256)
                .compact();

    }

    @Override
    public Claims read(String token) {
        Claims tokenData = Jwts.parserBuilder().setSigningKey(PublicPrivateKeyUtils.getPublicKey())
                .build().parseClaimsJws(token).getBody();

        final String typeOfToken = tokenData.get("type", String.class);

        if (!TokenConstants.REFRESH_TOKEN.equals(typeOfToken)) {
            throw BaseException.unexpected();
        }
        return tokenData;
    }

    @Override
    public String getEmail(String token) {
        return read(token).get(TokenConstants.EMAIL, String.class);
    }
}
