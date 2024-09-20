package com.palatepoet.gpt.filters;

import com.palatepoet.gpt.constants.TokenConstants;
import com.palatepoet.gpt.services.auth.AccessTokenManager;
import com.palatepoet.gpt.services.auth.AuthService;
import com.palatepoet.gpt.services.auth.RefreshTokenManager;
import com.palatepoet.gpt.services.user.UserDetailsService;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.context.annotation.Lazy;
import org.springframework.http.HttpHeaders;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.stereotype.Service;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;
import java.util.Objects;

@Service
@Slf4j
@RequiredArgsConstructor
public class AuthorizationFilter extends OncePerRequestFilter {

    private final AuthService authService;
    private final AccessTokenManager accessTokenManager;

    @Override
    protected void doFilterInternal(HttpServletRequest request,
                                    HttpServletResponse response,
                                    FilterChain filterChain) throws ServletException, IOException {

        String token = request.getHeader(HttpHeaders.AUTHORIZATION);

        if (!Objects.isNull(token) && token.startsWith(TokenConstants.TOKEN_PREFIX)) {
            authService.setAuthentication(
                    accessTokenManager.getEmail(
                            token.substring(7)
                    )
            );
        }
        filterChain.doFilter(request, response);


    }


}
