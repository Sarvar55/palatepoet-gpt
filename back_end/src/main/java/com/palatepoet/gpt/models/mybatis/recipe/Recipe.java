package com.palatepoet.gpt.models.mybatis.recipe;


import com.palatepoet.gpt.models.mybatis.base.BaseEntity;
import com.palatepoet.gpt.models.mybatis.base.BaseEntityHasDeleted;
import com.palatepoet.gpt.models.mybatis.macro.Macro;
import lombok.*;
import lombok.experimental.FieldDefaults;

@Data
@EqualsAndHashCode(callSuper = true)
@AllArgsConstructor
@NoArgsConstructor
@Builder
@FieldDefaults(level = AccessLevel.PRIVATE)
public class Recipe extends BaseEntityHasDeleted<Long> {
    String title;
    Long userId;
    Integer cookingTime;
    Integer calories;
    String difficulty;
}
