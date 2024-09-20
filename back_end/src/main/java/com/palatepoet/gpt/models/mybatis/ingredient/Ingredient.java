package com.palatepoet.gpt.models.mybatis.ingredient;

import com.palatepoet.gpt.models.mybatis.base.BaseEntity;
import lombok.*;
import lombok.experimental.FieldDefaults;

@Data
@EqualsAndHashCode(callSuper = true)
@AllArgsConstructor
@NoArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
@Builder
public class Ingredient extends BaseEntity<Long> {
    Long recipeId;
    String name;
    String amount;
}
