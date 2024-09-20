package com.palatepoet.gpt.models.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class LoginResponse {
    Long userId;
    String username;
    String email;
    String accessToken;
    String refreshToken;
}
