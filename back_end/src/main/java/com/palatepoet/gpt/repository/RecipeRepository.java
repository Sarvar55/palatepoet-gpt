package com.palatepoet.gpt.repository;

import com.palatepoet.gpt.models.mybatis.recipe.Recipe;
import com.palatepoet.gpt.models.payload.recipe.RecipePayload;
import com.palatepoet.gpt.models.response.RecipeResponse;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

@Mapper
public interface RecipeRepository {
    void insert(Recipe recipe);

    void deleteRecipeById(@Param("recipeId") Long recipeId);

    List<RecipeResponse> getRecipesByUserId(@Param("userId") Long userId);
}
