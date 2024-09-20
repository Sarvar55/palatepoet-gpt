package com.palatepoet.gpt.services.recipe;

import com.palatepoet.gpt.models.mybatis.ingredient.Ingredient;
import com.palatepoet.gpt.models.mybatis.instruction.Instruction;
import com.palatepoet.gpt.models.mybatis.macro.Macro;
import com.palatepoet.gpt.models.mybatis.recipe.Recipe;
import com.palatepoet.gpt.models.payload.recipe.RecipePayload;
import com.palatepoet.gpt.models.response.RecipeResponse;
import com.palatepoet.gpt.repository.RecipeRepository;
import com.palatepoet.gpt.services.ingredient.IngredientService;
import com.palatepoet.gpt.services.instruction.InstructionService;
import com.palatepoet.gpt.services.macro.MacroService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.crypto.Mac;
import java.util.List;

@Service
@Slf4j
@RequiredArgsConstructor
public class RecipeServiceImpl implements RecipeService {

    private final RecipeRepository recipeRepository;

    private final MacroService macroService;
    private final IngredientService ingredientService;
    private final InstructionService instructionService;


    @Transactional
    @Override
    public void insert(RecipePayload payload) {
        Recipe recipe = buildRecipeFromPayload(payload);
        recipeRepository.insert(recipe);

        insertIngredients(payload.getIngredients(), recipe.getId());
        insertInstructions(payload.getInstructions(), recipe.getId());
        insertMacro(payload.getMacros(), recipe.getId());
    }

    @Override
    public void delete(Long recipeId) {
        recipeRepository.deleteRecipeById(recipeId);
    }

    @Override
    public List<RecipeResponse> getRecipesByUserId(Long userId) {
        return recipeRepository.getRecipesByUserId(userId);
    }

    private Recipe buildRecipeFromPayload(RecipePayload payload) {
        return Recipe.builder()
                .calories(payload.getCalories())
                .cookingTime(payload.getCookingTime())
                .title(payload.getTitle())
                .difficulty(payload.getDifficulty())
                .userId(payload.getUserId())
                .build();
    }

    private void insertIngredients(List<Ingredient> ingredients, Long recipeId) {
        ingredients.forEach(ingredient -> {
            Ingredient ing = buildIngredientFromPayload(ingredient, recipeId);
            ingredientService.insert(ing);
        });
    }

    private Ingredient buildIngredientFromPayload(Ingredient ingredient, Long recipeId) {
        return Ingredient.builder()
                .recipeId(recipeId)
                .amount(ingredient.getAmount())
                .name(ingredient.getName())
                .build();
    }

    private void insertInstructions(List<Instruction> instructions, Long recipeId) {
        instructions.forEach(instruction -> {
            Instruction ins = buildInstructionFromPayload(instruction, recipeId);
            instructionService.insert(ins);
        });
    }

    private Instruction buildInstructionFromPayload(Instruction instruction, Long recipeId) {
        return Instruction.builder()
                .description(instruction.getDescription())
                .step(instruction.getStep())
                .recipeId(recipeId)
                .build();
    }

    private void insertMacro(Macro macros, Long recipeId) {
        Macro macro = buildMacroFromPayload(macros, recipeId);
        macroService.insert(macro);
    }

    private Macro buildMacroFromPayload(Macro macros, Long recipeId) {
        return Macro.builder()
                .recipeId(recipeId)
                .carbs(macros.getCarbs())
                .fats(macros.getFats())
                .protein(macros.getProtein())
                .build();
    }
}
