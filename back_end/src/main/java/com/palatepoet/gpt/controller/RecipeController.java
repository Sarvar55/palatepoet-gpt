package com.palatepoet.gpt.controller;

import com.palatepoet.gpt.models.base.BaseResponse;
import com.palatepoet.gpt.models.mybatis.recipe.Recipe;
import com.palatepoet.gpt.models.payload.recipe.RecipePayload;
import com.palatepoet.gpt.models.response.RecipeResponse;
import com.palatepoet.gpt.services.recipe.RecipeService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping("/v1/")
@RestController
@RequiredArgsConstructor
public class RecipeController {

    private final RecipeService recipeService;

    @PostMapping("/recipe")
    public BaseResponse<Void> saveRecipe(@RequestBody RecipePayload payload) {
        recipeService.insert(
                payload
        );
        return BaseResponse.success();
    }

    @DeleteMapping("/recipe/{recipeId}")
    public BaseResponse<Void> deleteRecipe(@PathVariable Long recipeId) {
        recipeService.delete(recipeId);
        return BaseResponse.success();
    }

    @GetMapping("/users/{userId}/recipes")
    public BaseResponse<List<RecipeResponse>> getRecipesByUserId(@PathVariable Long userId) {
        return BaseResponse.success(
                recipeService.getRecipesByUserId(userId)
        );
    }

}
