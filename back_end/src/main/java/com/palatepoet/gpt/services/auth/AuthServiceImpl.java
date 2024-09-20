package com.palatepoet.gpt.services.auth;

import com.palatepoet.gpt.models.dto.RefreshTokenDto;
import com.palatepoet.gpt.models.mybatis.user.User;
import com.palatepoet.gpt.models.payload.auth.LoginPayload;
import com.palatepoet.gpt.models.payload.auth.RefreshTokenPayload;
import com.palatepoet.gpt.models.payload.auth.SignUpPayload;
import com.palatepoet.gpt.models.response.LoginResponse;
import com.palatepoet.gpt.services.user.UserDetailsService;
import com.palatepoet.gpt.services.user.UserService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@Slf4j
@RequiredArgsConstructor
public class AuthServiceImpl implements AuthService {

    private final AccessTokenManager accessTokenManager;
    private final RefreshTokenManager refreshTokenManager;
    private final AuthenticationManager authenticationManager;
    private final UserDetailsService userDetailsService;
    private final PasswordEncoder passwordEncoder;
    private final UserService userService;

    @Override
    public LoginResponse signIn(LoginPayload payload) {
        authenticate(payload);
        return prepareLoginResponse(payload.getEmail(), payload.isRememberMe());
    }

    @Override
    public void logout() {
        UserDetails userDetails = (UserDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        log.info("{} user logout succeed", userDetails.getUsername());
    }

    @Override
    public void signUp(SignUpPayload payload) {
        String encryptedPassword = passwordEncoder.encode(payload.getPassword());
        User user = SignUpPayload.payloadToUserEntity(payload, encryptedPassword);

        userService.insert(user);
    }

    @Override
    public void setAuthentication(String email) {
        UserDetails userDetails = userDetailsService.loadUserByUsername(email);
        SecurityContextHolder.getContext().setAuthentication(
                new UsernamePasswordAuthenticationToken(userDetails, "", userDetails.getAuthorities())
        );
    }

    @Override
    public LoginResponse refresh(RefreshTokenPayload tokenDto) {
        String email = refreshTokenManager.getEmail(tokenDto.getRefreshToken());

        return prepareLoginResponse(email, tokenDto.getRefreshToken());
    }

    private void authenticate(LoginPayload payload) {
        try {
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(
                            payload.getEmail(),
                            payload.getPassword()
                    )
            );
        } catch (AuthenticationException e) {
            throw new RuntimeException(e.getMessage());
        }
    }

    private LoginResponse prepareLoginResponse(String email, boolean rememberMe) {
        User user = userService.findByEmail(email);
        String accessToken = accessTokenManager.generate(user);

        String refreshToken = refreshTokenManager.generate(
                RefreshTokenDto.builder().rememberMe(rememberMe)
                        .user(user).build()
        );

        return buildLoginResponse(user, refreshToken, accessToken);
    }

    private LoginResponse prepareLoginResponse(String email, String refreshToken) {
        User user = userService.findByEmail(email);
        String accessToken = accessTokenManager.generate(user);
        return buildLoginResponse(user, refreshToken, accessToken);
    }

    private LoginResponse buildLoginResponse(User user, String refreshToken, String accessToken) {
        return LoginResponse.builder()
                .accessToken(accessToken)
                .refreshToken(refreshToken)
                .userId(user.getId())
                .username(user.getUsername())
                .email(user.getEmail())
                .build();
    }
}
