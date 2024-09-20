package com.palatepoet.gpt.models.mybatis.instruction;

import com.palatepoet.gpt.models.mybatis.base.BaseEntity;
import lombok.*;
import lombok.experimental.FieldDefaults;


@Data
@EqualsAndHashCode(callSuper = true)
@AllArgsConstructor
@NoArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
@Builder
public class Instruction extends BaseEntity<Long> {
    Long recipeId;
    Integer step;
    String description;
}
