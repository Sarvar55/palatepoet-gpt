package com.palatepoet.gpt.services.auth;

import com.palatepoet.gpt.models.payload.auth.LoginPayload;
import com.palatepoet.gpt.models.payload.auth.RefreshTokenPayload;
import com.palatepoet.gpt.models.payload.auth.SignUpPayload;
import com.palatepoet.gpt.models.response.LoginResponse;

public interface AuthService {

    LoginResponse signIn(LoginPayload payload);

    void logout();

    void signUp(SignUpPayload payload);

    void setAuthentication(String email);


    LoginResponse refresh(RefreshTokenPayload tokenDto);
}
