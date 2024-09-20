package com.palatepoet.gpt.services.recipe;

import com.palatepoet.gpt.models.payload.recipe.RecipePayload;
import com.palatepoet.gpt.models.response.RecipeResponse;

import java.util.List;

public interface RecipeService {
    void insert(RecipePayload payload);

    void delete(Long recipeId);

    List<RecipeResponse> getRecipesByUserId(Long userId);
}
