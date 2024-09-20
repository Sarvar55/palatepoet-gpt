package com.palatepoet.gpt.models.dto;

import com.palatepoet.gpt.models.mybatis.user.User;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Data;
import lombok.experimental.FieldDefaults;

@Data
@FieldDefaults(level = AccessLevel.PRIVATE)
@Builder
public class RefreshTokenDto {
    boolean rememberMe;
    User user;
}
