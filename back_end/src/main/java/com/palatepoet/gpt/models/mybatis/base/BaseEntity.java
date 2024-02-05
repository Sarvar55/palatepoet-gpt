package com.palatepoet.gpt.models.mybatis.user.base;

import lombok.*;
import lombok.experimental.FieldDefaults;

@Data
@EqualsAndHashCode(callSuper = true)
@AllArgsConstructor
@NoArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public abstract class BaseEntity<ID> extends IsDeletedEntity {
    ID id;
}
