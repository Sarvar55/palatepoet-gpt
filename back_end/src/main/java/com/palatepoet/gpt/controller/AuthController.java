package com.palatepoet.gpt.controller;

import com.palatepoet.gpt.models.base.BaseResponse;
import com.palatepoet.gpt.models.payload.auth.LoginPayload;
import com.palatepoet.gpt.models.payload.auth.RefreshTokenPayload;
import com.palatepoet.gpt.models.payload.auth.SignUpPayload;
import com.palatepoet.gpt.models.response.LoginResponse;
import com.palatepoet.gpt.services.auth.AuthService;
import jakarta.validation.Valid;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

@RestController
@Slf4j
@RequestMapping("/v1/auth")
@RequiredArgsConstructor
public class AuthController {

    private final AuthService authService;

    @PostMapping("/sign-in")
    public BaseResponse<LoginResponse> signIn(@RequestBody @Valid LoginPayload payload) {
        return BaseResponse.success(
                authService.signIn(payload)
        );
    }

    @PostMapping("/sign-up")
    public BaseResponse<Void> signUp(@RequestBody @Valid SignUpPayload payload) {
        authService.signUp(payload);

        return BaseResponse.success();
    }

    @PostMapping("/refresh")
    public BaseResponse<LoginResponse> refresh(@RequestBody RefreshTokenPayload payload) {
        return BaseResponse.success(
                authService.refresh(payload)
        );
    }

    @PostMapping("/logout")
    public BaseResponse<Void> logout() {
        authService.logout();
        return BaseResponse.success();
    }

}
