package com.palatepoet.gpt.models.response;

import com.palatepoet.gpt.models.mybatis.ingredient.Ingredient;
import com.palatepoet.gpt.models.mybatis.instruction.Instruction;
import com.palatepoet.gpt.models.mybatis.macro.Macro;
import lombok.*;
import lombok.experimental.FieldDefaults;

import java.util.List;

@Data
@AllArgsConstructor
@Builder
@NoArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class RecipeResponse {
    Long id;
    String title;
    Integer cookingTime;
    Integer calories;
    String difficulty;
    Macro macros;
    List<Ingredient> ingredients;
    List<Instruction> instructions;
}
