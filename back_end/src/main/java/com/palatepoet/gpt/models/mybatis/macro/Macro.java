package com.palatepoet.gpt.models.mybatis.macro;

import com.palatepoet.gpt.models.mybatis.base.BaseEntity;
import com.palatepoet.gpt.models.mybatis.base.BaseEntityHasDeleted;
import lombok.*;
import lombok.experimental.FieldDefaults;

@Data
@EqualsAndHashCode(callSuper = true)
@AllArgsConstructor
@NoArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
@Builder
public class Macro extends BaseEntity<Long> {
    Long recipeId;
    double protein;
    double fats;
    double carbs;
}
