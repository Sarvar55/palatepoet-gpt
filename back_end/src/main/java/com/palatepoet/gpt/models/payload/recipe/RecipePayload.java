package com.palatepoet.gpt.models.payload.recipe;

import com.palatepoet.gpt.models.mybatis.ingredient.Ingredient;
import com.palatepoet.gpt.models.mybatis.instruction.Instruction;
import com.palatepoet.gpt.models.mybatis.macro.Macro;
import lombok.*;
import lombok.experimental.FieldDefaults;

import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
@Builder
@Data
public class RecipePayload {
    Long userId;
    String title;
    Integer cookingTime;
    Integer calories;
    String difficulty;
    Macro macros;
    List<Ingredient> ingredients;
    List<Instruction> instructions;
}
