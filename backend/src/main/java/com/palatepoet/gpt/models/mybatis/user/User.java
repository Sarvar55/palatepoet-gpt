package com.palatepoet.gpt.models.mybatis;

import com.palatepoet.gpt.models.base.BaseEntity;
import com.palatepoet.gpt.models.enums.user.UserStatus;
import lombok.*;
import lombok.experimental.FieldDefaults;

@Data
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(callSuper = true)
@FieldDefaults(level = AccessLevel.PRIVATE)
public class User extends BaseEntity<Long> {
    String username;
    String email;
    UserStatus status;
    String password;
}
