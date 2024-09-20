package com.palatepoet.gpt.models.payload.auth;

import com.palatepoet.gpt.models.enums.user.UserStatus;
import com.palatepoet.gpt.models.mybatis.user.User;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.Size;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.FieldDefaults;

@Data
@AllArgsConstructor
@NoArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class SignUpPayload {
    @Size(min = 4, max = 15)
    String username;

    @Email
    String email;

    String password;

    public static User payloadToUserEntity(SignUpPayload payload, String encryptedPassword) {
        return User.builder()
                .status(UserStatus.ACTIVE)
                .email(payload.getEmail())
                .username(payload.getUsername())
                .password(encryptedPassword)
                .build();

    }
}
