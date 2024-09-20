package com.palatepoet.gpt.models.mybatis.user;

import com.palatepoet.gpt.models.enums.user.UserStatus;

import com.palatepoet.gpt.models.mybatis.base.BaseEntity;
import com.palatepoet.gpt.models.mybatis.base.BaseEntityHasDeleted;
import lombok.*;
import lombok.experimental.FieldDefaults;

@Data
@EqualsAndHashCode(callSuper = true)
@AllArgsConstructor
@NoArgsConstructor
@Builder
@FieldDefaults(level = AccessLevel.PRIVATE)
public class User extends BaseEntityHasDeleted<Long> {
    String username;
    String email;
    String password;
    UserStatus status;
}
