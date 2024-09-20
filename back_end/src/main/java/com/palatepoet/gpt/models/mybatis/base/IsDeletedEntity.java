package com.palatepoet.gpt.models.mybatis.base;

import lombok.*;
import lombok.experimental.FieldDefaults;

@Data
@AllArgsConstructor
@NoArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public abstract class IsDeletedEntity {
    boolean isDeleted;
}
