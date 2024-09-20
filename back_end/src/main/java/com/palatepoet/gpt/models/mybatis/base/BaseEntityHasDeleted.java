package com.palatepoet.gpt.models.mybatis.base;

import lombok.*;
import lombok.experimental.FieldDefaults;

@Data
@EqualsAndHashCode(callSuper = true)
@AllArgsConstructor
@NoArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public abstract class BaseEntityHasDeleted<ID> extends IsDeletedEntity {
    ID id;
}
